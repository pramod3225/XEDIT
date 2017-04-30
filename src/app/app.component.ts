import { Component,OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService} from "./hero.service";



@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>My Heroes</h2>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-4">
        <ul class="list-group">
          <li class="list-group-item" *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
            <span class="badge pull-left">{{hero.id}}</span> {{hero.name}}
          </li>
        </ul>
        <hero-detail [hero]="selectedHero"></hero-detail>
      </div>
      <div class="col-lg-8">
        <pre-tree></pre-tree>
      </div>
    </div>
  </div>
  `,
  
providers:[HeroService]
})
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes :Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit():void{
    this.getHoroes()
  }
  getHoroes(){
    this.heroService.getHeros().then(heroes => this.heroes=heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
