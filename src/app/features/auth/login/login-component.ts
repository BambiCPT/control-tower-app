import { Component, inject, output } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { AuthService } from "../../../core/services/authService";
import { User } from "../../../models/user";
import { Router } from "@angular/router";

@Component({
    selector: 'login-page',
    templateUrl: './login-component.html',
    styleUrl: './login-component.scss',
    standalone: true,
    imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule]
})
export class LoginComponent {
  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);
  private _router = inject(Router);
  authModeChange = output<'registration'>();

  public loginForm: FormGroup = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

  public login(): void {
    const data: Partial<User> = this.loginForm.getRawValue();
    this._authService.login(data).subscribe(
      {
        next: () => {
          //router navigate
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