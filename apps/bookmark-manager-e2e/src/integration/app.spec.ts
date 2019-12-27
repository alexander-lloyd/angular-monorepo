import { getGreeting } from '../support/app.po';

describe('bookmark-manager', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to bookmark-manager!');
  });
});
