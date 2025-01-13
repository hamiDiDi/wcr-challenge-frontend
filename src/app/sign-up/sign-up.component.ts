import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PlatformService } from '../services/platform.service';
@Component({
  selector: 'app-sign-up',
  imports: [
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SignUpComponent implements OnInit {
  name = '';
  lastname = '';
  email = environment.testCredentials.email;
  password = environment.testCredentials.password;
  repassword = environment.testCredentials.password;
  apiKey = environment.apiKey;
  message = '';
  error = '';
  platform: string = '';
  constructor(
    private authService: AuthService,
    private router: Router,
    private platformService: PlatformService
  ) {}
  detectPlatform() {
    this.platform = this.platformService.getPlatform();
    console.log(`Running on platform: ${this.platform}`);
  }
  ngOnInit(): void {
    console.log('Login component initialized');
  }
  onRegister() {
    console.log('Register button clicked');
    if (this.password !== this.repassword) {
      this.error = 'Passwords do not match';
      return;
    }
    console.log('Sending data to API:', {
      name: this.name,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      repassword: this.repassword,
      apiKey: this.apiKey,
    });
    this.authService
      .register(
        this.name,
        this.lastname,
        this.email,
        this.password,
        this.repassword,
        this.apiKey
      )
      .subscribe({
        next: (response) => {
          console.log('API Response:', response);
          this.message = response.message;
          this.error = '';
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('API Error:', error);
          switch (error.status) {
            case 400:
              this.error = 'Bad Request: Please check your inputs.';
              break;
            case 401:
              this.error = 'Unauthorized: Invalid credentials.';
              break;
            case 402:
              this.error = 'Payment Required: Please contact support.';
              break;
            default:
              this.error = error.error?.message || 'Something went wrong';
              break;
          }
        },
        complete: () => {
          console.log('Login request completed');
        },
      });
  }
}
