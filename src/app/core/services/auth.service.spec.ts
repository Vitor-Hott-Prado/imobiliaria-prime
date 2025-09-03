import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return false if not authenticated', () => {
    expect(service.isAuthenticated()).toBeFalse();
  });

  it('should return true if token exists', () => {
    localStorage.setItem('token', 'abc123');
    expect(service.isAuthenticated()).toBeTrue();
  });

  it('should set token on login', () => {
    spyOn(localStorage, 'setItem');
    service.setToken('token123');
    expect(localStorage.setItem).toHaveBeenCalledWith('token', 'token123');
  });

  it('should remove token on logout', () => {
    spyOn(localStorage, 'removeItem');
    service.logout();
    expect(localStorage.removeItem).toHaveBeenCalledWith('token');
  });
});