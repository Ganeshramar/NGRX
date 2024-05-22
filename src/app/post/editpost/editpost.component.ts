import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { appState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { getPostById } from '../state/post.selector';
import { Post } from '../../models/post.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { updatePost } from '../state/post.action';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrl: './editpost.component.css'
})
export class EditpostComponent {
  post: Post | undefined;
  postForm!: FormGroup;
  postSubscription!: Subscription;

  constructor(
    // private route: ActivatedRoute,
    private store: Store<appState>,
    private router: Router
  ){}

  ngOnInit():void{
    this.createForm();
    this.postSubscription = this.store
      .select(getPostById)
      .subscribe((data) => {
        this.post = data;
          if(this.post){
            this.postForm.patchValue({
              title: this.post.title,
              description: this.post.description,
            });
          }
    });
    // this.route.paramMap.subscribe(param => {
    //   // console.log(param,param?.get('id'));
    //   const id = param?.get('id');
    //   if (id) {
    //     this.postSubscription = this.store.select(getPostById, { id }).subscribe((data) => {
    //       this.post = data;
    //       if(this.post){
    //         this.postForm.patchValue({
    //           title: this.post.title,
    //           description: this.post.description,
    //         });
    //       }
    //     });
    //   } else {
    //     console.error('ID parameter is missing.');
    //   }
    // })
  }

  ngOnDestroy(){
    if(this.postSubscription){
      this.postSubscription.unsubscribe();
    }
  }

  showTitleErrors(){
    const titleForm = this.postForm.get('title');
    if (titleForm?.touched && !titleForm.valid) {
      if (titleForm?.errors?.['required']) {
        return 'Title is required';
      }

      if (titleForm?.errors?.['minlength']) {
        return 'Title should be minimum 6 characters';
      }
    }
      return '';
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

  createForm(){
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(6)]),
      description: new FormControl('', [Validators.required, Validators.minLength(15)])
    })
    // console.log(this.postForm,'postForm');
  }

  onUpdate(){
    if(!this.postForm.valid){
      return;
    }

    const post: Post = {
      id: this.post?.id,
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };
    
    this.store.dispatch(updatePost({post}));
    this.postForm.reset();
    this.router.navigate(['post']);
  }

}
