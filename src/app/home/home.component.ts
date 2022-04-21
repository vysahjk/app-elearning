import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { StreamService } from '../stream.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

    
    constructor(private streamService : StreamService) { 
        
    }
    
    ngOnInit() {
        
        
    }
    
    ngAfterViewInit() {
        
    }
    
    

}
