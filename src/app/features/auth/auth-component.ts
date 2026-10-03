import { Component } from "@angular/core";
import { LoginComponent } from "./login/login-component";
import { RegistrationComponent } from "./registration/registration-component";

@Component({
    selector: 'auth-page',
    templateUrl: './auth-component.html',
    styleUrl: './auth-component.scss',
    standalone: true,
    imports: [LoginComponent, RegistrationComponent]
})
export class AuthComponent {
  public viewMode: 'login' | 'registration' = 'login';

  public changeViewMode(mode: 'login' | 'registration'): void {
    this.viewMode = mode;
  }
}