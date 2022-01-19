import { Component, OnInit } from '@angular/core';
import { OneSignalService } from 'onesignal-ngx';
import { OnesignalserviceService } from './onesignalservice.service';
import { CreateNotificationTokenCommand } from './_model/CreateNotificationTokenCommand';
import { ServiceWorkerModule } from '@angular/service-worker';
// import {SwPush} from '@angular/service-worker';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OneSignalNotification';
  onesignalMessage:string
  notificationTokenCommand:CreateNotificationTokenCommand;
  tokenKey:string="";
  constructor(private os: OnesignalserviceService) {
    
    //  console.log('in app component');
    // console.log(swPush.messages);
  }
  ngOnInit() {
    this.os.onInit();
   
    
 }
 
 


 
//   // ngOnInit() {
//   //   this.tokenKey=JSON.parse(localStorage.getItem('UserId')); 
//   //   //console.log(this.tokenKey); 
//   //   //this.SaveUserId();
//   //  }
//   // SaveUserId()
//   // {
    
//   //   this.notificationTokenCommand= new CreateNotificationTokenCommand(
//   //     "Web",this.tokenKey);
     
//   //     this.oneSignal.saveUserIdasToken(this.notificationTokenCommand).subscribe(
//   //       response => {
//   //         debugger;
//   //         console.log(response);
//   //         debugger;
//   //         if(response!=null)
//   //         {
//   //          this.onesignalMessage = " saved in DB.";  // this.messagingService.currentMessage;
//   //         }
//   //         //this.submitted = true;
//   //       },
//   //       error => {
//   //         console.log(error);
//   //       });
//   // }
 

  
 
  
 

  
// }

// export class AppComponent implements OnInit{
  
//   ngOnInit(): void {
//     new name();
//   }
  
//   title = 'app-js';
 }
