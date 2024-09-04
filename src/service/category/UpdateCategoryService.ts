import { ICategoryRequest } from "../../interface/ICategoryInterface";


class UpdateCategoryService {
    async execute({id = "", name, description = "" }: ICategoryRequest) {
        if (!name) {
          throw new Error("Name incorrect");
        }
        var vuser = {
          id: id, name: name, description: description
        }
        return { message: "Registro Update com Sucesso" }
      }
  }
  export { UpdateCategoryService };