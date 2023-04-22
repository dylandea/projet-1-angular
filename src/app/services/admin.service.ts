import { Injectable, OnInit } from '@angular/core';
import { TrainingModel } from '../model/training.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService implements OnInit {
  currentlyHandledTraining!: TrainingModel;
  listTrainings: TrainingModel[] | undefined;
  error: null | undefined;

  constructor(private apiService: ApiService) {
    this.fetchData();
  }

  fetchData() {
    this.apiService.getTrainings().subscribe({
      next: (data) => (this.listTrainings = data.reverse()),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    });
  }

  ngOnInit(): void {}

  getListTrainings() {
    console.log('getter', this.listTrainings);
    return this.listTrainings;
  }

  getCurrentlyHandledTraining() {
    return this.currentlyHandledTraining;
  }

  receiveTraining(training: TrainingModel) {
    this.currentlyHandledTraining = training;
  }

  deleteTraining(id: string) {
    this.apiService.deletetraining(id).subscribe({
      next: () => this.fetchData(),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    });
  }

  updateTraining(training: TrainingModel) {
    this.apiService.putTraining(training).subscribe({
      next: (updatedTraining) => this.fetchData(),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    });
  }

  addTraining(training: TrainingModel) {
    this.apiService.postTraining(training).subscribe({
      next: (createdTraining) => this.fetchData(),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    });
  }
}
