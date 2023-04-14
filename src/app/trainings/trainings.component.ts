import { Component, OnInit } from '@angular/core';
import { TrainingModel } from '../model/training.model';
import { BasketService } from '../services/basket.service';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css'],
})
export class TrainingsComponent implements OnInit {
  listTrainings: TrainingModel[] | undefined;
  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.listTrainings = [
      {
        id: 1,
        name: 'Java',
        description: 'Formation Java SE 8 sur 5 jours',
        price: 1500,
        quantity: 1,
      },
      {
        id: 2,
        name: 'DotNet',
        description: 'Formation DotNet en 3 jours',
        price: 1000,
        quantity: 1,
      },
      {
        id: 3,
        name: 'Python',
        description: 'Formation Python/Django 5 jours',
        price: 1500,
        quantity: 1,
      },
    ];
  }

  addToBasket(training: TrainingModel) {
    this.basketService.addToBasket(training);
  }

  updateTrainingQty(training: TrainingModel, newQty:number) {
    if (newQty>=1) {
      training.quantity = newQty;
    }
    
  }
}
