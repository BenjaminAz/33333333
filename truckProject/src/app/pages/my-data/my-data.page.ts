import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.page.html',
  styleUrls: ['./my-data.page.scss'],
})
export class MyDataPage implements OnInit {

  usersInfo: User[]
  user: firebase.User;

  constructor(private auth: AuthService, private db : AngularFirestore) { }

  ngOnInit() {
    this.auth.getUserState()
    .subscribe(user => {
      this.user = user;
      console.log(this.user.uid)
      this.getUsersInfo(this.user.uid)
    });
  }

  // obtener datos de usuario logeado
  getUsersInfo(id){
    this.db.collection('Users').doc(`${id}`).valueChanges().subscribe((userData: User[]) => {
      this.usersInfo = userData;
    })
  }
}
