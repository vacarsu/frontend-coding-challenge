import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { CampaignsService } from './../../services/campaigns.service';

@Component({
	selector: 'navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	@Output() onFilterChange = new EventEmitter();
	dropdownList: Array<DropdownItem>;

	constructor(
		private campaignsService: CampaignsService
	) {}

	ngOnInit() {
		this.campaignsService.list()
			.subscribe((data: Array<Campaign>) => {
				this.dropdownList = this.buildDropdownList(data);
			});
	}

	private buildDropdownList(data): Array<DropdownItem> {
		let list = [];
		for (let value of data) {
			list = [{ label: value.campaignName, value: value.id }, ...list];
		}
		return list;
	}

	private onDropdownChange(item) {
		this.onFilterChange.emit(item);
	}
}