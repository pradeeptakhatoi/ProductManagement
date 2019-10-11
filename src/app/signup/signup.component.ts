import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    public dialogRef: MatDialogRef<SignupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      first_name: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      last_name: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])],
      phone: [null, Validators.compose([Validators.required])],
      age: [null, Validators.compose([Validators.required])],
      state: [null, Validators.compose([Validators.required])],
      country: [null, Validators.compose([Validators.required])],
      address: [null, Validators.compose([Validators.required])],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.valid) {
      console.log('Create User');
      // this.userService.createUser(this.signupForm.value)
      //   .then(
      //     res => {
      //       this.signupForm.reset();
      //       this.router.navigate(['/profile']);
      //     }
      //   )
      // this.userService.createUser(this.signupForm.value).subscribe(data => {
      //   this.router.navigate(['profile']);
      // }, error => {
      //   alert(error);
      // });
    }
  }

  onClose() {
    this.dialogRef.close();
  }

}
