import { IClientRequest } from "../../interface/IClientInterface";
import { hash } from "bcryptjs";

class CreateClientService {
  async execute({ id = "", userId = "", productId, clientID, quantity }: IClientRequest) {
    if (!clientID) {
      throw new Error("ClientId incorrect");
    }
    const clientIDHash = await hash(clientID, 8);
    console.log(clientIDHash)
    var vuser = {
      id: 1, userId: userId, productId: productId, quantity: quantity, clientID: clientID
    }
    return { message: "Registro incluido com Sucesso" }
  }
}
export { CreateClientService };
