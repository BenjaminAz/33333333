import { Injectable } from '@angular/core';
import { Package } from '../models/package';
import { Office } from '../models/office';
import {  User } from '../models/user';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxQRCodeComponent } from 'ngx-qrcode2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  office: Office[];
  user: User[];
  package: Package[];
  constructor(private Barcode : BarcodeScanner, private NgxDatatable: NgxDatatableModule, private NgxQRScanner: NgxQRCodeComponent) { }
}
