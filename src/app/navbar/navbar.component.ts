import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {

  isAdmin : boolean | undefined = this.authenticationService.isAdmin();


constructor(private authenticationService: AuthenticationService) { }
 
ngOnChanges(changes: SimpleChanges): void {

  this.isAdmin =this.authenticationService.isAdmin();
  
  }

  ngOnInit(): void {
   
  }


}
