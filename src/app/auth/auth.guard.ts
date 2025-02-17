import { CanActivateChildFn, CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).isAuthenticated()
};

export const authGuardChild: CanActivateChildFn = (route, state) => {
  return inject(AuthService).isRoleAdmin()
};