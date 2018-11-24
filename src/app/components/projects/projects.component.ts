import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { Global } from '../../services/global'


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [PeticionesService]
})
export class ProjectsComponent implements OnInit {
  public url = Global.url;
	public proyectos:Array<any>;

  constructor(
  	private _peticionesService: PeticionesService
  ) { };

  ngOnInit() {
  	this._peticionesService.showProjects(this.proyectos).subscribe(
  		result => {
  			this.proyectos = result.projects;
  			console.log(this.proyectos)
  		},

  		error => {
  			console.log(<any>error)
  		}
  	);
  }

}
