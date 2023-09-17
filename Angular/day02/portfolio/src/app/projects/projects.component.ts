import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  listProjects: Array<any> = [
    'Web Designer',
    'UI / UX Designer',
    'Frontend Developer',
    'Backend Developer',
    'Fullstack Developer',
    'Mearn Stack ',
  ];
}
