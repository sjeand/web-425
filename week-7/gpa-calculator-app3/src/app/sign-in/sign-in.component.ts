/*
==========================================
  Title: gpa-calculator-app3
  Author: Professor Krasso
  Modifier: Sarah Jean Baptiste
  Date: 09/18/2021
  Description: part 3
==========================================
*/

// import statements
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SignInService } from '../sign-in.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;


  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) {
    this.signinForm = this.fb.group({
      studentId: ''
    });
    this.errorMessage = '';
  }

  ngOnInit(): void {

  }

  onSubmit(){
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);

    if (this.signinService.validate(studentId)){
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/'])
    } else {
      this.errorMessage = 'The student ID you entered is invalid. Please try'
    }
  }

}
