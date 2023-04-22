import { Component, OnInit } from '@angular/core';
import { TrainingModel } from 'src/app/model/training.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-training',
  templateUrl: './update-training.component.html',
  styleUrls: ['./update-training.component.css'],
})
export class UpdateTrainingComponent implements OnInit {
  training!: TrainingModel;

  constructor(public adminService: AdminService) {}

  ngOnInit(): void {
    this.training = { ...this.adminService.getCurrentlyHandledTraining() };
  }
}
