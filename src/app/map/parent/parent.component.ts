import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  items = ['Item 1', 'Item 2', 'Item 3'];

  dummy(){}
}
