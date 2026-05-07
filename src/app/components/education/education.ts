import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrls: ['./education.scss']
})
export class Education {
  education = [
    {
      degree: 'Engineering Degree',
      field: 'Software Engineering',
      school: 'ESPRIT – École Supérieure Privée d\'Ingénierie et de Technologies',
      period: '2020 – 2024',
      location: 'Tunisia',
      icon: 'fas fa-graduation-cap',
      color: '#00d4ff',
    },
    {
      degree: "Professional Master's",
      field: 'Computer Systems & Network Development',
      school: 'ISET Sfax – Institut Supérieur des Études Technologiques de Sfax',
      period: '2016 – 2018',
      location: 'Tunisia',
      icon: 'fas fa-university',
      color: '#7c3aed',
    }
  ];

  languages = [
    { name: 'Arabic', level: 'Native', pct: 100, color: '#00d4ff' },
    { name: 'French', level: 'B2 – Intermediate', pct: 72, color: '#10b981' },
    { name: 'English', level: 'B2 – Intermediate', pct: 72, color: '#f59e0b' },
    { name: 'Portuguese', level: 'A1 – Basic', pct: 25, color: '#7c3aed' },
  ];
}
