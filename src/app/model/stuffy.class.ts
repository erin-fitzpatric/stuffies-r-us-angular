export class Stuffy {
    id: number; 
    type: string;
    color: string; 
    size: string; 
    limbs: number;

    constructor(id: number = null, type: string="", color: string="", size: string="", limbs: number= null) {
        this.id = id;
        this.type =type;
        this.color =color;
        this.size =size;
        this.limbs =limbs;
    }
}

