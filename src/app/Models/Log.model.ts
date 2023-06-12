export class LogModel{
    constructor(public logID:number=0,
                public interId:number=0,
                public logIn:Date=new Date(),
                public logOut:Date=new Date()){

    }
}