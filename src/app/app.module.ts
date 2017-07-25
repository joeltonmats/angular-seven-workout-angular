import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';

import { WorkoutRunnerModule } from './components/workout-runner/workout-runner.module';
import { StartModule } from './components/start/start.module';
import { FinishModule } from './components/finish/finish.module';
import { ServicesModule } from './services/services.module';
import { WorkoutHistoryModule } from './components/workout-history/workout-history.module';
/*import { Callisto2Module } from 'callisto2';*/

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    WorkoutRunnerModule,
    StartModule,
    FinishModule,
    routing,
    ServicesModule,
    WorkoutHistoryModule,
    NgbModule.forRoot(),
    
    // Callisto2Module
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
