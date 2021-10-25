import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/Services/UserService';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  public lstUser: User[] = new Array<User>();

  constructor(private userService:UserService) { }

  ngOnInit() {

    this.getAllChannelByFiltered();
  }

  public getAllChannelByFiltered() {
    debugger;
    this.lstUser= new Array<User>(); 
    this.userService.getUserList().subscribe((response) => {
      debugger;
      if (response.ResponseCode === 200) {
        this.lstUser = response.ResponseObj;
      }
    });
  }

}
