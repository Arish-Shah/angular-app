import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  template: `
    <h2>My Heros</h2>
    <ul class="heroes">
      <li
        *ngFor="let hero of heros"
        (click)="onSelect(hero)"
        [class.selected]="hero === selectedHero"
      >
        <span class="badge">{{ hero.id }}</span>
        {{ hero.name }}
      </li>
    </ul>

    <app-hero-detail [hero]="selectedHero"></app-hero-detail>
  `
})
export class HeroesComponent implements OnInit {
  heros: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeroes().subscribe(heros => (this.heros = heros));
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
  }
}
