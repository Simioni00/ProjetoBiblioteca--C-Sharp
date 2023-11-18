import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClienteListarComponent } from "./pages/Cliente/cliente-listar/cliente-listar.component";
import { ClienteCadastrarComponent } from "./pages/Cliente/cliente-cadastrar/cliente-cadastrar.component";
import { ClienteAtualizarComponent } from "./pages/Cliente/cliente-alterar/cliente-alterar.component";

const routes: Routes = [
    {
        path: "",
        component: ClienteListarComponent,
    },
    {
        path:"pages/Cliente/cliente-listar",
        component: ClienteListarComponent,
    },
    {
        path:"pages/Cliente/cliente-cadastrar",
        component: ClienteCadastrarComponent,
    },
    {
        path:"pages/Cliente/cliente-alterar",
        component: ClienteAtualizarComponent,
    }

];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
    })
export class AppRoutingModule {}