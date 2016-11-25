import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Post} from "../model/post";

@Injectable()
export class AlbumesService{
	constructor(private _http: Http){}

	getAlbumes(){
		return this._http.get("https://jsonplaceholder.typicode.com/albums/")
							.map(res => res.json());
	}

	getAlbumesUser(user){
		return this._http.get("https://jsonplaceholder.typicode.com/albums?userId="+user)
							.map(res => res.json());
	}

	getFotosAlbum(album){
		return this._http.get("https://jsonplaceholder.typicode.com/photos?albumId="+album)
							.map(res => res.json());
	}

}