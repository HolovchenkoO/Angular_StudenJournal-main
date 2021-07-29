import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Injectable()
export class StudentAuthGuard implements CanActivate, CanActivateChild {
  constructor(private auth: AuthService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.auth.isStudentLoggedIn;
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(next, state);
  }
}
