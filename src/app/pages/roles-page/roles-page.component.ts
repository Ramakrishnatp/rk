import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../../api/api-services.service'
@Component({
  selector: 'app-roles-page',
  templateUrl: './roles-page.component.html',
  styleUrls: ['./roles-page.component.css']
})
export class RolesPageComponent implements OnInit {
  roleDetails: any;
  constructor(private apiCalls: ApiServicesService) { }

  ngOnInit() {
    this.doGetRoleDetails();
  }

  doGetRoleDetails() {
    this.apiCalls.getAction("rolesMaster").then((result) => {
      this.roleDetails = result;
      console.log(this.roleDetails);
    }, (err) => {
      if (err.status === 401) {
        //this.showInfo('error', 'Access is denied due to invalid login details');
      }
      if (err.status === 400) {
        // this.showInfo('error', 'Access is denied due to invalid login details');
      }
    });
  }
}

