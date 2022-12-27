export class Post {

  
    id: number;
    name: string;
    votes: number;
   


    constructor(id=1 ,name='',votes=0,){

        this.id=id;
        this.name=name;
        this.votes=votes;
    }
  }