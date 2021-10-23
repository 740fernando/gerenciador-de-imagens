import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";


@NgModule({
  declarations: [PhotoComponent],
  exports:[PhotoComponent]
})
export class PhotosModule { }


/**
 * Nele, criaremos um módulo que irá declarar não só PhotoComponent, mas todos os outros componentes que dizem respeito a imagens, e app.module.ts importará este módulo nele mesmo.

Componentes declarados no array declarations de um módulo são visíveis para os componentes também declarados no array.

Um componente obrigatoriamente precisa pertencer a um módulo.
 * */
