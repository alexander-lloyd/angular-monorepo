import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatTreeModule
} from '@angular/material';

import { BookmarkSidebarComponent } from './sidebar/bookmark-sidebar.component';

@NgModule({
  declarations: [BookmarkSidebarComponent],
  exports: [BookmarkSidebarComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTreeModule]
})
export class BookmarkSidebarModule {}
