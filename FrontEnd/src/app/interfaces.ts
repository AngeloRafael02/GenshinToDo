
export interface characterInterface {
    id:number,
    name:string,
    star:number,
    type:string,
    element:string,
    region:string,  
    domainname:string,
    material:string,
    days:string[],
    imgurl:string
}

export interface weaponInterface{
    id:number,
    name:string,
    star:number,
    type:string,
    stat:string,
    domainname:string,
    material:string,
    days:string[],
    imgurl:string
}
export interface ToDoInterface{
    content:string;
    completed:boolean;
}