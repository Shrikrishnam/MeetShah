import { Component, OnInit} from '@angular/core';
import {  FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from '../_services';
import { Router } from '@angular/router';


export class Fitness {
  constructor(
    public inr: number,
    public paisa: number,
    public streetaddress: string,
    public city: string,
    public state: string,
    public country: string,
    public pincode: number,
    public phonenumber: number,
    public email: string,
    public firstname:string,
    public lastname: string,
    public age:number,
    public trainerpreference: string,
    public physiotherapist: string,
    public packages: string
  ) { }
}

@Component({
  selector: 'app-place-fitness-trainer-appointment',
  templateUrl: './place-fitness-trainer-appointment.component.html'
  
})
export class PlaceFitnessTrainerAppointmentComponent implements OnInit {

  

  fitnessForm: FormGroup;
  
  constructor( private fb: FormBuilder,
    private router: Router,
    private userService: UserService) {
    
   }

 

  ngOnInit() {
  
    this.fitnessForm = this.fb.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      age: ["", Validators.required],
      email: ["", [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
      phonenumber: ["", Validators.required],

      streetaddress: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      country: ["", Validators.required],
      pincode: [
        "",
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],

      trainerpreference: ["", Validators.required],
      physiotherapist: ["", Validators.required],
      packages: ["", Validators.required],
      paisa: ["", [Validators.required]],
      inr: ["", Validators.required],
    });
  
    
  }


  onSubmit() {

    console.log(this.fitnessForm.value);
    this.userService
      .postfitnessdata(this.fitnessForm.value)
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigateByUrl("view-appointment");
  }
   

  setAmount(e) {
    console.log(e.target.value);
    this.fitnessForm.get("inr").setValue(e.target.value);
    this.fitnessForm.get("paisa").setValue("50");

  }

}

