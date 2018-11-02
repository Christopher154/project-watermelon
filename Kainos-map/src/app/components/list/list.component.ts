import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { Course } from '../../classes/course';
import { SwitchboardService } from 'src/app/switchboard.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

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

  constructor(dataService: DataService, switchboard: SwitchboardService,private router: Router) { 
    this.data = dataService;
    this.switchboard = switchboard;
  }

  ngOnInit() {
    this.retrieveCourses()
  }

  retrieveCourses() {
    this.data.getCourses().subscribe((data)=> {
      this.courses = data;
    })
  }

  onSelect (newCourse: Course): void {
    this.thisCourse = newCourse;
    this.switchboard.switchCourse(this.thisCourse);
    console.log('ABout to navigate')
    this.router.navigate([`/course/${newCourse.id}`])
  }

}
