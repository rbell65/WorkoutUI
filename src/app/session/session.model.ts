import { ISet } from '../set/set.model';

export interface ISession {
    id: number;
    exerciseId: number;
    exerciseName: string;
    exerciseWeight: number;
    Sets: ISet[];
}
