export interface Usuario {
    id: number;
    nombre: string;
    email: string;
    fecha_nac: Date;
    celular: string;
    ciudad: string;
    pais: string;
    pass: string;
    tipoUsuario: number; // 1 - empresa, 0 - usuario
    estado: boolean;
}
