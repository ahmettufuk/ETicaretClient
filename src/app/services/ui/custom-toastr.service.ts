import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr:ToastrService) { }

  message(message:string , title:string,
    options:Partial<ToastrOptions>){

     this.toastr[options.messageType](message,title,
      {
      positionClass:options.position
      })   
  }
}

export class ToastrOptions{
   messageType:ToastrMessageType=ToastrMessageType.Success;
   position:ToastrPosition=ToastrPosition.BottomLeft;
}


export enum ToastrMessageType{
 Success="success",
 Info="info",
 Warning="warning",
 Error="error"
}
export enum ToastrPosition{

  TopRight ="toast-top-right",
  BottomRight = "toast-bottom-right",
  BottomLeft ="toast-bottom-left",
  TopLeft="toast-top-left",
  TopFullWidht = "toast-top-full-widht",
  BottomFullWidht = "toast-bottom-full-widht",
  TopCenter = "toast-top-center",
  BottomCenter  ="toast-bottom-center"
}
