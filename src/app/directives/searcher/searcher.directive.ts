import { DATA_URL } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Directive, ElementRef, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
	selector: '[appSearcher]'
})
export class SearcherDirective implements OnInit {

	@Input()
	searchBy: string;


	@Input()
	arr: any[];

	@Output()
	arrChange: EventEmitter<any[]> = new EventEmitter();

	private el: any;
	private registers: any[]

	constructor(el: ElementRef, private http: HttpClient) {
		this.el = el.nativeElement;
	}

	ngOnInit(): void { }


	@HostListener('keyup')
	private onKeyup(): void {
		if (this.getInputValue() === '') {
			this.arrChange.emit([]);
			return;
		}
		if (this.registers) {
			this.localSearch();
		} else {
			this.externalSearch();
		}
	}


	private localSearch(): void {
		const filteredArr: any[] = this.registers.filter(reg => reg[this.searchBy].toLowerCase().includes(this.getInputValue().toLocaleLowerCase()));
		this.arrChange.emit(filteredArr);
	}


	private externalSearch(): void {
		this.http.get(DATA_URL).subscribe(
			(response: any[]) => {
				this.registers = response;
				const filteredArr: any[] = this.registers.filter(reg => reg[this.searchBy].toLowerCase().includes(this.getInputValue().toLocaleLowerCase()));
				this.arrChange.emit(filteredArr);
			}
		);
	}


	private getInputValue(): string {
		return this.el.value;
	}

}
