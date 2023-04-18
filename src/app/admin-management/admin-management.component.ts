import { Component, OnInit } from '@angular/core';
import { TrainingModel } from '../model/training.model';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.component.html',
  styleUrls: ['./admin-management.component.css'],
})
export class AdminManagementComponent implements OnInit {
  trainigs!: TrainingModel[];
  error: null | undefined;
  trainingIdToDelete : number ;

  constructor(private apiService: ApiService) {
    this.trainingIdToDelete = 0;
  }

  ngOnInit(): void {
  }

  //Ajouter une formation
  addTraining() {
    console.log();
  }
  //modifier une formation
  updateTraining() {
    console.log();
  }
  //Supprimer un formation
  deleteTraining(id: number) {
    this.apiService.deletetraining(id).subscribe({
      next: () => console.log("La formation a bien été supprimer"),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    });
  }
}
