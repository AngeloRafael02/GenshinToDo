export interface characterInterface {
    id:Number,
    name:String,
    star:Number,
    type:String,
    element:String,
    region:String,  
    domainname:String,
    material:String,
    days?:string[],
    imgurl:String
}

export interface weaponInterface{
    id:Number,
    name:String,
    star:Number,
    type:String,
    stat:String,
    domainname:String,
    material:String,
    days?:String[],
    imgURL:String
}

export interface toDoListInterface{
    id:Number,
    toDo:String
    date:String[]
}
