import { Component, OnInit } from '@angular/core';

import { Package } from '../models/package';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  package: Package[]

  constructor() { }

  ngOnInit() {
  }

}
