import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { appState } from '../../store/app.state';
import { signupStart } from '../state/auth.action';
import { setLoadingSpinner } from '../../store/shared/shared.action';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  singUpForm!: FormGroup;
  constructor(private store: Store<appState>){}

  ngOnInit(){
    this.singUpForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required])
    })
  }

  submitForm(){
    if(!this.singUpForm.valid){
      return;
    }
    const email = this.singUpForm.value.email;
    const password = this.singUpForm.value.password;
    this.store.dispatch(setLoadingSpinner({status: true}));
    this.store.dispatch(signupStart({email, password}));
  }
}
