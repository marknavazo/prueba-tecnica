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
var usuarios_service_1 = require('../services/usuarios.service');
var albumes_service_1 = require('../services/albumes.service');
var posts_service_1 = require('../services/posts.service');
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
//import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
var UsuariosComponent = (function () {
    function UsuariosComponent(titleService, _usuariosService, _albumesService, _postsService, _http, route, router) {
        this.titleService = titleService;
        this._usuariosService = _usuariosService;
        this._albumesService = _albumesService;
        this._postsService = _postsService;
        this._http = _http;
        this.route = route;
        this.router = router;
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
    UsuariosComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    UsuariosComponent.prototype.getAlbumesUser = function (user, show, total) {
        var _this = this;
        this._albumesService.getAlbumesUser(user.id)
            .subscribe(function (result) {
            _this.albumes = result;
            _this.total_posts = _this.posts.length;
            _this.total_albumes = _this.albumes.length;
            _this.total_elements = _this.total_albumes + _this.total_posts;
            _this.data.push({
                name: user.username,
                data: [_this.total_posts, _this.total_albumes, _this.total_elements]
            });
            if (show == total) {
                _this.options = {
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
                        isDirty: true,
                        categories: ['Posts', 'Álbumes', 'Total'],
                        labels: {
                            x: -10
                        }
                    },
                    yAxis: {
                        isDirty: true,
                        allowDecimals: false,
                        title: {
                            text: 'Cantidad'
                        }
                    },
                    series: _this.data,
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
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage !== null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
    };
    UsuariosComponent.prototype.getPostsUser = function (user, show, total) {
        var _this = this;
        this._postsService.getPostsUser(user.id)
            .subscribe(function (result) {
            _this.posts = result;
            _this.getAlbumesUser(user, show, total);
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage !== null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
    };
    UsuariosComponent.prototype.insertData = function (user, show, total) {
        console.log(user.id);
        this.getPostsUser(user, show, total);
    };
    UsuariosComponent.prototype.getUsuarios = function () {
        var _this = this;
        this._usuariosService.getUsuarios()
            .subscribe(function (result) {
            _this.usuarios = result;
            _this.total = result.length;
            for (var key in _this.usuarios) {
                _this.show++;
                _this.insertData(_this.usuarios[key], _this.show, _this.total);
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage !== null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
    };
    UsuariosComponent.prototype.getUsuario = function (id) {
        var _this = this;
        this._usuariosService.getUsuario(id)
            .subscribe(function (result) {
            _this.usuarios = result;
            _this.total = result.count;
            _this.usuario = _this.usuarios[0];
            /*this.src_map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12053.88778931144!2d'+this.usuario.address.geo.lng+'!3d'+this.usuario.address.geo.lat+'!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1479851204792';
            EL IFRAME ES
            <iframe [src]="iframeURL()" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>*/
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage !== null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
    };
    UsuariosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setTitle("Usuarios");
        this.route.params.forEach(function (params) {
            _this.id = +params['id'];
            if (_this.id) {
                _this.getUsuario(_this.id);
            }
            else {
                _this.getUsuarios();
            }
        });
    };
    UsuariosComponent = __decorate([
        core_1.Component({
            selector: 'usuarios',
            templateUrl: 'app/views/usuarios.html',
            providers: [usuarios_service_1.UsuariosService, posts_service_1.PostsService, albumes_service_1.AlbumesService]
        }), 
        __metadata('design:paramtypes', [platform_browser_1.Title, usuarios_service_1.UsuariosService, albumes_service_1.AlbumesService, posts_service_1.PostsService, http_1.Http, router_1.ActivatedRoute, router_1.Router])
    ], UsuariosComponent);
    return UsuariosComponent;
}());
exports.UsuariosComponent = UsuariosComponent;
//# sourceMappingURL=usuarios.component.js.map