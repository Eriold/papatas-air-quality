import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-emergency-states',
  templateUrl: './emergency-states.component.html',
  styleUrls: ['./emergency-states.component.css']
})
export class EmergencyStatesComponent implements OnInit {

  @Input('numbersEmergency') Emergency: number;
  @Input('numbersAlert') Alert: number;
  @Input('numbersNormal') Normal: number;
  constructor() {
  }

  ngOnInit() {
  }

}
