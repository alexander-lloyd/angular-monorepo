import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GamepadService } from './gamepad.service';

@NgModule({
  imports: [CommonModule],
  providers: [GamepadService]
})
export class GamepadRxjsModule {
}
