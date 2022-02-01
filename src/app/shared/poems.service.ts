import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PoemsService {

  constructor(private http: HttpClient) { }
  
  getPoems() {
    return this.http.get('https://gdbr-poetry-default-rtdb.firebaseio.com/Poems.json')
  }
  getPoem(index) {
    return this.http.get('https://gdbr-poetry-default-rtdb.firebaseio.com/Poems/' + index + '.json')
  }

  uploadPoem(data) {
    return this.http.post('https://gdbr-poetry-default-rtdb.firebaseio.com/Poems.json', data)
  }

  editPoem(key, editedPoem) {
    console.log('edit service');
    return this.http.patch('https://gdbr-poetry-default-rtdb.firebaseio.com/Poems/' + key + '.json', editedPoem)
  }

}
