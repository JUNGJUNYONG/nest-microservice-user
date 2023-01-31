import {
  BadRequestException,
  Injectable,
  Logger,
  UnprocessableEntityException,
} from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { User } from './common/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDto } from './common/dtos/register.dto';

@Injectable()
export class UserService {
  private logger = new Logger('UserService');

  constructor(
    @InjectRepository(User) private readonly userRepository: UserRepository,
  ) {}

  async createUser(data: RegisterDto): Promise<User> {
    const { email, password, firstName, lastName, displayName } = data;
    this.logger.log(data);

    const found = await this.userRepository.findOne({ where: { email } });
    if (found) {
      this.logger.log('email already exists');
      throw new BadRequestException('email already exists');
    }

    const hashed = password; // encrypt password
    const user = this.userRepository.create(data);

    try {
      await this.userRepository.save(user)
    } catch (error) {
      throw new UnprocessableEntityException(
        'Something went wrong with saving user',
      );
    }

    return user;
  }

  async findByEmail(data: RegisterDto) {

    const email = data.email
    const info = await this.userRepository.findOne({ where: { email } });
    return info
  }
}
