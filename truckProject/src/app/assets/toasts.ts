import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

export class Toasts {

    public contt: number = 0;

    constructor(private toastController: ToastController, private router: Router) {

    }

    //las contraseñas no coinciden / registro
    async passwordDontMatchToast() {
        const toast = await this.toastController.create({
            message: 'Las contraseñas no coinciden',
            duration: 2000,
            color: 'danger',
        });
        toast.present();
    }


    // Envio de email / recuperar contraseña 
    async emailSendToast() {
        const toast = await this.toastController.create({
            message: 'Email enviado con exito',
            duration: 2000,
            color: 'success',
        });
        toast.present();
    }


    // campos incompletos / formularios
    async emptyData() {
        const toast = await this.toastController.create({
            message: 'Falta completar datos',
            duration: 2000,
            color: 'danger',
        });
        toast.present();
    }


    // caracteres DNI  / formularios
    async dniLengthToast() {
        const toast = await this.toastController.create({
            message: 'DNI debe contener 8 digitos',
            duration: 2000,
            color: 'danger',
        });
        toast.present();
    }

    async phoneLengthToast() {
        const toast = await this.toastController.create({
            message: 'Telefono no puede ser menor a 4 digitos',
            duration: 2000,
            color: 'danger',
        });
        toast.present();
    }

    // email no registrado / login
    async emailNotValidToast() {
        const toast = await this.toastController.create({
            message: 'Email no valido',
            duration: 2000,
            color: 'danger',
        });
        toast.present();
    }

    // requisito de contraseña / registro
    async charPasswordToast() {
        const toast = await this.toastController.create({
            message: 'La contraseña debe contener mas de 6 digitos',
            duration: 2000,
            color: 'danger',
        });
        toast.present();
    }

    // registro exitoso
    async succesfullyToast() {
        const toast = await this.toastController.create({
            message: 'Registrado con exito.',
            duration: 2000,
            color: 'success',
        });
        toast.present();
    }

    // operacion exitosa
    async succesfullyOperationToast() {
        const toast = await this.toastController.create({
            message: 'Registrado con exito.',
            duration: 2000,
            color: 'success',
        });
        toast.present();
    }

    // Actualizacion exitosa
    async succesfullyUpdateToast() {
        const toast = await this.toastController.create({
            message: ' Actualizacion exitosa',
            duration: 2000,
            color: 'success',
        });
        toast.present();
    }

    //Email en uso / registro
    async emailUsedToast() {
        const toast = await this.toastController.create({
            message: 'Email ya esta en uso',
            position: 'top',
            color: 'danger',
            duration: 3000,
            buttons: [
                {
                    side: 'start',
                    icon: '',
                    text: 'Login',
                    role: '',
                    handler: () => {
                        this.router.navigateByUrl('/login')
                        console.log('email in use');
                    }
                }, {
                    text: 'Ok',
                    role: 'cancel',
                    handler: () => {
                        console.log('done clicked');
                    }
                }
            ]
        });
        toast.present();
    }

    /* Contraseña incorrecta despues de 3 intentos / login

    */
    async passwordRetriesToast() {
        const toast = await this.toastController.create({
            message: '3 intentos.   ¿Olvidaste tu contraseña?',
            position: 'top',
            color: 'dark',
            duration: 6000,
            buttons: [
                {
                    side: 'start',
                    icon: '',
                    text: 'Si',
                    role: '',
                    handler: () => {
                        this.router.navigateByUrl('/forgetPassword')
                        console.log('Recover password');
                    }
                }, {
                    text: 'No',
                    role: 'cancel',
                    handler: () => {
                        console.log('done clicked');
                    }
                }
            ]
        });
        toast.present();
    }

    // Contraseña incorrecta incremento de intentos / login
    async retrievePasswordToast() {

        this.contt = this.contt + 1;

        if (this.contt == 4) {

            this.passwordRetriesToast()
            this.contt = 0;

        }

        let temp = this.contt.toString()
        const toast = await this.toastController.create({
            message: 'Usuario o contraseña incorrectos ' + temp + '/3',
            duration: 2000,
            color: 'light',
        });

        toast.present();
    }

    // direccion o contraseña incorrectos / login =>(opcional => implementar logica)
    async userNotFound() {
        const toast = await this.toastController.create({
            message: 'Direccion o contraseña incorrectos',
            duration: 2000,
            color: 'light',
        });
        toast.present();
    }

    // Operacion de scaneo exitosa (opcional)
    async scannerSuccessToast() {
        const toast = await this.toastController.create({
            message: 'Scaneo registrado',
            duration: 3000,
            color: 'success',
        });
        toast.present();
    }

    // template sin implementar (NO MODIFICAR)
    async warningToast() {
        const toast = await this.toastController.create({
            message: 'Recuerda que si no perteneces a la companìa, tu email puede ser bloqueado permanentemente',
            position: 'top',
            color: 'light',
            duration: 3000,
            buttons: [
                {
                    side: 'start',
                    icon: '',
                    text: 'OK',
                    role: 'close',
                    handler: () => {

                    }
                }, {
                    text: '',
                    role: 'cancel',
                    handler: () => {
                        console.log('done clicked');
                    }
                }
            ]
        });
        toast.present();
    }
}