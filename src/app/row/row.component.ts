import {Component, Input, OnChanges, OnInit} from '@angular/core';


@Component({
  selector: '[item-detail]',
  templateUrl: './row.component.html'
})
export class RowComponent implements OnChanges {

  @Input('item-detail') item;

  ngOnChanges() {
    console.log('inputs changes');
  }
}
