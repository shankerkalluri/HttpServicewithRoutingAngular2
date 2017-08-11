import {Component, OnInit} from '@angular/core';
import {ProductService} from '../shared/product.service';


@Component({
    
    selector:'database',
    templateUrl:'/app/task/database.component.html',
    providers: [ProductService]

})

export class DataBaseComponent implements OnInit{

    title: string = 'Data Base'
    
    imgWidth : number =50;
	imgMargin : number =2;
    
    tasks: any[] = [];
    
    constructor(private _productService: ProductService){}
    
    ngOnInit(){
    
         this._productService.getDetails().subscribe(data =>this.tasks = data);
    }
        
}