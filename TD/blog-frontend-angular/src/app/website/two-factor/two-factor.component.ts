import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-two-factor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './two-factor.component.html',
  styleUrl: './two-factor.component.css'
})
export class TwoFactorComponent {

  email?: string;
  confirmForm = this.formBuilder.group({
    code: [ '', [ Validators.required] ]
  });

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.route.queryParams.subscribe(params => {

      this.email = params['email'];
      console.log(params);
      
    });
  }

  async confirm() {

    const data = {
      email: this.email,
      code: this.confirmForm.value.code
    }

    const response = await this.apiService.confirmEmail(data);
    if (!response.error) {

      this.router.navigate(['/auth'], { queryParams: { isnew: 'yes' } });
    } else {

      alert('Invalid code');
      console.log(response.data);
    }
  }
}
