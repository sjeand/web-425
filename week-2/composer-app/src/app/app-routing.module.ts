/*
==========================================
  Title: composer app
  Author: Professor Krasso
  Modifier: Sarah Jean Baptiste
  Date: 08/9/2021
  Description: contact
==========================================
*/

//import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposerListComponent} from './composer-list/composer-list.component';
import { ContactComponent} from './contact/contact.component';
import { AboutComponent} from './about/about.component';

const routes: Routes = [
  {
    path: 'composer-list',
    component: ComposerListComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
