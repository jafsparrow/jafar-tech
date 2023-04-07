import { Organisation } from '@jafar-tech/backend/organisation';
import { UserType } from '@jafar-tech/shared/data-access';
import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model, Types } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthenticationRepository {
  constructor(
    @InjectModel(Organisation.name)
    private readonly organsationModel: Model<Organisation>,
    @InjectModel(User.name)
    private readonly userModel: Model<User>,

    @InjectConnection() private readonly connection: Connection
  ) {
    console.log('authrepositoyr', Organisation.name);
  }

  async signUpNewUser(userInput: CreateUserDto): Promise<User> {
    const session = await this.connection.startSession();
    let orgData = {
      name: userInput.name,
      email: userInput.email,
      phone: userInput.phone,
      country: userInput.country,
    };
    let newOrgModel = new this.organsationModel(orgData);
    try {
      let createdUser = null;
      await session.withTransaction(async () => {
        let org = await newOrgModel.save();

        if (!org) {
          throw new ConflictException(
            'Could not create new organisation with the given details'
          );
        }

        let hashedPassword = await bcrypt.hash(userInput.password, 10);

        let newUser = {
          firstName: orgData.name,
          username: orgData.email,
          email: orgData.email,
          phone: orgData.phone,
          lastName: '',
          type: 'admin',
          company: org._id.toString(),
          password: hashedPassword,
        };
        let newUserModel = new this.userModel(newUser);
        createdUser = await newUserModel.save();
        if (!createdUser) {
          throw new ConflictException(
            'Could not create new organisation with the given details'
          );
        }
        delete createdUser['password'];
      });

      session.endSession();
      return createdUser;
    } catch (error: any) {
      console.log(error.code);
      throw new ConflictException(
        'Could not create new organisation with the given details'
      );
    }
  }
  async createUser(orgID: string, type: UserType, data: CreateUserDto) {
    let newUser = new this.userModel({
      ...data,
      type,
      company: orgID,
    });

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

  async getUserInfo(email: string) {
    try {
      let user = await this.userModel.findOne({ email });
      if (!user) {
        throw new UnauthorizedException('Oops, not allowed.');
      }
      return user;
    } catch (error) {
      throw new UnauthorizedException('Oops, not allowed.');
    }
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
