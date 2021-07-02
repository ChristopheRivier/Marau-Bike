import { Component, OnInit } from '@angular/core';
import { ServiceAuthService } from '../service-auth.service';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.scss']
})
export class SignuppageComponent implements OnInit {

  constructor(public authService: ServiceAuthService) { }

  ngOnInit(): void {
  }

}
