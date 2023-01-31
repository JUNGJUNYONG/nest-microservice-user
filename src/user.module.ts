import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { User } from './common/entities/user.entity';
import { UserRepository } from './repository/user.repository';
import { TypeOrmExModule } from './database/typeorm-ex.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return {
          type: 'postgres',
          host: '10.105.1.224',
          port: 5432,
          username: 'admin',
          password: 'admin',
          database: 'test',
          entities: ['dist/**/*.entity{.ts,.js}'],
          synchronize: true,
        } as TypeOrmModuleAsyncOptions;
      },
    }),
    TypeOrmModule.forFeature([User]),
    TypeOrmExModule.forCustomRepository([User, UserRepository]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
