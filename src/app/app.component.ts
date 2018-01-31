import { Component, DoCheck } from '@angular/core';
import { ApiServicesService } from './api/api-services.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  constructor(public apiCall: ApiServicesService) {


  }

}
