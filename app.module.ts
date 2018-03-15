import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal'

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import {FormsModule} from '@angular/forms';
import {AboutService} from '../services/about.service';
import {RouterModule, Routes} from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import {HttpModule} from '@angular/http';
import {GalleryService} from '../services/gallery.service';

const routes:Routes=[
  {path:'about', component:AboutComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'', redirectTo:'/about',pathMatch:'full'}

];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes),HttpModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()

  ],
  providers: [AboutService,GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
