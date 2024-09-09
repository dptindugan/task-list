import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
 newTaskTitle: string = '';
 @Output() addTask = new EventEmitter<string>();

 onSubmit() {
  if (this.newTaskTitle.trim()) {
    this.addTask.emit(this.newTaskTitle.trim());
    this.newTaskTitle = '';
  }
 }
}
