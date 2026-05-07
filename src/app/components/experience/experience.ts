import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss']
})
export class Experience {
  experiences = [
    {
      company: 'Personal Project',
      role: 'Full-Stack Developer',
      period: 'Jan 2026 – Present',
      location: 'Portugal',
      type: 'Self-initiated',
      color: '#00d4ff',
      icon: 'fas fa-code',
      bullets: [
        'Designing end-to-end banking platform: Spring Boot backend, Angular SPA, Android mobile app',
        'JWT authentication, RBAC, secure transactions, real-time data synchronisation',
        'Selenium WebDriver + TestNG automation suite, JUnit 5 + Mockito unit tests',
        'CI/CD pipeline with GitHub Actions, Docker containerisation'
      ],
      tags: ['Java', 'Spring Boot', 'Angular', 'Android', 'JWT', 'Selenium', 'Docker']
    },
    {
      company: 'Freelance',
      role: 'Full-Stack & Mobile Developer',
      period: 'Jul 2025 – Dec 2025',
      location: 'Remote',
      type: 'Independent',
      color: '#10b981',
      icon: 'fas fa-laptop-code',
      bullets: [
        'PadariaApp: Offline-first Android app (Java) + TensorFlow Lite SVM model for pastry recognition',
        'YEV App: Kotlin + Jetpack Compose EV management app, OpenChargeMap API, Stripe payment simulation',
        'Full JUnit 5 test suites with >90% unit coverage on all deliverables',
        'CI/CD pipelines with automated test gates on GitHub Actions'
      ],
      tags: ['Kotlin', 'Java', 'Firebase', 'TensorFlow Lite', 'Jetpack Compose', 'MVVM']
    },
    {
      company: 'TNT',
      role: 'Mobile & Backend Developer',
      period: 'Mar 2024 – Jan 2025',
      location: 'Tunisia',
      type: 'Full-time',
      color: '#f59e0b',
      icon: 'fas fa-building',
      bullets: [
        'Developed HotelTn hotel booking app: Spring Boot backend + Android front-end',
        '+35% user engagement and −40% loading time through Room DB caching optimisation',
        'Collaborated with UI/UX teams on Angular interfaces, enforced code quality via peer reviews',
        'Agile sprint planning, integration testing, continuous improvement activities'
      ],
      tags: ['Kotlin', 'Spring Boot', 'Firebase', 'Angular', 'Room DB', 'Retrofit']
    },
    {
      company: 'Frensh Data',
      role: 'Full-Stack Developer',
      period: 'Apr 2022 – Nov 2022',
      location: 'Tunisia',
      type: 'Full-time',
      color: '#f43f5e',
      icon: 'fas fa-server',
      bullets: [
        'Enterprise HRMS web app: Spring Boot (Java) + Angular, 3,000+ monthly API requests, >95% reliability',
        'Oracle DB relational modelling, Swagger/OpenAPI endpoint documentation',
        'LIMS system integration; completed 12 Oracle training modules',
        'Jenkins + Docker CI/CD pipeline in Agile environment'
      ],
      tags: ['Java', 'Spring Boot', 'Angular', 'Oracle DB', 'Swagger', 'Jenkins']
    },
    {
      company: 'Hello Dati',
      role: 'Software Engineer – Android & Backend',
      period: 'Jul 2019 – Dec 2021 | Jan 2023 – Jan 2024',
      location: 'Tunisia',
      type: 'Full-time',
      color: '#7c3aed',
      icon: 'fab fa-android',
      bullets: [
        'Architected 7+ Android apps (2,000+ downloads): Java & Kotlin, MVVM, Dagger Hilt, Coroutines — −50% lag',
        'Built PHP and Spring Boot (REST/GraphQL) backends, −30% system latency',
        'MDM deployments to 100+ devices; branded apps for Ooredoo & Nokia',
        'Firebase Analytics + Crashlytics UX analysis, +20% user retention'
      ],
      tags: ['Java', 'Kotlin', 'Spring Boot', 'PHP', 'GraphQL', 'Firebase', 'Docker']
    },
    {
      company: 'WonderWork',
      role: 'Mobile Application Developer',
      period: 'Feb 2019 – Jun 2019',
      location: 'Tunisia',
      type: 'Full-time',
      color: '#06b6d4',
      icon: 'fas fa-mobile-alt',
      bullets: [
        'Two Android POS apps (merchant & customer) in Java, MVC for local transactions',
        '>95% unit test coverage with JUnit, significantly reducing post-launch defects',
        'Google Play Console release management with 48-hour approval cycles'
      ],
      tags: ['Java', 'Android SDK', 'JUnit', 'Postman', 'REST API']
    }
  ];

  active = 0;
}
