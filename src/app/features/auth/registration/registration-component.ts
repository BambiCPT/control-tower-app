import { Component, DestroyRef, inject, output } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { AuthService } from "../../../core/services/authService";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { User } from "../../../models/user";

@Component({
  selector: 'registration-page',
  templateUrl: './registration-component.html',
  styleUrl: './registration-component.scss',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule]
})
export class RegistrationComponent {
  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);
  private _destroyRef = inject(DestroyRef);
  authModeChange = output<'login'>();

  public registrationForm = this._formBuilder.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required, Validators.minLength(8)]
  })

  public createAccount(): void {
    const {
      username,
      email,
      password
    } = this.registrationForm.getRawValue()
    const data: Partial<User> = { username, email, password }
    this._authService.registerUser(data).pipe(takeUntilDestroyed(this._destroyRef)).subscribe({
      next: (res) => {
        
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  public switchToLogin(): void {
    this.authModeChange.emit('login');
  }

}