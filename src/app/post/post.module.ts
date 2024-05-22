import { NgModule } from "@angular/core";
import { PostlistComponent } from "./postlist/postlist.component";
import { AddpostComponent } from "./addpost/addpost.component";
import { EditpostComponent } from "./editpost/editpost.component";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { RouterModule, Routes } from "@angular/router";
import { postReducer } from "./state/post.reducer";
import { CommonModule } from "@angular/common";
import { POST_STATE_NAME } from "./state/post.selector";
import { EffectsModule } from "@ngrx/effects";
import { PostEffect } from "./state/post.effects";

const routes: Routes = [
    {
        path: '',
        component: PostlistComponent,
        children:[
            { path: 'add', component: AddpostComponent},
            { path: 'edit/:id', component: EditpostComponent}
        ]
    },
]

@NgModule({
    declarations: [
        PostlistComponent,
        AddpostComponent,
        EditpostComponent

    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        StoreModule.forFeature(POST_STATE_NAME,postReducer),
        RouterModule.forChild(routes),
        EffectsModule.forFeature([PostEffect]),
    ]
})

export class postModule {}