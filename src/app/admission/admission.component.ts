import { Component, OnInit } from '@angular/core';
import { FormGroup,    Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {

  constructor( ) { }
  firstFormGroup: FormGroup;
  myFG: FormGroup;
  ngOnInit() { 
    this.myFG = new FormGroup({  
      year  : new FormControl('', [Validators.required,Validators.min(2017),Validators.minLength(4) ]) ,
      name  : new FormControl('', [Validators.required,Validators.minLength(3)  ]) ,
      lname  : new FormControl('', [Validators.required ,Validators.minLength(3) ]) ,
      class  : new FormControl('', [Validators.required ,Validators.minLength(1) ]) ,
      percentage  : new FormControl('', [Validators.required ,Validators.minLength(1),Validators.min(0),Validators.max(100) ]) ,
   });
  }

  submit(){
    if (this.myFG.invalid  ) {
      return;
    }
    alert('submitted successfully') 
    this.myFG.reset()
  }

}
