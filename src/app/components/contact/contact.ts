import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {
  contacts = [
    {
      label: 'Email',
      value: 'oueslati.ahmedkhalil@gmail.com',
      href: 'mailto:oueslati.ahmedkhalil@gmail.com',
      icon: 'fas fa-envelope',
      color: '#00d4ff'
    },
    {
      label: 'Phone',
      value: '+351 930 506 667',
      href: 'tel:+351930506667',
      icon: 'fas fa-phone',
      color: '#10b981'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/oueslati-ahmed-khalil',
      href: 'https://linkedin.com/in/oueslati-ahmed-khalil/',
      icon: 'fab fa-linkedin',
      color: '#0077b5'
    },
    {
      label: 'GitHub',
      value: 'github.com/AhmedKhalilO',
      href: 'https://github.com/AhmedKhalilO',
      icon: 'fab fa-github',
      color: '#7c3aed'
    }
  ];

  copied = false;

  copyEmail() {
    navigator.clipboard.writeText('oueslati.ahmedkhalil@gmail.com');
    this.copied = true;
    setTimeout(() => this.copied = false, 2000);
  }
}
