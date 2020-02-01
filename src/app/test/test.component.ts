import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  courses = [{title: 'course 1', id: 1},
    {title: 'course 2', id: 2}];

  constructor() { }

  ngOnInit() {
  }

}
