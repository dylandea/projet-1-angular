import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingModel } from 'src/app/model/training.model';
import { ApiService } from 'src/app/services/api.service';
import { Output, EventEmitter } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-table-trainings',
  templateUrl: './table-trainings.component.html',
  styleUrls: ['./table-trainings.component.css'],
})
export class TableTrainingsComponent {
  training!: TrainingModel;
  listTrainings: TrainingModel[] | undefined;
  error: null | undefined;

  @Output() newItemEvent = new EventEmitter<TrainingModel>();

  constructor(
    private apiService: ApiService,
    private router: Router,
    public adminService: AdminService
  ) {}

  //Supprimer un formation
  deleteTraining(id: string) {
    this.apiService.deletetraining(id).subscribe({
      next: () => console.log('La formation a bien été supprimer'),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    });
    this.adminService.fetchData();
  }
}
