class ListSaleService {
    async execute() {
        const users = [ 
            {          
              id:"Fabio",
              userId:"fabio@gmail.com",admin:false,
              productId:"1234",
              clientId:"13",
              quantity:"500"             
          }, {          
            id:"Fabio",
            userId:"fabio@gmail.com",admin:false,
            productId:"1234",
            clientId:"13",
            quantity:"500"             
         }     
        ];
      return users
    }
  }
  export { ListSaleService };
  