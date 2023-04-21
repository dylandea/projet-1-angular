import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingModel } from 'src/app/model/training.model';
import { AdminService } from 'src/app/services/admin.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update-training',
  templateUrl: './update-training.component.html',
  styleUrls: ['./update-training.component.css'],
})
export class UpdateTrainingComponent {
  training!: TrainingModel;
  listTrainings: TrainingModel[] | undefined;
  error: null | undefined;
  trainingIdToDelete: number;

  constructor(
    private apiService: ApiService,
    private router: Router,
    public adminService: AdminService
  ) {
    this.trainingIdToDelete = 0;
  }
  //modifier une formation
  updateTraining(training: TrainingModel) {
    this.apiService.putTraining(training).subscribe({
      next: (updatedTraining) =>
        console.log('La formation a bien été modifiée', updatedTraining),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    });
  }
}
