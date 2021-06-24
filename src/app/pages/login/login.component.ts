import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { LoginResponse } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  options: AnimationOptions = {
    path: '/assets/login-background.json',
  };
  loading = false;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {}

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  submitForm(): void {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }
    if (this.loginForm.valid) {
      this.loading = true;
      this.authService.login(this.loginForm.value).subscribe(
        (data: LoginResponse) => {
          localStorage.setItem('token', data.accessToken);
          this.router.navigate(['/welcome']);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        },
        () => {
          this.loading = false;
        }
      );
    }
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
}
