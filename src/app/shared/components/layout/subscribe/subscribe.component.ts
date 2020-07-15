import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Intercom } from 'ng-intercom';

@Component({
  selector: 'my-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent {
  form: FormGroup;
  submitted = false;

  constructor(public _FB: FormBuilder, public intercom: Intercom) {
    this.form = this._FB.group({
      email: ['', [Validators.email, Validators.required]]
    });
  }

  get email() {
    return this.form.get('email');
  }

  onSubmit(form: any) {
    this.submitted = true;
    console.log(form);
  }
}
