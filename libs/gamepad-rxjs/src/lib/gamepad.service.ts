import { Injectable } from '@angular/core';
import { fromEvent, Observable, pipe, UnaryFunction } from 'rxjs';
import { map } from 'rxjs/operators';

const gamepadAddedEvent = 'gamepadconnected';
const gamepadRemovedEvent = 'gamepaddisconnected';

@Injectable()
export class GamepadService {

  private readonly $gamepadAdded: Observable<GamepadEvent>;
  private readonly $gamepadRemoved: Observable<GamepadEvent>;
  private gameEventPipe: UnaryFunction<Observable<GamepadEvent>, Observable<Gamepad>> = pipe(
    map(($event: GamepadEvent) => $event.gamepad)
  );

  private gamePads: Map<string, Gamepad> = new Map();

  public constructor() {
    // Attach listeners

    this.$gamepadAdded = fromEvent<GamepadEvent>(window, gamepadAddedEvent);
    this.$gamepadRemoved = fromEvent<GamepadEvent>(window, gamepadRemovedEvent);

    this.$gamepadAdded.pipe(this.gameEventPipe)
      .subscribe((gamePad: Gamepad) => {
        this.gamePads.set(gamePad.id, gamePad);
      });

    this.$gamepadRemoved.pipe(this.gameEventPipe)
      .subscribe((gamepad: Gamepad) => {
        this.gamePads.delete(gamepad.id);
      });
  }

  public getGamepadAddedObservable(): Observable<GamepadEvent> {
    return this.$gamepadAdded;
  }

  public getGamepadRemovedObservable(): Observable<GamepadEvent> {
    return this.$gamepadRemoved;
  }
}
