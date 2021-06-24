import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelperService } from './helper.service';
import { LoginRequest, LoginResponse } from './models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpHelper: HelperService) {}
  login(data: LoginRequest) {
    return this.httpHelper.request<LoginResponse>('POST', '/account/login', data, false);
  }
}
