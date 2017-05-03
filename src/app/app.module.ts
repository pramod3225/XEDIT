import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; 

import { AppComponent }  from './app.component';
import { PreTreeComponent } from './pre-tree.component';
import { HeroDetailComponent } from './hero-detail.component';
import { CKEDITOR } from './ck-editor.component';


@NgModule({
  imports:      [ BrowserModule ,FormsModule],
  declarations: [ AppComponent,HeroDetailComponent,PreTreeComponent ,CKEDITOR],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
