import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.cadastroForm = new FormGroup({
      //elementos do formulário
     
      nome: new FormControl(''),
      cpf: new FormControl(''),
      email: new FormControl('')

    });
  }

  adicioanarUsuario() { 
    let x = this.cadastroForm.value;
  }

}
