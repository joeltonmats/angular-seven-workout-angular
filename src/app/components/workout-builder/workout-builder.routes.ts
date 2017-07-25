import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutBuilderComponent } from "./workout-builder.component";
import { ExerciseComponent } from './exercise/exercise.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { WorkoutGuard } from "app/components/workout-builder/workout/workout.guard";
import { ExerciseGuard } from "app/components/workout-builder/exercise/exercise.guard";

export const workoutBuilderRoutes: Routes = [
    {
        path: '',
        component: WorkoutBuilderComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'workouts' },
            { path: 'workouts/workout-not-found', component: WorkoutsComponent },
            { path: 'workouts', component: WorkoutsComponent },
            { path: 'workout/new', component: WorkoutComponent },
            { path: 'workout/:id', component: WorkoutComponent, canActivate: [WorkoutGuard] },
            { path: 'exercises', component: ExercisesComponent },
            { path: 'exercise/new', component: ExerciseComponent },
            { path: 'exercise/:id', component: ExerciseComponent, canActivate: [ExerciseGuard] }
        ]
    }
];

export const workoutBuilderRouting: ModuleWithProviders = RouterModule.forChild(workoutBuilderRoutes);