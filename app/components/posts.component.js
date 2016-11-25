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
var posts_service_1 = require('../services/posts.service');
var usuarios_service_1 = require('../services/usuarios.service');
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var PostsComponent = (function () {
    function PostsComponent(titleService, _postsService, _usuariosService, _http, route, router) {
        this.titleService = titleService;
        this._postsService = _postsService;
        this._usuariosService = _usuariosService;
        this._http = _http;
        this.route = route;
        this.router = router;
        this.titulo = "Posts";
    }
    PostsComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    PostsComponent.prototype.getPosts = function () {
        var _this = this;
        this._postsService.getPosts()
            .subscribe(function (result) {
            _this.posts = result;
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage !== null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
    };
    PostsComponent.prototype.getPostsUser = function (usuario) {
        var _this = this;
        this._postsService.getPostsUser(usuario)
            .subscribe(function (result) {
            _this.posts = result;
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage !== null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
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
    };
    PostsComponent.prototype.getUserById = function (id) {
        var _this = this;
        this._usuariosService.getUsuario(id)
            .subscribe(function (result) {
            _this.usuarios = result;
            _this.usuario = _this.usuarios[0];
            _this.setTitle("Posts de " + _this.usuario.username);
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage !== null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
    };
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setTitle("Posts");
        this.route.params.forEach(function (params) {
            _this.id = +params['id'];
            if (_this.id) {
                _this.getPostsUser(_this.id);
                _this.getUserById(_this.id);
            }
            else {
                _this.getPosts();
            }
        });
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'posts',
            templateUrl: 'app/views/posts.html',
            providers: [posts_service_1.PostsService, usuarios_service_1.UsuariosService]
        }), 
        __metadata('design:paramtypes', [platform_browser_1.Title, posts_service_1.PostsService, usuarios_service_1.UsuariosService, http_1.Http, router_1.ActivatedRoute, router_1.Router])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map