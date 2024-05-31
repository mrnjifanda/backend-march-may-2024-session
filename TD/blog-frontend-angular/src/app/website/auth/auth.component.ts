import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  registerSubmitBtn: string =  "Register";

  registerForm = this.formBuilder.group({
    email: [ '', [ Validators.required, Validators.email ] ],
    username: [ '', Validators.required ],
    fullName: [ '', Validators.required ],
    password: [ '', Validators.required ],
    passwordConfirm: ['', Validators.required, Validators ],
  });

  loginForm = this.formBuilder.group({
    email: [ '', [ Validators.required, Validators.email ] ],
    password: [ '', Validators.required ]
  });

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) { }

  async register() {

    const { passwordConfirm, ...data } = this.registerForm.value;
    const response = await this.apiService.register(data);
    if (!response.error) {

      this.router.navigate(['/auth/two-factor'], { queryParams: { email: data.email, register: 'ok' } });
    } else {

      alert(response.data);
      console.log(response);
    }
  }

  async login() {

    const data = this.loginForm.value;
    const response = await this.apiService.login(data);
    if (!response.error) {

      this.apiService.setCookie('authorization', response.data);
      this.router.navigate(['/dashboard'], { queryParams: { login: 'yes' } });
    } else {

      alert(response.data);
      console.log(response);
    }
  }
}
