import { Injectable } from '@angular/core';
import fetch from 'node-fetch'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

    constructor(private http: HttpClient) { }
    
    async getListVideos(cours_name : string) {
        return await fetch(`https://learning.nibaldonoso.fr:4100/list/cours/${cours_name}`);
    }

    async getListCours() {
      return await fetch(`https://51.83.79.205:4100/list/cours`);
    }
}
