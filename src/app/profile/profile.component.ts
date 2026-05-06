import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExpertComponent } from '../expert/expert.component';
import { NgxShineBorderComponent } from '@omnedia/ngx-shine-border';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ExpertComponent, NgxShineBorderComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private router: Router) {}
  onHome() {
    this.router.navigateByUrl('home');
  }
  onConnect() {
    this.router.navigateByUrl('about');
  }
  onExpertise() {
    this.router.navigateByUrl('expertise');
  } 
  onProject() {
    this.router.navigateByUrl('project');
  } 
  onResume() {
    this.router.navigateByUrl('resume');
}
onContact(){
  this.router.navigateByUrl('contact')
}
}