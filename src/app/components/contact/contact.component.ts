import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactoUsuario } from '../../models/contacto';
import { PeticionesService } from '../../services/peticiones.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [PeticionesService],
})
export class ContactComponent implements OnInit {
	public usuario: ContactoUsuario;
  public url: string;
  public widthSlider:number;
  public anchuraToSlider:number;
  public captions:boolean;
  public autor:any

  @ViewChild('textos') textos;

  constructor(
    private _peticionesService: PeticionesService
  ) { 
  	this.usuario = new ContactoUsuario ("","","","",NaN);
    this.url = Global.url;
    this.captions = false;
  }

  ngOnInit() {
  var opcionClasica = document.querySelector('#texto')
  console.log(this.textos.nativeElement.textContent)

  }

  onSubmit(form){
  	this._peticionesService.saveContact(this.usuario).subscribe(
      response => {
        console.log(response);
        form.reset();
      },

      error => {
        console.log(<any>error)
      }
    )
  };

  cargarSlider(){
    this.anchuraToSlider = this.widthSlider
  }

  resetearSlider(){
    this.anchuraToSlider = NaN
  }

  getAutor(event){
    this.autor = event;
  }
}
