import { Controller, Logger } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";
import { AppService } from "src/app.service";
import { Usuario } from "src/interfaces/usuario-interfaces";
import { UsuarioService } from "src/services/usuario.service";


@Controller()
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) { }

    logger = new Logger(UsuarioController.name)

    @EventPattern('cadastro-usuario')
    async cadastroUsuario(@Payload() usuario: Usuario) {
        this.usuarioService.criarUsuario(usuario)
    }
}