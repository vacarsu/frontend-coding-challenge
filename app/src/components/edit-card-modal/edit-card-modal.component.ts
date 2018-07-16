import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { timeout } from 'q';

@Component({
	selector: 'edit-card-modal',
	templateUrl: './edit-card-modal.component.html',
	// styleUrls: ['./edit-card-modal.component.css']
})
export class EditCardModalComponent {
    @Input() card: Card;
    isSaving: boolean = false;
    stateValue: string;
    states = {
        saved: {
            transitions: ['pending']
        },
        pending: {
            transitions: ['active', 'declined']
        },
        declined: {
            transitions: []
        },
        terminated: {
            transitions: []
        },
        active: {
            transitions: ['paused', 'terminated', 'expired']
        },
        paused: {
            transitions: ['active']
        },
        expired: {
            transitions: []
        }
    }

    constructor(private activeModalService: NgbActiveModal) {}

    private isEnabled(stateOption): boolean {
        return this.states[this.stateValue].transitions.indexOf(stateOption) > -1 
        || this.stateValue === stateOption
            ? true : false;
    }

    private close() {
        this.activeModalService.close();
    }

    private updateState(stateOption) {
        this.stateValue = stateOption;
    }

    private saveState() {
        this.isSaving = true;
        let saveTimout = window.setTimeout(() => {
            this.card.currentWorkflow = this.stateValue;
            this.close();
            window.clearTimeout(saveTimout);
        }, 1000);
    }
}