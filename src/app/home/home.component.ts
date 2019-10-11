import { Component, OnInit } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  signupPopup() {
    this.dialog.open(SignupComponent, {
      width: '650px',
      height: 'auto',
      maxHeight: '98vh',
    }).afterClosed().subscribe((result: String) => {
      console.log(result + 'The dialog was closed');
    });
  }

}
