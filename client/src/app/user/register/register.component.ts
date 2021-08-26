import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor() { }

  registerHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }
  }

}
