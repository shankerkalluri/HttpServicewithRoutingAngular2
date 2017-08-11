import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';    

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import {TasksComponent} from './task/tasks.component';
import {AddTaskComponent} from './task/addtask.component';
import {DataBaseComponent} from './task/database.component';

import { app_routing } from './app.routing';
import {DataService} from './shared/data.service';
import {ProductService} from './shared/product.service';

@NgModule({
  imports:      [ BrowserModule, app_routing,   HttpModule],
  declarations: [ AppComponent,TasksComponent, HomeComponent, AddTaskComponent, DataBaseComponent],
  providers:    [DataService, ProductService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }