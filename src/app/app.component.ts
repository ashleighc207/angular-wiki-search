import { Component } from "@angular/core";
import { WikipediaService } from "./wikipedia.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private wikipedia: WikipediaService) {}
  onTermChange(term: string) {
    this.wikipedia.search(term).subscribe(res => {
      console.log(res);
    });
  }
}
