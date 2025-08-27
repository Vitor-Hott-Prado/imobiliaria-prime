import { TestBed } from '@angular/core/testing';

import { CorretorGuard } from './corretor.guard';

describe('CorretorGuard', () => {
  let guard: CorretorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CorretorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
