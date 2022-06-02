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
    star:Number,
    name:String,
    secondaryStat:String,
    weaponType:String,
    domain:String,
    material:String,
    availability:String[],
    imgURL?:String
}

export interface toDoListInterface{
    id:Number,
    toDo:String
    date:String[]
}
