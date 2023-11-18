import { NgModule } from "@angular/core";   
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ClienteListarComponent } from "./pages/Cliente/cliente-listar/cliente-listar.component";


@NgModule({
    declarations: [
        AppComponent,
        ClienteListarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}