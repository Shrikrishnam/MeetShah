import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
})
export class ViewAppointmentComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  appointments: any[]

  ngOnInit() {
    this.getfitness();
  }
  getfitness() {
    this.userService.getfitnessdata().subscribe((data) => {
      //console.log(data);
      this.appointments = data;
    });
  }

  deleteAppoinment(id) {
    let choice = confirm("Are you sure you want to delete");
    if (choice == true) {
      this.userService.deleteAppointment(id).subscribe(
        () => {
          this.ngOnInit();
        },
        (err) => console.log(err)
      );
    } else {
      console.log("no Action");
    }
  }
}
