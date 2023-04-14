import { Component, OnInit } from '@angular/core';
import { BasketService } from '../services/basket.service';
import { CustomerModel } from '../model/customer.model';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit{
constructor(public basketService: BasketService) {}
ngOnInit(): void {
    
}

saveCustomer(customer:CustomerModel) {
  console.log(customer);
  
  this.basketService.saveCustomer(customer);
}

}
