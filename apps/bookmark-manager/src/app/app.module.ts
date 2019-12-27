import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BookmarkSidebarModule } from './bookmark-sidebar/bookmark-sidebar.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    BookmarkSidebarModule
  ],
  providers: []
})
export class AppModule {}
