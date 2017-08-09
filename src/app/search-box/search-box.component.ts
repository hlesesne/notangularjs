import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  public searchTerm: string;

  constructor() { }

  ngOnInit() {
  }
  doGoogle() {
    console.log(this.searchTerm);
    const data = { q: this.searchTerm + ' -angularjs' };
    window.location.assign('https://www.google.com/search?' + this.encodeQueryData(data));
    this.searchTerm = null;
  }

  encodeQueryData(data) {
    const ret = [];
    for (const d in data) {
      if (d) {
        ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
      }
    }
    return ret.join('&');
  }

}
