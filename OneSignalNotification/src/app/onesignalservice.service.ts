import { Injectable } from '@angular/core';
import { CreateNotificationTokenResponse } from './create-notification-token-response';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CreateNotificationTokenCommand } from './_model/CreateNotificationTokenCommand';


const baseUrl = "https://localhost:5001/";
@Injectable({
  providedIn: 'root'
})
export class OnesignalserviceService {
  currntUrl:string;
  constructor(private http:HttpClient) { }

  saveUserIdasToken(parameters:CreateNotificationTokenCommand){
    this.currntUrl=baseUrl +"v1.0/notifications/devices/token";
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ4NDQxQzAyOTE3QjUzOUZDNDMwQTE2QUIwQTlDOEU2MkRCODVDOEIiLCJ4NXQiOiJTRVFjQXBGN1U1X0VNS0Zxc0tuSTVpMjRYSXMiLCJ0eXAiOiJKV1QifQ.eyJzdWIiOiIzMzk4ZjgzNy1iOTg4LTQ3MDgtOTk5ZC1kM2RmZTExODc1YjMiLCJuYW1lIjoiYWRtaW5AY29tcGFueS5jb20iLCJ1cG4iOiJhZG1pbkBjb21wYW55LmNvbSIsImFtciI6IkNlbGxvT3BlbklkIiwiaWRwIjoiY2VsbG8iLCJpc3MiOiJodHRwczovL2FkODZmNGM1NWY0YmY0NTkwYjgxZTRlMzBiMjg4ZDcyLWQ0OTFlMzU5NzZkNDczNjkuZWxiLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tLyIsImF1dGhfdGltZSI6IjYzNzc2ODg1NDI2ODA1ODA3MiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdXNlcmRhdGEiOjIxNTU0LCJyb2xlIjoiR1IkTGltaXRlZFVzZXJSb2xlLEdSJFByb2Nlc3NvclJvbGUsR1IkQWRtaW4sR1IkU1REX0FETUlOLEdSJFRlbmFudF9BZG1pbixHUiRQcm9kdWN0X0FkbWluIiwiY3R4SWQiOiIyMTU1NCIsImNsaWVudF9pZCI6IjJhZjNkNTExLTdjODAtNDUzYS04MDYyLTAxZWM4YTdiMmJhMSIsImNvbXBhbnlfY29kZSI6IkNvbXBhbnkiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3RlbmFudGlkIjoiYjU5MGNkMjUtMzA5My1kZjExLThkZWItMDAxZWM5ZGFiMTIzIiwibmJmIjoxNjQxMjg4NjI2LCJleHAiOjE2NDEyODk4MjYsImlhdCI6MTY0MTI4ODYyNiwiYXVkIjoiMmFmM2Q1MTEtN2M4MC00NTNhLTgwNjItMDFlYzhhN2IyYmExfldlYn5NdWx0aVRlbmFudEFjY2VzcyJ9.tX_0FtBlVsIwM9YrLq1Jr_IbHR5tA9A7z7Padb80vNUhBu56A3usmfA53JF1KnsW7aW3uKHMX_fwzYQ8oG-0-A5uEFJkcmS77B41G9scNXeUycKTrh6WonoCfsSC1VE9t_oglYmdAvstfh0FQ89QC5yCK64aF42ZZbKnWPRlRdsdnuh-qExL2lk5wJrp1WJ8NPfkxkB5rvEXzZyUmWTEq2zdaXwu2iKKxvvrOBbZnycuITkfe54OGdY_LfrtP9780NBkXRBR0a3VVsTQXuyxI1C1azjsfAfgCjqiBuiOb1iEI_glR2hPZWVDo5cnjQ1BtvmQDGWexXG48iB-nhTTEw'});
    return this.http.put<CreateNotificationTokenResponse>(this.currntUrl,parameters,{ 'headers': httpHeaders });
  }

  async onLoad(): Promise<any> {
    window.OneSignal = window.OneSignal || [];
    return new Promise((resolve) => {
      window.OneSignal.push(function() {
        resolve(window.OneSignal);
      });
    });
  }

  onInit(): void {
    this.onLoad().then((OneSignal) => {
      //  OneSignal.init({
      //     appId: "0a749872-a713-4734-affa-8c7aef18e28b",
      //  });
    console.log("push initialize");
    OneSignal.push(["init", {
      appId: "0a749872-a713-4734-affa-8c7aef18e28b",
      autoRegister: false,
      allowLocalhostAsSecureOrigin: true,
      notifyButton: {
        enable: false
      }
    }]);
    console.log("push initialized");
    OneSignal.push(function () {
      console.log('Set External user id');
      OneSignal.setExternalUserId("17f26c54-5dad-11ec-afc2-7eb24f8ea539","");
    });
    OneSignal.push(function () {
      // Occurs when the user's subscription changes to a new value.
      OneSignal.getUserId().then(function (userId) {  

      OneSignal.on('subscriptionChange', function (isSubscribed) {
        console.log("The user's subscription state is now:", isSubscribed);
        OneSignal.getUserId().then(function (userId) {
          console.log("User ID is", userId);
         // localStorage.setItem("UserId",userId);
        });
      });
    });
  });

    });
 }

}



