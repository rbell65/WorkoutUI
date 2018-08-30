import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ISession } from '../session/session.model';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  workoutDate: Date;
  workoutDuration: number;
  workoutForm: FormGroup;
  workoutSessions: ISession[];

  constructor() { }

  ngOnInit() {
    let workoutDate = new FormControl();
    let workoutDuration = new FormControl();
    this.workoutForm = new FormGroup({
      workoutDate: workoutDate,
      workoutDuration: workoutDuration
    });
  }

  addExercise(formValues) {
    console.log('Add');
  }

  saveWorkout(formValues) {
    console.log(formValues);
    this.workoutDate = formValues.workoutDate;
    this.workoutDuration = formValues.workoutDuration;
  }

}
