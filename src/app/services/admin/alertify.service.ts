import { Injectable } from '@angular/core';
declare var alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
  //message(message:string , messageType:MessageType,position:Position,delay :number=3,dismissOthers:boolean=false)
  message(message:string , alertifyOptions:Partial<AlertifyOptions>) 
  {
    var messageBool=alertify[alertifyOptions.messageType](message);
    alertify.set('notifier','position',alertifyOptions.position);
    alertify.set('notifier','delay',alertifyOptions.delay);
    if(alertifyOptions.dismissOthers)
      messageBool.dismissOthers();

  }
  dismiss(){
    alertify.dismissAll();
  }
}

export class AlertifyOptions{
  messageType:MessageType = MessageType.Message;
  position:Position=Position.BottomLeft;
  delay: number=3;
  dismissOthers:boolean=false;
}



export enum MessageType {
  Error = "error",
  Message = "message",
  Notify = "notify",
  Success = "success",
  Warning = "warning"
}

export enum Position{
  TopCenter="top-center",
  TopRight = "top-right",
  TopLeft="top-left",
  BottomCenter="bottom-center",
  BottomLeft="bottom-left",
  BottomRight="bottom-right"
}

