import {Component} from '@angular/core';
import {UsuariosService} from '../services/usuarios.service';
import {Usuario} from '../model/usuario';
import {AlbumesService} from '../services/albumes.service';
import {Album} from '../model/album';
import {PostsService} from '../services/posts.service';
import {Post} from '../model/post';
import { ChartModule } from 'angular2-highcharts';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {Http, Response, URLSearchParams, QueryEncoder} from '@angular/http';
//import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
	selector: 'usuarios',
	templateUrl: 'app/views/usuarios.html',
	providers: [UsuariosService, PostsService, AlbumesService]
})

export class UsuariosComponent{
	public titulo: string;
	public id: number;
	public usuarios;
	public albumes;
	public posts;
	public usuario: Usuario;
	public total: number;
	public total_usuarios_pagina: number;
	public errorMessage: string;
	public src_map: string;
	public nombre_usuario: string;
	public options;
	public data;
	public id_user: number;
	public total_albumes: number;
	public total_posts: number;
	public total_elements: number;
	public show: number;

	constructor(
		private titleService: Title, 
		private _usuariosService: UsuariosService,
		private _albumesService: AlbumesService,
		private _postsService: PostsService,
		private _http: Http, 
		private route: ActivatedRoute,
		private router: Router,
		//private sanitized: DomSanitizer,
	){
		this.titulo = "Usuarios"; 
		this.show = 0;
		this.data = [];
		//this.sanitizer = sanitized;
	}

	//options: Object;

	/*iframeURL(url) {
		console.log(url);
		console.log(this.sanitized.bypassSecurityTrustHtml(url))
	    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
	}*/

	public setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }

    getAlbumesUser(user, show, total){
		this._albumesService.getAlbumesUser(user.id)
									.subscribe(
										result => {
											this.albumes = result;
											this.total_posts = this.posts.length;
											this.total_albumes = this.albumes.length;
											this.total_elements = this.total_albumes + this.total_posts;
											this.data.push({
											    name: user.username,
												data: [this.total_posts, this.total_albumes, this.total_elements]
											})
											if(show == total){
													this.options = {
													chart: {
											            type: 'column'
											        },
										            title: {
											            text: 'Usuarios'
											        },
											        subtitle: {
											            text: 'Pincha en los usuarios para mostrar u ocultar sus datos'
											        },
											        legend: {
											            align: 'right',
											            verticalAlign: 'middle',
											            layout: 'vertical'
											        },
											        xAxis: {
											        	isDirty : true,
											            categories: ['Posts', 'Álbumes', 'Total'],
											            labels: {
											                x: -10
											            }
											        },
											        yAxis: {
											        	isDirty : true,
											            allowDecimals: false,
											            title: {
											                text: 'Cantidad'
											            }
											        },
										            series: this.data,
											        responsive: {
										            rules: [{
										                condition: {
										                    maxWidth: 500
										                },
										                chartOptions: {
										                    legend: {
										                        align: 'center',
										                        verticalAlign: 'bottom',
										                        layout: 'horizontal'
										                    },
										                    yAxis: {
										                        labels: {
										                            align: 'left',
										                            x: 0,
										                            y: -5
										                        },
										                        title: {
										                            text: null
										                        }
										                    },
										                    subtitle: {
										                        text: null
										                    },
										                    credits: {
										                        enabled: false
										                    }
										                }
										            }]
										        }
										        };
										    }
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

    getPostsUser(user, show, total){
		this._postsService.getPostsUser(user.id)
									.subscribe(
										result => {
											this.posts = result;
											this.getAlbumesUser(user, show, total);
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

	insertData(user, show, total){
		console.log(user.id);
		this.getPostsUser(user, show, total);
	}

    getUsuarios(){
    	this._usuariosService.getUsuarios()
									.subscribe(
										result => {
											this.usuarios = result;
											this.total = result.length;
											for(var key in this.usuarios) {
												this.show++;
											    this.insertData(this.usuarios[key], this.show, this.total);
											}
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

    getUsuario(id){
    	this._usuariosService.getUsuario(id)
									.subscribe(
										result => {
											this.usuarios = result;
											this.total = result.count;
											this.usuario = this.usuarios[0];
											/*this.src_map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12053.88778931144!2d'+this.usuario.address.geo.lng+'!3d'+this.usuario.address.geo.lat+'!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1479851204792';
											EL IFRAME ES
											<iframe [src]="iframeURL()" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>*/
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
		this.setTitle("Usuarios");
		this.route.params.forEach((params: Params) => {
			this.id = +params['id'];
			if(this.id){
				this.getUsuario(this.id);
			}else{
				this.getUsuarios();
			}
		});
	}
}