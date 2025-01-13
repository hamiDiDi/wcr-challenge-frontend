import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';

interface LoginResponse {
  message: string;
  error?: string;
}

interface RegisterResponse {
  message: string;
  error?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  login(
    email: string = environment.testCredentials.email,
    password: string = environment.testCredentials.password
  ): Observable<HttpResponse<LoginResponse>> {
    const headers = new HttpHeaders({ 'x-api-key': environment.apiKey });
    const body = { email, password };

    return this.http
      .post<LoginResponse>(`${this.apiBaseUrl}/auth/login`, body, {
        headers,
        observe: 'response', // This allows us to access the full HTTP response
      })
      .pipe(
        map((response: HttpResponse<LoginResponse>) => {
          // Here you can process the response before passing it to the component
          return response;
        }),
        catchError((error) => {
          throw error; // Pass the error to the component for further handling
        })
      );
  }

  register(
    name: string,
    lastname: string,
    email: string,
    password: string,
    repassword: string,
    apiKey: string
  ): Observable<RegisterResponse> {
    const headers = new HttpHeaders({ 'x-api-key': environment.apiKey });
    const body = { name, lastname, email, password, repassword };

    return this.http.post<RegisterResponse>(
      `${this.apiBaseUrl}/auth/register`,
      body,
      { headers }
    );
  }
}
