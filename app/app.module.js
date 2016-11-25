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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var app_routing_1 = require('./app.routing');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var angular2_highcharts_1 = require('angular2-highcharts');
var app_component_1 = require('./app.component');
var usuarios_component_1 = require('./components/usuarios.component');
var posts_component_1 = require('./components/posts.component');
var albumes_component_1 = require('./components/albumes.component');
var album_component_1 = require('./components/album.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [ng_bootstrap_1.NgbModule.forRoot(), platform_browser_1.BrowserModule, app_routing_1.routing, http_1.HttpModule, angular2_highcharts_1.ChartModule],
            declarations: [app_component_1.AppComponent, usuarios_component_1.UsuariosComponent, posts_component_1.PostsComponent, albumes_component_1.AlbumesComponent, album_component_1.AlbumComponent],
            providers: [app_routing_1.appRoutingProviders],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map