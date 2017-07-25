import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router/router";
import { Exercise } from "app/services/model";
import { WorkoutService } from "app/services/workout.service";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ExerciseGuard implements CanActivate {
    exercise: Exercise;

    constructor(
        private workoutService: WorkoutService,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {
        let exerciseName = route.params['id'];
        return this.workoutService.getExercise(exerciseName)
            .take(1)
            .map(exercise => !!exercise)
            .do(exerciseExists => {
                if (!exerciseExists) this.router.navigate(['/builder/exercises']);
            })
            .catch(error => {
                if (error.status === 404) {
                    this.router.navigate(['/builder/exercises']);
                    return Observable.of(false)
                } else {
                    return Observable.throw(error);
                }
            }
            )
    }
}