import { Injectable } from "@angular/core";
import {  OrderItem,TableOrder} from './order';
//import { HEROES} from "./mock-heros";


@Injectable()
export class OrderService {
    private tableOrders :TableOrder[] = [];

    // getOrders():Promise<OrderItem[]> {
    //     return Promise.resolve([
    //         // {itemCode: "12",  itemName: "TEA",  quantity: 1,   rate: 20, customisation: ""},
    //         // {itemCode: "25",  itemName: "VEG",  quantity: 1,   rate: 40, customisation: ""}
    //         ]);
    // }
    getEmptyOrder(): Promise<OrderItem> {
        return Promise.resolve({
            itemCode: "",
            itemName: "",
            quantity: 1,
            rate: null,
            customisation: ""
        });
    }
    getOrdersByTableNo(tableNo:String):Promise<TableOrder>{
        for (var i = 0,len = this.tableOrders.length; i < len; i++) {
            if(this.tableOrders[i].tableNo==tableNo) {
                console.log(this.tableOrders);
                return Promise.resolve(this.tableOrders[i]);
            }          
            
        }
        console.log(this.tableOrders);
        return Promise.resolve(new TableOrder());
    }
    addOrderToTableNo(tableNo: String, empName: String, orderItem: OrderItem): boolean {
        let isTableFound = false;
        for (var i = 0, len = this.tableOrders.length; i < len; i++) {
            if (this.tableOrders[i].tableNo == tableNo) {
                isTableFound = true;
                this.tableOrders[i].orderItems.push(orderItem);
                return true;
            }

        }
        if (!isTableFound) {
            this.tableOrders.push({
                tableNo: tableNo,
                EmpName: empName,
                isBillGenerated: false,
                orderItems: [orderItem]
            })
        }

    }
    getTablesAndEmpDetails(){
         return Promise.resolve({
            tables:[{no:'0',ac:1},{no:'1',ac:1},{no:'2',ac:1},{no:'3',ac:1},{no:'4',ac:1},{no:'5',ac:1},{no:'6',ac:1},{no:'7',ac:1},{no:'8',ac:1}],
            emps:[{}],
            items:[{},{}]
         });
    }    

}