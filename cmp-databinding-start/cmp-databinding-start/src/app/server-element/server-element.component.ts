import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  // encapsulation: ViewEncapsulation.None,
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input("servElement") element: {
    type: string;
    name: string;
    content: string;
  };

  constructor() {
    console.log("constructor called");
  }

  ngOnChanges(changes:SimpleChanges) {
    console.log("ngOnChanges called");
    console.log(changes + "Changes called");
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
  }
}
