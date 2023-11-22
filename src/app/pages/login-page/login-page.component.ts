import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import Login from 'src/app/interfaces/login.interface';
import { Toast } from 'src/app/utils/toast.util';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass'],
})
export class LoginPageComponent {
  constructor(private toastService: ToastrService) {}
  toast = new Toast(this.toastService);
  
  loginForm = new FormGroup({ 
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }

  login() {
    if (!this.email?.value) {
      this.toast.alertError('email is required');
    }
    if (!this.password?.value) {
      this.toast.alertError('password is required');
    }

    if(this.loginForm.invalid) return

    console.log(this.loginForm.value);
  }
}
