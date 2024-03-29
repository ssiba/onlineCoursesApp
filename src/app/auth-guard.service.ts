import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService{
  constructor(private authService: AuthService,private router: Router) { }
  canActivate(): boolean {
    return this.authService.isAuthenticated;
  }
}
