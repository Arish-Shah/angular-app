import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users.component';
import { EditUserComponent } from './components/edit-user.component';

@NgModule({
  declarations: [AppComponent, UsersComponent, EditUserComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
