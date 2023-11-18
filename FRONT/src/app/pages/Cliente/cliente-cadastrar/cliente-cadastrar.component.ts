// Importando os módulos necessários
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from '../../../models/cliente.models';
import { HttpClient } from '@angular/common/http';

// Decorador do componente
@Component({
  selector: 'app-cliente-cadastrar', // Seletor do componente
  templateUrl: './cliente-cadastrar.component.html', // Caminho para o arquivo de template do componente
  styleUrl: './cliente-cadastrar.component.css' // Caminho para o arquivo de estilos do componente
})
export class ClienteCadastrarComponent {
  cliente : Cliente | undefined; // Variável para armazenar o novo cliente a ser cadastrado

  constructor(
    private client: HttpClient,){} // Injeção de dependência do HttpClient

    ngOnInit() : void{ // Método chamado quando o componente é inicializado
      console.log("O componente foi carregado!");
    }

    cadastrarCliente() : void { // Método para cadastrar o novo cliente
      // Verifica se o cliente foi definido
      if (this.cliente) {
        // Requisição POST para cadastrar o novo cliente
        this.client.post("https://localhost:7254/api/cliente", this.cliente)
          .subscribe({
            // Requisição com sucesso
            next: () => {
              console.log("Cliente cadastrado com sucesso!");
            },
            // Requisição com erro
            error: (erro) => {
              console.log(erro);
            }
          })
      } else {
        console.log('Cliente não definido');
      }
    }
}
