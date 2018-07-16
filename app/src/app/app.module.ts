import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CardComponent } from './../components/card/card.component';
import { DropdownComponent } from './../components/dropdown/dropdown.component';
import { EditCardModalComponent } from './../components/edit-card-modal/edit-card-modal.component';
import { DateSwitcherComponent } from './../components/date-switcher/date-switcher.component';
import { NavbarComponent } from './../components/navbar/navbar.component';
import { SelectDropdownComponent } from './../components/select-dropdown/select-dropdown.component';

import { CampaignsService } from './../services/campaigns.service';
import { CardsService } from './../services/cards.service';

@NgModule({
	declarations: [
		AppComponent,
		CardComponent,
		DateSwitcherComponent,
		DropdownComponent,
		EditCardModalComponent,
		SelectDropdownComponent,
		NavbarComponent
	],
	entryComponents: [
		EditCardModalComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		NgbModule.forRoot()
	],
	providers: [
		CampaignsService,
		CardsService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
