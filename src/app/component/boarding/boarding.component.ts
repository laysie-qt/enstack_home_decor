import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-boarding',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './boarding.component.html',
  styleUrl: './boarding.component.scss'
})
export class BoardingComponent {
  constructor (private router: Router) {}

  getStarted() {
    this.router.navigate(['/login']);
  }

}
