import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componente/encabezado/encabezado.component';
import { AcercaDeComponent } from './componente/acerca-de/acerca-de.component';
import { ExperienciasLaboralesComponent } from './componente/experiencias-laborales/experiencias-laborales.component';
import { EducacionComponent } from './componente/educacion/educacion.component';
import { AptitudesHabilidadesComponent } from './componente/aptitudes-habilidades/aptitudes-habilidades.component';
import { ProyectosComponent } from './componente/proyectos/proyectos.component';
import { FooterComponent } from './componente/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciasLaboralesComponent,
    EducacionComponent,
    AptitudesHabilidadesComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
