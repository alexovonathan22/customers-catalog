import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-filter-textbox',
    template: `
        
    <div class="input-group inp-wide">
    <div class="input-group-prepend">
      <span class="input-group-text" id="">Filter</span>
    </div>
    <input type="text" class="form-control" [(ngModel)]="filter">
    
  </div>
    `
})
export class FilterTextboxComponent implements OnInit {
    
     
  private _filter: string;
  @Input() get filter() {
      return this._filter;
  }
  
  set filter(val: string) { 
      this._filter = val;
      this.changed.emit(this.filter); //Raise changed event
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();
  

    constructor() {}
    
    ngOnInit() {
        
    }
}