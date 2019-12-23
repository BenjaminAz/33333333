import { Component, OnInit, ViewChild } from '@angular/core';
import { Toasts } from '../../assets/toasts';
import { Package } from '../../models/package';
import {User} from '../../models/user';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = new User();

  package: Package[]

  constructor(private router: Router,private authSvc: AuthService, private toastSvc: Toasts) { }

  ngOnInit() {}


  async onLogin() {
		if (this.user.password == '' || this.user.password==null){
		  this.toastSvc.emptyData()
		}
		  const user = await this.authSvc.onLogin(this.user);
		  if (this.user) {
			console.log('Usuario logeado exitosamente');
			this.router.navigate(['/home']);
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
