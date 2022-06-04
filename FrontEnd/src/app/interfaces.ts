export interface characterInterface {
    id:number,
    name:string,
    star:number,
    type:string,
    element:string,
    region:string,  
    domainname:string,
    material:string,
    days?:string[],
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
    days?:string[],
    imgURL:string
}

export interface toDoListInterface{
    id:number,
    toDo:string
    date:string[]
}
