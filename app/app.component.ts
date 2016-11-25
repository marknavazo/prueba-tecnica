// Importar Component desde el núcleo de Angular
import {Component} from '@angular/core';
import { Title } from '@angular/platform-browser';

// Decorador component, indicamos en que etiqueta se va a cargaimport { NgbModule } from '@ng-bootstrap/ng-bootstrap';r la plantilla
@Component({
    selector: 'my-app',
    template: `<header>
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <h1>Prueba técnica</h1>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <nav>
                                    <ul>
                                        <li><a [routerLink]="['/usuarios']">Usuarios</a></li>
                                        <li><a [routerLink]="['/posts']">Posts</a></li>
                                        <li><a [routerLink]="['/albumes']">Álbumes</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
    			<router-outlet></router-outlet>
            <footer>
                <div class="container">
    		      &copy; Marcos Díaz Navazo · 2016
                </div>
            </footer>`
})
 
// Clase del componente donde irán los datos y funcionalidades
export class AppComponent {
    public titulo: string;


    public setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }

    constructor(private titleService: Title ){
        this.titulo = "Prueba técnica";
        this.setTitle(this.titulo);
    }
}
