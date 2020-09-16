import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLoaderDirective]',
})
export class LoaderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
