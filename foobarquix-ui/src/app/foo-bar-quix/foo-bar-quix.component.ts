import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FooBarQuixService } from '../shared/services/foo-bar-quix.service';

@Component({
  selector: 'app-foo-bar-quix',
  templateUrl: './foo-bar-quix.component.html',
  styleUrls: ['./foo-bar-quix.component.css'],
})
export class FooBarQuixComponent implements OnInit, OnDestroy {
  resultHistory = new Array<String>();

  subscription: Subscription = new Subscription();

  constructor(private fooBarQuixService: FooBarQuixService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  convertNumber(inputNumber: number): void {
    this.subscription.add(
      this.fooBarQuixService.convertNumber(inputNumber).subscribe((result) => {
        if (result) {
          this.resultHistory.push(
            inputNumber + ' and the result is ' + result.result
          );
        }
      })
    );
  }
}
