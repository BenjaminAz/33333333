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

  
  constructor(private router: Router,private authSvc: AuthService, private toastSvc: Toasts) { }

  ngOnInit() {
  }

  async onRegister() {
    if(this.user.password == '' ||
     this.user.password == null ||
     this.user.email == '' ||
     this.user.email == null 
     ){
      this.toastSvc.emptyData()
    }
    const user = await this.authSvc.onRegister(this.user);
    if (user) {
      console.log('Usuario creado con exito');
      this.toastSvc.succesfullyToast()
      this.router.navigateByUrl('/login')
    }
  }



  
 

}
