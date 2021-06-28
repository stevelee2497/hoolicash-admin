import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss'],
})
export class ManageUsersComponent implements OnInit {
  users: User[] = [];
  loading: boolean = false;

  constructor(private userService: UserService, private notification: NzNotificationService) {}

  ngOnInit(): void {
    this.loading = true;
    this.userService.getUsers().subscribe(
      (data: User[]) => {
        this.loading = false;
        this.users = data;
      },
      (error: Error) => {
        this.loading = false;
        console.log(error);
        this.notification.error('Failed to get users', error.message);
      }
    );
  }
}
