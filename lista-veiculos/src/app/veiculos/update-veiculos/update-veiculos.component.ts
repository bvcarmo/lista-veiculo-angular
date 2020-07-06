import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from '../veiculo';
import{VeiculoService} from '../veiculos.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../shared/notification-service';
import { anoValidator } from '../../shared/validators/data-ano.validator';
import { renavamValidator } from '../../shared/validators/renavam.validator';

@Component({
  selector: 'app-update-veiculos',
  templateUrl: './update-veiculos.component.html',
  styleUrls: ['./update-veiculos.component.css']
})
export class UpdateVeiculosComponent implements OnInit {

  
  veiculo: Veiculo;
  id: number;
  updateForm: FormGroup;

  constructor(private route: ActivatedRoute,
		private veiculoService: VeiculoService,
		private formBuilder: FormBuilder,
		private router: Router,
		private notificationService: NotificationService) { }
  
  ngOnInit(): void {
	this.route.params.subscribe(params => {
	  this.id = params['id'];
	});
	this.veiculo = this.route.snapshot.data.veiculo;
	this.veiculo = this.veiculo[0];

	this.updateForm = this.formBuilder.group({
		placa: [this.veiculo.placa, 
			[
				Validators.required,
			]
		],
		chassi: [this.veiculo.chassi, 
			[
				Validators.required
			]
		],
		renavam: [this.veiculo.renavam,
			[
				Validators.required,
				renavamValidator
			]
		],
		modelo: [this.veiculo.modelo,
			[
				Validators.required
			]
		],
		marca: [this.veiculo.marca,
			[
				Validators.required
			]
		],
		ano: [this.veiculo.ano,
			[
				Validators.required,
				anoValidator
			]
		]
	});
  }

  alterarVeiculo(){
	const veiculoAtualizado = this.updateForm.getRawValue() as Veiculo;
	this.veiculoService
		.alterarVeiculo(this.id,veiculoAtualizado)
		.subscribe(
			() => {
			this.router.navigate(['veiculos'])
			this.notificationService.showSuccess("Veículo atualizado com sucesso!!", "")
		},
			err => {
				this.notificationService.showError("Erro ao atualizar veículo, por favor tente novamente!!", "")
			}
		);
  }

}
