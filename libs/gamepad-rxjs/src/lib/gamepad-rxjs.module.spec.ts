import { async, TestBed } from '@angular/core/testing';
import { GamepadRxjsModule } from './gamepad-rxjs.module';

describe('GamepadRxjsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GamepadRxjsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GamepadRxjsModule).toBeDefined();
  });
});
