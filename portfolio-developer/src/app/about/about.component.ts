import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public words: string[] = [
    'Full-Stack', 'Developer', 'with', '3+', 'years', 'of', 'experience', 'in', 'Web', 'Development.',
    'Skilled', 'in', 'Angular', '(8/14/17),', 'Spring', 'Boot,', 'and', 'Selenium.',
    'Passionate', 'about', 'creating', 'seamless', 'user', 'experiences', 'and',
    'integrating', 'front-end', 'expertise', 'with', 'backend', 'solutions', 'to',
    'drive', 'innovation', 'and', 'deliver', 'high-quality', 'results.'
  ];
  constructor() { }

  ngOnInit(): void {
  }

  openPDF() {
    window.open('assets/ManuMartinCVUPdated.pdf', '_blank');
  }

  navigateToGitHub(link:string){
    if(link == 'git'){
      window.location.href = 'https://github.com/martinmanu';
    }else if(link == 'link'){
      window.location.href = 'https://www.linkedin.com/in/manu-martin-joseph/' 
    }
  }

}
