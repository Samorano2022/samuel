import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
  OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allproject',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './allproject.component.html',
  styleUrl: './allproject.component.css'
})
export class AllprojectComponent implements OnInit {
  ngOnInit(){
    if (isPlatformBrowser(this.platformId)) {
    }
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  }
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router:Router){}
  onHome(){
    this.router.navigateByUrl('home');
  }
  onConnect(){
    this.router.navigateByUrl('about');
  }
  onExpertise(){
    this.router.navigateByUrl('expertise');
  }
  onProject(){
    this.router.navigateByUrl('project');
  }
  onResume(){
    this.router.navigateByUrl('resume');
  }
  onContact(){
    this.router.navigateByUrl('contact')
  }
  allProjects(){
    this.router.navigateByUrl('allprojects')
  }
}
