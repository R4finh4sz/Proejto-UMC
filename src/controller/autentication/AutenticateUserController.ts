import { Request, Response } from "express";
import { AutenticateUserService } from "../../service/autentication/AutenticateUserService";

class AutenticateUserController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

        const autenticateUserService = new AutenticateUserService();

        const token = await autenticateUserService.execute({
            email,
            password,
        });

        return response.json(token);
    }
}

export { AutenticateUserController };