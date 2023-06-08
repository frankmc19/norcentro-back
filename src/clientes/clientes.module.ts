import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { Cliente, ClienteSchema } from './schemas/cliente.schema';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cliente.name, schema: ClienteSchema }]),
    UsuariosModule
  ],
  controllers: [ClientesController],
  providers: [ClientesService],
  exports: [ClientesService],
})
export class ClientesModule {}
