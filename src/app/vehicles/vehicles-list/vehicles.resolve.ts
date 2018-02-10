import { DATA_URL } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Observer } from 'rxjs/Observer';


@Injectable()
export class VehiclesResolver implements Resolve<any> {

    constructor(private http: HttpClient) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            this.http.get(DATA_URL).subscribe(
                response => {
                    observer.next(response);
                },
                err => {
                    observer.error(err)
                },
                () => {
                    observer.complete();
                }
            );
        })
    }
}
