import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {

  activeTab: string = 'dashboard';

  changeTab(tab: string) {
    this.activeTab = tab;
  }

  skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'Angular', level: 70 },
    { name: 'C', level: 85 },
    { name: 'C++', level: 80 },
    { name: 'Git', level: 65 },
    { name: 'GitHub', level: 65 }
  ];

  projects = [
    {
      title: 'Student Portfolio Website',
      tech: 'Angular 22, HTML, CSS, TypeScript',
      description:
        'A modern responsive portfolio website built using Angular with dark theme and sidebar navigation.'
    },
    {
      title: 'Calculator',
      tech: 'HTML, CSS, JavaScript',
      description:
        'Responsive calculator supporting basic arithmetic operations.'
    },
    {
      title: 'To-Do List',
      tech: 'Angular',
      description:
        'Task management application with add, edit and delete features.'
    },
    {
      title: 'Weather App',
      tech: 'Angular + Weather API',
      description:
        'Learning project that displays live weather information using an API.'
    }
  ];

}