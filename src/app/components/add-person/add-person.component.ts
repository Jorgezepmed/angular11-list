import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  id?:number;
  name:string='';
  LastName:string='';

  constructor(private personService:PersonService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const person = new Person();

    person.name = this.name;
    person.LastName = this.LastName;

    this.personService.AddPerson(person);
    this.router.navigate(['/']);
  }

}
