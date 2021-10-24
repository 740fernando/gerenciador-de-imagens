import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PhotoFormModule } from './photo-form/photo-form-module';
import { PhotoListModule } from './photo-list/photo-list-module';
import { PhotoModule } from './photo/photo.module';




@NgModule({
  imports: [
    PhotoModule,
    PhotoFormModule,
    PhotoListModule
   ]
})
export class PhotosModule { }


/**
 * Nele, criaremos um módulo que irá declarar não só PhotoComponent, mas todos os outros componentes que dizem respeito a imagens, e app.module.ts importará este módulo nele mesmo.

Componentes declarados no array declarations de um módulo são visíveis para os componentes também declarados no array.

Um componente obrigatoriamente precisa pertencer a um módulo.
 * */
