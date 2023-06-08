import { ApiProperty } from '@nestjs/swagger';
import { Usuario } from 'src/usuarios/schemas/usuario.schema';
export class CreateTrabajadorDto {
  @ApiProperty({
    type: String,
    description: 'Nombres',
  })
  nombres: string;
  @ApiProperty({
    type: String,
    description: 'Apellido Paterno',
  })
  apellido_paterno: string;
  @ApiProperty({
    type: String,
    description: 'Apellido Materno',
  })
  apellido_materno: string;
  @ApiProperty({
    type: String,
    description: 'Correo',
  })
  correo: string;
  @ApiProperty({
    type: String,
    description: 'Telefono',
  })
  telefono: string;
  @ApiProperty({
    type: Date,
    description: 'Fecha de Nacimiento',
  })
  fecha_nacimiento: Date;
  @ApiProperty({
    type: String,
    description: 'Estado',
  })
  estado: string;
  @ApiProperty({
    type: Object,
    description: 'Documento Identificador',
  })
  documento_identificador: object;
  @ApiProperty({
    type: Usuario,
    description: 'Usuario',
  })
  usuario: Usuario;
}