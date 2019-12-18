import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { Client } from '../models/client';
import { Package } from '../models/package';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  package: Package[]
  client: Client[]
  employee: Employee[]
  constructor() { }

  ngOnInit() {
  }



  
}
