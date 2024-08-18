import { Component } from '@angular/core';

@Component({
  selector: 'app-me-contacter',
  templateUrl: './me-contacter.component.html',
  styleUrl: './me-contacter.component.css'
})
export class MeContacterComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };
  onSubmit() {
    console.log('Form submitted', this.contact);
  }
}
