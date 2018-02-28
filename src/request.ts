import * as https from 'https';
import nodeFetch, {Headers} from 'node-fetch';
import authFactory, { IAuthInfo , ICertAuth } from './auth';

const apiBase = 'https://api.searchads.apple.com/api/v1/';
export class Request {
  public auth: IAuthInfo;
  constructor(public endpoint: string, auth: ICertAuth, public headers?: Headers) {
    this.auth = authFactory(auth);
  }

  public delete(): Promise<any> {
    return this.fetch({method: 'DELETE'});
  }

  public get(): Promise<any> {
    return this.fetch({method: 'GET'});
  }

  public post(data: any): Promise<any> {
    const body = this.toJson(data);
    return this.fetch({body, method: 'POST'});
  }

  public put(data: any): Promise<any> {
    const body = this.toJson(data);
    return this.fetch({body, method: 'PUT'});
  }

  protected async fetch(
    {body, method = 'POST'}: {body?: any, method: string},
  ): Promise<any> {
    const {orgId = -1, ...certs} = this.auth.getAuthInfo() || {};
    if (Object.keys(certs).length === 0 || orgId === -1) {
      const e = new Error('missing apple auth cert info');
      e.name = 'AppleCertificateError';
      throw e;
    }
    const agent = new https.Agent({
      ...certs,
    });
    if (!this.headers) {
      this.headers = new Headers();
    }
    let authHeader = `orgId=${orgId}`;
    if (this.headers.has('Authorization')) {
      authHeader = `${this.headers.get('Authorization')} ${authHeader}`;
    }
    this.headers.set('Authorization', authHeader);
    if (!this.headers.has('Content-Type')) {
      this.headers.set('Content-Type', 'application/json');
    }
    return nodeFetch(`${apiBase}/${this.endpoint}`,
      {
      agent,
      body,
      headers: this.headers,
      method,
    }).then(resp => resp.json());
  }

  private toJson(data: any): any {
    return !this.headers ||
            this.headers.get('Content-Type') === 'application/json' ?
                  JSON.stringify(data) : data;
  }
}
