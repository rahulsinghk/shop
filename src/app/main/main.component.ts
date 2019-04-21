import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.router.navigate(['main/inventory']).then();
  }
  onLogout() {
    this.router.navigate(['logIn']).then();
  }
  copySuccess(event) {
    this.snackBar.open('Copied To ClipBoard Successfully', 'Dismiss', {
      duration: 500
    });
  }
  copyFail(event) {
    this.snackBar.open('Copied To ClipBoard Failed', 'Dismiss', {
      duration: 500
    });
  }
}
