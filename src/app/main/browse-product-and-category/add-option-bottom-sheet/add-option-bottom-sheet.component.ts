import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-add-option-bottom-sheet',
  templateUrl: './add-option-bottom-sheet.component.html',
  styleUrls: ['./add-option-bottom-sheet.component.css']
})
export class AddOptionBottomSheetComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<AddOptionBottomSheetComponent>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  ngOnInit() {
    this.bottomSheetRef.backdropClick().subscribe(r => {
      console.log(r);
      r.preventDefault();
    });
  }
  onSelect(option: string): void {
    this.bottomSheetRef.dismiss(option);
    event.preventDefault();
  }
}
