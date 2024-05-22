import { Component } from '@angular/core';
import { appState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { getPosts } from '../state/post.selector';
import { deletePost, deletePostSuccess, loadPost } from '../state/post.action';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrl: './postlist.component.css'
})
export class PostlistComponent {

  post$ !: Observable<Post[]>

  constructor(private store : Store<appState>){}

  ngOnInit():void{
    this.post$ = this.store.select(getPosts);
    this.store.dispatch(loadPost());
    // console.log(this.post$)
  }

  onDeletePost(id:any){
    if(confirm(`Are you sure want to delete this ID : ${id}`)){
      this.store.dispatch(deletePostSuccess({id: id}));
    }
  }

}
