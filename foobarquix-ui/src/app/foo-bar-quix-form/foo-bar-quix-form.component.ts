import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-foo-bar-quix-form',
  templateUrl: './foo-bar-quix-form.component.html',
  styleUrls: ['./foo-bar-quix-form.component.css'],
})
export class FooBarQuixFormComponent {
  @Output() readonly submitNumberOutput: EventEmitter<number> =
    new EventEmitter<number>();

  formNumberConvert = new FormGroup({
    convertNumber: new FormControl('convertNumber', [
      Validators.required,
      Validators.min(0),
    ]),
  });

  submitNumber(): void {
    const numberToConvert = this.formNumberConvert.get('convertNumber').value;
    this.formNumberConvert.get('convertNumber').reset();
    this.submitNumberOutput.emit(numberToConvert);
  }
}
