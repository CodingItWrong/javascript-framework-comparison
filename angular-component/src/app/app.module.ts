import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { MessageReverserComponent } from './message-reverser.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MessageReverserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
