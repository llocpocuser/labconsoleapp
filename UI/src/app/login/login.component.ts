import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, Response, HttpModule, Headers, RequestOptions } from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {}

  emailid;
  formdata;
 
  ngOnInit() {
   
 }
 

 ValidateLogin() {
   this.router.navigateByUrl('listactivity');
  }

 }

