import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { FormularioComponent } from './formulario/formulario.component';
import { UpdateVeiculosComponent } from './update-veiculos/update-veiculos.component';
import { ListaComponent } from './lista/lista.component';
import { AppRoutingModule } from '../app.routing.module';

@NgModule({
    declarations:[
        FormularioComponent,
        UpdateVeiculosComponent,
        ListaComponent
    ],
    imports:[
        CommonModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        HttpClientModule,
        AppRoutingModule
    ],
    exports:[
        FormularioComponent,
        UpdateVeiculosComponent,
        ListaComponent
    ]
})
export class VeiculosModule {

}