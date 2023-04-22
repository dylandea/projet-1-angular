import { Component } from '@angular/core';
import { TrainingModel } from 'src/app/model/training.model';
import { AdminService } from 'src/app/services/admin.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css'],
})
export class AddTrainingComponent {
  training!: TrainingModel;

  constructor(public adminService: AdminService) {
    this.training = new TrainingModel(uuidv4(), '', '', undefined, 1);
  }
}
