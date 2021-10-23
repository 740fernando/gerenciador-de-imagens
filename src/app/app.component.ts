import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to NttDatapic';
  description = 'Everis';
  url = "assets/everis.jpg"
}


//Se abrirmos app.component.html, encontraremos o código referente à apresentação que vemos na página do navegador.Então, o Angular carregará, exibindo o primeiro componente, e seu template.Voltando a app.component.ts, o styleUrls: ['./app.component.css'] informa onde se localiza o CSS utilizado por este componente.


/* 
    -Utilizamos {{ }} dentro de tags e [ ] para atributos

    -Assim, ao salvarmos e voltarmos ao navegador, teremos o título e a imagem sendo exibidos na página.
    O que acabamos de fazer é denominado One way data binding ("data binding unidirecional"), isto porque os
    dados saem do componente, da fonte de dados, e vão para o template, no entanto não fazem o caminho contrário,
    e é importante frisarmos isto.

    -Reparem que, ao usarmos os colchetes, url e title se tornam expressões que o Angular sabe que precisa buscar
    no componente ao qual o template está associado. Se deixarmos sem os colchetes, uma vez que não fazemos Data
    binding, isto é, não avaliamos uma expressão, o valor de src será a string url, enquanto o de alt será o texto
    title, e não o valor title.
  

    Vamos observar a nomenclatura dos arquivos criados pelo Angular CLI, focando em app.component.ts. O nome do arquivo .ts no qual iremos programar o nosso componente é todo em lower case, ou seja, em caixa baixa, e seguido por .component. Trata-se de uma convenção que não podemos deixar de seguir.

Se quiséssemos criar um menubar.component.ts e, no nome do menu utilizarmos Pascal Case, ficaria MenubarComponent, mesma definição que ocorre em Java, C# e afins. Outro exemplo é que caso o nome do componente seja calopsita, usaremos calopsita.component.ts, e o nome da classe será CalopsitaComponent.

O template segue a mesma regra; o template do componente possui uma url, que precisa ser o mesmo nome do arquivo .ts, porém sua extensão é .html, claro, para deixar a identificação muito clara e bem definida. O mesmo ocorre com o arquivo .css.

Esta convenção está disponível no site com a sua documentação. Na época do Angular 1, existia o padrão criado por John Papa, que abdicou de definir um padrão para a versão seguinte do Angular, e contribuiu, juntamente com outros desenvolvedores, no padrão adotado pelo site do Angular.

Existem outras convenções que veremos conforme forem aparecendo em nosso projeto. A seguir, criaremos nosso primeiro componente.

Para arquivos usamos menubar.component.ts, no nome usamos MenubarComponent
 *
 * */
