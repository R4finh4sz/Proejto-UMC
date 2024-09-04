import { Request, Response } from "express";
class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const { name, description } = request.body;
   console.log(name)
   console.log(description)
   const category = 
   {
      name:name,
      description:description,
    };    
    return response.json({message:"Registro incluido com Sucesso"});
  }
}
export { CreateCategoryController };