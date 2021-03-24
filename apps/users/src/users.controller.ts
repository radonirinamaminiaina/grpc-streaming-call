import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { of } from 'rxjs';
@Controller()
export class UsersController {
  users = [
    {
      id: 1,
      firstname: 'Radonirina',
      lastname: 'Maminiaina',
      email: 'radonirina@gmail.com',
    },
    {
      id: 2,
      firstname: 'Miary',
      lastname: 'Iandraina',
      email: 'miary@gmail.com',
    },
  ];

  @GrpcMethod('UsersService', 'FindAll')
  findAll(_: any) {
    return of({
      users: this.users,
    });
  }

  @GrpcMethod('UsersService', 'FindOne')
  findOne({ id }: { id: number }) {
    const user = this.users.filter((user) => user.id === id);
    return of(user[0] || {});
  }
}
