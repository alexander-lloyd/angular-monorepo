import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkSidebarComponent } from './bookmark-sidebar.component';
import {
  MatButtonModule,
  MatIconModule,
  MatTreeModule
} from '@angular/material';
import { FavouriteModel, FolderModel } from '../../models';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

const favouriteModel: FavouriteModel = {
  name: 'Google',
  url: 'http://google.com',
  tags: []
};

const favourites: FolderModel = {
  name: 'ABC',
  children: [favouriteModel]
};

describe('SidebarComponent', () => {
  let component: BookmarkSidebarComponent;
  let fixture: ComponentFixture<BookmarkSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookmarkSidebarComponent],
      imports: [MatButtonModule, MatIconModule, MatTreeModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkSidebarComponent);
    component = fixture.componentInstance;
    component.favourites$ = of([favourites]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render folders', () => {
    const treeNodes = fixture.debugElement.queryAll(By.css('mat-tree-node'));
    const textNodes = treeNodes.map((debugElement: DebugElement) =>
      debugElement.nativeElement.lastChild.trim()
    );

    expect(textNodes).toEqual([favouriteModel.name]);
  });
});
