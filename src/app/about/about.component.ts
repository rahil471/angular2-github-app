import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-about',
    templateUrl: 'about.component.html'
})
export class AboutComponent {
    aboutme : string;
    
    constructor() {
        this.aboutme = "Hello, I am an about page, I contain information about the application"
    }
}