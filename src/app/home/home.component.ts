import {Component, OnInit} from '@angular/core';
import {Role} from "./role";

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  title = 'app works!';
  role: Role = new Role;
  options: string[] = ['a', 'b', 'c', 'd', 'e'];
  ngOnInit(): void {
    this.role.permissions = ['a', 'b', 'c', 'd', 'c'];
  }

}
