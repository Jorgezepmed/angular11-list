import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Person } from 'src/app/models/person';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person: Person = new Person();
  @Output() deletePerson: EventEmitter<Person> = new EventEmitter();
  @Output() togglePerson: EventEmitter<Person> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  onDelete(person:Person){
    this.deletePerson.emit(person);
    this.togglePerson.emit(person);
  }
}
