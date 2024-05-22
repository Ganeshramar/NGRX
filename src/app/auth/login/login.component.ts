import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { appState } from '../../store/app.state';
import { loginStart } from '../state/auth.action';
import { setLoadingSpinner } from '../../store/shared/shared.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!:FormGroup
  groceries = [{
    id: 0, label: 'Butter', another: 'Oatmeal'
  }, {
    id: 1, label: 'Apples', another: 'Spaghetti'
  }, {
    id: 2, label: 'Paprika', another: 'Pears'
  }, {
    id: 3, label: 'Potatoes', another: 'Bacon'
  }];
  constructor(private store: Store<appState>){}

  ngOnInit():void{
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required])
    })
  }

  onLogin(){
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.store.dispatch(setLoadingSpinner({ status: true}));
    this.store.dispatch(loginStart({email, password}))
    console.log(this.loginForm.value)
  }

}
