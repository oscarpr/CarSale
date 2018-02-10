import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, trigger, state, transition, animate, style } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-compare-vehicles',
	templateUrl: './compare-vehicles.component.html',
	styleUrls: ['./compare-vehicles.component.scss'],
	encapsulation: ViewEncapsulation.None,
	animations: [
		trigger('responsiveBlock', [
			state('open', style({
				transform: 'translateY(0) scale(1)'
			})),
			state('close', style({
				transform: 'translateY(calc( 100% - 25px)) scale(1)'
			})),
			transition('* => open', animate('150ms ease-in')),
			transition('* => close', animate('150ms ease-out'))
		])
	]
})
export class CompareVehiclesComponent implements OnInit {
	vehicles: any[];
	errorMessage: string;
	selectedVehicles: any[] = [];
	showResponsiveBlock: string = 'close';

	private readonly EXITS_MESSAGE: string = 'This car has already been added';
	private readonly MAX_VEHICLE_MESSAGE: string = 'Max number of vehicles selected';

	private readonly desktopLimit: number = 3;
	private readonly mobileLimit: number = 2;
	private limit: number;

	compare: boolean;

	@ViewChild('errorModal') content: ElementRef;

	constructor(private http: HttpClient, private modalService: NgbModal) {
		this.setLimit();
	}


	ngOnInit(): void { }


	/*
	* @param vehicle
	* First check if the user selected the vehicle before
	* If the vehicle has been added before, show the modal error.
	* If the user has added the limit of vehicles, show the modal error.
	* Otherway it adds the vehicle in the selectedVehicle array
	*/

	selectVehicle(vehicle: any): void {
		const alreadyAdded: boolean = this.selectedVehicles.findIndex(veh => veh.id === vehicle.id) !== -1;
		if (alreadyAdded) {
			this.errorMessage = this.EXITS_MESSAGE;
			this.modalService.open(this.content);
		} else if (this.selectedVehicles.length === this.limit) {
			this.errorMessage = this.MAX_VEHICLE_MESSAGE;
			this.modalService.open(this.content);
		} else {
			this.selectedVehicles.push(vehicle);
		}
	}


	removeSelectedVehicle(indexVehicle: any): void {
		this.selectedVehicles.splice(indexVehicle, 1);
	}


	toggleResponsiveBlock(): void {
		this.showResponsiveBlock = this.showResponsiveBlock === 'open' ? 'close' : 'open';
	}


	makeComparasion(): void {
		this.compare = true;
	}


	newCoparasion(): void {
		this.compare = false;
		this.selectedVehicles = [];
	}


	private setLimit(): void {
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			this.limit = this.mobileLimit;
		} else {
			this.limit = this.desktopLimit;
		}
	}

}
