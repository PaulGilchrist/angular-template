import { DragulaService } from '../services/dragula.service';
export interface DragObject {
    id: number;
    text: string;
    allowMove: boolean;
}
export declare class DragDemoComponent {
    private dragulaService;
    many: Array<string>;
    many2: Array<string>;
    list1: DragObject[];
    list2: DragObject[];
    constructor(dragulaService: DragulaService);
    ngOnInit(): void;
    private onOver(args);
    private onOut(args);
    private removeObject(list, objToRemove);
}
