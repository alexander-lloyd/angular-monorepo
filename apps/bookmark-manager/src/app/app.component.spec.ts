import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { BookmarkSidebarModule } from './bookmark-sidebar/bookmark-sidebar.module';
import {
  MatButtonModule,
  MatIconModule,
  MatTreeModule
} from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BookmarkSidebarModule,
        MatButtonModule,
        MatIconModule,
        MatTreeModule,
        RouterTestingModule
      ],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
