import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { Course } from '../../classes/course';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  courses: Course[];
  data: DataService;

  constructor(dataService: DataService) { 
    this.data = dataService;
    
  }

  ngOnInit() {
    this.retrieveCourses()
  }

  retrieveCourses() {
    this.data.getCourses().subscribe((data)=> {
      this.courses = data;
      console.log(this.courses)
    })
  }

}
