import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
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
    let x = this.cadastroForm.value;
  }

}
