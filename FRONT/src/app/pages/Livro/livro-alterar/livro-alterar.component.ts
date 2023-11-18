// Importando os módulos necessários
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Livro } from '../../../models/livros.models';
import { HttpClient } from '@angular/common/http';

// Decorador do componente
@Component({
  selector: 'app-livro-atualizar', // Seletor do componente
  templateUrl: './livro-atualizar.component.html', // Caminho para o arquivo de template do componente
  styleUrls: ['./livro-atualizar.component.css'] // Caminho para o arquivo de estilos do componente
})
export class LivroAtualizarComponent {
  livro : Livro | undefined; // Variável para armazenar o livro a ser atualizado

  constructor(
    private client: HttpClient,){} // Injeção de dependência do HttpClient

    ngOnInit() : void{ // Método chamado quando o componente é inicializado
      console.log("O componente foi carregado!");

      // Requisição GET para obter o livro
      this.client.get<Livro>("https://localhost:7254/api/livro/{id}") // Substitua {id} pelo id do livro que você deseja atualizar
        .subscribe({
          // Requisição com sucesso
          next: (livro) => {
            this.livro = livro;
            console.log(livro);
          },
          // Requisição com erro
          error: (erro) => {
            console.log(erro);
          }
        })
    }

    atualizarLivro() : void { // Método para atualizar o livro
      // Requisição PUT para atualizar o livro
      this.client.put("https://localhost:7254/api/livro/{id}", this.livro) // Substitua {id} pelo id do livro que você deseja atualizar
        .subscribe({
          // Requisição com sucesso
          next: () => {
            console.log("Livro atualizado com sucesso!");
          },
          // Requisição com erro
          error: (erro) => {
            console.log(erro);
          }
        })
    }
}

