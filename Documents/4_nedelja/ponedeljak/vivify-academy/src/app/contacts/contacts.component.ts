import { Component } from '@angular/core'

@Component({
	selector: 'app-contacts',
	templateUrl: './contacts.component.html'
})

export class ContactsComponent {
	
	link:string = 'https://angular.io/tutorial'

	isVisible:boolean = true;
}	