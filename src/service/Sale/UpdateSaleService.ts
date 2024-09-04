import { ISaleRequest } from "../../interface/ISaleInterface";

  class UpdateSaleService {
    async execute({id ="", userId, productId, clientId, quantity }: ISaleRequest) {
        if (!userId) {
          throw new Error("UserID incorrect");
        }
        if (!clientId) {
          throw new Error("ClientId incorrect");
        }
        var vuser = {
          id: 1, userId: userId, productId: productId, clientId: clientId, quantity: quantity
        }
        return { message: "Registro Update com Sucesso" }
      }
  }
  export { UpdateSaleService };


