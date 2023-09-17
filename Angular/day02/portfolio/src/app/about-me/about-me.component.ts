import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent {
  downloadCV() {
    const cvUrl =
      'https://github.com/3bdalah/my-resum/raw/master/Abdallah%20CV.pdf';
    window.open(cvUrl, '_blank');
  }
}
