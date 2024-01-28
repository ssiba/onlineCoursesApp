import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USER_KEY = 'currentUser';
  constructor() { }
  isAuthenticated: boolean = false; 
  // login(password: string): boolean {
  //   // Check if the username and password are valid
  //   if ( password === 'dummy@123') {
  //     this.isAuthenticated = true;
  //     // Store user information in local storage
  //     localStorage.setItem('isLoggedIn', 'true');
  //     // localStorage.setItem('userName', userName);
  //     return true;
  //   }
  //   return false;
  // }
  login(password: string, userName: string): boolean {
    // Check if the password is valid
    if (password === 'dummy@123') {
      this.isAuthenticated = true;
      // Store user information in local storage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userName', userName);
      return true;
    }
    return false;
  }

  logout(){
    // Clear user information from local storage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
  }
  isLoggedIn(): boolean {
    // Check if user is logged in
    return localStorage.getItem('isLoggedIn') === 'true';
  }
  getUserName(): string {
    // Retrieve the username from local storage
    return localStorage.getItem('userName');
  }
}
