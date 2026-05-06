import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
constructor(private router: Router) {}
  onHome() {
    this.router.navigateByUrl('home');
  } 
}
