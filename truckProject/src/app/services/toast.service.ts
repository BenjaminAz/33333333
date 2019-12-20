import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class ToastService {
	constructor(public toastController: ToastController, private router: Router) {}

	async presentToast(infoMensaje: string) {
		const toast = await this.toastController.create({
			message: infoMensaje,
			duration: 2000
		});
		toast.present();
	}

	async emptyLogin() {
		const toast = await this.toastController.create({
			message: 'Completar campos',
			duration: 2000,
			color: 'dark'
		});
		toast.present();
	}

	async loginError() {
		const toast = await this.toastController.create({
			message: 'Usuario o Contraseña incorrectos',
			duration: 2000,
			color: 'dark'
		});
		toast.present();
	}

	async registeredToast() {
		const toast = await this.toastController.create({
			message: 'Usuario registrado con exito',
			duration: 2000,
			color: 'success'
		});
		toast.present();
	}

	async invalidEmailToast() {
		const toast = await this.toastController.create({
			message: 'Ingresa una direccion valida',
			duration: 2000,
			color: 'dark'
		});
		toast.present();
	}

	async emailInUse() {
		const toast = await this.toastController.create({
			message: 'Email ya en uso',
			duration: 2000,
			color: 'dark'
		});
		toast.present();
	}

	async passwordDigits() {
		const toast = await this.toastController.create({
			message: 'La contraseña debe contener 6 digitos',
			duration: 2000,
			color: 'dark'
		});
		toast.present();
	}

	async unknownUser() {
		const toast = await this.toastController.create({
			message: 'Usuario inexistente',
			duration: 3000,
			color: 'dark',
			buttons: [
				{
					side: 'start',
					icon: '',
					text: 'Registrar',
					role: '',
					handler: () => {
						this.router.navigateByUrl('/registro');
					}
				}
			]
		});
		toast.present();
	}
}
