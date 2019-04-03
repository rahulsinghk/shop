import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {NgForm} from '@angular/forms';

export interface DialogData {
  parent: object;
  children: object;
}

@Component({
  selector: 'app-add-category-dialogue',
  templateUrl: './add-category-dialogue.component.html',
  styleUrls: ['./add-category-dialogue.component.css']
})
export class AddCategoryDialogueComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddCategoryDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  onSubmit(form: NgForm): void {
    console.log(this.data);
    if (form.valid) {
      console.log(form);
      this.dialogRef.close(form.value);
    }
  }

  ngOnInit() {
  }

}
