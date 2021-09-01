// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Quotes } from '../modalClass/Quotes';

// @Injectable({
//   providedIn: 'root'
// })
// export class QuotesService {

//   private _url: string ="http://localhost:8080/quotes";

//   constructor(private http : HttpClient) { }

//   getAllQuotes() : Observable<any>{
//     return this.http.get(this._url+"/getAll");
//   }

//   getQuoteById(quoteId :number){
//     return this.http.get<Quotes>(this._url+"/getOne/"+quoteId);
//   }

//   saveQuote(quote : Quotes) {
//     return this.http.post<any>(this._url+"/save", quote);
//   }

//   updateQuote(quote :Quotes){
//     return this.http.put(this._url+"/update/"+quote.id,quote);
//   }

//   deleteQuote(deleteId: number){
//     return this.http.delete(this._url+"/delete/"+deleteId);
//   }
// }
