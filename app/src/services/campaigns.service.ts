import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class CampaignsService {
    constructor(private http: Http) {}

    list() {
        return this.http.get('assets/data/campaigns.json')
            .pipe(map(res => res.json()));
    }
}