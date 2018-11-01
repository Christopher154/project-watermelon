import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { Course } from '../../classes/course';
import { SwitchboardService } from 'src/app/switchboard.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  courses: Course[];
  data: DataService;
  switchboard: SwitchboardService
  thisCourse: Course;

  constructor(dataService: DataService, switchboard: SwitchboardService) { 
    this.data = dataService;
    this.switchboard = switchboard;
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

  onSelect (newCourse: Course): void {
    console.log(this.thisCourse);
    this.thisCourse = newCourse;
    this.switchboard.switchCourse(this.thisCourse);
  }

}
