import {Injectable } from '@angular/core';

@Injectable()

export class DataService {

    
    
    constructor() { }
    
    getProjectName() {
        return 'Books and DVD';
    }
	
		
	getTasks(): any {
	
		return[
			{
					
					"dvdName": "Asus Internal DVD",
					"dvdPrice": 1139,
					"dvdreleaseDate": "Jan 19, 2017",
					"dvdCode":"GDN-0011",
					"dvddescription": "Asus Internal DVD Writer DRW-24D5MT.",
					"imageUrl": "../images/211.jpg"
				},
				{
					
					"dvdName": " HP external USB DVD Drive",
					"dvdPrice": 19059,
					"dvdreleaseDate": "March 18, 2017",
					"dvdCode":"GDN-0012",
					"dvddescription": "HP external USB DVD Drive DVDRW DVD.",
					"imageUrl": "../images/311.jpg"
				},
				{
					
					"dvdName": "Palace of Illusions33",
					"dvdPrice": 1560,
					"dvdreleaseDate": "May 21, 2017",
					"dvdCode":"GDN-0013",
					"dvddescription": "Harry Potter and Child Parts .",
					"imageUrl": "../images/411.jpg"
				},
				{
					
					"dvdName": "LG GH24NSD1 Internal",
					"dvdPrice": 456,
					"dvdreleaseDate": "May 15, 2017",
					"dvdCode":"GDN-0014",
					"dvddescription": "LG GH24NSD1 Internal SATA DVD Writer.",
					"imageUrl": "../images/511.jpg"
				},
				{
					
					"dvdName": "Dell USB DVD drive",
					"dvdPrice": 1849,
					"dvdreleaseDate": "October 15, 2017",
					"dvdCode":"GDN-0015",
					"dvddescription": "Dell USB DVD drive DVD+/-RW (DW316).",
					"imageUrl": "../images/611.jpg"
				}
		
		
	]
	
	}	
  


}