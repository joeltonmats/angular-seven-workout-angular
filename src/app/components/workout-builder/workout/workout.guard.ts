import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { WorkoutPlan } from "app/services/model";
import { WorkoutService } from "app/services/workout.service";
import { Observable } from "rxjs/Rx";

@Injectable()
export class WorkoutGuard implements CanActivate {
    workout: WorkoutPlan;

    constructor(
        public workoutService: WorkoutService,
        public router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        let workoutName = route.params['id'];
        return this.workoutService.getWorkout(workoutName)
            .take(1)
            .map(workout => !!workout)
            .do(workoutExists => {
                if (!workoutExists) this.router.navigate(['/builder/workouts']);
            })
            .catch(error => {
                if (error.status === 404) {
                    this.router.navigate(['/builder/workouts']);
                    return Observable.of(false)
                } else {
                    return Observable.throw(error);
                }
            }
            )
    }
}