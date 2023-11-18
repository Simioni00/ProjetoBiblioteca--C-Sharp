// Importando os módulos necessários
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Livro } from '../../../models/livros.models';
import { HttpClient } from '@angular/common/http';

// Decorador do componente
@Component({
  selector: 'app-livro-cadastrar', // Seletor do componente
  templateUrl: './livro-cadastrar.component.html', // Caminho para o arquivo de template do componente
  styleUrl: './livro-cadastrar.component.css' // Caminho para o arquivo de estilos do componente
})
export class LivroCadastrarComponent {
  livro : Livro | undefined; // Variável para armazenar o novo livro a ser cadastrado

  constructor(
    private client: HttpClient,){} // Injeção de dependência do HttpClient

    ngOnInit() : void{ // Método chamado quando o componente é inicializado
      console.log("O componente foi carregado!");
    }

    cadastrarLivro() : void { // Método para cadastrar o novo livro
      // Verifica se o livro foi definido
      if (this.livro) {
        // Requisição POST para cadastrar o novo livro
        this.client.post("https://localhost:7254/api/livro", this.livro)
          .subscribe({
            // Requisição com sucesso
            next: () => {
              console.log("Livro cadastrado com sucesso!");
            },
            // Requisição com erro
            error: (erro) => {
              console.log(erro);
            }
          })
      } else {
        console.log('Livro não definido');
      }
    }
}
