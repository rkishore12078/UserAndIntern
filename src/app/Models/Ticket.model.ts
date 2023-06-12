export class Ticketmodel{
    constructor(public ticketNumber:number=0,
                public internID:number=0,
                public adminID:number=0,
                public title:number=0,
                public description:string="",
                public solutionStatus:boolean=false,
                public issueDate:Date=new Date(),
                public resolvedDate:Date=new Date()){

    }
}