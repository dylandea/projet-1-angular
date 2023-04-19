import { Component, OnInit } from '@angular/core';
import { TrainingModel } from '../model/training.model';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.component.html',
  styleUrls: ['./admin-management.component.css'],
})
export class AdminManagementComponent {
  training!: TrainingModel;
  listTrainings: TrainingModel[] | undefined;
  error: null | undefined;
  trainingIdToDelete: number;

  constructor(private apiService: ApiService, private router: Router) {
    this.trainingIdToDelete = 0;
    this.training = new TrainingModel(-1, '', '', -1, -1);
  }

  sendToUpdate(training: TrainingModel) {
    console.log("l'info est bien passé dans le parent youpi", training);
    this.training = training;
  }
}
