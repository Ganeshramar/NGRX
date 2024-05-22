import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../state/counter.state';
import { Observable } from 'rxjs';
import { getCounter } from '../state/counter.selector';
import { appState } from '../../store/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent {
  //@Input() counter!: number;
  // counter$ : Observable<{ counter: number; }> | undefined;
  counter$ : Observable<number> | undefined;
  // counter:number | undefined;
  constructor( private store: Store<appState>){}

  ngOnInit():void{
    // this.store.select('counterTime').subscribe( data => {
    //   this.counter = data.counter;
    // });
    this.counter$ = this.store.select(getCounter);
    // console.log(this.counter$);
  }
}
