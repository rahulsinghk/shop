import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router: Router, private matIconRegistry: MatIconRegistry) {}
  ngOnInit() {
    // this.matIconRegistry.addSvgIcon('thumbs-up', '../assets/svg-icons/baseline-thumb_up-24px.svg' );
    this.router.navigate(['inventory']).then();
  }
}
