import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Untuk mengambil data di dalam json

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getBuku() {
    return this.httpClient.get('assets/buku.json');
  }
}
