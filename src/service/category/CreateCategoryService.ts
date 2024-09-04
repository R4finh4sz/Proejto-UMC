import { ICategoryRequest } from "../../interface/ICategoryInterface";
import { hash } from "bcryptjs";

class CreateCategoryService {
  async execute({ id = "", name, description = "" }: ICategoryRequest) {
    if (!name) {
      throw new Error("Name incorrect");
    }
    const nameHash = await hash(name, 8);
    console.log(nameHash)
    var vuser = {
      id: 1, name: name, description: description
    }
    return { message: "Registro incluido com Sucesso" }
  }
}
export { CreateCategoryService };
