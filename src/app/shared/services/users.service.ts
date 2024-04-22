import { Injectable } from "@angular/core";
import { UserInterface } from "../types/user.interface";

@Injectable()
export class UsersService {
  users: UserInterface[] = [];

  addUser(user: UserInterface): void {
    this.users = [...this.users, user];
  }

  removeUser(userId: string): void {
    const updateUsers = this.users.filter((user) => userId !== user.id);
    this.users = updateUsers;
  }
}