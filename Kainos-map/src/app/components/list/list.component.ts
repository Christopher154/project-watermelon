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

  constructor(dataService: DataService) { 
    this.data = dataService
  }

  ngOnInit() {
    this.retrieveCourses()
  }

  retrieveCourses() {
    this.data.getCourses().subscribe(data => {
      this.courses = data
    })
  }

  onSelect (newCourse: Course): void {
    this.thisCourse = newCourse;
    this.switchboard.switchCourse(this.thisCourse);
  }

}
