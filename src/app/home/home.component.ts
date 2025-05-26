import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private api : ApiService){}

  hotelArr : any[] = []

  buttonTExt= "Show"

  ngOnInit(){
    this.api.getAll().subscribe((resp:any) => {
      console.log(resp)
      this.hotelArr = resp
    })
  }

}
