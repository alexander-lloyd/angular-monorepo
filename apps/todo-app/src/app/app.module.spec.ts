import { async, TestBed } from '@angular/core/testing';
import { AppModule } from './app.module';

describe('AppModule', () => {
  let module;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [ AppModule ]
      });

    module = TestBed.get(AppModule);
  }));

  it('should compile', () => {
    expect(module).toBeDefined();
  });
});
