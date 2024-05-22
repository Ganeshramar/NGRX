import { Action, createReducer, on } from "@ngrx/store";
import { initialState, postState } from "./post.state";
import { addPost, addPostSuccess, deletePost, deletePostSuccess, loadPostSuccess, updatePost, updatePostSuccess } from "./post.action";

const _postReducer = createReducer(initialState, 
    // on(addPost, (state, action) =>{
    //     let post = {...action.post};
    //     post.id = state.posts.length + 1;
    //     return  {
    //         ...state,
    //         posts: [...state.posts, post],
    //     }
    // }),
    on(addPostSuccess, (state, action) => {
        let post = {...action.post};
        return{
            ...state,
            posts: [...state.posts, post],
        }
    }),
    on(updatePostSuccess,(state, action) => {
        const updatePost = state.posts.map((post) => {
            return action.post.id === post.id ? action.post : post;
        });
        return {
            ...state,
            posts: updatePost,
        }
    }),
    // on(updatePost, (state,action) => {
    //     const updatePost = state.posts.map(post => {
    //         return action.post.id === post.id ? action.post : post;
    //     });
    //     return  {
    //         ...state,
    //         posts: updatePost,
    //     }
    // }),
    on(deletePostSuccess, (state, {id}) => {
        const newPost = state.posts.filter((post) => {
            return post.id !== id;
        });
        return {
            ...state,
            posts: newPost
        }
    }),
    // on(deletePost, (state, {id}) => {
    //     const newPost = state.posts.filter((post) => {
    //         return post.id !== id;
    //     });
    //     return {
    //         ...state,
    //         posts: newPost
    //     }
    // }),

    on(loadPostSuccess, (state,action) => {
        return{
            ...state,
            posts: action.post
        }
    })
);

export function postReducer(state: postState | undefined, action: Action){
    return _postReducer(state, action);
}