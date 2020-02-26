import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(): boolean {
    if (this.authService.isAuthenticated$) {
      return true;
    } else {
      return false;
    }
  }

}

