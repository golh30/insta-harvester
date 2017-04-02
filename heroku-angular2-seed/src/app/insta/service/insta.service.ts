import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InstaService {
  constructor(private http: Http) {}

  getInstaPPLink(name: string) {
    return this.makeRequest(`users/${name}`);
  }

  private makeRequest(path: string) {
    let params = new URLSearchParams();
    params.set('per_page', '100');

    let url = `https://sbox-insta-harvester-api-v1.herokuapp.com/${ path }`;
    return this.http.get(url, {search: params})
      .map((res) => res.json());
  }
}
