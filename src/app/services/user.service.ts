import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HelperService } from './helper.service';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpHelper: HelperService) {}

  getUsers() {
    return this.httpHelper.request<User[]>('GET', '/user');
  }

  deleteUser(id: string) {
    return this.httpHelper.request<User>('DELETE', `/user/${id}`);
  }
}
