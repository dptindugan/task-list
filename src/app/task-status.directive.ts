import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appTaskStatus]',
  standalone: true
})
export class TaskStatusDirective implements OnChanges {
  @Input() appTaskStatus: boolean = false;

  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['appTaskStatus']) {
      this.updateBackgroundColor();
    }
  }

  private updateBackgroundColor() {
    if(this.appTaskStatus) {
      this.el.nativeElement.style.backgroundColor = 'lightgreen';
    } else {
      this.el.nativeElement.style.backgroundColor = 'lightcoral';
    }
  }
}
