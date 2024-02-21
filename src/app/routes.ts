import { Routes } from '@angular/router';
import {Ex01Component} from "./ex01/ex01.component";
import {Ex02Component} from "./ex02/ex02.component";
import {Ex03Component} from "./ex03/ex03.component";
import {Ex04Component} from "./ex04/ex04.component";
import {Ex05Component} from "./ex05/ex05.component";
import {Ex06Component} from "./ex06/ex06.component";
import {Ex07Component} from "./ex07/ex07.component";
import {Ex08Component} from "./ex08/ex08.component";
import {Ex09Component} from "./ex09/ex09.component";
import {Ex10Component} from "./ex10/ex10.component";
import {Ex11Component} from "./examen11/ex11.component";

 const routeConfig: Routes = [{
  path: 'ex01',
  component: Ex01Component,
  title: 'ex01',
},
  {
    path: 'ex02',
    component: Ex02Component,
    title: 'ex02',
  },
  {
    path: 'ex03',
    component: Ex03Component,
    title: 'ex03',
  },
  {
    path: 'ex04',
    component: Ex04Component,
    title: 'ex04',
  },
  {
    path: 'ex05',
    component: Ex05Component,
    title: 'ex05',
  },
  {
    path: 'ex06',
    component: Ex06Component,
    title: 'ex06',
  },
  {
    path: 'ex07',
    component: Ex07Component,
    title: 'ex07',
  },
  {
    path: 'ex08',
    component: Ex08Component,
    title: 'ex08',
  },
  {
    path: 'ex09',
    component: Ex09Component,
    title: 'ex09',
  },{
    path: 'ex10',
    component: Ex10Component,
    title: 'ex10',
  },{
     path: 'examen11',
     component: Ex11Component,
     title: 'ex11',
   }];
export default routeConfig;
