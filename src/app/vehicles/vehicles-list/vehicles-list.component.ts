import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-vehicles-list',
	templateUrl: './vehicles-list.component.html',
	styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnInit {
	vehicles: any[];

	private orderBy: string = 'brand';
	constructor(private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		this.getResolversData();
	}

	showVehicle(idVehicle: number): void {
		this.router.navigate([`../vehicles/${idVehicle}`]);
	}


	private getResolversData(): void {
		this.route.data.subscribe(
			(data: { vehicles: any }) => {
				this.vehicles = data.vehicles;
				this.orderVehicles();
			}
		);
	}


	private orderVehicles() {
		this.vehicles.sort((a: any, b: any) => {
			const A: string = a[this.orderBy].toLowerCase();
			const B: string = b[this.orderBy].toLowerCase();

			if (A < B) return -1;
			if (A > B) return 1;
			return 0;
		});
	}

}
