export class Product {

  
    id: number;
    name: string;
    price: number;
    url: string;
    description: string;


    constructor(id=1 ,name='',price=0,url='',description=''){

        this.id=id;
        this.name=name;
        this.description=description;
        this.price=price;
        this.url=url;
    }
  }
