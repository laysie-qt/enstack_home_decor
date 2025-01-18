import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;
  loginError: boolean = false;
  failedAttempts: number = 0;
  loginDisabled: boolean = false;

  constructor(private router: Router, private formBuild: FormBuilder,private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loginForm = this.formBuild.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      return;
    }
    const { email, password } = this.loginForm.value;
    if (password === 'Testpassw0rd!') {
      this.router.navigate(['/main']);
    } else {
      this.failedAttempts++;
      this.loginError = true;
      if (this.failedAttempts >= 3) {
        this.loginDisabled = true;
        setTimeout(() => {
          this.failedAttempts = 0;
          this.loginDisabled = false;
          this.loginError = false;
        }, 60000);
      }
    }
  }

  onForgotPassword(): void {
    window.open('https://www.google.com', '_blank');
  }

  onSignup() {
    this.router.navigate(['/signup']);
  }
}
