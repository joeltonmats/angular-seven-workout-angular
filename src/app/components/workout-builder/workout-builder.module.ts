import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "app/components/shared/shared.module";
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';

import { ExerciseComponent } from "./exercise/exercise.component";
import { ExercisesComponent } from "./exercises/exercises.component";
import { LeftNavExercisesComponent } from "./navigation/left-nav-exercises.component";
import { LeftNavMainComponent } from "./navigation/left-nav-main.component";
import { SubNavComponent } from './navigation/sub-nav.component';
import { WorkoutBuilderComponent } from './workout-builder.component';
import { WorkoutComponent } from "./workout/workout.component";
import { WorkoutsComponent } from "./workouts/workouts.component";
import { WorkoutGuard } from "app/components/workout-builder/workout/workout.guard";
import { WorkoutBuilderService } from "app/components/workout-builder/builder-services/workout-builder-services";

import { workoutBuilderRouting } from './workout-builder.routes';
import { ExerciseBuilderService } from "app/components/workout-builder/builder-services/exercise-builder-service";
import { ExerciseGuard } from "app/components/workout-builder/exercise/exercise.guard";
import { RemoteValidatorDirective } from "app/components/workout-builder/shared/remote-validator.directive";
import { BusyIndicatorDirective } from "app/components/workout-builder/shared/busyindicator. directive";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule ,
        SharedModule,
        workoutBuilderRouting
    ],
    declarations: [
        WorkoutBuilderComponent,
        WorkoutComponent,
        WorkoutsComponent,
        ExerciseComponent,
        ExercisesComponent,
        SubNavComponent,
        LeftNavExercisesComponent,
        LeftNavMainComponent,
        RemoteValidatorDirective,
        BusyIndicatorDirective
    ],
    providers: [
        ExerciseBuilderService,
        ExerciseGuard,
        WorkoutBuilderService,
        WorkoutGuard,
    ]
})
export class WorkoutBuilderModule { }