import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { Project } from '../models/createproject';
import { Global } from './global'

@Injectable()
export class PeticionesService {
	public url: string

	constructor (
		private _http: HttpClient 
	){
		this.url = Global.url
	};

	testService(){
		return "Probando el serviciod de angular"
	}

	saveProject(proyecto): Observable<any>{
		let params = JSON.stringify(proyecto);
		let headers = new HttpHeaders().set('Content-Type', 'application/json')

		return this._http.post(this.url+'save-project',params,{headers: headers})
	}

	saveContact(contact): Observable<any>{
		let params = JSON.stringify(contact);
		let headers = new HttpHeaders().set('Content-Type', 'application/json')

		return this._http.post(this.url+'save-contact',params,{headers: headers})
	}

	showProjects(proyecto): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url+'projects', {headers: headers});
	}

	showProject(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url+'project/'+id, {headers: headers});
	}

	eraseProject(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.delete(this.url+'project/'+id, {headers: headers});
	}

	editProject(proyecto): Observable<any>{
		let params = JSON.stringify(proyecto);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.put(this.url+'project/'+proyecto._id, params, {headers: headers})
	}

}