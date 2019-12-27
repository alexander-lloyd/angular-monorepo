import { AppModule } from './app.module';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppModule', () => {
  let module: AppModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule]
    }).compileComponents();

    module = TestBed.get(AppModule);
  });

  it('should create', () => {
    expect(module).toBeDefined();
  });
});
