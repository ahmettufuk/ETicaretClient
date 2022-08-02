import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialogs',
  templateUrl: './delete-dialogs.component.html',
  styleUrls: ['./delete-dialogs.component.scss']
})
export class DeleteDialogsComponent  {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeletedState,
  ) {}

  close(): void {
    this.dialogRef.close();
  }



}

export enum DeletedState{
  Yes,
  No
}