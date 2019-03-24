import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  constructor(private fb:FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.signinForm = this.fb.group({
      user_name: ['', Validators.required ],
      password: ['', Validators.required ],

    });
  }

  ngOnInit() {
  }

}
