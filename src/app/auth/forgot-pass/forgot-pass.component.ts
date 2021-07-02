import { Component, OnInit } from '@angular/core';
import { ServiceAuthService } from '../service-auth.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent implements OnInit {

  constructor(public authService: ServiceAuthService) { }

  ngOnInit(): void {
  }

}
