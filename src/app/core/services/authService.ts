import { HttpClient } from "@angular/common/http";
import { User } from "../../models/user";
import { computed, inject, Injectable, signal } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable({ providedIn: 'root'})
export class AuthService {
  private _http = inject(HttpClient);
  private _apiUrl = `http://localhost:8001`;

  private _token = signal<string | null>(localStorage.getItem('access_token'));
  public isLoggedIn = computed<boolean>(() => this._token() !== null)

  public registerUser(user: Partial<User>): Observable<User> {
    return this._http.post<User>(`${this._apiUrl}/register`, user);
  };

  public getToken(): string | null {
    return this._token();
  }

  public login(userCredentials: Partial<User>): Observable<any> {
    return this._http.post<any>(`${this._apiUrl}/login`, userCredentials).pipe(tap(response => {
      localStorage.setItem('access_token', response.token);
      this._token.set(response.token);
    }))
  };

  public logout(): void {
    localStorage.removeItem('access_token');
    this._token.set(null);
  }
}