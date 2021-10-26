import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/Model/Country';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/Services/Service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  public lstUser: User[] = new Array<User>();
  public lstCountry: Country[] = new Array<Country>();


  constructor(private userService:UserService) { }

  ngOnInit() {

    this.getAllCityByFiltered();
    this.getAllCountryByFiltered();

  }

  public getAllCityByFiltered() {
    debugger;
    this.lstUser= new Array<User>(); 
    this.userService.getUserList().subscribe((response) => {
      debugger;
      this.lstUser = response;

      // if (response.ResponseCode === 200) {
      //   this.lstUser = response.ResponseObj;
      // }
    });
  }

  public getAllCountryByFiltered() {
    debugger;
    this.lstUser= new Array<User>(); 
    this.userService.getCountryList().subscribe((response) => {
      debugger;
      this.lstCountry = response;

      // if (response.ResponseCode === 200) {
      //   this.lstUser = response.ResponseObj;
      // }
    });
  }

}
