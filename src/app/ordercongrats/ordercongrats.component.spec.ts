import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdercongratsComponent } from './ordercongrats.component';

describe('OrdercongratsComponent', () => {
  let component: OrdercongratsComponent;
  let fixture: ComponentFixture<OrdercongratsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdercongratsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdercongratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
