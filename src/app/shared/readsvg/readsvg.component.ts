import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-readsvg',
  templateUrl: './readsvg.component.html',
  styleUrls: ['./readsvg.component.scss']
})
export class ReadsvgComponent implements OnInit {

  constructor() { }

  @Input() color: string

  ngOnInit(): void {

  }

}
