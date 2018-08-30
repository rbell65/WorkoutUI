import { Routes} from '@angular/router';
import { ListPanelComponent } from './list-panel/list-panel.component';
import { WorkoutComponent } from './workout/workout.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { SetComponent } from './set/set.component';
import { SessionComponent } from './session/session.component';
import { ExerciseResolverService } from './exercise/exercise-resolver.service';

export const appRoutes: Routes = [
    {path: 'list', component: ListPanelComponent},
    {path: 'workout', component: WorkoutComponent},
    {path: 'exercise', component: ExerciseComponent},
    {path: 'exercise/:id', component: ExerciseComponent, resolve: {exercise: ExerciseResolverService}},
    {path: 'set', component: SetComponent},
    {path: 'session', component: SessionComponent}
];
