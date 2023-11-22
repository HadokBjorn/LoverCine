import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Toast } from 'src/app/utils/toast.util';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.sass']
})
export class SignupPageComponent {
  constructor(private toastService: ToastrService){}
  toast = new Toast(this.toastService)
  signupForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    image: new FormControl('', [Validators.required, Validators.pattern(/(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })
  get username(){
    return this.signupForm.get('username')
  }
  get email(){
    return this.signupForm.get('email')
  }
  get image(){
    return this.signupForm.get('image')
  }
  get password(){
    return this.signupForm.get('password')
  }
  signUp(){
    console.log(this.signupForm.value);
    if(!this.username?.value){this.toast.alertError('username is required')}
    if(!this.email?.value){ this.toast.alertError('email is required')}
    if(!this.image?.value){this.toast.alertError('image is required')}
    if(!this.password?.value){this.toast.alertError('username is required')}
    
    if(this.signupForm.invalid) return
    
  }
}
