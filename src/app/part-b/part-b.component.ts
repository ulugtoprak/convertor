import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-part-b',
  templateUrl: './part-b.component.html',
  styleUrls: ['./part-b.component.css']
})
export class PartBComponent implements OnInit {

  constructor(private router: Router) { }

  navigateB() {
        this.router.navigate(["part-b"]);
    }
    navigateHome() {
        this.router.navigate(["home"]);
    }

  ngOnInit() {
  }

}
