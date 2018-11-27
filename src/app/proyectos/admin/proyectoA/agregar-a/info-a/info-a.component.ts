import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-info-a',
  templateUrl: './info-a.component.html',
  styleUrls: ['./info-a.component.css']
})
export class InfoAComponent implements OnInit {
  constructor() { }
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  ngOnInit() {
  }
}

