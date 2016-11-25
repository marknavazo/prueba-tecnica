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
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var platform_browser_1 = require('@angular/platform-browser');
var AlbumComponent = (function () {
    function AlbumComponent(titleService, _albumesService, _http, route, router) {
        this.titleService = titleService;
        this._albumesService = _albumesService;
        this._http = _http;
        this.route = route;
        this.router = router;
        this.titulo = "Album";
    }
    AlbumComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    AlbumComponent.prototype.getFotosAlbum = function (album) {
        var _this = this;
        this._albumesService.getFotosAlbum(album)
            .subscribe(function (result) {
            _this.fotos = result;
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage !== null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
    };
    AlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setTitle("Album");
        this.route.params.forEach(function (params) {
            _this.id = +params['id'];
            if (_this.id) {
                _this.getFotosAlbum(_this.id);
            }
        });
    };
    AlbumComponent = __decorate([
        core_1.Component({
            selector: 'albumes',
            templateUrl: 'app/views/album.html',
            providers: [albumes_service_1.AlbumesService]
        }), 
        __metadata('design:paramtypes', [platform_browser_1.Title, albumes_service_1.AlbumesService, http_1.Http, router_1.ActivatedRoute, router_1.Router])
    ], AlbumComponent);
    return AlbumComponent;
}());
exports.AlbumComponent = AlbumComponent;
//# sourceMappingURL=album.component.js.map