import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private readonly users: User[] = [
    { id: 1, name: 'John Wick', email: 'john.wick@gmail.com' },
    { id: 2, name: 'Tony Stark', email: 'tony.stark@gmail.com' },
  ];

  create(createUserDto: CreateUserDto): User {
    this.users.push({
      id: 3,
      name: createUserDto.name,
      email: createUserDto.email,
    });

    return this.users.at(-1);
  }

  getAllUsers(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    return this.users.at(id - 1);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
