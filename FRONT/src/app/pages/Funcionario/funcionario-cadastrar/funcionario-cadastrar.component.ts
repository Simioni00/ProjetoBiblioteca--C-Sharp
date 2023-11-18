// Importando os módulos necessários
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Funcionario } from '../../../models/funcionario.models';
import { HttpClient } from '@angular/common/http';

// Decorador do componente
@Component({
  selector: 'app-funcionario-cadastrar', // Seletor do componente
  templateUrl: './funcionario-cadastrar.component.html', // Caminho para o arquivo de template do componente
  styleUrls: ['./funcionario-cadastrar.component.css'] // Caminho para o arquivo de estilos do componente
})
export class FuncionarioCadastrarComponent {
  funcionario : Funcionario | undefined; // Variável para armazenar o novo funcionário a ser cadastrado

  constructor(
    private client: HttpClient,){} // Injeção de dependência do HttpClient

    ngOnInit() : void{ // Método chamado quando o componente é inicializado
      console.log("O componente foi carregado!");
    }

    cadastrarFuncionario() : void { // Método para cadastrar o novo funcionário
      // Verifica se o funcionário foi definido
      if (this.funcionario) {
        // Requisição POST para cadastrar o novo funcionário
        this.client.post("https://localhost:7254/api/funcionario", this.funcionario)
          .subscribe({
            // Requisição com sucesso
            next: () => {
              console.log("Funcionário cadastrado com sucesso!");
            },
            // Requisição com erro
            error: (erro) => {
              console.log(erro);
            }
          })
      } else {
        console.log('Funcionário não definido');
      }
    }
}

