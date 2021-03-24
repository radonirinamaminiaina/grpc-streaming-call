import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { of } from 'rxjs';
@Controller()
export class UsersController {
  @GrpcMethod('UsersService', 'FindAll')
  findAll(_: any) {
    const users = {
      users: [
        {
          id: 1,
          firstname: 'Radonirina',
          lastname: 'Maminiaina',
          email: 'radonirina@gmail.com',
        },
      ],
    };
    return of(users);
  }
}
