import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/services/models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss'],
})
export class ManageUsersComponent implements OnInit {
  users: Person[];

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }

  ngOnInit(): void {}
}
