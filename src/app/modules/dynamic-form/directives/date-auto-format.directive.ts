import { Directive, ElementRef, HostListener, NgZone } from '@angular/core';

@Directive({
  selector: '[appDateAutoFormat]',
  standalone: true,
})
export class DateAutoFormatDirective {
  private isProgrammaticallyChanged = false;

  constructor(private el: ElementRef, private ngZone: NgZone) {}

  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    if (this.isProgrammaticallyChanged) {
      return;
    }
    let value = event.target.value.replace(/\D/g, '');
    let formattedValue = '';

    if (value.length > 10) {
      value = value.substring(0, 10);
    }

    if (value.length > 0) {
      formattedValue += value.substring(0, 2);
    }
    if (value.length > 2) {
      formattedValue += '/' + value.substring(2, 4);
    }
    if (value.length > 4) {
      formattedValue += '/' + value.substring(4, 8);
    }

    const currentPos = event.target.selectionStart;

    this.isProgrammaticallyChanged = true;

    this.el.nativeElement.value = formattedValue;

    if (event.inputType === 'deleteContentBackward') {
      event.target.setSelectionRange(currentPos, currentPos);
    }

    this.ngZone.run(() => {
      event.target.dispatchEvent(new Event('input'));
    });

    this.isProgrammaticallyChanged = false;
  }
}
