import { AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { LoaderDirective } from './loader.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  // @ViewChild('container') container: any;
   @ViewChild('container', {read: ViewContainerRef }) container: ViewContainerRef;
   @ViewChild(LoaderDirective) containerDirective: LoaderDirective;

   constructor(
     //private componentFactoryResolver: ComponentFactoryResolver
   ){}

  ngAfterViewInit() {
    console.log("@ViewChild")
    console.log(this.container.createComponent)

    console.log("@ViewChild + Directive")
    console.log(this.containerDirective.viewContainerRef.createComponent)

  }
}
