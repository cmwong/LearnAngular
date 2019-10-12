import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList, MatListOption } from '@angular/material';

@Component({
  selector: 'app-test-matselect',
  templateUrl: './test-matselect.component.html',
  styleUrls: ['./test-matselect.component.css']
})
export class TestMatselectComponent implements OnInit {
  // using viewchild to access the the matselectionlist component
  // by id 'kenos'
  @ViewChild('kenos', {static: true}) kenosSelect !: MatSelectionList;

  selectedOptions = [];
  NumList = [
    { name: '1', checked: false },
    { name: '2', checked: false },
    { name: '3', checked: false },
    { name: '4', checked: false },
    { name: '5', checked: false },
    { name: '6', checked: false },
    { name: '7', checked: false },
    { name: '8', checked: false },
    { name: '9', checked: false },
    { name: '10', checked: false },
    { name: '11', checked: false },
    { name: '12', checked: false },
  ];

  constructor() { }

  ngOnInit() {
  }
  PickRandom() {
    const randoms = ['1', '4', '10'];
    console.log(this.kenosSelect.selectedOptions.selected);
    // console.log(this.kenosSelect.selectedOptions.selected);
    // console.log(this.selectedOptions);
    // console.log('option', this.kenosSelect.options);
    // console.log(this.kenosSelect.selectedOptions);
    this.kenosSelect.deselectAll();
    // this.kenosSelect.options.forEach(item => {
    //   if (item.value.name === '1') {
    //     item.selected = true;
    //   }
    // });
    this.kenosSelect.options.filter((item) => {
      return randoms.indexOf(item.value.name) !== -1;
    }).forEach((item) => {
      item.selected = true;
    });

    console.log('matSelected', this.kenosSelect.selectedOptions.selected);
    this.kenosSelect.selectedOptions.selected.forEach((item) => {
      console.log(item.value);
    });
    console.log('this.selectedOptions', this.selectedOptions);
  }

}
