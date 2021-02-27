import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  heros: string[] = ['Spiderman', 'Ironman', 'Thor', 'Hulk', 'Antman'];
  removedHero: string = '';

  removeHero() {
    this.removedHero = this.heros.pop() || '';
  }
}
