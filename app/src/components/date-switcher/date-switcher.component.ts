import { Component } from '@angular/core';

@Component({
	selector: 'date-switcher',
	templateUrl: './date-switcher.component.html',
	styleUrls: ['./date-switcher.component.css']
})
export class DateSwitcherComponent {
    date: Date = new Date();
}