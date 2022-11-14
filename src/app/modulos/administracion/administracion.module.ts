import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { CrearInmuebleComponent } from './inmuebles/crear-inmueble/crear-inmueble.component';
import { EditarInmuebleComponent } from './inmuebles/editar-inmueble/editar-inmueble.component';
import { EliminarInmuebleComponent } from './inmuebles/eliminar-inmueble/eliminar-inmueble.component';
import { ElimirInmuebleComponent } from './inmuebles/elimir-inmueble/elimir-inmueble.component';
import { BuscarInmuebleComponent } from './inmuebles/buscar-inmueble/buscar-inmueble.component';


@NgModule({
  declarations: [
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    BuscarUsuarioComponent,
    CrearInmuebleComponent,
    EditarInmuebleComponent,
    EliminarInmuebleComponent,
    ElimirInmuebleComponent,
    BuscarInmuebleComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
