import { ViewportComponent } from './features/viewport/viewport.component';
import { AuthComponent } from './features/auth/auth-component';
import { noAuthGuard } from './core/guards/noAuth.guard';
import { authGuard } from './core/guards/auth.guard';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', redirectTo: 'auth', pathMatch: 'full',
  },
  {
    path: 'auth', component: AuthComponent, canMatch: [noAuthGuard]
  },
  {
    path: 'viewport', component: ViewportComponent, canMatch: [authGuard]
  },
  {
    path: '**', redirectTo: 'auth'
  }
];
