import { Component } from '@angular/core';
import { TaskItemComponent } from "../task-item/task-item.component";
import { TaskFormComponent } from "../task-form/task-form.component";
import { FormsModule } from '@angular/forms';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
  imports: [TaskItemComponent, TaskFormComponent, FormsModule],
})
export class TaskListComponent {
 tasks = [
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Pay bills', completed: false },
  { id: 3, title: 'Call the doctor', completed: true }
 ];

 constructor(private loggingService: LoggingService) { }

 ngOnInit() {
  this.loggingService.log('TaskListComponent initialized');
 }

 addTask(newTitle: string) {
  const newTask = {
    id: this.tasks.length + 1,
    title: newTitle,
    completed: false,
  };
  this.tasks.push(newTask);
}

 deleteTask(taskId: number) {
  this.tasks = this.tasks.filter(task => task.id !== taskId);
 }
}
