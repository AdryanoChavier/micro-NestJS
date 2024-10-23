import { Injectable } from "@nestjs/common";
import { Usuario } from "src/interfaces/usuario-interfaces";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UsuarioService{
    constructor(private prismaService: PrismaService){}

    async criarUsuario(data:Usuario):Promise<Usuario>{
        return this.prismaService.usuario.create({data});
    }
}