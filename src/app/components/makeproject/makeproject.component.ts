import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/createproject';
import { PeticionesService } from '../../services/peticiones.service';
import { UploadService } from '../../services/upload.service'
import { Global } from '../../services/global'

@Component({
  selector: 'app-makeproject',
  templateUrl: './makeproject.component.html',
  styleUrls: ['./makeproject.component.css'],
  providers: [PeticionesService, UploadService]
})
export class MakeprojectComponent implements OnInit {

	public newProject: Project;
	public proyectoGuardado: any;
	public status: string;
	public filesToUpload: Array<File>;
	public saveProject: any;
	public title:string


	constructor(
		private _peticionesService: PeticionesService,
		private _uploadService: UploadService
	) { 
		this.newProject = new Project('','','','',NaN,'','')
		this.title = 'Crea tu proyecto !'
	};

	ngOnInit() {
		
	};

	onSubmit(form){
		console.log(this.newProject);
		// Guardar datos Basicos
		this._peticionesService.saveProject(this.newProject).subscribe(
			response => {
				if(response.project){
					if(this.filesToUpload){

						//Subir Imagen
						this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, "image")
						.then((result:any) => {

							this.saveProject = result.project
							this.status = 'success';
							form.reset();
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
				console.log(<any>error);
			}

		);
	};

	fileChangeEvent(fileInput:any){
		console.log(fileInput);
		this.filesToUpload = <Array<File>>fileInput.target.files;
	}
}
