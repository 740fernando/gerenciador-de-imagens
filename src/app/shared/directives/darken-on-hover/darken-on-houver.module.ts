import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
import { NgModule } from '@angular/core';
import { DarkenOnHoverDirective } from './darken-on-houver.directive';

@NgModule({
  declarations: [DarkenOnHoverDirective],
  exports: [DarkenOnHoverDirective]
})
export class DarkenOnHoverModule {
}
