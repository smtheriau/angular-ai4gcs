import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css']
})
export class StatFiltersComponent implements OnInit {

  filters: FormGroup;
  filterssub: Subscription;

  constructor(fb: FormBuilder) {
    this.filters = fb.group({
      title: ['', Validators.minLength(3)],
      author: ['', Validators.maxLength(3)]
    });

    this.filterssub = this.filters.valueChanges.subscribe(filters => {
      console.log("form was changed", filters);
    })
  }

  submit(): void {
    console.log('Form Submitted', this.filters.value);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.filterssub.unsubscribe();
  }

}