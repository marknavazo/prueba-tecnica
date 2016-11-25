"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var albumes_service_1 = require('../services/albumes.service');
var usuarios_service_1 = require('../services/usuarios.service');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var platform_browser_1 = require('@angular/platform-browser');
var AlbumesComponent = (function () {
    function AlbumesComponent(titleService, _albumesService, _usuariosService, _http, route, router) {
        this.titleService = titleService;
        this._albumesService = _albumesService;
        this._usuariosService = _usuariosService;
        this._http = _http;
        this.route = route;
        this.router = router;
        this.titulo = "Álbumes";
    }
    AlbumesComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    AlbumesComponent.prototype.getAlbumes = function () {
        var _this = this;
        this._albumesService.getAlbumes()
            .subscribe(function (result) {
            _this.albumes = result;
            console.log(_this.albumes);
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage !== null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
    };
    AlbumesComponent.prototype.getAlbumesUser = function (usuario) {
        var _this = this;
        this._albumesService.getAlbumesUser(usuario)
            .subscribe(function (result) {
            _this.albumes = result;
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage !== null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
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
    };
    AlbumesComponent.prototype.getAlbumById = function (id) {
        var _this = this;
        this._usuariosService.getUsuario(id)
            .subscribe(function (result) {
            _this.usuarios = result;
            _this.usuario = _this.usuarios[0];
            _this.setTitle("Álbumes de " + _this.usuario.username);
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage !== null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
    };
    AlbumesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setTitle("Albumes");
        this.route.params.forEach(function (params) {
            _this.id = +params['id'];
            if (_this.id) {
                _this.getAlbumesUser(_this.id);
                _this.getAlbumById(_this.id);
            }
            else {
                _this.getAlbumes();
            }
        });
    };
    AlbumesComponent = __decorate([
        core_1.Component({
            selector: 'albumes',
            templateUrl: 'app/views/albumes.html',
            providers: [albumes_service_1.AlbumesService, usuarios_service_1.UsuariosService]
        }), 
        __metadata('design:paramtypes', [platform_browser_1.Title, albumes_service_1.AlbumesService, usuarios_service_1.UsuariosService, http_1.Http, router_1.ActivatedRoute, router_1.Router])
    ], AlbumesComponent);
    return AlbumesComponent;
}());
exports.AlbumesComponent = AlbumesComponent;
//# sourceMappingURL=albumes.component.js.map