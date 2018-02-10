import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SearcherModule } from './../../directives/searcher/searcher.module';
import { CardsModule } from './../../components/cards/cards.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CompareVehiclesComponent } from './compare-vehicles.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('CompareVehiclesComponent', () => {
	let component: CompareVehiclesComponent;
	let fixture: ComponentFixture<CompareVehiclesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [CardsModule, SearcherModule, HttpClientModule, NgbModule.forRoot(), BrowserAnimationsModule],
			declarations: [CompareVehiclesComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CompareVehiclesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should change showResponsiveBlock variable', () => {
		component.showResponsiveBlock = 'open';
		component.toggleResponsiveBlock();

		expect(component.showResponsiveBlock).toBe('close');
	});

	it('should make comparasion', () => {
		component.makeComparasion();

		expect(component.compare).toBeTruthy();
	});

	it('should change to new comparation', () => {
		component.newCoparasion();
		fixture.detectChanges();

		expect(component.compare).toBeFalsy();
	});

});
