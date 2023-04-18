import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrainingModel } from '../model/training.model';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getTrainings() {
    return this.http.get<TrainingModel[]>(environment.host + '/trainings');
  }

  public getTraining(id: number) {
    return this.http.get<TrainingModel>(environment.host + '/trainings/' + id);
  }
}
