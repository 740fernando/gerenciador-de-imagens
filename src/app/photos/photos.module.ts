import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';




@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotosComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class PhotosModule { }


/**
 * Nele, criaremos um módulo que irá declarar não só PhotoComponent, mas todos os outros componentes que dizem respeito a imagens, e app.module.ts importará este módulo nele mesmo.

Componentes declarados no array declarations de um módulo são visíveis para os componentes também declarados no array.

Um componente obrigatoriamente precisa pertencer a um módulo.
 * */
