import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormsModule, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Http, Response, HttpModule, Headers, RequestOptions } from '@angular/http';
import { NgForm,FormGroup } from '@angular/forms';
import * as $ from "jquery";


@Component({
  selector: 'app-avail-sample',
  templateUrl: './avail-sample.component.html',
  styleUrls: ['./avail-sample.component.css']
})
export class AvailSampleComponent implements OnInit{
  @ViewChild('form') public userForm: NgForm;
  uIFields; locations; uiLocOptions; formValues; selectedSampleList;
  public sampleName : string ;
  constructor(public http: Http, private router: Router, private sanitizer: DomSanitizer) {
      this.loadUIFields(); 
      this.loadLocations();
      this.loadsamples();

      console.log("Got the sampleList in avail sample=====>>>>>"+localStorage.getItem("selSampleListFromLanding"));
      
      
  }

  /*loadsamples(){

    let headers = new Headers({
      'Content-Type': 'application/json'
  });

  let options = new RequestOptions({
      headers: headers
  });
  let body = {"status":"RECEIVED"};
    this.http.post("http://192.168.40.1:3000/lloc/sampleList",body, options ).subscribe((samples) => {
      console.log("in /lloc/locations------>"+samples);
      this.sampleList = samples.json() ;
      }); 
   
  }*/
  loadsamples() {
    this.selectedSampleList = JSON.parse(localStorage.getItem("selSampleListFromLanding"));
    console.log("loadSamples===>"+localStorage.getItem("selSampleListFromLanding"));
  }
  loadLocations(){
    this.http.get("http://192.168.40.1:3000/lloc/locations").subscribe((data) => {
    console.log("in /lloc/locations------>"+data);
    this.locations = data.json() ;
   
    });
  }
  loadUIFields (){
    this.http.get("http://192.168.40.1:3000/lloc/availSampUIFields").subscribe((data) => {
      console.log("in /lloc/locations avail-sample component------>"+data);
      this.uIFields = data.json() ;
     
      });
      
  }
  addSample(formvalue) {

    alert("In addSample() method"+JSON.stringify(formvalue));
    if(($("#sampleName").val() == "" || $("#sampleName").val() == null) &&
    ($("#aslocation").val() == "" || $("#aslocation").val() == null)){
      alert("Please enter required fields");
    }
    else if ($("#sampleName").val() == "" || $("#sampleName").val() == null)
    {
    
    alert("Please enter Sample Name"); 
    }
    else if($("#aslocation").val() == "" || $("#aslocation").val() == null){
    alert("Please select a Location");
    }
   
  }

  ngOnInit() {
    
  }
 

  submitavailSample(userForm){
    this.formValues = userForm;
    console.log(this.formValues);
    
  }
  cancelas(){
    alert("Are you sure you want to Cancel");
    localStorage.removeItem("selSampleListFromLanding");
    this.router.navigateByUrl("mainlanding");

  }

}
