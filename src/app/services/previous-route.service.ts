import { Injectable } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';

@Injectable()

export class PreviousRouteService {
    previousUrl: any;

    constructor(
        private router: Router
    ) {
        this.router.events
            .pipe(filter((e: any) => e instanceof RoutesRecognized),
                pairwise()
            ).subscribe((e: any) => {
                this.previousUrl = e[0].urlAfterRedirects;
            });
    }

    public getPreviousUrl() {
        return this.previousUrl;
    }
}