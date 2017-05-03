import { Component,OnInit } from '@angular/core';
import { PreTreeService} from "./pre-tree.service";

@Component({
  selector: 'pre-tree',
  template: `
  <ul class="list-group">
    <li class="list-group-item" *ngFor="let treeItem of treeItems">
        {{treeItem.XBRLID}}
    </li>
   
  </ul>  
  `,
  
providers:[PreTreeService]
})
export class PreTreeComponent implements OnInit{ 
  treeItems: any;

  constructor(private preTreeService: PreTreeService) { }

  ngOnInit():void{
    this.getTreeItems();
  }
  getTreeItems(){
    this.preTreeService.getPreTree().then(treeItems => this.treeItems=treeItems);
  }

//   onSelect(hero: Hero): void {
//     this.selectedHero = hero;
//   }
}
