import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../veiculo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VeiculoService } from '../veiculos.service';
import { NotificationService } from '../../shared/notification-service';
import { anoValidator } from '../../shared/validators/data-ano.validator';
import { renavamValidator } from '../../shared/validators/renavam.validator';

@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  insertForm: FormGroup;

  constructor(private veiculoService: VeiculoService,
		private formBuilder: FormBuilder,
		private router: Router,
		private notificationService: NotificationService) { }
  
  ngOnInit(): void {

	this.insertForm = this.formBuilder.group({
		placa: ['', 
		[
			Validators.required,
		]
	  ],
		chassi: ['', 
		[
			Validators.required
		]
	  ],
	  renavam: ['',
		[
			renavamValidator,
			Validators.required
		]
	  ],
	  modelo: ['',
		[
		  Validators.required
		]
	  ],
	  marca: ['',
		[
		  Validators.required
		]
	  ],
	  ano: ['',
		[
		  anoValidator,
		  Validators.required
		]
	  ]
	});
  }

	inserirVeiculo(){
		const novoVeiculo = this.insertForm.getRawValue() as Veiculo;
		this.veiculoService
			.inserirVeiculo(novoVeiculo)
			.subscribe(
				() => {
					this.router.navigate(['veiculos'])
					this.notificationService.showSuccess("Veículo inserido com sucesso!!", "")
				},
				err => this.notificationService.showError("Erro ao inserir veículo, por favor tente novamente!!", "")
			);
	}
				
}