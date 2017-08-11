import {Component, OnInit} from '@angular/core';
import {DataService} from '../shared/data.service';


@Component({
    selector:'addtask',
    templateUrl:'./app/task/addtask.component.html'
})
export class AddTaskComponent implements OnInit{

    title: string ="Add Task"
    
    imgWidth : number =50;
	imgMargin : number =2;
    
    tasks : any[]=[];
	
	constructor(private dataService: DataService){}
	
	
	ngOnInit(){
	
		this.tasks = this.dataService.getTasks();
	
	}
}