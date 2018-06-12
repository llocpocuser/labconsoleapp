import { Component, OnInit ,ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Http, Response, HttpModule, Headers, RequestOptions } from '@angular/http';


@Component({
  selector: 'app-mainlanding',
  templateUrl: './mainlanding.component.html',
  styleUrls: ['./mainlanding.component.css']
})


export class MainlandingComponent implements OnInit {
  data;form;modules; sampleItem; selectedSampleList = [];

  @ViewChild('form') public userForm: NgForm;
  constructor(public http: Http, private router: Router, private sanitizer: DomSanitizer) {
    this.loadlandingscreen();
   
    
}


 
  loadlandingscreen(){

    let headers = new Headers({
      'Content-Type': 'application/json'
  });

  let options = new RequestOptions({
      headers: headers
  });
  let body = {};
    this.http.post("http://192.168.40.1:3000/lloc/sampleList",body, options ).subscribe((samples) => {
      console.log("in /lloc/locations------>"+samples);
      this.data = samples.json() ;
      }); 
   
  }
  receiveSample(formvalues){
    alert("receiveSample===>"+JSON.stringify(formvalues));
   this.router.navigateByUrl("receivesample");
  }
  makeAvailable(formvalues){
    console.log("in make available"+JSON.stringify(formvalues));
    console.log(formvalues.SAMPLE_NAME)
    this.router.navigateByUrl("availsample");
  }
  approveSample() {
   
    this.router.navigateByUrl("approvesample");
  }
  addToSampleList(sampleItem) {
    
    alert(JSON.stringify(sampleItem));
  this.selectedSampleList.push(sampleItem);
  console.log(this.selectedSampleList);
  localStorage.setItem("selSampleListFromLanding", 
      JSON.stringify(this.selectedSampleList ));
  }
  
  ngOnInit() {
  }

  

}

