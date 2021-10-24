import { Input, OnChanges, SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ep-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() { }

    ngOnChanges(changes: SimpleChanges): void {
      if (changes.photos)
        this.rows = this.groupColumns(this.photos);
    }

  groupColumns(photos: Photo[]) {
    const newRows = [];

    for (let index = 0; index < photos.length; index += 3) {
      newRows.push(photos.slice(index, index + 3));
    }
    return newRows;
  }

}
/**
 *Métodos de uma interface deve ser implementados, caso contrário haverá um erro de compilação.
 *
 * Um objeto do tipo SimpleChanges possui uma propriedade de mesmo nome da inbound property que sofreu mudança.
 *
 * O método ngOnChanges, quando chamado pelo próprio framework, recebe como parâmetro uma instância de SimpleChanges
    É através da instância de SimpleChanges que conseguimos saber sobre as mudanças ocorridas nas inbound properties do component.
    
 **/
