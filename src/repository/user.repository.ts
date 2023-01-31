import { User } from '../common/entities/user.entity';
import { Repository } from 'typeorm';
import { Logger } from '@nestjs/common';
import { CustomRepository } from '../database/typeorm-ex.decorator';

@CustomRepository(User)
export class UserRepository extends Repository<User> {
  private logger = new Logger('UserRepository');

  async createUser() {}
  async updateUser() {}
  async findByEmail() {}
  async findByNickname() {}
}
