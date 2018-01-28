import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiService {

    constructor(private http:HttpClient) {
    }

    getUsers() {
        return this.http.get('/api/users');
    }

    getUser(guid: string) {
        return this.http.get(`/api/users/${guid}`);
    }

}