import { Component, OnInit } from '@angular/core';
import { HostListener  } from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  exercises = []

  handleClick(){

  }

  constructor() {

  }

  ngOnInit() {
    fetch(`http://localhost:4000/exercises`).then(response => {
      return response.json()
    }).then(result => this.exercises = result);
  }

}
