import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ExerciseService } from '../exercise.service';
import { IExercise } from './exercise.model';
import { finalize } from 'rxjs/operators/finalize';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  exercise: IExercise;
  className: 'Exercise';
  exerciseData: Array<any>;
  exerciseForm: FormGroup;
  exerciseID: number;
  exerciseName: string;
  exerciseType: string;
  exerciseMax: number;
  isExercise = true;
  isUpdate = false;
  isLoading = true;

  @Input() items: Array<any>;

  constructor(private exerciseService: ExerciseService, private route: ActivatedRoute,
    private router: Router) {
    this.exerciseService.get().subscribe((data: any) => this.exerciseData = data );
  }

  ngOnInit() {
      this.route.data.forEach((data) => {
        this.exerciseData = data['exercise']; });

    let exerciseID = new FormControl();
    let exerciseName = new FormControl();
    let exerciseType = new FormControl();
    let exerciseMax = new FormControl();
    this.exerciseForm = new FormGroup({
      exerciseID: exerciseID,
      exerciseName: exerciseName,
      exerciseType: exerciseType,
      exerciseMax: exerciseMax
    });

    this.isExercise = true;
    this.items = this.exerciseData;
    this.exerciseForm.setValue(this.exerciseData);
    if (this.exerciseForm) {
      this.isUpdate = true;
    } else {
      this.isUpdate = false;
    }
    console.log(this.isUpdate);
  }

  saveExercise(formValues) {
     if (this.isUpdate === true) {
       try {
        this.exerciseService.update(formValues).subscribe(
          ex =>  this.exerciseData.splice(this.exerciseData.indexOf(formValues.exerciseID), 1, formValues)
        );
       } catch (e) {
        console.error(e);
       }
       finally {
        this.isLoading = false;
       }

     }
     if (this.isUpdate === false ) {
    this.exerciseData.push(formValues);
    this.exerciseService.add(formValues).subscribe(
      ex => this.exerciseData.push(formValues));
    }

    if (this.isLoading === false){
      this.router.navigate(['exercise']);
    }
  }
  // TODO: Implement Delete
  // deleteExercise() {
  //   this.exerciseService.remove(formValues).subscribe(
  //     ex => this.exerciseData.splice()
  //   );
  // }
}

