import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class Hero implements OnInit, OnDestroy {
  titles = [
    'Full-Stack Developer',
    'Spring Boot Expert',
    'Android Engineer',
    'SDET Practitioner',
    'Microservices Architect'
  ];
  currentTitle = '';
  currentIndex = 0;
  charIndex = 0;
  isDeleting = false;
  private timeout: any;

  orbitTechs = [
    { label: 'Java', icon: 'fab fa-java', angle: 0 },
    { label: 'Angular', icon: 'fab fa-angular', angle: 72 },
    { label: 'Android', icon: 'fab fa-android', angle: 144 },
    { label: 'Docker', icon: 'fab fa-docker', angle: 216 },
    { label: 'Git', icon: 'fab fa-git-alt', angle: 288 },
  ];

  ngOnInit() { this.typeWriter(); }
  ngOnDestroy() { clearTimeout(this.timeout); }

  typeWriter() {
    const full = this.titles[this.currentIndex];
    if (this.isDeleting) {
      this.currentTitle = full.substring(0, this.charIndex--);
    } else {
      this.currentTitle = full.substring(0, this.charIndex++);
    }
    let speed = this.isDeleting ? 60 : 100;
    if (!this.isDeleting && this.currentTitle === full) {
      speed = 2000; this.isDeleting = true;
    } else if (this.isDeleting && this.currentTitle === '') {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.titles.length;
    }
    this.timeout = setTimeout(() => this.typeWriter(), speed);
  }

  scrollToProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }

  downloadCV() {

    const link = document.createElement('a');
    link.href = 'Ahmed_Khalil_Oueslati_CV.pdf';
    link.download = 'Ahmed_Khalil_Oueslati_CV.pdf';
    link.click();
  }
}
