import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from '../../../models/cliente.models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cliente-listar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cliente-listar.component.html',
  styleUrl: './cliente-listar.component.css'
})
export class ClienteListarComponent {
  clientes : Cliente [] = []

  constructor(
    private client: HttpClient,){}

    ngOnInit() : void{
      console.log("O componente foi carregado!");

      this.client.get<Cliente[]>("https://localhost:7254/cliente")
        .subscribe({
          //Requisição com sucesso
          next: (clientes) => {
            this.clientes = clientes;
            console.table(clientes);
          },
          //Requisição com erro
          error: (erro) => {
            console.log(erro);
          }
        })
    }
}
