import {Component, OnInit} from '@angular/core';
import {ApiService} from './services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ApiService]
})
export class AppComponent implements OnInit {

  private items: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService
      .handleChanges(changes => {
        this.items = this.calcScore(changes);
      });
  }

  calcScore(items) {
    return items.map(item => ({
      ...item,
      score: Math.round((item.rate / 100) * 5)
    }));
  }

  trackByItemId(index: number, item: any) {
    return item['id'];
  }
}
