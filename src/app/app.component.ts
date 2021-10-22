import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NttData';
}


//Se abrirmos app.component.html, encontraremos o código referente à apresentação que vemos na página do navegador.Então, o Angular carregará, exibindo o primeiro componente, e seu template.Voltando a app.component.ts, o styleUrls: ['./app.component.css'] informa onde se localiza o CSS utilizado por este componente.
