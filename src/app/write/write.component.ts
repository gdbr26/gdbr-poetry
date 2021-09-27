import { Component, OnInit } from '@angular/core';
import { PoemsService } from "../shared/poems.service";

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {

  constructor(private poemsService: PoemsService) { }

  poem: string = '';
  title: string = ''

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.title === '' || this.poem === '') {
      alert('Please enter both Title and Poem');
    } else {
      let poemObj = { title: this.title, description: this.poem }
      this.poemsService.uploadPoem(poemObj).subscribe(res => {
        this.title = '';
        this.poem = '';
      })
    }
  }

}
