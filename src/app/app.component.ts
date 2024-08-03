import { Component, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formattedText:string[] = [];
  words: string[] = [
    'Full-Stack', 'Developer', 'with', '3+', 'years', 'of', 'experience', 'in', 'Web', 'Development.',
    'Skilled', 'in', 'Angular', '(8/14/17),', 'Spring', 'Boot,', 'and', 'Selenium.',
    'Passionate', 'about', 'creating', 'seamless', 'user', 'experiences', 'and',
    'integrating', 'front-end', 'expertise', 'with', 'backend', 'solutions', 'to',
    'drive', 'innovation', 'and', 'deliver', 'high-quality', 'results.'
  ];
  constructor(private elRef: ElementRef, private router: Router){}

  ngOnInit(){
    this.styleText()
    this.loadParticles();
  }

  navigateTo(route: string) {
    // this.router.navigate([route]);
  }

  styleText(): void {
    const text = 'Manu   Martin';
    this.formattedText = text.split('');
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

  loadParticles(): void {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 250,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 100,
          color: '#FB2576',
          opacity: 0.8,
          width: 2
        },
        move: {
          enable: true,
          speed: 3,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'repulse'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 200,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.9
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  }
}
