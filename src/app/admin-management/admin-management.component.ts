import { Component, OnInit } from '@angular/core';
import { TrainingModel } from '../model/training.model';

@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.component.html',
  styleUrls: ['./admin-management.component.css'],
})
export class AdminManagementComponent implements OnInit {
  trainigs!: TrainingModel[];

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
  deleteTraining() {
    console.log();
  }
}
