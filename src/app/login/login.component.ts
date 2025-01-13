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
import { environment } from 'src/environments/environment';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PlatformService } from '../services/platform.service';
@Component({
  selector: 'app-login',
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
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginComponent implements OnInit {
  email = environment.testCredentials.email;
  password = environment.testCredentials.password;
  apiKey = environment.apiKey;
  message = '';
  error = '';
  platform: string = '';
  constructor(
    private authService: AuthService,
    private router: Router,
    private platformService: PlatformService
  ) {}
  ngOnInit(): void {
    console.log('Login component initialized');
  }
  detectPlatform() {
    this.platform = this.platformService.getPlatform();
    console.log(`Running on platform: ${this.platform}`);
  }

  onLogin() {
    console.log('Login button clicked with', {
      email: this.email,
      password: this.password,
    });

    if (!this.email || !this.password || !this.apiKey) {
      this.error = 'Please fill all the fields';
      console.log('Validation failed:', this.error);
      return;
    }
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        if (response.status === 200) {
          console.log('Login successful:', response);
          this.message = 'Login successful!';
        } else {
          this.error = 'Unexpected response from the server';
        }
      },
      error: (error) => {
        if (error.status === 400) {
          this.error = 'Bad Request. Please check your credentials.';
        } else if (error.status === 401) {
          this.error = 'Unauthorized. Please check your login details.';
        } else if (error.status === 402) {
          this.error = 'Payment Required. Please check your account status.';
        } else {
          this.error =
            error.error.message ||
            'Something went wrong. Please try again later.';
        }
        console.error('Login failed:', error);
      },
      complete: () => {
        console.log('Login request completed');
      },
    });
  }
}
