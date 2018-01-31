import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../../api/api-services.service'

import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
@Component({
  selector: 'app-department-page',
  templateUrl: './department-page.component.html',
  styleUrls: ['./department-page.component.css']
})
export class DepartmentPageComponent implements OnInit {
  departmentDetails: any;
  constructor(private apiCalls: ApiServicesService) { }

  ngOnInit() {
    this.doGetDepartmentDetails();
  }
  doGetDepartmentDetails() {
    this.apiCalls.getAction("deptMaster").then((result) => {
      this.departmentDetails = result;
      console.log(this.departmentDetails);
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
