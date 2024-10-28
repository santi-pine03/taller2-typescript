export class Serie{
    name: string;
    channel: string;
    seasons: number;
    resumen: string;
    link: string;
    imagen: string;

    constructor(name: string, channel: string, seasons: number, resumen: string, link:string, imagen:string) {
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.resumen = resumen;
        this.link= link;
        this.imagen= imagen;
    }
}
