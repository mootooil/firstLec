import { Component } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  title = 'title ao ronni';
  content = 'xyz';

  people = {
    results: [
      {name: 'Amir', gender: 'male'},
      {name: 'Roni', gender: 'male'},
      {name: 'Sophia', gender: 'female'},
      {name: 'Nachman', gender: 'female'},
      {name: 'Natan', gender: 'male'}
    ]
  };
}
