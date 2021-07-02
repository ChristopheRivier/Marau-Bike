import { Component, OnInit } from '@angular/core';
import { ServiceAuthService } from '../service-auth.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  constructor(public authService: ServiceAuthService) { }

  ngOnInit(): void {
  }
}
