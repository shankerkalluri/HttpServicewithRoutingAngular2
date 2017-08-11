import { RouterModule, Routes } from '@angular/router';
import {TasksComponent} from './task/tasks.component';
import {AddTaskComponent} from './task/addtask.component';
import { HomeComponent }     from './home/home.component';
import {DataBaseComponent} from './task/database.component';

const app_routes: Routes = [
  { path: '',  pathMatch:'full', redirectTo: '/home' },
  
  { path: 'home',  component: HomeComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'addtask', component: AddTaskComponent },
  { path: 'database', component: DataBaseComponent }
  
    
];	

export const app_routing = RouterModule.forRoot(app_routes);