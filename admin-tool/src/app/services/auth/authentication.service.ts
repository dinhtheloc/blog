import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../shared/constant';
import { environment } from '../../..//environments/environment';
import { Router } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  permission = {};

  constructor(
    private http: HttpClient,
    private router: Router) {
    if (Object.keys(this.permission).length === 0) {
      this.checkFunctions();
    }
  }

  isLogin() {
    if (localStorage.getItem(AppSettings.TOKEN)) {
      return true;
    }
    return false;
  }

  checkFunctions() {
    const functions = this.getFunctions();
    if (functions) {
      functions.map((item) => {
        if (item.code) {
          this.permission[item.code] = true;
        }
      });
    }
  }

  hasPermissions(...keys) {
    const self = this;
    return keys.some((value, index, arr) => {
      if (self.permission[value]) {
        return true;
      }
      return false;
    });
  }

  getFunctions() {
    const functions = localStorage.getItem(AppSettings.FUNCTION_KEY);
    if (functions && functions !== 'undefined' && functions.length > 0) {
      return JSON.parse(functions);
    }
    return undefined;
  }

  setFunctionLocalStorage(functions) {
    // localStorage.setItem(AppSettings.FUNCTION_KEY, JSON.stringify(functions));
  }

  logout() {
    // this.authenApiService.logout().subscribe(
    //   resp => {
    //     this.router.navigate(['login']);
    //     this.clearLocalStorage();
    //     // window.location.href = environment.LOGOUTO365_URL + encodeURIComponent(environment.LOGOUT_REDIRECT_URL);
    //   },
    //   error => {
    //     this.router.navigate(['login']);
    //     this.clearLocalStorage();
    //     // window.location.href = environment.LOGOUTO365_URL + encodeURIComponent(environment.LOGOUT_REDIRECT_URL);
    //   }
    // );
  }

  clearLocalStorage() {
    localStorage.removeItem(AppSettings.TOKEN);
    localStorage.removeItem(AppSettings.USERTYPE_KEY);
    localStorage.removeItem(AppSettings.USERNAME_KEY);
    localStorage.removeItem(AppSettings.FUNCTION_KEY);
  }
}
