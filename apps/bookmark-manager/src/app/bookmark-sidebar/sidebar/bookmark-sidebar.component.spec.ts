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

    // Get the folder names.
    const textNodes: Array<string> = treeNodes.map(
      (debugElement: DebugElement) => {
        const folderElements = debugElement.children;
        expect(folderElements.length).toBe(1);
        const folderButton: HTMLButtonElement = folderElements[0].nativeElement;

        return (
          (folderButton.nextSibling as HTMLElement).textContent || ''
        ).trim();
      }
    );

    const favouriteFolderNames = [favourites.name];

    expect(textNodes).toEqual(favouriteFolderNames);
  });

  it('should render folder children when folder is toggled', () => {
    const treeNodes = fixture.debugElement.queryAll(By.css('mat-tree-node'));

    const buttons = fixture.debugElement.queryAll(By.css('button'));
    buttons[0].nativeElement.click(); // Click the first element.

    const moreTreeNodes = fixture.debugElement.queryAll(
      By.css('mat-tree-node')
    );

    expect(moreTreeNodes.length).toBeGreaterThan(treeNodes.length);
  });
});
