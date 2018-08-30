import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css']
})
export class SetComponent implements OnInit {
  className: 'Set';
  setForm: FormGroup;
  setId: number;
  setName: string;
  setReps: number;
  setExID: number;
  isSet = true;

  constructor() { }

  ngOnInit() {
    let setName = new FormControl();
    let setReps = new FormControl();
    let setWeight = new FormControl();
    let setExID: number;
    this.setForm = new FormGroup({
      setName: setName,
      setReps: setReps,
      setWeight: setWeight
    });
  }


}
