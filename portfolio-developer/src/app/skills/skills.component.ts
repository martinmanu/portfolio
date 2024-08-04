import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:Object = {}
  constructor() { }
  
  ngOnInit(): void {
    this.iconInitializer();
  }

  iconInitializer() {
    this.skills = {
      HTML: 'vscode-icons--file-type-html',
      CSS: 'devicon--css3',
      Javascript: 'logos--javascript',
      TypeScript: 'devicon--typescript',
      Angular: 'vscode-icons--file-type-angular',
      React: 'logos--react',
      Java: 'logos--java',
      Python: 'devicon--python',
      FastApi: 'devicon--fastapi',
      SpringBoot: 'devicon--spring-wordmark',
      MongoDB: 'devicon--mongodb',
      PostgreSQL: 'logos--postgresql',
      Bootstrap: 'devicon--bootstrap',
      'D3.js': 'devicon--d3js',
      'GitHub': 'simple-icons--github'
    }
  }
}
