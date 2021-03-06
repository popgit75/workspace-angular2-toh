import { Component } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './HEROES';


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
	styleUrls: ['app/toh.css']
})
export class AppComponent {
	title = 'Tour of Heroes';
	heroes = HEROES;
	selectedHero: Hero;
	
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
}