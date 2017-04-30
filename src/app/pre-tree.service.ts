import { Injectable } from "@angular/core";
import { TreeItems} from "./mock-tree";



@Injectable()
export class PreTreeService {
    getPreTree() {
        return Promise.resolve(TreeItems);
    }
   

}