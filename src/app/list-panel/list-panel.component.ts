import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { IExercise } from '../exercise/exercise.model';
import { ISession } from '../session/session.model';
import { ISet } from '../set/set.model';

@Component({
  selector: 'app-list-panel',
  templateUrl: './list-panel.component.html',
  styleUrls: ['./list-panel.component.css']
})
export class ListPanelComponent implements OnInit {

  exerciseItems: IExercise[];
  sessionItems: ISession[];
  setItems: ISet[];
  isExercise: boolean;
  isSet: boolean;
  isSession: boolean;
  isWorkout: boolean;

  constructor() { }
    @Input() class: string;
    @Input() items: Array<any>;
    @Output() exerciseEmitter: EventEmitter<number> = new EventEmitter<number>();
    ngOnInit() {
        if (this.class === 'exercise') {
          this.isExercise = true;
      }
        if (this.class === 'Set') {
          this.isSet = true;
        }
  }
      // reportID(){
      //   this.exerciseEmitter.emit(357);
      // }



    //   this.setItems = [{
    //     setId: 1,
    //     setName: 'Bench',
    //     setReps: 8,
    //     setWeight: 205
    //   },
    //   {
    //     setId: 2,
    //     setName: 'Incline Bench',
    //     setReps: 8,
    //     setWeight: 200
    //   }];
    // }
    // if (this.class === 'Workout') {
    //   this.isWorkout = true;
    //   this.sessionItems = [{
    //     id: 1,
    //     exerciseId: 2,
    //     exerciseName: 'Bench',
    //     exerciseWeight: 205,
    //     Sets: [{
    //       setId: 1,
    //       setName: 'Bench',
    //       setReps: 8,
    //       setWeight: 205
    //     },
    //     {
    //       setId: 2,
    //       setName: 'Bench',
    //       setReps: 8,
    //       setWeight: 200
    //     }]

    //   },
    //   {
    //     id: 2,
    //     exerciseId: 3,
    //     exerciseName: ' Decline Bench',
    //     exerciseWeight: 205,
    //     Sets: [{
    //       setId: 1,
    //       setName: 'Decline Bench',
    //       setReps: 8,
    //       setWeight: 205
    //     },
    //     {
    //       setId: 2,
    //       setName: 'Decline Bench',
    //       setReps: 8,
    //       setWeight: 200
    //     }]
    //   }
    // ];
    }
