import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { User } from '../user/user';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  userList: User[];
  selectedRow: Number;
  editedRows: Boolean[];
  editedData: User[];
  private columnList = ["action", "userName", "email", "contactNo", "address"];
  userListMatTabDataSource = new MatTableDataSource<User>(this.userList);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('testForm') testForm: NgForm;

  constructor() { }

  ngOnInit() {
    console.log(environment.test);

    this.editedRows = [];
    this.editedData = [];
    this.getAlldata();
    console.log(this.userList);
    this.userListMatTabDataSource.paginator = this.paginator;
    this.userListMatTabDataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.userListMatTabDataSource.filter = filterValue.trim().toLowerCase();
  }

  getAlldata() {
    this.userList = [
      { id: 1, userName: "Ramesh", password: "rebqwtye", email: "ramesh@gmail.com", contactNo: "9788235466", address: "123 RG Road, XYCity", edited: undefined },
      { id: 2, userName: "Suresh", password: "rebqwtye", email: "suresh@gmail.com", contactNo: "9788235466", address: "123 RG Road, XYCity", edited: undefined },
      { id: 3, userName: "Ganesh", password: "rebqwtye", email: "ganesh@gmail.com", contactNo: "9788235466", address: "123 RG Road, XYCity", edited: undefined },
      { id: 4, userName: "Bhavesh", password: "rebqwtye", email: "bhavesh@gmail.com", contactNo: "9788235466", address: "123 RG Road, XYCity", edited: undefined },
      { id: 5, userName: "Bhavesh", password: "rebqwtye", email: "bhavesh@gmail.com", contactNo: "9788235466", address: "123 RG Road, XYCity", edited: undefined },
      { id: 6, userName: "Bhavesh", password: "rebqwtye", email: "bhavesh@gmail.com", contactNo: "9788235466", address: "123 RG Road, XYCity", edited: undefined },
      { id: 7, userName: "Bhavesh", password: "rebqwtye", email: "bhavesh@gmail.com", contactNo: "9788235466", address: "123 RG Road, XYCity", edited: undefined }
    ];
    this.userListMatTabDataSource.data = this.userList;
  }

  rowClick(rowId) {
    this.selectedRow = rowId;
  }

  edited(user) {
    user.edited = true;
    this.editedData.push(user);
  }

  addRow(index) {
    let index2 = this.userList.indexOf(this.userListMatTabDataSource.filteredData[index]);
    let tempUser = new User();
    this.userList.splice(index2, 0, tempUser);
    this.editedData.push(tempUser);
    this.userListMatTabDataSource.data = [];
    this.userListMatTabDataSource.data = this.userList;
  }

  save() {
    if ((this.testForm.touched || this.editedData.length > 0) && !this.testForm.valid) {
      console.log("push this array to server this.editedData" + this.editedData);
      // this.editedData <- push on server
      alert('not valid');
    } else {
      alert("data submitted");
      this.getAlldata();
    }
  }

}