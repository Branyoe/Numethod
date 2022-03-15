import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LinearIntComponent } from './components/linear-int/linear-int.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KatexModule } from 'ng-katex';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LagrangeIntComponent } from './components/lagrange-int/lagrange-int.component';
import { NewtonIntComponent } from './components/newton-int/newton-int.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LinearIntComponent,
    NavBarComponent,
    LagrangeIntComponent,
    NewtonIntComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    KatexModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
