import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';

// Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Material
import {MateriaModule} from './material';
import { MainNavComponent } from './proyectos/barra/main-nav/main-nav.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatNativeDateModule } from '@angular/material';

import { LoginComponent } from './login/login.component';
import { ProyectosComponent } from './proyectos/proyectos.component';


import { AdminComponent } from './proyectos/admin/admin.component';
import { BarraAdmiComponent } from './proyectos/barraAdmi/barraAdmi.component';
import { EditarAComponent } from './proyectos/admin/proyectoA/editar-a/editar-a.component';
import { AvancesAComponent } from './proyectos/admin/proyectoA/avances-a/avances-a.component';
import { BorrarAComponent } from './proyectos/admin/proyectoA/borrar-a/borrar-a.component';
import { AgregarAComponent } from './proyectos/admin/proyectoA/agregar-a/agregar-a.component';
import { InfoAComponent } from './proyectos/admin/proyectoA/agregar-a/info-a/info-a.component';
import { GestoresAComponent } from './proyectos/admin/proyectoA/agregar-a/gestores-a/gestores-a.component';
import { VistaAComponent } from './proyectos/admin/proyectoA/agregar-a/vista-a/vista-a.component';
import { AdministrarComponent } from './proyectos/admin/administrar/administrar.component';
import { PerfilAComponent } from './proyectos/admin/perfil-a/perfil-a.component';
import { EditarPerAComponent } from './proyectos/admin/perfil-a/editar-per-a/editar-per-a.component';

import { UsuarioComponent } from './proyectos/usuario/usuario.component';
import { BarraComponent } from './proyectos/barra/barra.component';
import { AgregarUComponent } from './proyectos/usuario/proyectoU/agregar-u/agregar-u.component';
import { InfoUComponent } from './proyectos/usuario/proyectoU/agregar-u/info-u/info-u.component';
import { VistaUComponent } from './proyectos/usuario/proyectoU/agregar-u/vista-u/vista-u.component';
import { GestoresUComponent } from './proyectos/usuario/proyectoU/agregar-u/gestores-u/gestores-u.component';
import { AvancesUComponent } from './proyectos/usuario/proyectoU/avances-u/avances-u.component';
import { BorrarUComponent } from './proyectos/usuario/proyectoU/borrar-u/borrar-u.component';
import { PerfilUComponent } from './proyectos/usuario/perfil-u/perfil-u.component';
import { EditarUComponent } from './proyectos/usuario/proyectoU/editar-u/editar-u.component';
import { EditarPerUComponent } from './proyectos/usuario/perfil-u/editar-per-u/editar-per-u.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent },


  {path: 'admin', component: AdminComponent },
  {path: 'administrar', component: AdministrarComponent },

  {path: 'perfilEditarA', component: EditarPerAComponent },

  {path: 'agregarA', component: AgregarAComponent},
  {path: 'avancesA', component: AvancesAComponent },
  {path: 'borrarA', component: BorrarAComponent },
  {path: 'editarA', component: EditarAComponent },

  {path: 'usuario', component: UsuarioComponent },
  {path: 'perfilA', component: PerfilUComponent },

  {path: 'editarPerU', component: EditarPerUComponent },

  {path: 'agregarU', component: AgregarUComponent},
  {path: 'avancesU', component: AvancesUComponent },
  {path: 'borrarU', component: BorrarUComponent },
  {path: 'editarU', component: EditarUComponent },

  ];

@NgModule({
   declarations: [
      AppComponent,
      ProyectosComponent,
      LoginComponent,
      BarraComponent,
      MainNavComponent,
      BarraAdmiComponent,
      UsuarioComponent,
      AdminComponent,
      EditarAComponent,
      AvancesAComponent,
      BorrarAComponent,
      AgregarAComponent,
      InfoAComponent,
      GestoresAComponent,
      VistaAComponent,
      AdministrarComponent,
      PerfilAComponent,
      AgregarUComponent,
      InfoUComponent,
      AvancesUComponent,
      BorrarUComponent,
      PerfilUComponent,
      EditarUComponent,
      EditarPerAComponent,
      EditarPerUComponent,
      VistaUComponent,
      GestoresUComponent
      ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MateriaModule,
      FormsModule,
      HttpClientModule,
      LayoutModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatNativeDateModule,
      RouterModule.forRoot(routes),
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
