import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  submitted = false;
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).pipe(first()).subscribe((result: any) => {
      this.loading = false;
      if (result.code == 200) {
        this.router.navigate([this.returnUrl]);
      } else {
        this.snackbar.open(result.responseData.message, 'Close', {
          horizontalPosition: 'end',
          verticalPosition: 'bottom',
          duration: 4000,
        });
      }
    }, error => {
      this.loading = false;
      this.snackbar.open("Invalid Login Credentails!", 'Close', {
        horizontalPosition: 'end',
        verticalPosition: 'bottom',
        duration: 4000,
      });
      this.error = error;
      this.loading = false;
    });
    return false;
  }

}
