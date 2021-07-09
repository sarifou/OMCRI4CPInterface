import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }