// Importando os módulos necessários
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Funcionario } from '../../../models/funcionario.models'; // Substituído Cliente por Funcionario
import { HttpClient } from '@angular/common/http';

// Decorador do componente
@Component({
  selector: 'app-funcionario-listar', // Substituído cliente por funcionario
  templateUrl: './funcionario-listar.component.html', // Substituído cliente por funcionario
  styleUrl: './funcionario-listar.component.css' // Substituído cliente por funcionario
})
export class FuncionarioListarComponent { // Substituído Cliente por Funcionario
  funcionarios : Funcionario [] = [] // Substituído clientes por funcionarios e Cliente por Funcionario

  constructor(
    private client: HttpClient,){}

    ngOnInit() : void{
      console.log("O componente foi carregado!");

      this.client.get<Funcionario[]>("https://localhost:7254/api/funcionario") // Substituído cliente por funcionario
        .subscribe({
          //Requisição com sucesso
          next: (funcionarios) => { // Substituído clientes por funcionarios
            this.funcionarios = funcionarios; // Substituído clientes por funcionarios
            console.table(funcionarios); // Substituído clientes por funcionarios
          },
          //Requisição com erro
          error: (erro) => {
            console.log(erro);
          }
        })
    }
}

