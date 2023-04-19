import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingModel } from 'src/app/model/training.model';
import { ApiService } from 'src/app/services/api.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-trainings',
  templateUrl: './table-trainings.component.html',
  styleUrls: ['./table-trainings.component.css'],
})
export class TableTrainingsComponent {
  training!: TrainingModel;
  listTrainings: TrainingModel[] | undefined;
  error: null | undefined;
  trainingIdToDelete: number;

  @Output() newItemEvent = new EventEmitter<TrainingModel>();

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

  moveToUpdate(training: TrainingModel) {
    this.newItemEvent.emit(training);
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
