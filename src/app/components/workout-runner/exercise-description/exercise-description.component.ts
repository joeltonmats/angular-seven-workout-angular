import { Component, Input } from '@angular/core';

@Component({
    selector: 'exercise-description',
    templateUrl: './exercise-description.html',
})
export class ExerciseDescriptionComponent {
    @Input() description: string;
    @Input() steps: string;
}