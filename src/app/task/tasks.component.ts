import { Component, OnInit } from '@angular/core';

@Component({
    
    selector: 'tasks',
    templateUrl:`./app/task/tasks.component.html`
	
})

export class TasksComponent {
    
       title: string = "Task app";
	   
       imgWidth : number =50;
       
       designers : any[] = [
				{
					
					"DesignerBookName": "PPD wire bound High quality",
					"DesignerBooPrice": 1234,
					"DesignerBookreleaseDate": "Jan 19, 2017",
					"DesignerBooCode":"GDN-0011",
					"DesignerBooKdescription": "PPD wire bound High quality notebook.",
					"imageUrl": "../images/01.jpg"
				},
				{
					
					"DesignerBookName": " Interior Design Course",
					"DesignerBooPrice": 5678,
					"DesignerBookreleaseDate": "March 18, 2017",
					"DesignerBooCode":"GDN-0012",
					"DesignerBooKdescription": "Interior Design Course: Principles, Practices.",
					"imageUrl": "../images/02.jpg"
				},
				{
					
					"DesignerBookName": "The Non-Designer's Design Book",
					"DesignerBooPrice": 3214,
					"DesignerBookreleaseDate": "May 21, 2017",
					"DesignerBooCode":"GDN-0013",
					"DesignerBooKdescription": "Path Finder Finder - A Job Designer.",
					"imageUrl": "../images/03.jpg"
				},
				{
					
					"DesignerBookName": "Fashion Designer",
					"DesignerBooPrice": 2541,
					"DesignerBookreleaseDate": "May 15, 2017",
					"DesignerBooCode":"GDN-0014",
					"DesignerBooKdescription": "Notebook. Designer Wire bound ruled paper.",
					"imageUrl": "../images/04.jpg"
				},
				{
					
					"DesignerBookName": "Thinking with Type",
					"DesignerBooPrice": 1849,
					"DesignerBookreleaseDate": "October 15, 2017",
					"DesignerBooCode":"GDN-0015",
					"DesignerBooKdescription": "Thinking with Type, 2nd revised and expanded edition).",
					"imageUrl": "../images/05.jpg"
				}
			]
            
 
}