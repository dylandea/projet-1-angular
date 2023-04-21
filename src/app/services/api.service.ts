import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrainingModel } from '../model/training.model';
import { environment } from '../environment';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getTrainings() {
    return this.http.get<TrainingModel[]>(environment.host + '/trainings');
  }

  public getUsers() {
    return this.http.get<UserModel[]>(environment.host + '/users');
  }


  public getTraining(id: number) {
    return this.http.get<TrainingModel>(environment.host + '/trainings/' + id);
  }

  postTraining(training: TrainingModel) {
    return this.http.post<TrainingModel>(environment.host + '/trainings', {
      id: training.id,
      name: training.name,
      description: training.description,
      price: training.price,
      quantity: 1,
    });
  }
  deletetraining(id: number) {
    return this.http.delete<TrainingModel>(
      environment.host + '/trainings/' + id
    );
  }

  putTraining(training: TrainingModel) {
    return this.http.put<TrainingModel>(
      environment.host + '/trainings/' + training.id,
      {
        id: training.id,
        name: training.name,
        description: training.description,
        price: training.price,
        quantity: 1,
      }
    );
  }
}
