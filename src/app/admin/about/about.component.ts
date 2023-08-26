import { Component } from '@angular/core';
import { faCoffee,fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  faCoffee = faCoffee;

}
