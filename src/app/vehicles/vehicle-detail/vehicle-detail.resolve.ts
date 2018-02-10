import { DATA_URL } from './../../../environments/environment.prod';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { Injectable } from "@angular/core";


@Injectable()
export class VehicleResolver implements Resolve<any>{

    constructor(private http: HttpClient, private router: Router) { }


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        const selectedId: number = route.params.id;

        return Observable.create((observer: Observer<any>) => {
            this.http.get(DATA_URL).subscribe(
                (response: any[]) => {
                    const selectedVehicle: any = response.find((vehicle: any) => +vehicle.id === +selectedId);
                    if (selectedVehicle) {
                        observer.next(selectedVehicle);
                    } else {
                        this.router.navigate(['/vehicles']);
                    }
                    observer.complete();
                }
            );
        });
    }
}