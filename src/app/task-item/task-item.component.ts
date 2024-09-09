import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskStatusDirective } from '../task-status.directive';
import { HoverEffectDirective } from '../hover-effect.directive';
import { HighlightTaskDirective } from '../highlight-task.directive';
@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [TaskStatusDirective, HoverEffectDirective, HighlightTaskDirective],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: { id:number, title: string, completed: boolean } = { id: 0, title: "", completed: false };

  // Output to emit an event when a task is deleted
  @Output() deleteTask = new EventEmitter<number>();

  // Method to emit the event
  onDelete() {
    this.deleteTask.emit(this.task.id);
  }

  onToggleComplete() {
    this.task.completed = !this.task.completed;
  }
}
