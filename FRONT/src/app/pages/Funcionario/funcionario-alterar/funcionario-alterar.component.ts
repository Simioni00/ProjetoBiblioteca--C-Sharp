// Importando os módulos necessários
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Funcionario } from '../../../models/funcionario.models';
import { HttpClient } from '@angular/common/http';

// Decorador do componente
@Component({
  selector: 'app-funcionario-atualizar', // Seletor do componente
  templateUrl: './funcionario-atualizar.component.html', // Caminho para o arquivo de template do componente
  styleUrls: ['./funcionario-atualizar.component.css'] // Caminho para o arquivo de estilos do componente
})
export class FuncionarioAtualizarComponent {
  funcionario : Funcionario | undefined; // Variável para armazenar o funcionário a ser atualizado

  constructor(
    private client: HttpClient,){} // Injeção de dependência do HttpClient

    ngOnInit() : void{ // Método chamado quando o componente é inicializado
      console.log("O componente foi carregado!");

      // Requisição GET para obter o funcionário
      this.client.get<Funcionario>("https://localhost:7254/api/funcionario/{id}") // Substitua {id} pelo id do funcionário que você deseja atualizar
        .subscribe({
          // Requisição com sucesso
          next: (funcionario) => {
            this.funcionario = funcionario;
            console.log(funcionario);
          },
          // Requisição com erro
          error: (erro) => {
            console.log(erro);
          }
        })
    }

    atualizarFuncionario() : void { // Método para atualizar o funcionário
      // Requisição PUT para atualizar o funcionário
      this.client.put("https://localhost:7254/api/funcionario/{id}", this.funcionario) // Substitua {id} pelo id do funcionário que você deseja atualizar
        .subscribe({
          // Requisição com sucesso
          next: () => {
            console.log("Funcionário atualizado com sucesso!");
          },
          // Requisição com erro
          error: (erro) => {
            console.log(erro);
          }
        })
    }
}
