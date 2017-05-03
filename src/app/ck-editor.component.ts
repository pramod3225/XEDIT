import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'CKEDITOR',
  template: `
     <textarea name="targetId" id="targetId">
         This is my CKEditor component.
     </textarea>
  `
})
export class CKEDITOR implements OnInit{ 
    constructor(){}
    ngOnInit(){
       window['CKEDITOR'].replace('targetId');
    }
}