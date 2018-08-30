import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ExerciseService } from '../exercise.service';

@Injectable()
export class ExerciseResolverService implements Resolve<any> {
    constructor(private exerciseService: ExerciseService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.exerciseService.get(route.params['id']);
    }
}
