import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './delete-dialogs/delete-dialogs.component';
import { FileUploadComponent } from '../services/common/file-upload/file-upload.component';
import { FileUploadDialogComponent } from './file-upload-dialog/file-upload-dialog/file-upload-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    DeleteDialogComponent,
    FileUploadDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class DialogModule { }
