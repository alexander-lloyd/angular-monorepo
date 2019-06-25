import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';
import {GamepadService} from '@al/gamepad-rxjs';
import {Subscription} from 'rxjs';

/**
 * Root Component
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'angular-monorepo-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnDestroy {
  public title: string = 'todo-app';
  private subscription: Subscription;
  private subscription2: Subscription;

  public constructor(private gamePadService: GamepadService) {
    this.subscription = this.gamePadService
      .getGamepadAddedObservable()
      .subscribe((gamePad: GamepadEvent) => {
        console.log(gamePad);
      });
    this.subscription2 = this.gamePadService
      .getGamepadRemovedObservable()
      .subscribe((gamePad: GamepadEvent) => {
        console.log(gamePad);
      });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
