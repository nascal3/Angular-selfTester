import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VoterComponent } from './voter/voter.component';
import { TodosComponent } from './todos/todos.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UsersDetailsComponent } from './users-details/users-details.component';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    TodosComponent,
    HomeComponent,
    UsersComponent,
    UsersDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
