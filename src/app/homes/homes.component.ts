import { Component } from '@angular/core';
import { DataService } from '../data.service';
import DataBuku from '../../assets/buku.json';

interface Buku {
  image_url: String;
  judul: String;
  genre: String;
  penerbit: String;
}

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  // styleUrls: ['./homes.component.less']
})
export class HomesComponent {

  // Mengambil data dari json untuk di proses lebih lanjut ke dalam DataBuku
  buku$ = this.dataService.getBuku();
  constructor(private dataService: DataService) { }

  // menyimpan semua data buku ke dalam data pustaka bertipe array
  pustaka: Buku[] = DataBuku;
}
