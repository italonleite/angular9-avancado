import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Usuario } from './Model/Usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  usuario: Usuario; 
  
  constructor(private fb: FormBuilder) { 

  }

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      //elementos do formulário
     
      nome: [''],
      cpf: [''],
      email: [''],
    });
  }

  adicioanarUsuario() { 
    this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
  }

}
