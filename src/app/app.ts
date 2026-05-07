import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Education } from './components/education/education';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Navbar,
    Hero,
    Skills,
    Experience,
    Projects,
    Education,
    Contact
  ],
  templateUrl: './app.html'
})
export class App implements OnInit {
  cursorX = 0; cursorY = 0;
  followerX = 0; followerY = 0;

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.cursorX = e.clientX - 6;
    this.cursorY = e.clientY - 6;
    setTimeout(() => {
      this.followerX = e.clientX - 20;
      this.followerY = e.clientY - 20;
    }, 80);
  }

  ngOnInit() {}
}
