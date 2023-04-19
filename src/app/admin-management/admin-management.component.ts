import { Component, OnInit } from '@angular/core';
import { TrainingModel } from '../model/training.model';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.component.html',
  styleUrls: ['./admin-management.component.css'],
})
export class AdminManagementComponent implements OnInit {
  training!: TrainingModel;
  listTrainings: TrainingModel[] | undefined;
  error: null | undefined;
  trainingIdToDelete: number;

  constructor(private apiService: ApiService, private router: Router) {
    this.trainingIdToDelete = 0;
    this.training = new TrainingModel(-1, '', '', -1, -1);
  }

  ngOnInit(): void {
    this.apiService.getTrainings().subscribe({
      next: (data) => (this.listTrainings = data),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    });
  }

  //Ajouter une formation
  addTraining(training: TrainingModel) {
    this.apiService.getTraining(training.id).subscribe({
      next: () => {
        alert('Cet Id exicte déjà');
      },
      error: () => {
        this.apiService.postTraining(training).subscribe({
          next: (createdTraining) =>
            console.log('La formation a bien été créée', createdTraining),
          error: (err) => (this.error = err.message),
          complete: () => (this.error = null),
        });
      },
      complete: () => {},
    });
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

  selectIdToUpdate(id: number) {
    console.log(id);
  }

  //Supprimer un formation
  deleteTraining(id: number) {
    this.apiService.deletetraining(id).subscribe({
      next: () => console.log('La formation a bien été supprimer'),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    });
  }
}
