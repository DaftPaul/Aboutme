import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/createproject';
import { PeticionesService } from '../../services/peticiones.service';
import { UploadService } from '../../services/upload.service'
import { Global } from '../../services/global'
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: '../makeproject/makeproject.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [PeticionesService, UploadService]
})
export class EditComponent implements OnInit {
	public newProject: Project;
	public proyectoGuardado: any;
	public status: string;
	public filesToUpload: Array<File>;
	public saveProject: any;
	public title: string;
	public url: string;
	public id: any


	constructor(
		private _peticionesService: PeticionesService,
		private _uploadService: UploadService,
		private _route: ActivatedRoute,
		private _router: Router
	) { 
		this.title = "Edita tu proyecto"
		this.url = Global.url
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
        this.newProject = result.project
        console.log(this.newProject)
      },

      error => {
        console.log(<any>error)
      }
    );
};

onSubmit(){
	this._peticionesService.editProject(this.newProject).subscribe(
		response =>{
			if(response.project){
				if(this.filesToUpload){
					this._uploadService.makeFileRequest(this.url+"upload-image/"+response.project._id, [], this.filesToUpload, "image")
					.then((result:any) => {
						this.saveProject = result.project				
						this.status = 'success';
						console.log(this.saveProject)
					});
				}else{
					this.saveProject = response.project				
						this.status = 'success';
				}
			}else{
				this.status= 'failed' ;
				}
		},

		error =>{
			console.log(<any>error)
		}
	)
};

fileChangeEvent(fileInput:any){
		console.log(fileInput);
		this.filesToUpload = <Array<File>>fileInput.target.files;
	}

}
