import {
  Directive,
  HostListener,
  ElementRef,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropDownDirective {
  @HostBinding('class.open') isOpen: boolean;

  @HostListener('click') click() {
    this.isOpen = !this.isOpen;
  }
}
