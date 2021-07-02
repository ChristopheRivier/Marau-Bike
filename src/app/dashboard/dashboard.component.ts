import { Component, OnInit } from '@angular/core';
import { ServiceAuthService } from '../auth/service-auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public authService: ServiceAuthService) { }

  ngOnInit(): void {
  }

}
