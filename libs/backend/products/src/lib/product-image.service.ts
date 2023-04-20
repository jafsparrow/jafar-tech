import {
  BadGatewayException,
  HttpException,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';

import * as admin from 'firebase-admin';
import * as fs from 'fs';
import { ProductImage } from '@jafar-tech/shared/data-access';

@Injectable()
export class ProductImageService {
  private async uploadToFirebaseStorage(
    imagePath: string,
    destination: string
  ): Promise<string> {
    try {
      const response = await admin.storage().bucket().upload(imagePath, {
        destination: destination,
      });

      return response[1].name;
    } catch (error) {
      console.log('something wrong happened while upload the image.', error);
      throw new RequestTimeoutException('Failed to upload to storage.');
    }
  }
  private cleanUpTheDirectory(fileName: string) {
    try {
      fs.unlink(fileName, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });
    } catch (error) {}
  }

  private async createSignedUrlForDownloadLink(
    strorageName: string
  ): Promise<string> {
    try {
      const response = await admin
        .storage()
        .bucket()
        .file(strorageName)
        .getSignedUrl({
          action: 'read',
          expires: '01-01-2030',
        });

      return response[0];
    } catch (error) {
      throw new BadGatewayException(
        'Something happened while creating signedUrl',
        error
      );
    }
  }

  async uploadImageToFirebaseStorage(
    companyId: string,
    productId: string,
    image: File | any
  ): Promise<ProductImage> {
    const uploadedFileName = await this.uploadToFirebaseStorage(
      image.path,
      `${companyId}/${image.filename}`
    );
    const signedUrlForImage = await this.createSignedUrlForDownloadLink(
      uploadedFileName
    );

    this.cleanUpTheDirectory(image.path);
    return { storageName: uploadedFileName, downloadUrl: signedUrlForImage };
  }

  async deleteImageFromFirebaseStorage(storagePath: string) {
    try {
      return await admin.storage().bucket().file(storagePath).delete();
    } catch (error) {
      throw new BadGatewayException('failed to delete the item.');
    }
  }
}
