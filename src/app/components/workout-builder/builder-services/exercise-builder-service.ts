import { Injectable } from "@angular/core";
import { Exercise } from "app/services/model";
import { WorkoutService } from "app/services/workout.service";

@Injectable()
export class ExerciseBuilderService {
    buildingExercise: Exercise;
    newExercise: boolean;

    constructor(private workoutService: WorkoutService) { }

    startBuildingNew() {
        this.buildingExercise = new Exercise("", "", "", "");
        this.newExercise = true;
        return this.buildingExercise;
    }

    startBuildingExisting(name: string) {
        this.newExercise = false;
        return this.workoutService.getExercise(name)
    }

    save() {
        let exercise = this.newExercise ?
            this.workoutService.addExercise(this.buildingExercise) :
            this.workoutService.updateExercise(this.buildingExercise);
        this.newExercise = false;
        return exercise;
    }

    delete() {
        this.workoutService.deleteExercise(this.buildingExercise.name);
    }

    addVideo() {
        if (!this.buildingExercise.videos) {
            this.buildingExercise.videos = [];
        }
        this.buildingExercise.videos.push("");
    }

    canDeleteExercise() {
        return !this.newExercise;
    }

    deleteVideo(index: number) {
        if (index >= 0) this.buildingExercise.videos.splice(index, 1);
    }
}