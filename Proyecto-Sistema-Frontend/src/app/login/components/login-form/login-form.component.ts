import { Component } from '@angular/core';
import { LoginFormService } from '../../services/login-form.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent{
  user: string = '';
  password: string = '';

  constructor(public loginformservice: LoginFormService) {}

  inputChange1(event: any) {
    this.user = event.target.value;
    console.log(this.user);
  }

  inputChange2(event: any) {
    this.password = event.target.value;
  }

  onSubmit(event: any) {
    event.preventDefault();
    this.loginformservice.login(this.user, this.password);

  }
}
