import { Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-loader-component',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  constructor(
    private viewContainerRef: ViewContainerRef,
    //private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    console.log("Componente")
    console.log(this.viewContainerRef.createComponent)
  }
}
