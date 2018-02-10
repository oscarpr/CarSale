import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, trigger, state, style, animate, transition } from '@angular/core';

@Component({
	selector: 'app-vehicle-detail',
	templateUrl: './vehicle-detail.component.html',
	styleUrls: ['./vehicle-detail.component.scss'],
	animations: [
		trigger('stateContainer', [
			state('inactive', style({
				transform: 'translateX(100%) scale(1)'
			})),
			state('active', style({
				transform: 'translateX(0) scale(1)'
			})),
			transition('* => active', animate('150ms ease-in')),
			transition('* => inactive', animate('150ms ease-out'))
		])
	]
})
export class VehicleDetailComponent implements OnInit {
	vehicle: any;

	showinfo: string = 'inactive';

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.getResolversData();
	}


	toggleInfo(): void {
		this.showinfo = this.showinfo === 'inactive' ? 'active' : 'inactive';
	}

	private getResolversData(): void {
		this.route.data.subscribe(
			(data: { vehicle: any }) => {
				this.vehicle = data.vehicle;
			}
		);
	}

}
