import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'X-Mashape-Key':  '<Your_Key>',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class WordService {

  wordAPIUrl: string = 'https://wordsapiv1.p.mashape.com/words/';

 

  constructor(private http: HttpClient) { }

  getWordDef(word:string) {
    return new Promise(resolve => {
      this.http.get(this.wordAPIUrl+word,httpOptions).subscribe(data => {
        
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


}
