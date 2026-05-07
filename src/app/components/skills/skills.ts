import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class Skills {
  skillGroups = [
    {
      category: 'Back-End',
      icon: 'fas fa-server',
      color: '#10b981',
      skills: [
        { name: 'Spring Boot', level: 95, icon: 'fas fa-leaf' },
        { name: 'Spring Security / JWT', level: 90, icon: 'fas fa-shield-alt' },
        { name: 'Microservices', level: 85, icon: 'fas fa-cubes' },
        { name: 'REST API / GraphQL', level: 90, icon: 'fas fa-network-wired' },
        { name: 'Hibernate / JPA', level: 85, icon: 'fas fa-database' },
      ]
    },
    {
      category: 'Android',
      icon: 'fab fa-android',
      color: '#00d4ff',
      skills: [
        { name: 'Kotlin', level: 92, icon: 'fas fa-code' },
        { name: 'Jetpack Compose', level: 85, icon: 'fas fa-mobile-alt' },
        { name: 'MVVM / Clean Arch.', level: 88, icon: 'fas fa-layer-group' },
        { name: 'Firebase', level: 85, icon: 'fas fa-fire' },
        { name: 'Coroutines / Room DB', level: 80, icon: 'fas fa-cog' },
      ]
    },
    {
      category: 'Front-End',
      icon: 'fab fa-angular',
      color: '#f43f5e',
      skills: [
        { name: 'Angular', level: 88, icon: 'fab fa-angular' },
        { name: 'TypeScript', level: 85, icon: 'fas fa-code' },
        { name: 'HTML5 / CSS3', level: 90, icon: 'fab fa-html5' },
        { name: 'Tailwind CSS', level: 80, icon: 'fas fa-palette' },
      ]
    },
    {
      category: 'Testing / SDET',
      icon: 'fas fa-vial',
      color: '#7c3aed',
      skills: [
        { name: 'JUnit 5 / Mockito', level: 90, icon: 'fas fa-check-circle' },
        { name: 'Selenium WebDriver', level: 70, icon: 'fas fa-robot' },
        { name: 'Postman / API Testing', level: 85, icon: 'fas fa-paper-plane' },
        { name: 'Playwright', level: 55, icon: 'fas fa-play' },
        { name: 'TDD', level: 82, icon: 'fas fa-code-branch' },
      ]
    },
    {
      category: 'DevOps & Tools',
      icon: 'fab fa-docker',
      color: '#f59e0b',
      skills: [
        { name: 'Docker', level: 80, icon: 'fab fa-docker' },
        { name: 'Jenkins / CI-CD', level: 78, icon: 'fas fa-sync-alt' },
        { name: 'Git / GitHub Actions', level: 90, icon: 'fab fa-git-alt' },
        { name: 'Agile / Scrum', level: 88, icon: 'fas fa-users' },
      ]
    },
    {
      category: 'Databases',
      icon: 'fas fa-database',
      color: '#06b6d4',
      skills: [
        { name: 'MySQL', level: 85, icon: 'fas fa-table' },
        { name: 'Oracle DB', level: 80, icon: 'fas fa-database' },
        { name: 'Room DB', level: 82, icon: 'fas fa-hdd' },
      ]
    }
  ];

  techStack = [
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'Kotlin', icon: 'fas fa-code' },
    { name: 'TypeScript', icon: 'fas fa-code' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'PHP', icon: 'fab fa-php' },
    { name: 'Spring Boot', icon: 'fas fa-leaf' },
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'Android', icon: 'fab fa-android' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'Firebase', icon: 'fas fa-fire' },
    { name: 'Linux', icon: 'fab fa-linux' },
  ];
}
