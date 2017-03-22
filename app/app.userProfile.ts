import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-profile',
  template: '<div>{{name}} {{color}}</div>',
})
export class UserProfile {
  @Input() color: string;
  @Input() after: number;
  name: string = 'User?? ';

  constructor() {}
}

