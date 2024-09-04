class DeleteSaleService {
  async execute(id:any) {
    if (!id) {
      throw new Error("ID incorrect");
    }
    
    return { message: "Registro Excluído com Sucesso" }
  }
}
export { DeleteSaleService };

