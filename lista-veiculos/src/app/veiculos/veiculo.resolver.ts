import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { VeiculoService } from './veiculos.service';
import { Veiculo } from './veiculo';


@Injectable({
    providedIn: "root"
})
export class VeiculoResolver implements Resolve<Observable<Veiculo>> {
    
    constructor(private veiculoService: VeiculoService){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        const id = route.params.id;
        return this.veiculoService.listarVeiculo(id);

    }
}