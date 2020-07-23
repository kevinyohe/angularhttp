import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ipform',
  templateUrl: './ipform.component.html',
  styleUrls: ['./ipform.component.css']
})
export class IpformComponent implements OnInit {
name = new FormControl('');
ipaddress = new FormControl('10.1.1.1');

  constructor() { }

  ngOnInit(): void {
  }
  updateName() {
    this.name.setValue('NancyBoy');
  }
}
