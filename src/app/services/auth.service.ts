import { Injectable } from '@angular/core';
import { LoginRequest, LoginResponse } from '../models/auth';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpHelper: HelperService) {}

  login(data: LoginRequest) {
    return this.httpHelper.request<LoginResponse>('POST', '/account/login', data, false);
  }
}
