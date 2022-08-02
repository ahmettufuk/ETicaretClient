import { HttpErrorResponse } from '@angular/common/http';
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { DeleteDialogsComponent, DeletedState } from 'src/app/dialogs/delete-dialogs/delete-dialogs.component';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ProductService } from 'src/app/services/common/models/product.service';
declare var $ : any


@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective  {

  constructor(private element:ElementRef,
    private _renderer:Renderer2,
    private httpClientService:HttpClientService,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog,
    private alertify:AlertifyService) 
  {
    const img = _renderer.createElement("img");
    img.setAttribute("src","../../../../../assets/delete.png")
    img.setAttribute("style","cursor: pointer")
    img.width =25;
    img.height=25;
    _renderer.appendChild(element.nativeElement,img)
  }

  @Input() id:string;
  @Input() controller:string;
  @Output() callback: EventEmitter<any> = new EventEmitter();

  @HostListener("click")
  async onclick(){
    this.openDialog(async () => {
      this.spinner.show(SpinnerType.BallAtom)
      const td: HTMLTableCellElement=this.element.nativeElement;
      await this.httpClientService.delete({
        controller:this.controller
      },this.id).subscribe(data =>{
        $(td.parentElement).animate({
          opacity:0,
          left:"+50",
          height:"toogle"
         },700, () => { 
          this.callback.emit();
          this.alertify.message("ProductDeleted!",{
          dismissOthers:true,
          messageType:MessageType.Success,
          position:Position.TopRight
         });
        });
      },(errorResponse:HttpErrorResponse) => {
        this.spinner.hide(SpinnerType.BallAtom)
        this.alertify.message("Product Did Not Deleted!",{
          dismissOthers:true,
          messageType:MessageType.Warning,
          position:Position.TopRight
         });
      });
    });
      
    

  }

  openDialog(afterClosed:any): void {
    const dialogRef = this.dialog.open(DeleteDialogsComponent, {
      width: '250px',
      data: DeletedState.Yes,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == DeletedState.Yes){
        afterClosed();
      }
    });
  }

}