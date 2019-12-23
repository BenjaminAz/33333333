import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Package } from '../models/package';
import { Office } from '../models/office';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


import { User } from '../models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { Toasts } from '../assets/toasts';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: any = false;


  user: firebase.User;
  userInfo: User[];
  package: Package[];
  office: Office[];
  newUser: any;
  constructor(private router : Router,private db: AngularFirestore, private afAuth: AngularFireAuth, private Barcode: BarcodeScanner, private toastSvc: Toasts) {
    afAuth.authState.subscribe((user) => (this.isLogged = user));

  }


  //Login
  async onLogin(user) {
    try {
      return await this.afAuth.auth.signInWithEmailAndPassword(
        user.email,
        user.password
      )
        .then(userCredential => {

        })
    } catch (error) {
      var errorCode = error.code;
      if (errorCode == 'auth/invalid-email') {
        this.toastSvc.emailNotValidToast()
      } else if (errorCode == 'auth/user-not-found') {
        this.toastSvc.userNotFound();
      }
    }
  }

  //registro
  async onRegister(user) {
    try {
      return await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password)
      .then(userCredential => {
        this.newUser = user;
        console.log(userCredential);
        console.log('Succesfully created user')
        this.toastSvc.succesfullyToast()
        this.router.navigateByUrl('/login')
        this.insertUserData(userCredential)
      })
    } catch (error) {
      if (error.code == 'auth/user-not-found') {
        this.toastSvc.userNotFound();
      } else if (error.code == 'auth/weak-password') {
        this.toastSvc.charPasswordToast();
      } else if (error.code == 'auth/email-already-in-use') {
        this.toastSvc.emailUsedToast();
      }
      console.log('Error on register user', error);
    }
  }

  insertUserData(userCredential: firebase.auth.UserCredential) {
    if(this.newUser.state != 'Directivo'){
      this.newUser.role = 'user'
    }else {
      this.newUser.role = 'admin'
    }
    return this.db.doc(`Users/${userCredential.user.uid}`).set({
      email: this.newUser.email,
      firstName: this.newUser.firstName,
      lastName: this.newUser.lastName,
      phone: this.newUser.phone,
      bornDate: this.newUser.bornDate,
      location: this.newUser.location,
      dni: this.newUser.dni,
      role: this.newUser.role,
      id: this.newUser.id = userCredential.user.uid,
      onTravel: false,
      package: null,
      office: null,
      state: this.newUser.state,
      scan: null
    })
  }
}
