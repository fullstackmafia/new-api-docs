import { Injectable, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PreviousRouteService } from '../services/previous-route.service';
import { DOCUMENT } from '@angular/common';
import { MetaTag } from '../models/meta-tag';

@Injectable()

export class SeoService {
    private urlMeta: string = "og:url";
    private titleMeta: string = "og:title";
    private descriptionMeta: string = "og:description";
    private imageMeta: string = "og:image";
    private secureImageMeta: string = "og:image:secure_url";
    private twitterTitleMeta: string = "twitter:text:title";
    private twitterImageMeta: string = "twitter:image";
    private description = 'International Top up API to send airtime anywhere. Made from developers to developers.Integrate an easy and simple mobile airtime API for your business.';

    constructor(
        private meta: Meta,
        private title: Title,
        private router: Router,
        @Inject(DOCUMENT) private dom: any,
        private previousRouteService: PreviousRouteService,
    ) {
    }

    setMeta(description: string) {
        this.meta.updateTag({ name: 'description', content: description || this.description });
    }

    setTitle(title: string) {
        this.title.setTitle(title || 'Mobile Top up APIs for Airtime and Data bundles');
    }

    setKeywords(value: string) {
        this.meta.updateTag({ name: 'keywords', content: value || 'Top Up API, Mobile Recharge API, Prepaid top up API, Telecom API, Mobile Airtime API' });
    }

    setSocialMediaTags(title: string, description: string): void {
        var imageUrl = `https://cdn.reloadly.com/assets-v2/images/icon/reloadly_logo_icon.png`;
        var tags = [
            new MetaTag(this.urlMeta, window.location.href, true),
            new MetaTag(this.titleMeta, title || this.title.getTitle(), true),
            new MetaTag(this.descriptionMeta, description || this.description, true),
            new MetaTag(this.imageMeta, imageUrl, true),
            new MetaTag(this.secureImageMeta, imageUrl, true),
            new MetaTag(this.twitterTitleMeta, title || this.title.getTitle(), false),
            new MetaTag(this.twitterImageMeta, imageUrl, false)
        ];
        this.setTags(tags);
    }

    setTags(tags: MetaTag[]): void {
        tags.forEach(siteTag => {
            if (siteTag.isFacebook) {
                this.meta.updateTag({ property: siteTag.name, content: siteTag.value });
            } else {
                this.meta.updateTag({ name: siteTag.name, content: siteTag.value });
            }
        });
    }

    sendEvent(name: string, properties: any = {}) {
        const previousUrl = this.previousRouteService.getPreviousUrl();
        properties['page_url'] = window.location.href;
        properties['page_path'] = this.router.url;
        properties['page_domain'] = window.location.hostname;
        properties['page_title'] = this.title.getTitle() || 'Reloadly Mobile Top Up API for Developers | Mobile Recharge API';
        properties['referral_url'] = previousUrl && (location.protocol + '//' + document.domain + previousUrl) || document.referrer || 'direct';
        properties['referral_path'] = previousUrl || document.referrer && new URL(document.referrer).pathname || 'direct';
        properties['referral_domain'] = previousUrl && document.domain || document.referrer.replace('http://', '').replace('https://', '').split(/[/?#]/)[0] || 'direct';
        (<any>window).dataLayer = (<any>window).dataLayer || [];
        (<any>window).dataLayer.push({
            'event': name,
            'event_properties': properties
        });
    }

    createCanonicalURL() {
        const canonical = this.dom.querySelector("link[rel='canonical']");
        if (canonical) {
            canonical.setAttribute('href', this.dom.URL);
        } else {
            let link: HTMLLinkElement = this.dom.createElement('link');
            link.setAttribute('rel', 'canonical');
            this.dom.head.appendChild(link);
            link.setAttribute('href', this.dom.URL);
        }
    }

}
