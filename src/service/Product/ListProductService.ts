class ListProductService {
    async execute() {
        const users = [ 
            {          
                id:"1",
                name:"jose",
                description:"testetee",
                price:"12",
                categoryId:"25"

          }, {          
                id:"1",
                name:"jose",
                description:"testetee",
                price:"12",
                categoryId:"25"        
         }     
        ];
      return users
    }
  }
  export { ListProductService };