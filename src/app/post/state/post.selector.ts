import { createFeatureSelector, createSelector } from "@ngrx/store";
import { postState } from "./post.state";
import { Post } from "../../models/post.model";
import { getCurrentRoute } from "../../store/router/router.selector";
import { routerStateUrl } from "../../store/router/custom-serializer";

export const POST_STATE_NAME = 'posts'
const getPostState = createFeatureSelector<postState>(POST_STATE_NAME);

export const getPosts = createSelector(getPostState, (state) => {
    // console.log(state,'state');
    return state?.posts;
});

export const getPostById = createSelector(
    getPosts,
    getCurrentRoute,
    (post, route:routerStateUrl) => {
        return post.find((posts) => posts.id === route.params['id'] ? route.params['id'] : null);
});

// export const getPostById = createSelector(getPostState, (state:any, props:{ id: number | string }) => {
//     const _id =  state?.posts.find((post: Post) => post.id === props.id);
//     return _id;
// });