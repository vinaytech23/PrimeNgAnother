import { Component, OnInit } from '@angular/core';
import { MyApiService } from '../my-api.service';
import { interval } from 'rxjs';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  receivedRawData: object;
  searechedItemText: string;
  flag: boolean = false;
  usersData: object;

  constructor(private myserv: MyApiService) { }

  ngOnInit() {
    const timer = interval(10000);
    this.getData();
    timer.subscribe(() => { 
      this.getData(); 
      console.log("i am from interval") 
    });
  }

  getData() {
    this.myserv.getDataFromApi().subscribe((res) => { 
      this.receivedRawData = res; 
      console.log(res) 
    });
  }

  showModal(popupdata) {
    this.usersData = popupdata;
    this.flag = true;
  }
}