import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import{TestComponent} from './test.component';
import { HomeComponent } from './home/home.component';
import { ChangeBackGroundComponent } from './change-back-ground/change-back-ground.component'

@NgModule({
  declarations: [
    AppComponent,TestComponent, HomeComponent, ChangeBackGroundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
