import { Component, OnInit, DoCheck } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiServicesService } from '../../api/api-services.service'
@Component({
  selector: 'app-master-component',
  templateUrl: './master-component.component.html',
  styleUrls: ['./master-component.component.css']
})
export class MasterComponentComponent implements DoCheck {
  isLoggedIn = false;
  constructor(private apiCalls: ApiServicesService) { }

  ngDoCheck() {

    this.isLoggedIn = this.apiCalls.isLogin;
    if (this.apiCalls.isLogin === true) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }

  }

  doAction() {

  }
}

