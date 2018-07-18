import { Component, OnInit } from '@angular/core';

import { CardsService } from './../services/cards.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	activeFilter: DropdownItem;
	cardsList: Array<Card>;
	cards: Array<Card>;
	editingCard: Card;

	constructor(
		private cardsService: CardsService
	) {}

	ngOnInit() {
		this.cardsService.list()
			.subscribe((data: Array<Card>) => {
				this.cards = data;
				this.cardsList = this.buildCardList(data);
			});
	}

	private buildCardList(data: Array<Card>): Array<Card> {
		return data.filter((value: Card) => {
			if (this.activeFilter && value.campaignId === this.activeFilter.value) {
				return value;
			} else if (!this.activeFilter) {
				return value;
			}
		});
	}

	private onFilterChange(item: DropdownItem): void {
		this.activeFilter = item;
		this.cardsList = this.buildCardList(this.cards);
	}
}
