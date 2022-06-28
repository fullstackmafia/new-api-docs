import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    openMenu: boolean = false;
    constructor(
        private location: Location
    ) {
        this.location.onUrlChange(url => {
            this.openMenu = false;
            window.scrollTo(0, 0)
        });
    }

    ngOnInit(): void {

    }

    ngOnChanges() {

        this.openMenu = false;
    }

}
