import { Injectable, OnDestroy } from '@angular/core';
import { concat, fromEvent, Observable, pipe, Subscription, timer, UnaryFunction } from 'rxjs';
import { map } from 'rxjs/operators';

const gamepadAddedEvent = 'gamepadconnected';
const gamepadRemovedEvent = 'gamepaddisconnected';
const gamepadPollTime = 100;

function getGamepad(gamepadId: string): Gamepad {
  return navigator.getGamepads()[gamepadId];
}

@Injectable()
export class GamepadService implements OnDestroy {

  private readonly $gamepadAdded: Observable<GamepadEvent>;
  private readonly $gamepadAddedSubscription: Subscription;
  private readonly $gamepadEvents: Observable<GamepadEvent>;
  private readonly $gamepadRemoved: Observable<GamepadEvent>;
  private readonly $gamepadRemovedSubscription: Subscription;
  private gameEventPipe: UnaryFunction<Observable<GamepadEvent>, Observable<Gamepad>> = pipe(
    map(($event: GamepadEvent) => $event.gamepad)
  );

  private gamepadIds: string[] = [];

  public constructor() {
    // Attach listeners

    this.$gamepadAdded = fromEvent<GamepadEvent>(window, gamepadAddedEvent);
    this.$gamepadRemoved = fromEvent<GamepadEvent>(window, gamepadRemovedEvent);

    this.$gamepadAddedSubscription = this.$gamepadAdded.pipe(this.gameEventPipe)
      .subscribe((gamepad: Gamepad) => {
        this.gamepadIds = [...this.gamepadIds, gamepad.id];
      });

    this.$gamepadRemovedSubscription = this.$gamepadRemoved.pipe(this.gameEventPipe)
      .subscribe((gamepad: Gamepad) => {
        this.gamepadIds = this.gamepadIds.filter((id: string) => gamepad.id !== id);
      });

    const $gamepadTimer = timer(0, gamepadPollTime)
      .pipe(
        map(() => this.gamepadIds.map(getGamepad)) // Gamepad[]
      );
    this.$gamepadEvents = concat(this.$gamepadAdded, this.$gamepadRemoved);
  }

  /**
   * Get a stream of Gamepad add events.
   */
  public getGamepadAddedObservable(): Observable<GamepadEvent> {
    return this.$gamepadAdded;
  }

  /**
   * Get a stream of all of the Gamepad Events
   * @returns Observable of GamepadEvents.
   */
  public getGamepadEventStream(): Observable<GamepadEvent> {
    return this.$gamepadEvents;
  }

  /**
   * Get a stream of Gamepad remove events.
   * @returns Observable of GamepadEvents.
   */
  public getGamepadRemovedObservable(): Observable<GamepadEvent> {
    return this.$gamepadRemoved;
  }

  public ngOnDestroy(): void {
    this.$gamepadAddedSubscription.unsubscribe();
    this.$gamepadRemovedSubscription.unsubscribe();
  }
}
