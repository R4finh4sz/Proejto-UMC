import { Request, Response } from "express";
class ListCategoryController {
    async handle(request: Request, response: Response) {    
      const categories = [ 
        {          
            name:"Informatica",
            description:" dia 13 dlksfds "             
      }, {          
        name:"Moveis",
        description:" dia 13 dlksfds "                   
     }     
    ];
    return response.json(categories);
    }
  } 
  export { ListCategoryController };