import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ApiServicesService } from '../../api/api-services.service'
import { Router } from "@angular/router";
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [MessageService]
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  usernameValidationMessage;
  passwordValidationMessage;
  errrorValidationMessage = "";
  data: any;
  msgs: Message[] = [];
  loginDetails = {
    username: 'aa',
    password: 'b'
  }
  constructor(private messageService: MessageService, private router: Router, formBuilder: FormBuilder, private apiCalls: ApiServicesService) {

    this.loginForm = formBuilder.group({
      'username': [null, Validators.required, Validators.minLength[1]],
      'password': [null, Validators.required, Validators.minLength[1]]
    });
  }
  showInfo(type, details) {

    this.msgs = [];
    this.msgs.push({ severity: type, summary: '', detail: details });
  }
  ngOnInit() {
  }
  doLoginAction() {
    console.log(this.loginDetails);
    if (this.loginDetails.username.toString().trim() == "") {
      this.showInfo('error', 'Please enter username');
    } else if (this.loginDetails.password.toString().trim() == "") {
      this.showInfo('error', 'Please enter password');
    } else {
   
      this.apiCalls.doLoginApiCall("login", this.loginDetails).then((result) => {
        this.data = result;
        console.log((this.data));
        this.apiCalls.apiToken = this.data.token;
        this.apiCalls.isLogin = true;
        this.router.navigate(['Dash']);

      }, (err) => {
        if (err.status === 401) {
          this.showInfo('error', 'Access is denied due to invalid login details');
        }
        if (err.status === 400) {
          this.showInfo('error', 'Access is denied due to invalid login details');
        }
      });
    }
  }
}