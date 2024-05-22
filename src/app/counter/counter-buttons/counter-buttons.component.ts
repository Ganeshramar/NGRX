import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';
import { counterState } from '../state/counter.state';
import { appState } from '../../store/app.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrl: './counter-buttons.component.css'
})
export class CounterButtonsComponent {
  // @Output() increment = new EventEmitter<void>();
  // @Output() decrement = new EventEmitter<void>();
  // @Output() reset = new EventEmitter<void>();
  constructor(private store:Store<appState>){

  }

  onIncrement(){
    this.store.dispatch(increment());
    // this.increment.emit();
  }

  onDecrement(){
    this.store.dispatch(decrement());
    // this.decrement.emit();
  }

  onReset(){
    this.store.dispatch(reset());
    // this.reset.emit();
  }
}
