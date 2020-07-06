import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Veiculo } from './veiculo';

const API = 'http://localhost:3000';

@Injectable({
    providedIn: "root"
})
export class VeiculoService {

    constructor (private http: HttpClient){}

    listarVeiculos(){
        
        return this.http
        .get<any[]>(API +`/api/veiculos`)
    }

    deletarVeiculo(id){
        return this.http
        .delete<Response>(API +`/api/veiculo/${id}`)
    }

    alterarVeiculo(id,veiculo){
        return this.http
        .put<Response>(API +`/api/veiculo/${id}`,veiculo)
    }

    listarVeiculo(id){
        return this.http
        .get<Veiculo>(API +`/api/veiculo/${id}`)
    }
    
    inserirVeiculo(veiculo){
        return this.http
        .post<Response>(API +`/api/veiculo/`,veiculo)
    }

}