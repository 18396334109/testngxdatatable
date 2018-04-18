import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
// import '@swimlane/ngx-datatable/release/index.css';
// import '@swimlane/ngx-datatable/release/themes/material.css';
// import '@swimlane/ngx-datatable/release/assets/icons.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  rows = [
    {
      名字: 'hahh',
      岁数: 18,
      公司: '123',
    },
    {
      名字: 'hahh',
      岁数: 18,
      公司: '123',
    },
    {
      名字: 'hahh',
      岁数: 18,
      公司: '123',
    },
    {
      名字: 'hahh',
      岁数: 18,
      公司: '123',
    },
    {
      名字: 'hahh',
      岁数: 18,
      公司: '123',
    },
    {
      名字: 'hahh',
      岁数: 18,
      公司: '123',
    },
    {
      名字: 'hahh',
      岁数: 18,
      公司: '123',
    }
  ];
  columns = [
    {
      prop: '名字'
    },
    {
      prop: '岁数',
    },
    {
      prop: '公司'
    }
  ];
}
