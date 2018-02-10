import { HttpClientModule } from '@angular/common/http';
import { SearcherModule } from './directives/searcher/searcher.module';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				NgbCollapseModule,
				SearcherModule,
				HttpClientModule
			],
			declarations: [
				AppComponent
			],
		}).compileComponents();
	}));

	it('should create the app', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));


});
