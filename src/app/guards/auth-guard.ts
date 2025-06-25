import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot
} from '@angular/router';
import {Injectable} from '@angular/core';
import {Authentication} from '../services/authentication';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService : Authentication,
              private router : Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.authService.authenticated==true){
      return true;
    }else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
