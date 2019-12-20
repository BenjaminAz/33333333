import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee';
import { Client } from '../models/client';
import { Package } from '../models/package';
import {AuthService} from '../services/auth.service';
@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: [ './login.page.scss' ]
})

export class LoginPage implements OnInit {
	package: Package[];
	client: Client[];
	employee: Employee[];
   
	//Class: Login ---> Usuario y Contraseña
    user: Login = new Login();
  
  
  constructor(private router: Router, private authSvc: AuthService) {}

	ngOnInit() {}

	async onLogin() {
		if (this.user.password == '' || this.user.password==null){
		  this.toastSvc.emptyLogin()
		}
		  const user = await this.authSvc.onLogin(this.user);
		  if (user) {0
			console.log('Usuario logeado exitosamente');
			this.router.navigate(['/home']);
		  }else {
			this.authSvc.validation = true;
		  }
	  }
	
  
  
  
  
  
  
  //visor de contraseñas
	@ViewChild('passwordEyeRegister', { static: false })
	passwordEye;

	passwordTypeInput = 'password';
	// Variable para cambiar dinamicamente el tipo de Input que por defecto sera 'password'
	iconpassword = 'eye-off';

	//funcion para el visor de contraseña
	togglePasswordMode() {
		this.passwordTypeInput = this.passwordTypeInput === 'text' ? 'password' : 'text';
		this.iconpassword = this.iconpassword === 'eye-off' ? 'eye' : 'eye-off';
		this.passwordEye.setFocus();
	}






}
