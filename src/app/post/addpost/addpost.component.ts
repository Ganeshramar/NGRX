import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../models/post.model';
import { appState } from '../../store/app.state';
import { addPost } from '../state/post.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrl: './addpost.component.css'
})
export class AddpostComponent {
  postForm!: FormGroup;
  constructor(private store: Store<appState>){}

  ngOnInit():void{
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(15)])
    })
  }

  showDescriptionErrors() {
    const descriptionForm = this.postForm.get('description');
    if (descriptionForm?.touched && !descriptionForm.valid) {
      if (descriptionForm?.errors?.['required']) {
        return 'Description is required';
      }

      if (descriptionForm?.errors?.['minlength']) {
        return 'Description should be of minimum 10 characters length';
      }
    }
      return '';
  }

  onAddPost() {
    if (!this.postForm.valid) {
      return;
    }
    // console.log(this.postForm.value);
    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };
    
    this.store.dispatch(addPost({post}));
    this.postForm.reset();
  }

}
