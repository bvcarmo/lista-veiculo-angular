import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';

import { ListaComponent } from './veiculos/lista/lista.component';
import { FormularioComponent } from './veiculos/formulario/formulario.component';
import { UpdateVeiculosComponent } from './veiculos/update-veiculos/update-veiculos.component';
import { VeiculoResolver } from './veiculos/veiculo.resolver'; 
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';

const routes : Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'veiculos',
        component: ListaComponent
    },
    {
        path: 'formulario', 
        component: FormularioComponent
    },
    {
        path: 'veiculos/veiculo/:id', 
        component: UpdateVeiculosComponent,
        resolve: {
            veiculo: VeiculoResolver
        }
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}