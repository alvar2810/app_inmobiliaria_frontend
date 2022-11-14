import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesorRoutingModule } from './asesor-routing.module';
import { ContactarClienteComponent } from './contactar-cliente/contactar-cliente.component';
import { CrearSolicitudComponent } from './solicitudes/crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './solicitudes/editar-solicitud/editar-solicitud.component';
import { EliminarSolicitudComponent } from './solicitudes/eliminar-solicitud/eliminar-solicitud.component';
import { BuscarSolicitudComponent } from './solicitudes/buscar-solicitud/buscar-solicitud.component';


@NgModule({
  declarations: [
    ContactarClienteComponent,
    CrearSolicitudComponent,
    EditarSolicitudComponent,
    EliminarSolicitudComponent,
    BuscarSolicitudComponent
  ],
  imports: [
    CommonModule,
    AsesorRoutingModule
  ]
})
export class AsesorModule { }
