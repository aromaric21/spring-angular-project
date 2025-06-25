import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot
} from '@angular/router';
import {Injectable} from '@angular/core';
import {Authentication} from '../services/authentication';

@Injectable()
export class AuthorizationGuard implements CanActivate {

  constructor(private authService : Authentication,
              private router : Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    let authorize : boolean = false;
    let authorizedRoles: string[] = route.data['roles'];
    let roles: string[] = this.authService.roles as string[];
    for (let i =0; i< roles.length; i++) {
      if (authorizedRoles.includes(roles[i])) {
        authorize = true;
      }
    }
    return authorize;
  }
}
