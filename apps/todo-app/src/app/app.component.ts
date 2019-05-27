import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Root Component
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'angular-monorepo-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title: string = 'todo-app';
}
