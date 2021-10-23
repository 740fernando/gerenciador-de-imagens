import { Input } from "@angular/core";
import { Component } from "@angular/core";

@Component({
  selector: 'ep-photo',
  templateUrl: 'photo.component.html'
})
export class PhotoComponent {
  @Input() description = '';
  @Input() url = '';

}
/**
 *Permite que o componente receba valores externos quando usado na forma declarativa no template de outros
 * componentes.
 * 
 **/
