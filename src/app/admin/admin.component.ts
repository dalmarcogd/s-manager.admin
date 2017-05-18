import {ElementRef, NgZone, Renderer, ViewChild, Component} from '@angular/core'
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, Event as RouterEvent} from '@angular/router'
import {MenuService} from '../service/menu/menu.service';

/**
 * Created by Guilherme on 03/04/2017.
 */

@Component({
  selector: 'admin',
  styleUrls: ["./admin.component.css"],
  templateUrl: `./admin.component.html`,
})
export class AdminComponent {


    spinnerActive: boolean = false;

    constructor(private router: Router, private ngZone: NgZone, private renderer: Renderer, private menuService: MenuService) {
        router.events.subscribe((event: RouterEvent) => this._navigationInterceptor(event));
    }

    // Shows and hides the loading spinner during RouterEvent changes
    private _navigationInterceptor(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
            this.ngZone.runOutsideAngular(() => this.spinnerActive = true);
            console.log('start: '+event.url);
            this.menuService.setMenuUrl(event.url, false);
        }
        if (event instanceof NavigationEnd) {
            this._hideSpinner();
            console.log('end: '+event.url);
        }
        if (event instanceof NavigationCancel) {
            this._hideSpinner();
            console.log('cancel: '+event.url);
        }
        if (event instanceof NavigationError) {
            this._hideSpinner();
            console.log('error: '+event.url);
        }
    }

    private _hideSpinner(): void {
        this.ngZone.runOutsideAngular(() => this.spinnerActive = false);
    }
}
