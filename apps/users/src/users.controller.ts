import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
@Controller()
export class UsersController {
  @GrpcMethod('UsersService', 'FindAll')
  findAll(_: any) {
    const users = [
      {
        user: {
          id: 1,
          firstname: 'Radonirina',
          lastname: 'Maminiaina',
          email: 'radonirina@gmail.com',
        },
      },
    ];
    return users;
  }
}
