import { Injectable } from '@angular/core';

import {Person} from '../models/person';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

persons:Person[]= [
 
  {
    id:4,
    name: 'Penny',
    LastName: 'Hofstadter'
  },
  {
    id:5,
    name: 'Sheldon',
    LastName: 'Cooper'
  },
  {
    id:6,
    name: 'Howard',
    LastName: 'Wolowitz'
  },
  {
    id:7,
    name: 'Rajesh',
    LastName: 'Koothrappali'
  },
  {
    id:8,
    name: 'Bernadette',
    LastName: 'Rostenkowski'
  },

]

  constructor() {}

    getPersons(){
      return this.persons;
    }

    AddPerson(person:Person){
      this.persons.unshift(person)
    }

  
}
