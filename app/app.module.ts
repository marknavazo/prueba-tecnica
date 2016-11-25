import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartModule } from 'angular2-highcharts';

import { AppComponent }  from './app.component';
import { UsuariosComponent }  from './components/usuarios.component';
import { PostsComponent }  from './components/posts.component';
import { AlbumesComponent }  from './components/albumes.component';
import { AlbumComponent }  from './components/album.component';
 
@NgModule({
  imports:      [ NgbModule.forRoot(), BrowserModule, routing,  HttpModule, ChartModule ],
  declarations: [ AppComponent, UsuariosComponent, PostsComponent, AlbumesComponent, AlbumComponent ],
  providers:    [ appRoutingProviders ],
  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }
