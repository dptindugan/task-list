import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightTask]',
  standalone: true
})
export class HighlightTaskDirective implements OnChanges {
  @Input() appHighlightTask: boolean = false; // Input property to determine if task is completed

  @HostBinding('class.completed') isCompleted: boolean = false; // Bind the class 'completed' to the host element

  ngOnChanges(changes: SimpleChanges) {
    if (changes['appHighlightTask']) {
      this.isCompleted = this.appHighlightTask;
    }
  }
}
