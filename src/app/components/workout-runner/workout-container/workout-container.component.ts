import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { WorkoutAudioComponent } from '../workout-audio/workout-audio.component';
import { WorkoutRunnerComponent } from '../workout-runner.component';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
    selector: 'workout-container',
    templateUrl: './workout-container.html'
})
export class WorkoutContainerCompnent implements OnInit, OnDestroy {

    private workoutName: string;
    private sub: any;

    constructor(private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.workoutName = params['id'];
            console.log("1)",this.workoutName);
        })
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
