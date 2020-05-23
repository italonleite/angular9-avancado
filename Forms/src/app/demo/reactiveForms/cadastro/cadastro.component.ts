import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from './Model/Usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  usuario: Usuario; 
  formResult: string = '';

  constructor(private fb: FormBuilder) { 

  }

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      //elementos do formulário
     
      nome: ['', Validators.required  ],
      cpf: [''],
      email: ['',[Validators.required, Validators.email]]
    });
  }

  adicioanarUsuario() { 
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      this.formResult = JSON.stringify(this.cadastroForm.value);
    } else { 
      this.formResult = "Não submeteu!!"
    }
  }

}
