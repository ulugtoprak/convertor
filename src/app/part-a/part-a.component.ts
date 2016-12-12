import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import * as $ from 'jquery';


//declare var jQuery:any;


@Component({
  selector: 'app-part-a',
  templateUrl: './part-a.component.html',
  styleUrls: ['./part-a.component.css']
})
export class PartAComponent implements OnInit {
count: number = 0;
  constructor(private router: Router) { }

	convertor(){
	this.count++;
	var check = true;
	$("#fahrenheit").keyup(function()
	{
		while(check)
		{
			if( $("#fahrenheit").val() )
			{
				var f = parseFloat($("#fahrenheit").val());
				$("#celcius").val((f - 32) * 5 / 9);
				check = false;

			}
			else
			{
				check = false;
			}
		}
		check = true;
	});
	
	$("#celcius").keyup(function()
	{	 
		while(check)
		{
			if( $("#celcius").val() )
			{
				var f = parseFloat($("#celcius").val());
				$("#fahrenheit").val((f * 9 / 5) + 32 ); 
				check = false;
			}
			else
			{
				check = false;
			}
	}
	check = true;
	});
	}
  ngOnInit() {
  }
}



