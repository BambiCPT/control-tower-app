import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../services/authService"
import { inject } from "@angular/core";

//for AuthComponent where users should not be logged in
export const noAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    return true
  } else {
    return router.parseUrl('/viewport')
  }
}