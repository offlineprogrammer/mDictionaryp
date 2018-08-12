import { Component } from '@angular/core';
import {  WordService } from '../services/word.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myWord:string;
  myWordDef:string;
  
 constructor(private wordService: WordService){
  }

  getWordDef(){
    console.log(this.myWord);
    this.wordService.getWordDef(this.myWord)
    .then((response) => {
      console.log(response);
      console.log(response.results[0].definition);
      this.myWordDef=response.results[0].definition;   
    }).catch((err) => {
      console.warn(err);
    });;

  }

}
