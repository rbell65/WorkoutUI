import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { IExercise } from './exercise/exercise.model';
import { Observable } from 'rxjs';

const url = 'http://localhost:11432/api/exercise';
@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private headers: HttpHeaders;
  private accessPointUrl: string = url;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'});
  }

  public get(exerciseID?) {
    if (exerciseID) {
      return this.http.get(this.accessPointUrl + '/' + exerciseID, {headers: this.headers});
    } else {
      return this.http.get(this.accessPointUrl, {headers: this.headers});
    }
  }

  public add(payload) {
    return this.http.post(this.accessPointUrl, payload, {headers: this.headers});
  }

  public remove(payload) {
    return this.http.delete(this.accessPointUrl + '/' + payload.exerciseID, {headers: this.headers});
  }

  public update(payload) {
    console.log(payload);
    return this.http.put(this.accessPointUrl + '/' + payload.exerciseID, payload, {headers: this.headers});
  }
}

