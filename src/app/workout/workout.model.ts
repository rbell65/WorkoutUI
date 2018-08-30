import { Time } from '@angular/common';
import { ISession } from '../session/session.model';

export interface IWorkout {
    id: number;
    date: Date;
    duration: Time;
    sessions: ISession[];
}
