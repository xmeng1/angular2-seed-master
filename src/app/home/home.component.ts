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
  optionsObject: string[] = ['o1', 'o2', 'o3', 'o4', 'o5'];
  optionsAction: string[] = ['a1', 'a2', 'a3', 'a4', 'a5'];
  ngOnInit(): void {
    this.role.permissions = [{action:"a1", object:"o1"},{action:"a2", object:"o2"},
      {action:"a4", object:"o4"},{action:"a2", object:"o2"},{action:"a5", object:"o5"},];
  }

}
