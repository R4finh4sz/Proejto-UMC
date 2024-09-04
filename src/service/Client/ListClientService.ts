class ListClientService {
    async execute() {
        const users = [ 
            {   
                id: "1",       
                userId:"20",
                productId:"5",
                clientId:"1234",
                quantity: "5415"             
          }, {          
                id: "1",       
                userId:"20",
                productId:"5",
                clientId:"1234",
                quantity: "5415"               
         }     
        ];
      return users
    }
  }
  export { ListClientService };