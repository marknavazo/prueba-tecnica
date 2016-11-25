import {Component} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Post} from '../model/post';
import {UsuariosService} from '../services/usuarios.service';
import {Usuario} from '../model/usuario';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {Http, Response, URLSearchParams, QueryEncoder} from '@angular/http';

@Component({
	selector: 'posts',
	templateUrl: 'app/views/posts.html',
	providers: [PostsService, UsuariosService]
})

export class PostsComponent{
	public titulo: string;
	public id: number;
	public posts;
	public posts_aux;
	public elements;
	public total: number;
	public errorMessage: string;
	public usuario: Usuario;
	public usuarios;

	constructor(
		private titleService: Title, 
		private _postsService: PostsService,
		private _usuariosService: UsuariosService,
		private _http: Http, 
		private route: ActivatedRoute,
		private router: Router
	){
		this.titulo = "Posts";
	}
	public setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }

	getPosts(){
    	this._postsService.getPosts()
									.subscribe(
										result => {
											this.posts = result;
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

	getPostsUser(usuario){
		this._postsService.getPostsUser(usuario)
									.subscribe(
										result => {
											this.posts = result;
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
    	this._postsService.getPosts()
									.subscribe(
										result => {
											this.posts = [];
											this.posts_aux = result;
											this.total = this.posts_aux.length;
											for(var key in this.posts_aux) {
												//console.log("->  "+this.posts_aux[key].userId);
											    if(this.posts_aux[key].userId == usuario){
											    	this.posts.push(this.posts_aux[key]);
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

	getUserById(id){
		this._usuariosService.getUsuario(id)
									.subscribe(
										result => {
											this.usuarios = result;
											this.usuario = this.usuarios[0];
											this.setTitle("Posts de "+this.usuario.username);
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
		this.setTitle("Posts");
		this.route.params.forEach((params: Params) => {
			this.id = +params['id'];
			if(this.id){
				this.getPostsUser(this.id);
				this.getUserById(this.id);
			}else{
				this.getPosts();
			}
		});
		
	}

	
}