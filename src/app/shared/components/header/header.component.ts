import { Component } from '@angular/core';
import { appState } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isAuthendicated } from '../../../auth/state/auth.selector';
import { logoutAction } from '../../../auth/state/auth.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isAuthendicated !: Observable<boolean>;
  constructor(private store: Store<appState>){}

  ngOnInit(){
    this.isAuthendicated = this.store.select(isAuthendicated);
  }

  onLogout(event: Event){
    event.preventDefault();
    this.store.dispatch(logoutAction());
  }
}
