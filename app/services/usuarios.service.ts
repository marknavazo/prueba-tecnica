import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Usuario} from "../model/usuario";

@Injectable()
export class UsuariosService{
	constructor(private _http: Http){}

	getUsuarios(){
		return this._http.get("https://jsonplaceholder.typicode.com/users")
							.map(res => res.json());
	}

	getUsuario(id: string){
		return this._http.get("https://jsonplaceholder.typicode.com/users?id="+id)
							.map(res => res.json());
	}
}