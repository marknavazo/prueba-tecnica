import {Component} from '@angular/core';
import {AlbumesService} from '../services/albumes.service';
import {Album} from '../model/album';
import {UsuariosService} from '../services/usuarios.service';
import {Usuario} from '../model/usuario';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Http, Response, URLSearchParams, QueryEncoder} from '@angular/http';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'albumes',
	templateUrl: 'app/views/albumes.html',
	providers: [AlbumesService, UsuariosService]
})

export class AlbumesComponent{
	public titulo: string;
	public id: number;
	public albumes;
	public albumes_aux;
	public total: number;
	public errorMessage: string;
	public usuario: Usuario;
	public usuarios;

	constructor(
		private titleService: Title, 
		private _albumesService: AlbumesService,
		private _usuariosService: UsuariosService,
		private _http: Http, 
		private route: ActivatedRoute,
		private router: Router
	){
		this.titulo = "Álbumes";
	}

	public setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }

    getAlbumes(){
    	this._albumesService.getAlbumes()
									.subscribe(
										result => {
											this.albumes = result;
											console.log(this.albumes);
										},
										error => {
											this.errorMessage = <any>error;
											if(this.errorMessage !== null){
												console.log(this.errorMessage);
												alert("Error en la petición");
											}
										}
									);
	}

	getAlbumesUser(usuario){
		this._albumesService.getAlbumesUser(usuario)
									.subscribe(
										result => {
											this.albumes = result;
										},
										error => {
											this.errorMessage = <any>error;
											if(this.errorMessage !== null){
												console.log(this.errorMessage);
												alert("Error en la petición");
											}
										}
									);
    	/*
		FORMA ALTERNATIVA DE HACERLO
    	this._albumesService.getAlbumes()
									.subscribe(
										result => {
											this.albumes = [];
											this.albumes_aux = result;
											this.total = this.albumes_aux.length;
											for(var key in this.albumes_aux) {
											    if(this.albumes_aux[key].userId == usuario){
											    	this.albumes.push(this.albumes_aux[key]);
											    }
											}
										},
										error => {
											this.errorMessage = <any>error;
											if(this.errorMessage !== null){
												console.log(this.errorMessage);
												alert("Error en la petición");
											}
										}
									);*/
	}

	getAlbumById(id){
		this._usuariosService.getUsuario(id)
									.subscribe(
										result => {
											this.usuarios = result;
											this.usuario = this.usuarios[0];
											this.setTitle("Álbumes de "+this.usuario.username);
										},
										error => {
											this.errorMessage = <any>error;
											if(this.errorMessage !== null){
												console.log(this.errorMessage);
												alert("Error en la petición");
											}
										}
									);
	}

	ngOnInit(){
		this.setTitle("Albumes");
		this.route.params.forEach((params: Params) => {
			this.id = +params['id'];
			if(this.id){
				this.getAlbumesUser(this.id);
				this.getAlbumById(this.id);
			}else{
				this.getAlbumes();
			}
		});
		
	}
}