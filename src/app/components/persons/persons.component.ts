import { Component, OnInit } from '@angular/core';
import {Person} from '../../models/person';
import {PersonService} from '../../services/person.service'

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  persons: Person[]=[];

  constructor(private personService:PersonService) { }

  ngOnInit(): void {
    this.persons = this.personService.getPersons();
  }

  deletePerson(person:Person){
    this.persons = this.persons.filter(x => x.name != person.name);
    
    
  }
  
}
