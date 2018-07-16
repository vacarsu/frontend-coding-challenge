import { Component, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
	selector: 'select-dropdown',
	templateUrl: './select-dropdown.component.html',
	styleUrls: ['./select-dropdown.component.css']
})
export class SelectDropdownComponent {
    @Output() onDropdownChange = new EventEmitter();
    @Input() dropdownList: Array<any>;
    @Input() label: String;

    isOpen: boolean = false;
    activeItem: any;

    constructor(private elemRef: ElementRef) {}

    ngOnInit() {
        document.addEventListener('click', this.disableDropdown.bind(this));
    }

    ngOnDestroy() {
        document.removeEventListener('click', this.disableDropdown.bind(this))
    }

    private toggleDropdown(): void {
        this.isOpen = !this.isOpen;
    }

    private onDropdownClick(): void {
        this.toggleDropdown();
    }

    private onItemClick(item): void {
        this.activeItem = item;
        this.toggleDropdown();
        this.onDropdownChange.emit(item);
    }

    private disableDropdown(event: UIEvent): void {
        const isElement = this.elemRef.nativeElement.contains(event.target);
        if (!isElement) this.isOpen = false;
    }
}