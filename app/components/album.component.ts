import {Component} from '@angular/core';
import {AlbumesService} from '../services/albumes.service';
import {Album} from '../model/album';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Http, Response, URLSearchParams, QueryEncoder} from '@angular/http';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'albumes',
	templateUrl: 'app/views/album.html',
	providers: [AlbumesService]
})

export class AlbumComponent{
	public titulo: string;
	public id: number;
	public fotos;
	public total: number;
	public errorMessage: string;

	constructor(
		private titleService: Title, 
		private _albumesService: AlbumesService,
		private _http: Http, 
		private route: ActivatedRoute,
		private router: Router
	){
		this.titulo = "Album";
	}

	public setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }

    getFotosAlbum(album){
    	this._albumesService.getFotosAlbum(album)
									.subscribe(
										result => {
											this.fotos = result;
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
		this.setTitle("Album");
		this.route.params.forEach((params: Params) => {
			this.id = +params['id'];
			if(this.id){
				this.getFotosAlbum(this.id);
			}
		});
		
	}
}