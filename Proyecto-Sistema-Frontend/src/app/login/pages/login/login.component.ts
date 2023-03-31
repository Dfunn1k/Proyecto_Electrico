import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  message: [] = [];

  // private motorservice = inject(MotorService);

  constructor() {}

  ngOnInit(): void {
    // this.motorservice.printText();
  }
}
