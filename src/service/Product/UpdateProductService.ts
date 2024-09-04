import { IProductRequest } from "../../interface/IProductInterface";

  class UpdateProductService {
    async execute({id = "", name, description = "", price, categoryId }: IProductRequest) {
        if (!name) {
          throw new Error("Name incorrect");
        }
        if (!categoryId) {
          throw new Error("CategoryId incorrect");
        }
        var vuser = {
          id : 1, name: name, description: description, price: price, categoryId: categoryId
        }
        return { message: "Registro Update com Sucesso" }
      }
  }
  export { UpdateProductService };