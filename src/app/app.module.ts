import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListPanelComponent } from './list-panel/list-panel.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { WorkoutComponent } from './workout/workout.component';
import { SessionComponent } from './session/session.component';
import { appRoutes} from './routes';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SetComponent } from './set/set.component';
import { ExerciseService } from './exercise.service';
import { HttpClientModule } from '@angular/common/http';
import { ExerciseResolverService } from './exercise/exercise-resolver.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListPanelComponent,
    ExerciseComponent,
    WorkoutComponent,
    SessionComponent,
    SetComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ExerciseService,
    ExerciseResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
