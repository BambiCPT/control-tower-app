import { Component, inject, output } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { AuthService } from "../../../core/services/authService";
import { User } from "../../../models/user";
import { Router } from "@angular/router";
import { ButtonComponent, CardComponent, TextFieldComponent } from "../../../ui";

@Component({
    selector: 'login-page',
    templateUrl: './login-component.html',
    styleUrl: './login-component.scss',
    standalone: true,
    imports: [ReactiveFormsModule, ButtonComponent, CardComponent, TextFieldComponent]
})
export class LoginComponent {
  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);
  private _router = inject(Router);
  authModeChange = output<'registration'>();

  public loginForm = this._formBuilder.nonNullable.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    })

  public login(): void {
    const data: Partial<User> = this.loginForm.getRawValue();
    this._authService.login(data).subscribe(
      {
        next: () => {
          this._router.navigate(['viewport']);
        },
        error: (error) => {
          console.error(error);
        }
      }
    )
  }

  public forgotPassword(): void {
    
  }

  public switchToRegistration(): void {
    this.authModeChange.emit('registration');
  }
}