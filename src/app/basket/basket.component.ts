import { Component } from '@angular/core';
import { TrainingModel } from '../model/training.model';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  listBasket : TrainingModel[] | undefined;
  constructor(private basketService: BasketService) {
    //this.listBasket = this.basketService.basket
  }
  
     ngOnInit(): void {
      this.listBasket = this.basketService.basket
    } 

    
    

    removeFromBasket(training: TrainingModel) {
      this.basketService.removeFromBasket(training)
    }

    updateQuantity(training: TrainingModel, newQty:number) {
      
      this.basketService.updateQuantity(training, newQty)
    }

}
