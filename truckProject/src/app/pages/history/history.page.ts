import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  userHistory: User[];
  user: firebase.User
  constructor(private db: AngularFirestore, private auth: AuthService ) { }

  ngOnInit() {
    this.auth.getUserState()
    .subscribe(user => {
      this.user = user;
      console.log(this.user.uid)
    });
    this.getHistory(this.user.uid)
  }

  //obtener historial de entregas
  getHistory(id){
    this.db.collection('Users').doc(`${id}/entregas`).valueChanges().subscribe((userData: User[]) => {
      this.userHistory = userData;
    })
  }
}
