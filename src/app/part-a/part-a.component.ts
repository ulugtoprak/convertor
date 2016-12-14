import { Component, OnInit } from '@angular/core';
import { Location} from "@angular/common";

@Component({
  selector: 'app-part-a',
  templateUrl: './part-a.component.html',
  styleUrls: ['./part-a.component.css']
})
export class PartAComponent implements OnInit {

  constructor(private location: Location) { }



  ngOnInit() {
  }

  celcius: number = null;
  fahrenheit: number = null;
  count: number = 0;

  convertCelcius() {
    this.fahrenheit = this.celcius* 9 / 5 + 32;
    this.count++;
  }

  convertFahrenheit() {
    this.celcius  = (this.fahrenheit -32) * 5 / 9;
    this.count++;
  }
}
