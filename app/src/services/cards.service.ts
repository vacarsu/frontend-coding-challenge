import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class CardsService {
    constructor(private http: Http) {}

    list() {
        return this.http.get('assets/data/cards.json')
            .pipe(map(res => res.json()))
    }
}