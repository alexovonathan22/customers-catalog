import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-filter-textbox',
    template: `
        
    <div class="input-group inp-wide">
    <div class="input-group-prepend">
      <span class="input-group-text" id="">Filter</span>
    </div>
    <input type="text" class="form-control">
    
  </div>
    `
})
export class FilterTextboxComponent implements OnInit {
    constructor() {}
    
    ngOnInit() {
        
    }
}