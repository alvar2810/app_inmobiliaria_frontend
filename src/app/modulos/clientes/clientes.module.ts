import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { SolicitarInmuebleComponent } from './solicitar-inmueble/solicitar-inmueble.component';
import { RevisarSolicitudComponent } from './revisar-solicitud/revisar-solicitud.component';


@NgModule({
  declarations: [
    RegistroComponent,
    SolicitarInmuebleComponent,
    RevisarSolicitudComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
