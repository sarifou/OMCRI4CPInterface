import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { ProcessComponent } from './components/process/process.component';
import { AutoComponent } from './components/auto/auto.component';
import { ConsoleComponent } from './components/console/console.component';
import { HeaderComponent } from './components/header/header.component';
import { SimulatorComponent } from './components/simulator/simulator.component';
import { HistoryComponent } from './components/history/history.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ProcessComponent,
    AutoComponent,
    ConsoleComponent,
    HeaderComponent,
    SimulatorComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    NgxChartsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
