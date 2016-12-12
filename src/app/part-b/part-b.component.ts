import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-part-b',
  templateUrl: './part-b.component.html',
  styleUrls: ['./part-b.component.css']
})
export class PartBComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  stone: number = null;
  pounds: number = null;
  kg: number = null;
  feet: number = null;
  inches: number = null;
  metres: number = null;
  result: number = 0;
  range: string = null;

poundsToKilos(pounds)
{
	var kilos = pounds / 2.2046;
	return Math.round(kilos);		
}

kilosToPounds(kilos)
{
	var pounds = kilos * 2.2046;
	return Math.round(pounds);
}

to2DecPlaces(value)
{
	//value = value * 100;
	//value = Math.round(value);
	//value = value / 100;
	return Math.round(value * 100) / 100;
}

convertKilos()
{
	var kilos = this.kg;
	var totalPounds = this.kilosToPounds(kilos);
	var pounds = totalPounds % 14;
	var stones = (totalPounds - pounds) / 14;

	// round the pounds because we don't seem to be dealing with ounces
	pounds = Math.round(pounds);
	this.stone = Math.round(stones);
	this.pounds = pounds;	
}

convertPounds()
{
	var stones = this.stone;
	var pounds = this.pounds;
	var totalPounds = (stones * 14) + pounds;
	var kilos = this.poundsToKilos(totalPounds);	

	kilos = this.to2DecPlaces(kilos);
	this.kg = Math.round(kilos);
}

inchesToCM(inches)
{
	var CM = inches * 2.54;
	return Math.round(CM);
}

CMToInches(CM)
{
	var inches = CM / 2.54;
	return Math.round(inches);
}

convertMetres()
{
	var CM = (this.metres) * 100;
	var totalInches = Math.round(this.CMToInches(CM));
	var inches = totalInches % 12;
	var feet = (totalInches - inches) / 12;

	this.feet = Math.round(feet);
	this.inches = Math.round(inches);
}

convertInches()
{
	var inches = this.inches;
	var feet = this.feet;
	var totalInches = (feet * 12) + inches;

	//document.getElementById('ctl00_Content_metres').value = Math.round(to2DecPlaces(inchesToCM(totalInches) / 100));
	this.metres = (this.inchesToCM(totalInches) / 100);
	//alert(document.getElementById('ctl00_Content_metres').value);
}

custRound(x,places) {
  return (Math.round(x*Math.pow(10,places)))/Math.pow(10,places)
}

validateInput()
{
	var CM = (this.metres) * 100;
	var kilos = this.kg;
	if ((!isNaN(CM)) && (!isNaN(kilos)) && (CM > 0) && (kilos > 0)) {
	
	var height2 = CM / 100;
	var BMI = kilos  / (height2 * height2);
	var res=this.custRound(BMI,1);
	//if(res>300-10){res=300-10;}if(res<-10){res=-10;}
		this.result= Math.round(BMI * 100) / 100;
		if(res<18){this.range= "Your estimated BMI is "+ res+ " this is in the underweight range";}
		if(res>=18 && res<=25){this.range= "Your estimated BMI is "+ res+ " this is in the normal range";}
		if(res>25){this.range= "Your estimated BMI is "+ res+ " this is in theoverweight range";}
	}
}

calculateBMI() {
	var CM = (this.metres) * 100;
	var kilos = this.kg;
  
	if ((!isNaN(CM)) && (!isNaN(kilos)) && (CM > 0) && (kilos > 0)) {
  	var height2 = CM / 100;
    var BMI = kilos  / (height2 * height2);
    this.result= Math.round(BMI * 100) / 100;
	
       
  }
  
  return false;
}


}