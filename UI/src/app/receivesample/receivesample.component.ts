import { Component, OnInit , ViewChild,Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Http, Response, HttpModule, Headers, RequestOptions } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-receivesample',
  templateUrl: './receivesample.component.html',
  styleUrls: ['./receivesample.component.css']
})
export class ReceivesampleComponent implements OnInit {
  @ViewChild('form') public userForm: NgForm;
  public sample_name : string ;
  data; formValues; uIFields;
  constructor(public http: Http, private router: Router, private sanitizer: DomSanitizer) {
    // Load locations from datastore
    this.loadUIFields(); 
    this.loadLocations();
    
    
  }
  loadUIFields (){
    this.http.get("http://192.168.40.1:3000/lloc/recvSampUIFields").subscribe((data) => {
      console.log("in /lloc/locations avail-sample component------>"+data);
      this.uIFields = data.json() ;
     
      });
      
  }

  ngOnInit() {
    
  }
  loadLocations(){
    this.http.get("http://192.168.40.1:3000/lloc/locations").subscribe((data) => {
      console.log("in /lloc/locations------>"+data);
      this.data = data.json() ;
     // this.sample_name =  "sample878787";
      //this.userForm.controls['sample_name'].setValue(this.sample_name);
      });
     
                 
}


submitRs(userForm){
  this.formValues = userForm;
  console.log(this.formValues);
 
  if ($("#sampleName").val() == "" || $("#rslocation").val() == "" || 
        $("#sampleName").val() == null || $("#rslocation").val() == null)
      {
        alert("Please enter all required fields"); 
      }
  //alert("Status change submitted successfully");
  //To Do - Change the sample status

}
cancelrs(){
  alert("Are you sure you want to Cancel");
  this.router.navigateByUrl("mainlanding");
}

}
