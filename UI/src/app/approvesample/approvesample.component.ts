import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Http, Response, HttpModule, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-approvesample',
  templateUrl: './approvesample.component.html',
  styleUrls: ['./approvesample.component.css']
})
export class ApprovesampleComponent implements OnInit {

  uIFields; formValues;
  constructor(public http: Http, private router: Router, private sanitizer: DomSanitizer) {
    this.loadUIFields();  
    
  }
loadUIFields() {
  this.http.get("http://192.168.40.1:3000/lloc/apprSampUIFields").subscribe((data) => {
      console.log("in ui fields approve sample ------>"+data.json());
      this.uIFields = data.json() ;
      
      });
}
  ngOnInit() {
  }

  submitapprSample(userForm){
    this.formValues = userForm;
    console.log(this.formValues);
    
  }
  cancelappsmpl(){
    alert("Are you sure you want to Cancel");
    this.router.navigateByUrl("mainlanding");
  }

}
