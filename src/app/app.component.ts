import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	hideSearcher: boolean = true;
	showNavForm: boolean = true;
	vehicles: any[];

	constructor(private router: Router) { }

	ngOnInit(): void { }

	
	toggleSearcher(): void {
		this.hideSearcher = !this.hideSearcher;

		if (!this.hideSearcher) {
			setTimeout(() => {
				document.getElementById('main-searcher').focus();
			}, 0);
		}
	}


	toggleNavForm(): void {
		this.showNavForm = !this.showNavForm;
	}



	showVehicle(vehiceId: number): void {
		this.vehicles = [];
		(<HTMLInputElement>document.getElementById('main-searcher')).value = '';
		this.hideSearcher = true;
		this.router.navigate([`/vehicles/${vehiceId}`]);
	}

}
