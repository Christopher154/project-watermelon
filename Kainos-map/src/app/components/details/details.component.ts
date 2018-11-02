import { Component, OnInit, Input } from '@angular/core';
import { SwitchboardService } from 'src/app/switchboard.service';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/classes/course';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  switchboard: SwitchboardService;


  constructor(switchboard: SwitchboardService, private modalService: NgbModal) {
    this.switchboard = switchboard;
   }

  subCourse: Subscription;
  ngOnInit(): void{
    this.subCourse = this.switchboard.course$.subscribe((c) => {
      this.course =c;
    });
    console.log("I do actually run")
  }

  

  ngOnDestroy(): void {
    this.subCourse.unsubscribe();
  }

  @Input() course: Course;

}
