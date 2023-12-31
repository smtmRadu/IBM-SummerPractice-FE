import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { NotificationService } from "./notification.service";
import { NotificationType } from "../enums/notification-type.enum";

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {
  constructor(private notificationService: NotificationService) { }

  handleBackendError(error: any): void {
    if (error?.error?.message) {
      console.log(error)
      this.notificationService.showErrorNotification(error.error.message);
    } else {
      console.log(error)
      this.notificationService.showDefaultNotification('An unknown error occurred. Please try again later.');
    }
  }




}
