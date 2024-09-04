import { compare } from "bcryptjs";
import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { IAutenticateRequest } from "../../interface/IAutenticateRequest";
import e from "express";

class AutenticateUserService {
    async execute({ email, password }: IAutenticateRequest){

        const passwordHash = await hash("umc2024", 8);
        const passwordMatch = await compare(password, passwordHash)
        if (!passwordHash){
            throw new Error ("Password incorrect");
        }

        // Gerar um Token

        const token = sign(
            {
                email: email,
            },
            "UMC-EngSoftware-2024",
            {
                subject: ("others"),
                expiresIn: "1d",
            }
        );
        return token;
    }
}
export {AutenticateUserService}