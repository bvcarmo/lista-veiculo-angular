import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VeiculoService } from '../veiculos.service';
import { NotificationService } from '../../shared/notification-service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnChanges,OnInit {

  veiculos : any[] = [];
  
  constructor(private veiculoService: VeiculoService,private modalService: NgbModal, private notificationService: NotificationService) { }


  open(content,id) {
	this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
	  if(result){
		this.deletar(id)
	  }
	});
  }


  ngOnChanges(changes: SimpleChanges): void {
	if(changes.veiculos)
	  this.veiculos = this.veiculos;
  }

  ngOnInit(): void {
	this.veiculoService.listarVeiculos().
	subscribe (veiculos =>{this.veiculos = veiculos})
  }

  deletar(id : string ){
	let idVeiculo = id.split('_')[1];
	this.veiculoService.deletarVeiculo(idVeiculo).
	subscribe(response => {
		if(response.status == 200){
			this.veiculoService.listarVeiculos().
			subscribe (veiculos =>{this.veiculos = veiculos})
			this.notificationService.showSuccess("Veículo deletado com sucesso!!", "")
		}
		else{
			this.notificationService.showError("Erro ao deletar veículo, por favor tente novamente!!", "")
		}
	})
  }


}
