import { Component, inject, output } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
    selector: 'registration-page',
    templateUrl: './registration-component.html',
    styleUrl: './registration-component.scss',
    standalone: true,
    imports: [MatButtonModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule]
})
export class RegistrationComponent {
  private _formBuilder = inject(FormBuilder);
  authModeChange = output<'login'>();

  public registrationForm = this._formBuilder.group({
    username: ['', Validators.required],
    email: ['', Validators.email, Validators.required],
    password: ['', Validators.required, Validators.minLength(8)]
  })

  public createAccount(): void {

  }

  public switchToLogin(): void {
    this.authModeChange.emit('login');
  }
  
}