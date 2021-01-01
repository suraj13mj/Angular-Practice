import { Component, Output } from "@angular/core"
import { EventEmitter } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent {
    @Output() selectedTab = new EventEmitter<string>();

    onTabChange(tab: string) {
        this.selectedTab.emit(tab);
    }
}