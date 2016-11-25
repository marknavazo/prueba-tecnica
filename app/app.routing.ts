import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosComponent }  from './components/usuarios.component';
import { PostsComponent }  from './components/posts.component';
import { AlbumesComponent }  from './components/albumes.component';
import { AlbumComponent }  from './components/album.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/usuarios',
		pathMatch: 'full'
	},
	{ path: 'usuarios', component: UsuariosComponent},
	{ path: 'usuarios/:id', component: UsuariosComponent},
	{ path: 'posts', component: PostsComponent},
	{ path: 'posts/:id', component: PostsComponent},
	{ path: 'albumes', component: AlbumesComponent},
	{ path: 'albumes/:id', component: AlbumesComponent},
	{ path: 'album/:id', component: AlbumComponent}
]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);