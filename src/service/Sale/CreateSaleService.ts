import { ISaleRequest } from "../../interface/ISaleInterface";
import { hash } from "bcryptjs";

class CreateSaleService {
  async execute({ id = "", userId, productId, clientId, quantity }: ISaleRequest) {
    if (!userId) {
      throw new Error("UserId incorrect");
    }
    if (!clientId) {
      throw new Error("ClientID incorrect");
    }
    const clientIDHash = await hash(clientId, 8);
    console.log(clientIDHash)
    var vuser = {
      id: 1, userId: userId, productId: productId, clientID: clientId, quantity: quantity
    }
    return { message: "Registro incluido com Sucesso" }
  }
}
export { CreateSaleService };
