import { Request, Response } from "express";
import { ListUserService } from "../../service/user/ListUserService";
class ListUsersController {
    async handle(request: Request, response: Response) {    
      const listuserService= new ListUserService()
    const ret= await listuserService.execute()
    return response.json(ret);
    }
  } 
  export { ListUsersController };