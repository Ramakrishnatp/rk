import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { ApiServicesService } from '../../api/api-services.service'
@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css'],
  providers: [MessageService]
})
export class AddRoleComponent implements OnInit {
  roleDetails = {
    roleName: '',
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
  doRoleAdd() {

    console.log(this.roleDetails);
    if (this.roleDetails.roleName.toString().trim() == "") {
      this.showInfo('error', 'Please enter role name');
    } else {
      if (this.roleDetails.isActive === true) {
        this.roleDetails.isActiveValue = 1;
      } else {
        this.roleDetails.isActiveValue = 0;
      }
      this.apiCalls.doPostAction("createRole", this.roleDetails).then((result) => {
        if (result === "Duplicate") {
          this.showInfo('warn', 'Duplicate record');
        } else {
          this.showInfo('success', 'Role added successfully');
          this.roleDetails = {
            roleName: '',
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
