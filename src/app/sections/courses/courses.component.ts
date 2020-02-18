import { Component, OnInit } from '@angular/core';
import { faCommentAlt, faUsers, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  comments = faCommentAlt;
  users = faUsers;
  clock = faClock;
  constructor() { }

  ngOnInit(): void {
  }

}
