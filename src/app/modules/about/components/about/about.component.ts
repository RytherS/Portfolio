import { Component, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { RouterSelectors } from "@core/state/router-state";

@Component({
	selector: "sr-about",
	templateUrl: "./about.component.html",
	styleUrls: ["./about.component.scss"]
})
export class AboutComponent {
	private store: Store = inject(Store);
	public tempRootRoute$: Observable<string>;

	constructor() {
		this.tempRootRoute$ = this.store.select(RouterSelectors.selectRouteRoot);
	}
}
