import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './feature_modules/user/user.module';
import { DashBoardModule } from './feature_modules/dash-board/dash-board.module';
import { SharedModule } from './shared_module/shared.module';
import { MaterialModule } from './shared_module/material.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent, LoginComponent, RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    UserModule,
    DashBoardModule,
    SharedModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
