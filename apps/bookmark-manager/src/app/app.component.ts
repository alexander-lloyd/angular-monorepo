import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, of } from 'rxjs';

import { FolderModel } from './models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'bm-app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  public favourites$: Observable<FolderModel[]> = of([
    {
      children: [
        { name: 'Apple', url: 'https://apple.com', tags: [] },
        { name: 'Google', url: 'https://google.com', tags: [] },
        { name: 'Microsoft', url: 'https://microsoft.com', tags: [] }
      ],
      name: 'Technology'
    },
    {
      children: [
        {
          children: [
            { name: 'Facebook', url: 'https://facebook.com', tags: [] },
            { name: 'Twitter', url: 'https://twitter.com', tags: [] }
          ],
          name: 'Social Media'
        }
      ],
      name: 'Other'
    }
  ]);
}
