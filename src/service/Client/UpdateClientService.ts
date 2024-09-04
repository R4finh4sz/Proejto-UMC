import { IClientRequest } from "../../interface/IClientInterface";

  class UpdateClientService {
    async execute({id = "", userId = "", productId, clientID, quantity }: IClientRequest) {
        if (!clientID) {
          throw new Error("ClientId incorrect");
        }
        var vuser = {
          id: 1, userId: userId, productId: productId, quantity: quantity, clientID: clientID
        }
        return { message: "Registro Update com Sucesso" }
      }
  }
  export { UpdateClientService };