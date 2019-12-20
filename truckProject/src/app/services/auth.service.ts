import { Injectable } from '@angular/core';
import { Package } from '../models/package';
import { Employee } from '../models/employee';
import { Office } from '../models/office';
import { Client } from '../models/client';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxQRCodeComponent } from 'ngx-qrcode2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  client: Client[];
  office: Office[];
  user: Employee[];
  package: Package[];
  constructor(private Barcode : BarcodeScanner, private NgxDatatable: NgxDatatableModule, private NgxQRScanner: NgxQRCodeComponent) { }



















}
