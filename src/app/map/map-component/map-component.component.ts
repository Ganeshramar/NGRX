import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { concatMap, exhaustMap, filter, interval, mergeMap, of, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrl: './map-component.component.css'
})
export class MapComponentComponent {
  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit() {
    let postIds = interval(1).pipe(
      filter((val) => val > 0),
      take(5)
    );// of(1, 2, 3, 4, 5);
    postIds
      .pipe(
          //MergeMap
          // mergeMap(id => {
          //   return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          // })
          //ConcatMap
          // concatMap(id => {
          //   return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          // })
          //SwitchMAp
          // switchMap(id => {
          //   return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          // })
          //exhaustMap
          exhaustMap(id => {
            return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          })
        )
        .subscribe(data => {
        console.log(data);
      })
  }

  redirectTo(){
    this.route.navigate(['/parent']);
  }

}
