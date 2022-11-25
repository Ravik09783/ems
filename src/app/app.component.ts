import { Component, OnInit } from "@angular/core";
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(private ngxService: NgxUiLoaderService) {}

  ngOnInit() {
    // this.ngxService.start(); 
    // setTimeout(() => {
    //   this.ngxService.stop();
    // }, 1500);



    this.ngxService.startBackground("do-background-things");
    this.ngxService.stopBackground("do-background-things");

    this.ngxService.startLoader("loader-01"); 
    setTimeout(() => {
      this.ngxService.stopLoader("loader-01"); 
    }, 100);
  }
}