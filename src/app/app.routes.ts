import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: TaskListComponent }
];