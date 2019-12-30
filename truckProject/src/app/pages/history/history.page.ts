import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { Package } from 'src/app/models/package';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  userHistory: User[];
  user: firebase.User
  packages: Package[];
  constructor(private db: AngularFirestore, private auth: AuthService ) { 

    
  }

  ngOnInit() {
    this.auth.getUserState()
    .subscribe(user => {
      this.user = user
      console.log(this.user.uid)
    });
    this.getHistory(this.user.uid)
    this.getPackage()
  }

  //obtener paquetes de coleccion 'Users'/id/entregas
  getHistory(id){
    this.db.collection('Users').doc(`${id}/entregas`).valueChanges().subscribe((userData: User[]) => {
      this.userHistory = userData;
    })
  }

  //obtener paquetes desde coleccion 'Packages'
  getPackage(){
    this.db.collection('Packages').doc().valueChanges().subscribe((packagesData: Package[]) => {
      this.packages = packagesData;
    })
  }
}

