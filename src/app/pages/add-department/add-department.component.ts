import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { ApiServicesService } from '../../api/api-services.service'
@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css'],
  providers: [MessageService]
})
export class AddDepartmentComponent implements OnInit {
  departmentDetails = {
    departmentName: '',
    isActive: true,
    isActiveValue: 1
  }
  msgs: Message[] = [];
  constructor(private messageService: MessageService, private apiCalls: ApiServicesService) { }

  ngOnInit() {
  }
  showInfo(type, details) {

    this.msgs = [];
    this.msgs.push({ severity: type, summary: '', detail: details });
  }
  doDepartmentAdd() {

    console.log(this.departmentDetails);
    if (this.departmentDetails.departmentName.toString().trim() == "") {
      this.showInfo('error', 'Please enter department name');
    } else {
      if (this.departmentDetails.isActive === true) {
        this.departmentDetails.isActiveValue = 1;
      } else {
        this.departmentDetails.isActiveValue = 0;
      }
      this.apiCalls.doPostAction("createDept", this.departmentDetails).then((result) => {
        if (result === "Duplicate") {
          this.showInfo('warn', 'Duplicate record');
        } else {
          this.showInfo('success', 'Department added successfully');
          this.departmentDetails = {
            departmentName: '',
            isActive: true,
            isActiveValue: 0
          }
        }

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
