import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { BookCardComponent } from './book-card/book-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ControlPanelComponent,
    BookCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
