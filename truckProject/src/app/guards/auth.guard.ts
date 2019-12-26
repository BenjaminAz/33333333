import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  

constructor(private db: AngularFirestore,private authSvc : AuthService , private router: Router) {}


  canActivate(
    next: ActivatedRouteSnapshot, state:RouterStateSnapshot): 
    Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean 
    | UrlTree {
      if(this.authSvc.isLogged){
          return true;
      }else {
        console.log('Acceso denegado');
        this.router.navigateByUrl('/login')
        return false;
      }
    }
}
