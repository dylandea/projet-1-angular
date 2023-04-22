import { Component, OnInit } from '@angular/core';
import { TrainingModel } from '../model/training.model';
import { BasketService } from '../services/basket.service';
import { compileNgModule } from '@angular/compiler';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css'],
})
export class TrainingsComponent implements OnInit {
  listTrainings: TrainingModel[] | undefined;
  error: null | undefined;
  constructor(
    private basketService: BasketService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.apiService.getTrainings().subscribe({
      next: (data) => (this.listTrainings = data.reverse()),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    });
  }

  addToBasket(training: TrainingModel) {
    this.basketService.addToBasket(training);
  }

  updateTrainingQty(training: TrainingModel, newQty: number) {
    if (newQty >= 1) {
      training.quantity = newQty;
    }
  }
}
