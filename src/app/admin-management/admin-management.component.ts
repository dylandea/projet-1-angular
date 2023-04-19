import { Component, OnInit } from '@angular/core';
import { TrainingModel } from '../model/training.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.component.html',
  styleUrls: ['./admin-management.component.css'],
})
export class AdminManagementComponent implements OnInit {
<<<<<<< HEAD
  training!: TrainingModel;
=======
  training! : TrainingModel;
  listTrainings: TrainingModel[] | undefined;
>>>>>>> 0a7e21eb4004b0a05eb81fc890f229dfd1c6e0ce
  error: null | undefined;
  trainingIdToDelete: number;

  constructor(private apiService: ApiService) {
    this.trainingIdToDelete = 0;
    this.training = new TrainingModel(-1, '', '', -1, -1);
  }

<<<<<<< HEAD
  ngOnInit(): void {}
=======
  ngOnInit(): void {
    this.apiService.getTrainings().subscribe({
      next: (data) => (this.listTrainings = data),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    });
  }
>>>>>>> 0a7e21eb4004b0a05eb81fc890f229dfd1c6e0ce

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
<<<<<<< HEAD
  updateTraining(training: TrainingModel) {
    this.apiService.putTraining(training).subscribe({
      next: (updatedTraining) =>
        console.log('La formation a bien été modifiée', updatedTraining),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    });
=======
  selectIdToUpdate(id : number){
    console.log(id);
  }
  updateTraining(training : TrainingModel) {
    this.apiService.updateTraining(training).subscribe({
      next: () => console.log("La formation a bien été mise à jour"),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    })
>>>>>>> 0a7e21eb4004b0a05eb81fc890f229dfd1c6e0ce
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
