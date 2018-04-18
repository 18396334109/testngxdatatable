import { Component } from '@angular/core';

@Component({
    selector: 'app-sort',
    templateUrl: './sort.component.html',
    styleUrls: ['./sort.component.css'],
})
export class SortComponent {
    rows = [
        {
          name: 'hahh',
          gender: 'man',
          company: '234',
        },
        {
            name: 'hahh',
            gender: 'man',
            company: '456',
        },
        {
            name: 'hahh',
            gender: 'man',
            company: '890',
        },
          {
            name: 'zsdw',
            gender: 'man',
            company: '2345',
          },
        {
            name: 'tytyt',
            gender: 'female',
            company: '456',
        },
        {
            name: 'bbeg',
            gender: 'female',
            company: '678',
        },
        {
            name: 'axcef',
            gender: 'female',
            company: '453',
        },
        {
            name: 'qwe',
            gender: 'female',
            company: '231',
        },
        {
          name: 'asd',
          gender: 'female',
          company: '890',
        },
        {
          name: 'hahqweh',
          gender: 'female',
          company: '234',
        }
      ];
}
