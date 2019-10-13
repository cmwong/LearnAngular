import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList, MatListOption } from '@angular/material';
import { RandomKenoNumber } from '../models/RandomKenoNumber';

@Component({
  selector: 'app-test-mat-select1',
  templateUrl: './test-mat-select1.component.html',
  styleUrls: ['./test-mat-select1.component.css']
})
export class TestMatSelect1Component implements OnInit {
  @ViewChild('selectJackpot', {static: true}) selectJackpot !: MatSelectionList;
  constructor() { }
  NumList = [];
  max = 20;
  rnd = new RandomKenoNumber(this.max);
  ngOnInit() {
    for (let i = 1; i <= this.max; i++) {
      this.NumList.push(i);
    }
  }
  PickRandom(howMany: number) {
    if (howMany === 10) {
      this.rnd.shuffle();
    }
    const randoms = this.rnd.getRandomNumber(howMany);
    // console.log(this.selectJackpot.selectedOptions.selected);
    this.selectJackpot.deselectAll();
    this.selectJackpot.options.filter((item) => {
      // only want item value that is in the randoms list
      return randoms.indexOf(item.value) !== -1;
    }).forEach((item) => {
      // set the matListOption.selected to true
      item.selected = true;
    });

    // console.log('matSelected', this.selectJackpot.selectedOptions.selected.map(item => item.value));
    // this.selectJackpot.selectedOptions.selected.forEach((item) => {
    //   console.log(item.value);
    // });

  }
}
