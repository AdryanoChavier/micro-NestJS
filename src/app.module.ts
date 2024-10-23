import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioController } from './controllers/usuario-controller';
import { UsuarioService } from './services/usuario.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController,UsuarioController],
  providers: [AppService,UsuarioService,PrismaService],
})
export class AppModule {}
