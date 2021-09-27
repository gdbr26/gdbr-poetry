import { Component, OnInit } from '@angular/core';
// import { readData } from "./mockData";
import { PoemsService } from "../shared/poems.service";
// import { AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  constructor(private poemsService: PoemsService) {
    
  }

  poemsList: any;
  poemsTitleList: [];
  poemsKeys: string[]
  showMenu: Boolean = true;
  selectedPoem: any = { title: 'Loading...', description: 'Loading...' };
  selectedPoemKey: string = "";
  isEditable: boolean = false;

  ngOnInit(): void {
    this.poemsService.getPoems().subscribe(res => {
      this.poemsList = res;
      this.poemsKeys = Object.keys(res);
      this.poemsService.getPoem(this.poemsKeys[0]).subscribe(res => {
        this.selectedPoem = res;
      });    
    });
  }

  poemClicked(index) {
    this.selectedPoemKey = index;
    this.poemsService.getPoem(index).subscribe(res => {
      this.selectedPoem = res;
    });    
    this.toggleMenu()
  }

  updatePoem () {
    console.log('Update Poem');
    
    console.log(document.getElementById('poemTitle').innerHTML);
    let editedPoem = {
      title: document.getElementById('poemTitle').innerHTML,
      description: document.getElementById('poemDesc').innerHTML
    }
    console.log(editedPoem);
    
    this.poemsService.editPoem(this.selectedPoemKey, editedPoem).subscribe(res => {
      console.log(res);
    })
    this.isEditable = false;
  }

  editPoem() {
    // console.log(this.selectedPoemKey);
    this.isEditable = true;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

}
