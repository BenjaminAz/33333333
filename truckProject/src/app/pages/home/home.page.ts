import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userRole: any;
  usersInfo: User[]

  //obtiene info de usuario / email / uid
  user: firebase.User;
  userInfo: User;
  users: User[];

  constructor(private router: Router, private auth: AuthService, private db: AngularFirestore) { }

  ngOnInit() {
    this.auth.getUserState()
    .subscribe(user => {
      this.user = user;
      this.getUsersRole(this.user.uid)
      console.log(this.user.uid)
      this.getUsersInfo(this.user.uid)
    });
  }

  // Obtener rol de usuario
  getUsersRole(id){
    this.db.collection('Users').doc(`${id}`).valueChanges().subscribe((userData: User) => {
      this.userInfo = userData;
      this.userRole = this.userInfo.role
    })
  }

  //obtener info de usuario
  getUsersInfo(id){
    this.db.collection('Users').doc(`${id}`).valueChanges().subscribe((userData: User[]) => {
      this.usersInfo = userData;
    })
  }

  //desloguear
  logout() {
    this.auth.onLogout();
  }
}
