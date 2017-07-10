import { Directive, Input, TemplateRef, ViewContainerRef, Renderer2, ElementRef} from '@angular/core';

@Directive({
  selector: '[appParticlenode]'
})
export class ParticlenodeDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef, private renderer:Renderer2, private elementRef:ElementRef) { }

  @Input() set appParticlenode(collection:any) {
    //console.info(collection);
    if (collection) {
      this.renderView(collection);
    }
    
  }

  renderView(collection:any[]) {
    console.info(this.elementRef);
    collection.map((item) => {
      //this.templateRef.createEmbeddedView(`<svg:circle> cx="50" cy="50" r="30" fill="yellow"></svg:circle>`);
      this.renderer.createElement('<circle>');
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    });
    
  }
}
