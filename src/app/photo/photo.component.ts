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
