// Importando os módulos necessários
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from '../../../models/cliente.models';
import { HttpClient } from '@angular/common/http';

// Decorador do componente
@Component({
  selector: 'app-cliente-atualizar', // Seletor do componente
  templateUrl: './cliente-atualizar.component.html', // Caminho para o arquivo de template do componente
  styleUrl: './cliente-atualizar.component.css' // Caminho para o arquivo de estilos do componente
})
export class ClienteAtualizarComponent {
  cliente : Cliente | undefined; // Variável para armazenar o cliente a ser atualizado

  constructor(
    private client: HttpClient,){} // Injeção de dependência do HttpClient

    ngOnInit() : void{ // Método chamado quando o componente é inicializado
      console.log("O componente foi carregado!");

      // Requisição GET para obter o cliente
      this.client.get<Cliente>("https://localhost:7254/api/cliente/{id}") // Substitua {id} pelo id do cliente que você deseja atualizar
        .subscribe({
          // Requisição com sucesso
          next: (cliente) => {
            this.cliente = cliente;
            console.log(cliente);
          },
          // Requisição com erro
          error: (erro) => {
            console.log(erro);
          }
        })
    }

    atualizarCliente() : void { // Método para atualizar o cliente
      // Requisição PUT para atualizar o cliente
      this.client.put("https://localhost:7254/api/cliente/{id}", this.cliente) // Substitua {id} pelo id do cliente que você deseja atualizar
        .subscribe({
          // Requisição com sucesso
          next: () => {
            console.log("Cliente atualizado com sucesso!");
          },
          // Requisição com erro
          error: (erro) => {
            console.log(erro);
          }
        })
    }
}
