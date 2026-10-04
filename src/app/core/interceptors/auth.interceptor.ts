import { HttpInterceptorFn } from "@angular/common/http";
import { AuthService } from "../services/authService";
import { inject } from "@angular/core";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();
  if (token) {
    const modifiedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(modifiedReq);
  }
  return next(req);
}