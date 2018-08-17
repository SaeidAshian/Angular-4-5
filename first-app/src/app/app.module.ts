import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import{TestComponent} from './test.component';
import { HomeComponent } from './home/home.component';
import { ChangeBackGroundComponent } from './change-back-ground/change-back-ground.component';
import { StarComponent } from './star/star.component';
import { CommentComponent } from './comment/comment.component';
import { HeaderComponent } from './header/header.component';
import { PenguinComponent } from './penguin/penguin.component'

@NgModule({
  declarations: [
    AppComponent,TestComponent, HomeComponent, ChangeBackGroundComponent, StarComponent, CommentComponent, HeaderComponent, PenguinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
