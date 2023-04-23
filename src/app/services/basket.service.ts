import { Injectable, OnInit } from '@angular/core';
import { TrainingModel } from '../model/training.model';
import { RouteConfigLoadEnd } from '@angular/router';
import { CustomerModel } from '../model/customer.model';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  basket: TrainingModel[];
  private customer: CustomerModel;

  constructor(private localStore: LocalService) {
    this.basket = JSON.parse(localStorage.getItem('basket') || '[]');
    this.customer = JSON.parse(
      this.localStore.getData('customer') || '{}'
    ) /*  ||
      new CustomerModel('', '', '', '', '') */;
  }

  addToBasket(training: TrainingModel) {
    const itemBasket: TrainingModel | undefined = this.basket?.find(
      (x) => x.id === training.id
    );
    if (!itemBasket) {
      this.basket?.push({ ...training });
    } else {
      itemBasket.quantity += 1;
    }

    localStorage.setItem('basket', JSON.stringify(this.basket));
  }

  removeFromBasket(training: TrainingModel) {
    const itemBasket: TrainingModel | undefined = this.basket?.find(
      (x) => x.id === training.id
    );

    const index: number =
      this.basket?.findIndex((x) => x.id === training.id) ?? -1;

    if (index !== -1) this.basket.splice(index, 1);

    localStorage.setItem('basket', JSON.stringify(this.basket));
  }

  updateQuantity(training: TrainingModel, newQty: number) {
    const itemBasket: TrainingModel | undefined = this.basket?.find(
      (x) => x.id === training.id
    );
    if (newQty >= 1) {
      itemBasket!.quantity = newQty;
      localStorage.setItem('basket', JSON.stringify(this.basket));
    }
  }

  getCustomer(): CustomerModel {
    return this.customer;
  }

  saveCustomer(customer: CustomerModel) {
    this.customer = customer;
    this.localStore.saveData('customer', JSON.stringify(customer));
    localStorage.removeItem('basket');
    this.basket = [];
  }
}
