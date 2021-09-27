import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input() headFor: string;

  header: string;

  ngOnInit(): void {
    switch (this.headFor) {
      case 'read':
        this.header = "Read"; 
        break;
      case 'write':
        this.header = "Write"; 
        break;
      default:
        break;
    }
  }

}
