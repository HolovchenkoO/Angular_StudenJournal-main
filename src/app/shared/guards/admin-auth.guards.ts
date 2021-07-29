import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Injectable()
export class AdminAuthGuard implements CanActivate, CanActivateChild {
  constructor(private auth: AuthService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.auth.isAdminLoggedIn;
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(next, state);
  }
}
