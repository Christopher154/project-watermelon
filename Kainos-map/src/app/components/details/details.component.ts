import { Component, OnInit, Input } from '@angular/core';
import { SwitchboardService } from 'src/app/switchboard.service';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/classes/course';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  switchboard: SwitchboardService;


  constructor(switchboard: SwitchboardService) {
    this.switchboard = switchboard;
   }

  subCourse: Subscription;
  ngOnInit(): void{
    this.subCourse = this.switchboard.course$.subscribe((c) => {
      this.course =c;
    });
  }

  @Input() course: Course;

}
