import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects {
  filter = 'All';
  filters = ['All', 'Android', 'Spring Boot', 'Angular', 'AI/ML'];

  projects = [
    {
      title: 'Banking Solution',
      subtitle: 'End-to-End Banking Platform',
      description: 'Full banking platform with Spring Boot microservices, Angular SPA, and Android app. JWT auth, RBAC, real-time sync, and active Selenium + TestNG test suite.',
      tags: ['Spring Boot', 'Angular', 'Android', 'JWT', 'Selenium', 'Docker'],
      category: ['Spring Boot', 'Angular', 'Android'],
      color: '#00d4ff',
      icon: 'fas fa-university',
      status: 'In Progress',
      metrics: ['+JWT Security', '+RBAC', 'Microservices'],
      github: '#',
      demo: null,
      featured: true
    },
    {
      title: 'PadariaApp',
      subtitle: 'AI-Powered Bakery Android App',
      description: 'Offline-first Android app with real-time pastry recognition via TensorFlow Lite SVM model. Full JUnit 5 test suite with >90% unit coverage.',
      tags: ['Java', 'Android', 'TensorFlow Lite', 'Firebase', 'Room DB'],
      category: ['Android', 'AI/ML'],
      color: '#f59e0b',
      icon: 'fas fa-brain',
      status: 'Completed',
      metrics: ['>90% Tests', 'Offline-First', 'AI Recognition'],
      github: 'https://github.com/AhmedKhalilO',
      demo: null,
      featured: true
    },
    {
      title: 'YEV App',
      subtitle: 'Smart EV Management – Portugal',
      description: 'EV management app for Portugal. Battery autonomy tracking, OpenChargeMap API integration, Stripe payment simulation, GitHub Actions CI/CD.',
      tags: ['Kotlin', 'Jetpack Compose', 'OpenChargeMap', 'Stripe', 'CI/CD'],
      category: ['Android'],
      color: '#10b981',
      icon: 'fas fa-charging-station',
      status: 'Completed',
      metrics: ['OpenChargeMap', 'Stripe', 'Jetpack Compose'],
      github: 'https://github.com/AhmedKhalilO',
      demo: null,
      featured: true
    },
    {
      title: 'HotelTn',
      subtitle: 'Cross-Platform Hotel Booking',
      description: 'Real-time hotel booking platform with Spring Boot backend + Android frontend. +35% engagement and −40% load time achieved in production.',
      tags: ['Kotlin', 'Spring Boot', 'Firebase', 'Angular', 'Room DB'],
      category: ['Spring Boot', 'Android', 'Angular'],
      color: '#f43f5e',
      icon: 'fas fa-hotel',
      status: 'Production',
      metrics: ['+35% Engagement', '−40% Load Time', 'Real-time Sync'],
      github: null,
      demo: null,
      featured: false
    },
    {
      title: 'HRMS Platform',
      subtitle: 'Enterprise HR Management System',
      description: '3,000+ monthly API requests. Spring Boot + Angular, Oracle DB, LIMS integration, complete Swagger API documentation. >95% service reliability.',
      tags: ['Java', 'Spring Boot', 'Angular', 'Oracle DB', 'Swagger'],
      category: ['Spring Boot', 'Angular'],
      color: '#7c3aed',
      icon: 'fas fa-users-cog',
      status: 'Production',
      metrics: ['3k+ API/month', '>95% Uptime', 'Oracle DB'],
      github: null,
      demo: null,
      featured: false
    },
    {
      title: 'Hotel Launcher',
      subtitle: 'Enterprise Android Launcher',
      description: 'Custom Android Launcher for hotel devices: telephony, offline navigation, concierge, weather. Deployed to 100+ managed devices via MDM.',
      tags: ['Java', 'Kotlin', 'Android SDK', 'MDM', 'Firebase'],
      category: ['Android'],
      color: '#06b6d4',
      icon: 'fas fa-tablet-alt',
      status: 'Production',
      metrics: ['100+ Devices', 'MDM Managed', 'Offline Mode'],
      github: null,
      demo: null,
      featured: false
    }
  ];

  get filtered() {
    if (this.filter === 'All') return this.projects;
    return this.projects.filter(p => p.category.includes(this.filter));
  }
}
