import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() {
    console.log('RxjsComponent ctor');
  }

  ngOnInit() {
    console.log('RxjsComponent onInit');
    // this.run();
    this.run1();
  }
  run() {
    // https://www.learnrxjs.io/operators/filtering/takeuntil.html
    // emit value every 1s
    const source = interval(1000);
    const timer$ = timer(5000);
    const example = source.pipe(takeUntil(timer$));
    const subsrcibe = example.subscribe(
      val => {
        // console.log(val);
      },
      error => { },
      () => {
        console.log('completed');
      });

  }
  run1() {
    const source = timer(5000);
    const subscribe = source.subscribe(
      val => {
        console.log(val, 'timer emit');
      },
      error => { },
      () => {
        console.log('timer completed');
      }
    );
  }
}
