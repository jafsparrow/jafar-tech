import { Organisation } from '@jafar-tech/backend/organisation';
import { UserType } from '@jafar-tech/shared/data-access';
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/user.schema';

@Injectable()
export class AuthenticationRepository {
  constructor(
    @InjectModel(Organisation.name)
    private readonly organsationModel: Model<Organisation>,
    @InjectModel(User.name)
    private readonly userModel: Model<User>
  ) {
    console.log('authrepositoyr', Organisation.name);
  }

  async createUser(orgID: string, type: UserType, data: CreateUserDto) {
    let newUser = new this.userModel({
      ...data,
      type,
    });

    newUser.company = orgID;
    try {
      return await newUser.save();
    } catch (error: any) {
      console.log(error);

      throw new ConflictException(
        'Could not create a user, please try with a different email '
      );
    }
  }

  async getUsers(companyId: string) {
    let users: User[] = [];

    const company: Organisation = await this.organsationModel.findById(
      companyId
    );
    company.users.find;
    return company;
  }

  async findCompanyUser(companyId, username: string) {
    console.log(companyId, username);
    // creating mongodb objectId type for aggregate to work properly.
    let id = new Types.ObjectId(companyId);
    return await this.organsationModel.aggregate([
      {
        $match: {
          $and: [
            {
              _id: id,
            },
            {
              'users.username': username,
            },
          ],
        },
      },
      {
        $unwind: '$users',
      },
      {
        $project: {
          username: '$users.username',
          password: '$users.password',
        },
      },
    ]);
  }
}
