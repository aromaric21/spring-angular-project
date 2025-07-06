import {
  ActivatedRouteSnapshot,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot
} from '@angular/router';
import {Injectable} from '@angular/core';
import {Auth} from '../services/auth';

@Injectable()
export class authorizationGuard {

  constructor(private authService: Auth,
              private router:Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.authService.isAuthenticated) {
      let requiredRoles = route.data['roles'];
      let userRoles = this.authService.roles;
      for (let role of userRoles) {
        if (requiredRoles.include(role)) {
          return true ;
        }
      }
      return false ;
    }else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
