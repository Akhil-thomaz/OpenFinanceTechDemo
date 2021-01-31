import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponentComponent } from './components/header-component/header-component/header-component.component';

import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { BodyComponentComponent } from './components/header-component/body-component/body-component.component';
import { HomeComponentComponent } from './components/header-component/home-component/home-component.component';
import { DetailsComponentComponent } from './components/header-component/details-component/details-component.component'

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    BodyComponentComponent,
    HomeComponentComponent,
    DetailsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
