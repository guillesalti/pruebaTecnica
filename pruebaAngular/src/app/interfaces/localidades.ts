export interface Localidades {
    id: number,
    codigoPostal: string,
    localidad: string
}
export interface Vendedores {
    id: number,
    usuarioLogin: string,
    nombre: string,
    habilitado: boolean,
    fechaNacimiento: string,
    observaciones?: string,
    localidad: Localidades
};

