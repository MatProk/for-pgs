import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkicamsService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'X-Mashape-Key':  'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw'
    })
  };
  
  url:any = 'https://makevoid-skicams.p.mashape.com/cams.json';
  
  getImages() {
    return this.httpClient.get(this.url, this.httpOptions);
  }
}
