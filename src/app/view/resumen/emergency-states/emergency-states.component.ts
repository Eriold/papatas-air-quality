import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emergency-states',
  templateUrl: './emergency-states.component.html',
  styleUrls: ['./emergency-states.component.css']
})
export class EmergencyStatesComponent implements OnInit {
  numberEmergency: number;
  constructor() {

    this.numberEmergency = 3;
  }

  ngOnInit() {
  }

}
