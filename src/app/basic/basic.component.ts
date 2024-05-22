import { Component } from '@angular/core';
import { filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.css'
})
export class BasicComponent {

  ngOnInit():void{
    const observable = interval(1000);

    observable.subscribe((num) => {
      if(num%2 === 0){
        console.log(num + ' : Even Number');
      }
    });

    observable
    .pipe(
      filter(num => {
      return num % 2 == 0;
    }),
      map(num => {
        return 'even number : ' + num;
      })
    ).subscribe(num => {
      console.log(num);
    })
  }

}
