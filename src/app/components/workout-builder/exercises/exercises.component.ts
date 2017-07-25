import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Exercise } from "app/services/model";
import { WorkoutService } from "app/services/workout.service";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'exercises',
    templateUrl: './exercises.component.html'
})
export class ExercisesComponent implements OnInit {
    public exerciseList: Observable<Exercise[]>;
    errorMessage: any;

    constructor(
        private router: Router,
        private workoutService: WorkoutService) { }

    ngOnInit() {
        this.exerciseList = this.workoutService.getExercises();
    }
    onSelect(exercise: Exercise) {
        this.router.navigate(['./builder/exercise', exercise.name]);
    }
}
