import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoComponent } from './components/auto/auto.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './components/home/home.component';
import { ProcessComponent } from './components/process/process.component';
import { SimulatorComponent } from './components/simulator/simulator.component';

const appRoutes : Routes = [
  {path: 'home', component : HomeComponent},
  {path: 'process', component : ProcessComponent},
  {path: 'auto', component : AutoComponent},
  {path: 'history', component : HistoryComponent},
  {path: 'simulator', component : SimulatorComponent},
  {path: '**', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
