import { Organisation } from '@jafar-tech/backend/organisation';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User } from './models/user.schema';

@Injectable()
export class AuthenticationRepository {
  constructor(
    @InjectModel(Organisation.name)
    private readonly organsationModel: Model<Organisation>
  ) {}

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
