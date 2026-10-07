import { Component, inject, OnInit } from "@angular/core";
import { LoginComponent } from "./login/login-component";
import { RegistrationComponent } from "./registration/registration-component";
import { AuthService } from "../../core/services/authService";
import { Router } from "@angular/router";

@Component({
    selector: 'ct-auth-page',
    templateUrl: './auth-component.html',
    styleUrl: './auth-component.scss',
    standalone: true,
    imports: [LoginComponent, RegistrationComponent]
})
export class AuthComponent implements OnInit {
  private _authService = inject(AuthService);
  private _router = inject(Router);
  public viewMode: 'login' | 'registration' = 'login';

  public ngOnInit(): void {
    if (this._authService.isLoggedIn()) {
      this._router.navigate(['viewport'])
    }
  }

  public changeViewMode(mode: 'login' | 'registration'): void {
    this.viewMode = mode;
  }
}