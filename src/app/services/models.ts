export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
}

export interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

export interface ErrorResponse {
  message: string;
}
