/*
==========================================
  Title: enhanced secure profile app
  Author: Professor Krasso
  Modifier: Sarah Jean Baptiste
  Date: 08/19/2021
  Description: module
==========================================
*/

// Import statements
import { TestBed } from '@angular/core/testing';
import { SignInGuard } from './sign-in.guard';

// Sign in Gaurd
describe('SignInGuard', () => {
  let guard: SignInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SignInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
