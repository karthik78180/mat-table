import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  
  private user = new User();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoLogin() {
    this.router.navigate(['/firstpage']);
  }
  
  saveData(){
    alert('User data saved successfully');
    this.router.navigate(['/firstpage']);
  }
}