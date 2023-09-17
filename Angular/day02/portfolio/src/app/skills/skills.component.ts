import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  listSkills: Array<any> = [
    'UI  UX Design ',
    'Responsive Design',
    'Web Design',
    'Mobile App Design',
  ];

  skillsArr: Array<any> = [
    { course: 'Html', degree: '80' },
    { course: 'css', degree: '60' },
    { course: 'node', degree: '88' },
    { course: 'sass', degree: '56' },
    { course: 'JS', degree: '61' },
    { course: 'JQuery', degree: '44' },
  ];
}
