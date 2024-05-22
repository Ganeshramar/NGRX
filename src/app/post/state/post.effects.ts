import { Injectable } from "@angular/core";
import { PostService } from "../../service/post.service";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { addPost, addPostSuccess, deletePost, deletePostSuccess, loadPost, loadPostSuccess, updatePost, updatePostSuccess } from "./post.action";
import { map, mergeMap, switchMap } from "rxjs";

@Injectable()
export class PostEffect{
    constructor(private actions$:Actions, private postService: PostService){}

    loadPost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadPost),
            mergeMap((action) => {
                return this.postService.getPost().pipe(
                    map((post) => {
                        return loadPostSuccess({post});
                    })  
                )
            })
        )
    })

    addPost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addPost),
            mergeMap((action) => {
                return this.postService.addPost(action.post).pipe(
                    map((data) => {
                        const post =  {...action.post, id:data.name};
                        console.log(post);
                        return addPostSuccess({post});
                    })
                )
            })
        )
    });

    updatePost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updatePost),
            switchMap((action) => {
                return this.postService.updatePost(action.post).pipe(
                    map((data) => {
                        return updatePostSuccess({post: action.post});
                    })
                )
            })
        )
    });

    deletePost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deletePostSuccess),
            switchMap((action) => {
                return this.postService.deletePost(action.id).pipe(
                    map((data) => {
                        return deletePostSuccess({id: action.id});
                    })
                )
            })
        )
    });
}