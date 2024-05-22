import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';
import { CustomCounterInputComponent } from './counter/custom-counter-input/custom-counter-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { counterState } from './counter/state/counter.state';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PostlistComponent } from './post/postlist/postlist.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './store/app.state';
import { postState } from './post/state/post.state';
import { postReducer } from './post/state/post.reducer';
import { AddpostComponent } from './post/addpost/addpost.component';
import { EditpostComponent } from './post/editpost/editpost.component';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { AuthEffects } from './auth/state/auth.effects';
import { AuthTokenInterceptor } from './service/authToken.interceptors';
import { MapComponentComponent } from './map/map-component/map-component.component';
import { ParentComponent } from './map/parent/parent.component';
import { ChildComponent } from './map/child/child.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { customSerializer } from './store/router/custom-serializer';

// Define the root state interface
export interface counterAppState {
  counter: counterState; // Define 'counter' feature state
  post: postState;
  // Add other feature states if needed
}

// Define the root reducer map
const reducers: ActionReducerMap<counterAppState> = {
  counter: counterReducer, // Map 'counter' reducer to 'counter' feature state
  post: postReducer
  // Add other reducers for other feature states
};


@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    HomeComponentComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    MapComponentComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([AuthEffects]),
    // StoreModule.forRoot(reducers),
    StoreModule.forRoot(appReducer),
    StoreRouterConnectingModule.forRoot({
      serializer: customSerializer,
    }),
    // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  // providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
