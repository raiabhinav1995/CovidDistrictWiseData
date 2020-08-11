import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StateComponent } from './state/state.component';
import { StatesComponent } from './states/states.component';
import { DistrictComponent } from './district/district.component';
import { PieChartComponent } from './piechart/piechart.component';
import {ChartsModule} from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    StateComponent,
    StatesComponent,
    DistrictComponent,
    PieChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
