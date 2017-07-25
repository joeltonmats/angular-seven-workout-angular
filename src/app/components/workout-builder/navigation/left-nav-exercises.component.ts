import { Component, OnInit } from '@angular/core';
import { Exercise, ExercisePlan } from "app/services/model";
import { WorkoutService } from "app/services/workout.service";
import { WorkoutBuilderService } from "app/components/workout-builder/builder-services/workout-builder-services";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'left-nav-exercises',
    templateUrl: './left-nav-exercises.component.html'
})
export class LeftNavExercisesComponent implements OnInit {

    exerciseList: Observable<Exercise[]>;

    constructor(
        public workoutService: WorkoutService,
        public workoutBuilderService: WorkoutBuilderService) { }

    ngOnInit() {
        this.exerciseList = this.workoutService.getExercises();
    }

    addExercise(exercise: Exercise) {
        this.workoutBuilderService.addExercise(new ExercisePlan(exercise, 30));
    }
}