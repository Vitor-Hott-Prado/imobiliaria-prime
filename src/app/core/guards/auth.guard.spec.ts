import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['parseUrl']);
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useValue: routerSpy }
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  afterEach(() => {
    localStorage.removeItem('token');
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow activation if token exists', () => {
    localStorage.setItem('token', '123');
    expect(guard.canActivate({} as any, {} as any)).toBeTrue();
  });

  it('should redirect to /login if token does not exist', () => {
    routerSpy.parseUrl.and.returnValue('/login');
    expect(guard.canActivate({} as any, {} as any)).toBe('/login');
    expect(routerSpy.parseUrl).toHaveBeenCalledWith('/login');
  });
});