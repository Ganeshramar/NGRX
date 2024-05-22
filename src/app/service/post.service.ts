import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Post } from "../models/post.model";

@Injectable({
    providedIn: 'root',
})
export class PostService{
    constructor(private http:HttpClient){}

    getPost(): Observable<Post[]>{
        return this.http
        .get<Post[]>(`https://vue-completecourse.firebaseio.com/posts.json`)
        .pipe(map((data) => {
            const post: Post[] = [];
            for(let key in data){
                post.push({...data[key], id: key})
            }
            return post;
        }))
    }

    addPost(post:Post): Observable<{name: string}>{
        return this.http
        .post<{name: string}>(`https://vue-completecourse.firebaseio.com/posts.json`, post);
    }

    updatePost(post:Post){
        // console.log(post,'post')
        const id = post?.id;
        const postData = {
            id : {title: post.title, description: post.description}
        }
        return this.http
        .patch<{name: string}>(`https://vue-completecourse.firebaseio.com/posts.json`, postData);
    }

    deletePost(id:string){
        return this.http
        .delete(`https://vue-completecourse.firebaseio.com/posts/${id}.json`);
    }
}