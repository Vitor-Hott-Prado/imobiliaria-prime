import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CorretorGuard } from './corretor.guard';

describe('CorretorGuard', () => {
  let guard: CorretorGuard;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['parseUrl']);
    TestBed.configureTestingModule({
      providers: [
        CorretorGuard,
        { provide: Router, useValue: routerSpy }
      ]
    });
    guard = TestBed.inject(CorretorGuard);
  });

  afterEach(() => {
    localStorage.removeItem('role');
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow activation if role is corretor', () => {
    localStorage.setItem('role', 'corretor');
    expect(guard.canActivate({} as any, {} as any)).toBeTrue();
  });

  it('should redirect to /login if role is not corretor', () => {
    localStorage.setItem('role', 'cliente');
    routerSpy.parseUrl.and.returnValue('/login');
    expect(guard.canActivate({} as any, {} as any)).toBe('/login');
    expect(routerSpy.parseUrl).toHaveBeenCalledWith('/login');
  });

  it('should redirect to /login if role is missing', () => {
    routerSpy.parseUrl.and.returnValue('/login');
    expect(guard.canActivate({} as any, {} as any)).toBe('/login');
    expect(routerSpy.parseUrl).toHaveBeenCalledWith('/login');
  });
});