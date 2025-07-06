import {
  ActivatedRouteSnapshot,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot
} from '@angular/router';
import {Injectable} from '@angular/core';
import {Auth} from '../services/auth';

@Injectable()
export class authGuard {

  constructor(private authService: Auth,
              private router:Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.authService.isAuthenticated) {
      return true ;
    }else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
