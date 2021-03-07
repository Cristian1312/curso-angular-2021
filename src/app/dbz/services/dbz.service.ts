import { Injectable } from "@angular/core";

import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: 'Gokú',
            poder: 50000
        },
        {
            nombre: 'Vegeta',
            poder: 45000
        }
    ]

    constructor() { }

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

}