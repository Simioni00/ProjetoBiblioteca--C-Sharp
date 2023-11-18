import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Livro } from '../../../models/livros.models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-livro-listar',
  templateUrl: './livro-listar.component.html',
  styleUrl: './livro-listar.component.css'
})
export class LivroListarComponent {
  livros : Livro [] = []

  constructor(
    private client: HttpClient,){}

    ngOnInit() : void{
      console.log("O componente foi carregado!");

      this.client.get<Livro[]>("https://localhost:7254/api/livro")
        .subscribe({
          //Requisição com sucesso
          next: (livros) => {
            this.livros = livros;
            console.table(livros);
          },
          //Requisição com erro
          error: (erro) => {
            console.log(erro);
          }
        })
    }
}
