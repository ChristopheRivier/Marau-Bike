import { Component, OnInit } from '@angular/core';
import { ServiceAuthService } from '../service-auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(public authService: ServiceAuthService) { }

  ngOnInit(): void {
  }

}
