import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  
  user = new User();
  constructor(private router: Router) { }

  ngOnInit() {
    console.log("user : " + this.user.userName);
  }

  registerMe() {
    this.router.navigate(['/secondpage']);
  }

  login(){
    this.router.navigate(['/home']);
  }

}
