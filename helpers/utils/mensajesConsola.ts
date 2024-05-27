export class MensajesConsola {
    static mensajeInicio(Cu: string) {
        console.log('Inicio del caso de uso número: ' + Cu);
    }

    static mensajeTitulo(titulo: string) {
        console.log('Titulo del caso de uso: ' + titulo);
    }

    static mensajePaso(paso: string) {
        console.log('Paso: ' + paso);
    }

    static mensajeFin(Cu: string) {
        console.log('Fin del caso de uso número: ' + Cu);
    }
}