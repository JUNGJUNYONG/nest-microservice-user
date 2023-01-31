import { Controller, Get, Logger } from "@nestjs/common";
import { UserService } from './user.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { User } from './common/entities/user.entity';
import { RegisterDto } from './common/dtos/register.dto';
@Controller("user")
export class UserController {
  constructor(private readonly appService: UserService) {}
  private readonly logger: Logger = new Logger('UserController');

  @MessagePattern('create')
  async createUser(@Payload() data: RegisterDto) {
    return this.appService.createUser(data);
  }

  @MessagePattern('findByEmail')
  async findByEmail(@Payload() data: RegisterDto) {
    this.logger.log("Call API : findByEmail")
    return this.appService.findByEmail(data);
  }

  // @MessagePattern('update')
  // async updateUser() {
  //   return this.appService.updateUser();
  // }
}
