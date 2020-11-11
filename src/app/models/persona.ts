//persona GET
export class Persona {
    IDPERSONA: number;
    NOMBRE: String;
    APELLIDOS: String;
    DNI: number;
    FEC_NACIMIENTO: Date;
    CELULAR: String;
    CORREO: String;
    USUARIO: String;
    CLAVE: String;
    IDESTADO_CIVIL: number;
}
//Persona Post - Put
export class PersonaAdd{
    idpersona: number;
    nombre: String;
    apellidos: String;
    dni: number;
    fec_nacimiento: Date;
    celular: String;
    correo: String;
    usuario: String;
    clave: String;
    idestado_civil: number;
}
