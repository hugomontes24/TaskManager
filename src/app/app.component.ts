import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TaskManager';
  
  constructor(
      private modalService: NgbModal,
      protected loginService: LoginService
    ) { }

  public open(modal: any): void { // bootstrap
    this.modalService.open(modal);
  }

}
