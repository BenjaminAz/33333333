import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { Toasts } from 'src/app/assets/toasts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private toastScripts: Toasts,private brcScanner: BarcodeScanner, private ngxScanner: NgxQRCodeModule) {}


  scannedCode= null
  async scanCode() {
    try{
      this.brcScanner.scan().then(barcodeData => {

        this.scannedCode = barcodeData.text
        this.toastScripts.scannerSuccessToast()
      })
    }catch(err){
      console.log(err)
    }
  }

}
