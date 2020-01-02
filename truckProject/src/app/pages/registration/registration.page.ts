import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../../models/user';
import {AuthService} from '../../services/auth.service';
import { Toasts } from '../../assets/toasts';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  user: User = new User();
  cpassword: string = ''
  
  constructor(private router: Router,private authSvc: AuthService, private toastSvc: Toasts) { }

  ngOnInit() {
  }

  async onRegister() {
    // control de confirmacion de contraseña
    if(this.user.password == '' ||
     this.user.password == null ||
     this.user.email == '' ||
     this.user.email == null ||
     this.user.firstName == null ||
     this.user.firstName == '' ||
     this.user.lastName == null ||
     this.user.lastName == '' ||
     this.user.location == '' ||
     this.user.location == null ||
     this.user.phone == null ||
     this.user.state == null ||
     this.user.state == '' ||
     this.user.bornDate == null ||
     this.user.dni == null
     ){
      this.toastSvc.emptyData()
    }else
    if (this.user.password != this.cpassword) {
      console.log('Passwords dont match');
      this.toastSvc.passwordDontMatchToast()
    }
    else {
      const user = await this.authSvc.onRegister(this.user);
    }
  }
}
