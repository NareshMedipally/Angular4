import { Component } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public constructor(private router: Router) { }
  
  ngOnInit() {
    this.router.navigate(["master"]);
  }
}
