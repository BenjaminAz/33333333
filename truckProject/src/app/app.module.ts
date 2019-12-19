import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxQRCodeModule } from 'ngx-qrcode2';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Firebase imports
import { firebaseConfig } from 'src/environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
     AppRoutingModule,
     NgxQRCodeModule,
      NgxDatatableModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestore,
    AngularFireDatabase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BarcodeScanner
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}


