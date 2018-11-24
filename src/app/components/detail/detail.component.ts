import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { Global } from '../../services/global';
import { Project } from '../../models/createproject';
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ PeticionesService ]
})
export class DetailComponent implements OnInit {
	public url: string;
	public id: any;
	public proyecto: Project;
  public confirm: boolean;

  constructor(
  	private _peticionesService: PeticionesService,
  	private _router: Router,
  	private _route: ActivatedRoute
  ) 
  	{ 
  		this.url = Global.url;
      this.confirm = false;
  };

  ngOnInit() {
  	this._route.params.subscribe(params =>{
  		console.log(params);

  		this.id = params.id;

      this.muestraProject(this.id);
  	});
  };

  muestraProject(id){
    this._peticionesService.showProject(id).subscribe(
      result => {
        this.proyecto = result.project
        console.log(this.proyecto.name)
      },

      error => {
        console.log(<any>error)
      }
    );
  };

  eraseProject(){
    this._peticionesService.eraseProject(this.id).subscribe(
      result=>{
        console.log(result);
        alert('El proyecto ha sido elminado satisfactoriametne')
      },

      error =>{
        console.log(<any>error)
      }
    )
  }

  confirmTrue(){
    this.confirm = true;
  }

  noConfirm(){
    this.confirm = false;
  }


}
