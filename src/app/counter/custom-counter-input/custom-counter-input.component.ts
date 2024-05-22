import { Component } from '@angular/core';
import { counterState } from '../state/counter.state';
import { Store } from '@ngrx/store';
import { changeName, customeincrement } from '../state/counter.actions';
import { Observable } from 'rxjs';
import { getMyname } from '../state/counter.selector';
import { appState } from '../../store/app.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrl: './custom-counter-input.component.css'
})
export class CustomCounterInputComponent {

  value!:number;
  myName$ : Observable<string> | undefined;

  constructor(private store: Store<appState>){}

  ngOnInit():void{
    this.myName$ = this.store.select(getMyname);
    // console.log(this.myName$);
  }

  addValue(){
    this.store.dispatch(customeincrement({ count: +this.value}));
  }

  changeName(){
    this.store.dispatch(changeName());
  }
}
