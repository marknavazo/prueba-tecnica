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
// Importar Component desde el núcleo de Angular
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
// Decorador component, indicamos en que etiqueta se va a cargaimport { NgbModule } from '@ng-bootstrap/ng-bootstrap';r la plantilla
var AppComponent = (function () {
    function AppComponent(titleService) {
        this.titleService = titleService;
        this.titulo = "Prueba técnica";
        this.setTitle(this.titulo);
    }
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<header>\n                    <div class=\"container\">\n                        <div class=\"row\">\n                            <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12\">\n                                <h1>Prueba t\u00E9cnica</h1>\n                            </div>\n                            <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12\">\n                                <nav>\n                                    <ul>\n                                        <li><a [routerLink]=\"['/usuarios']\">Usuarios</a></li>\n                                        <li><a [routerLink]=\"['/posts']\">Posts</a></li>\n                                        <li><a [routerLink]=\"['/albumes']\">\u00C1lbumes</a></li>\n                                    </ul>\n                                </nav>\n                            </div>\n                        </div>\n                    </div>\n                </header>\n    \t\t\t<router-outlet></router-outlet>\n            <footer>\n                <div class=\"container\">\n    \t\t      &copy; Marcos D\u00EDaz Navazo \u00B7 2016\n                </div>\n            </footer>"
        }), 
        __metadata('design:paramtypes', [platform_browser_1.Title])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map