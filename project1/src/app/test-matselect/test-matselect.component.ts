import { Component, OnInit } from '@angular/core';
import { MatSelectionList, MatListOption } from '@angular/material';

@Component({
  selector: 'app-test-matselect',
  templateUrl: './test-matselect.component.html',
  styleUrls: ['./test-matselect.component.css']
})
export class TestMatselectComponent implements OnInit {
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
  Select1(matSelect: MatSelectionList) {
    // console.log(matSelect.selectedOptions.selected);
    // console.log(this.selectedOptions);
    // console.log('option', matSelect.options);
    // console.log(matSelect.selectedOptions);
    matSelect.deselectAll();
    matSelect.options.forEach(item => {
      if (item.value.name === '1') {
        item.selected = true;
      }
    });
    // matSelect.options.map((item, index, arr) => {

    // });
  }

}
