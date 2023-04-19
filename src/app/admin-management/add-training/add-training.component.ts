import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingModel } from 'src/app/model/training.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css'],
})
export class AddTrainingComponent {
  training!: TrainingModel;
  listTrainings: TrainingModel[] | undefined;
  error: null | undefined;
  trainingIdToDelete: number;

  constructor(private apiService: ApiService, private router: Router) {
    this.trainingIdToDelete = 0;
    this.training = new TrainingModel(-1, '', '', -1, -1);
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
}
