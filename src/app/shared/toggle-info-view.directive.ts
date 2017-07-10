import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleInfoView]'
})
export class ToggleInfoViewDirective {
  @HostBinding('class.show') isOpen = false;
  
  constructor() { }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
