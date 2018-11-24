import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	public title: string;
	public subtitle: string;
	public email: string;

	constructor() {
		this.title = "Paul Tang"
		this.subtitle= "Desarrollador web en formacion"
		this.email = "paul.tang95@gmail.com"
	 }

	ngOnInit() {
	}

}
