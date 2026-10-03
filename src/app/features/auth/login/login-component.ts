import { Component, inject, output } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";

@Component({
    selector: 'login-page',
    templateUrl: './login-component.html',
    styleUrl: './login-component.scss',
    standalone: true,
    imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule]
})
export class LoginComponent {
  private _formBuilder = inject(FormBuilder);
  authModeChange = output<'registration'>();

  public loginForm: FormGroup = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

  public forgotPassword(): void {
    
  }

  public switchToRegistration(): void {
    this.authModeChange.emit('registration');
  }
}