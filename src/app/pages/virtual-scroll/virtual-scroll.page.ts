import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.page.html',
  styleUrls: ['./virtual-scroll.page.scss'],
})
export class VirtualScrollPage implements OnInit {
  users = [];
 
  constructor(private httpClient: HttpClient) {
    this.loadUsers();
  }

  ngOnInit() {}
 
  loadUsers() {
    this.httpClient
      .get(`https://randomuser.me/api/?results=100`)
      .subscribe(res => {
        this.users = res['results'].sort((a, b) => {
          if (a.name.last < b.name.last) {
            return -1;
          }
          if (a.name.last > b.name.last) {
            return 1;
          }
          return 0;
        });
      });
  }
 
  separateLetter(record, recordIndex, records) {
    if (recordIndex == 0) {
      return record.name.last[0].toUpperCase();
    }
 
    if (!records[recordIndex + 1] || !records[recordIndex + 2]) {
      return null;
    }
 
    let first_prev = records[recordIndex - 1].name.last[0];
    let first_current = record.name.last[0];
 
    if (first_prev != first_current) {
      return first_current.toUpperCase();
    }
    return null;
  }
}
