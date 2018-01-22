import {Injectable} from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

// const httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable()
export class ApiService {

    constructor(private http:HttpClient) {
    }

    getUsers() {
        return this.http.get('/api/users');
    }

    getUser(id: string) {
        return this.http.get(`/api/users/${id}`);
    }

}