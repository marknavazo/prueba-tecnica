"use strict";
var router_1 = require('@angular/router');
var usuarios_component_1 = require('./components/usuarios.component');
var posts_component_1 = require('./components/posts.component');
var albumes_component_1 = require('./components/albumes.component');
var album_component_1 = require('./components/album.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/usuarios',
        pathMatch: 'full'
    },
    { path: 'usuarios', component: usuarios_component_1.UsuariosComponent },
    { path: 'usuarios/:id', component: usuarios_component_1.UsuariosComponent },
    { path: 'posts', component: posts_component_1.PostsComponent },
    { path: 'posts/:id', component: posts_component_1.PostsComponent },
    { path: 'albumes', component: albumes_component_1.AlbumesComponent },
    { path: 'albumes/:id', component: albumes_component_1.AlbumesComponent },
    { path: 'album/:id', component: album_component_1.AlbumComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map