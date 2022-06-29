import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SeoService } from './services/seo.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'api-docs-latest';
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private seoService: SeoService,
    ) {

    }
    ngOnInit() {
        // SEO codes
        // meta description
        this.router.events
            .pipe(
                map(() => this.activatedRoute),
                map((route) => {
                    while (route.firstChild) { route = route.firstChild; }
                    return route;
                }),
                filter((route) => route.outlet === 'primary'),
                mergeMap((route) => route.data)
            ).subscribe((event) => {
                this.seoService.setTitle(event['title']);
                this.seoService.setMeta(event['description']);
                this.seoService.setKeywords(event['keywords']);
                this.seoService.sendEvent('Viewed Page', {});
                this.seoService.createCanonicalURL();

                this.seoService.setSocialMediaTags(
                    event['seoTitle'] || event['title'],
                    event['description'],
                );
            });
    }
}
