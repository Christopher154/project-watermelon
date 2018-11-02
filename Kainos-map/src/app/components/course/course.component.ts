import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { Course } from '../../classes/course';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  id: String
  data: DataService
  course: Course

  constructor(dataService: DataService, router: Router, private route: ActivatedRoute) { 
    this.data = dataService
  }

  ngOnInit() {
    this.fetchCourse()
  }

  fetchCourse() {
    this.route.params.subscribe(params => {
      this.data.getCourseById(params.id).subscribe(data => {
        this.course = data;
        console.log(data)
      })
    })
  }

}
