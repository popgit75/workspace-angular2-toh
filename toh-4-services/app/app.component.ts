import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { HeroService } from './hero.service';

import { Hero } from './hero';


@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<h2>My Heroes</h2>
		<ul class="heroes">
			<li *ngFor="let hero of heroes"
				[class.selected]="hero === selectedHero"
				(click)="onSelect(hero)">
				<span class="badge">{{hero.id}}</span> {{hero.name}}
			</li>
		</ul>
		<my-hero-detail [hero]="selectedHero"></my-hero-detail>
	`,
	styleUrls: ['app/toh.css'],
	providers: [HeroService]
})
export class AppComponent implements OnInit {
	title = 'Tour of Heroes';
	heroes:Hero[];
	
	selectedHero: Hero;
	
	ngOnInit(): void {
		this.getHeroes();
	}
	
	constructor(private heroService: HeroService) { }
	
	getHeroes(): void {
		this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
	}
	
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
}