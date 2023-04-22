import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-table-trainings',
  templateUrl: './table-trainings.component.html',
  styleUrls: ['./table-trainings.component.css'],
})
export class TableTrainingsComponent {
  constructor(public adminService: AdminService) {}
}
