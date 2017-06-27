import { Component,OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'order',
    templateUrl: 'order.component.html',
    styles:[`
.new-order-panel{margin: 0px;}
#page-wrapper{
    margin:15px;
}
.order-list{
    border-right: 1px #ddd solid;
    padding:15px 25px 15px 25px;
}
.panel-body{
    padding:0;
}
.table-order{
    margin-top:10px;
} 
`]
    
})
export class OrderComponent{ 

  
}