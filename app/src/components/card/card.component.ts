import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EditCardModalComponent } from './../edit-card-modal/edit-card-modal.component';

@Component({
	selector: 'card',
	templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    @Input() card: Card;
    isDropdownOpen: boolean = false;
    isDropdownVisible: boolean = false;
    backgroundImage: string;
    stateMap = {
        active: 'Live',
        saved: 'Saved',
        declined: 'Rejected',
        pending: 'Pending',
        paused: 'Paused',
        terminated: 'Terminated',
        expired: 'Expired'
    }

    constructor(
        private modalService: NgbModal
    ) {}

    ngOnInit() {
        this.backgroundImage = `url(${this.card.primaryMediaUrl})`;
    }

    private toggleDropdown(): void {
        this.isDropdownOpen = !this.isDropdownOpen;
    }

    private openEditModal(card: Card) {
		const modalRef = this.modalService.open(EditCardModalComponent);
        modalRef.componentInstance.card = card;
        modalRef.componentInstance.stateValue = card.currentWorkflow;
	}

    private onMouseEnter(): void {
        this.isDropdownVisible = true;
    }

    private onMouseLeave(): void {
        this.isDropdownVisible = false;
        this.isDropdownOpen = false;
    }
}