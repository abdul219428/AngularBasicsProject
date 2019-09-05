import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'simple',
  template: `
    You Entered : {{ simpleInput }}
  `
})
export class SimpleComponent implements OnChanges {
  @Input() simpleInput: string;
  ngOnChanges(changes: SimpleChanges): void {
    // tslint:disable-next-line: forin
    for (const propertyName in changes) {
      const change = changes[propertyName];
      const current = JSON.stringify(change.currentValue);
      const previous = JSON.stringify(change.previousValue);
      console.log(
        `${propertyName} : currentValue = ${current} , previousValue = ${previous}`
      );
    }
  }
}
