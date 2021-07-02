import { Component } from '@angular/core';
import { ServiceAuthService } from './auth/service-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MarauBike';
  constructor( public serviceAuth: ServiceAuthService){}
}
