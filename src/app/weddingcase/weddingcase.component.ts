import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weddingcase',
  standalone: true,
  imports: [],
  templateUrl: './weddingcase.component.html',
  styleUrl: './weddingcase.component.css',
})
export class WeddingcaseComponent {
  constructor(private router: Router) {}
  onHome() {
    this.router.navigateByUrl('home');
  }
  onProject() {
    this.router.navigateByUrl('project');
  }
}
