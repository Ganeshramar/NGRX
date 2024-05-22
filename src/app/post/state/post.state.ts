import { Post } from '../../models/post.model';

export interface postState{
    posts : Post[];
}

export const initialState: postState = {
    // posts : [
    //     { id: 1, title: 'Sample Title 1', description: 'This is a sample one'},
    //     { id: 2, title: 'Sample Title 2', description: 'This is a sample two'}
    // ]
    posts: [],
}