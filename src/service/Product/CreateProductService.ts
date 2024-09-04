import { IProductRequest } from "../../interface/IProductInterface";
import { hash } from "bcryptjs";

class CreateProductService {
  async execute({ id = "", name, description = "", price, categoryId }: IProductRequest) {
    if (!name) {
      throw new Error("Name incorrect");
    }
    if (!categoryId) {
      throw new Error("CategoryId incorrect");
    }
    const categoryIdHash = await hash(categoryId, 8);
    console.log(categoryIdHash)
    var vuser = {
      id : 1, name: name, description: description, price: price, categoryId: categoryId
    }
    return { message: "Registro incluido com Sucesso" }
  }
}
export { CreateProductService };
