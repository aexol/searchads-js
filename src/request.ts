import * as https from 'https';
import nodeFetch, {Headers} from 'node-fetch';
import authFactory, { IAuthInfo , ICertAuth } from './auth';

const apiBase = 'https://api.searchads.apple.com/api/v1/';

/**
 * Request to SearchAds API.
 *
 * @property {String} endpoint Search ads api endpoint.
 * @property {ICertAuth} auth Search ads api auth.
 * @property {Headers} headers Search ads api request headers.
 */
export class Request {
  public auth: IAuthInfo;
  constructor(public endpoint: string, auth: ICertAuth, public headers?: {[k: string]: string}) {
    this.auth = authFactory(auth);
  }

  /**
   *  Delete on endpoint.
   *
   * @returns {Promise}
   */
  public delete(): Promise<any> {
    return this.fetch({method: 'DELETE'});
  }

  /**
   *  Get on endpoint.
   *
   * @returns {Promise}
   */
  public get(): Promise<any> {
    return this.fetch({method: 'GET'});
  }

  /**
   *  Post on endpoint.
   *
   * @param {any} data post payload
   * @returns {Promise}
   */
  public post(data: any): Promise<any> {
    const body = this.toJson(data);
    return this.fetch({body, method: 'POST'});
  }

  /**
   *  Put on endpoint.
   *
   * @param {any} data put payload
   * @returns {Promise}
   */
  public put(data: any): Promise<any> {
    const body = this.toJson(data);
    return this.fetch({body, method: 'PUT'});
  }

  /**
   *  Get endpoint url
   *
   * @returns {String}
   */
  public url() {
    return `${apiBase}${this.endpoint}`;
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
      this.headers = {};
    }
    let authHeader = `orgId=${orgId}`;
    if (this.headers.Authorization) {
      authHeader = `${this.headers.Authorization} ${authHeader}`;
    }
    this.headers.Authorization = authHeader;
    if (!this.headers['Content-Type']) {
      this.headers['Content-Type'] = 'application/json';
    }
    return nodeFetch(this.url(),
      {
      agent,
      body,
      headers: this.headers,
      method,
    }).then(resp => resp.json());
  }

  private toJson(data: any): any {
    return !this.headers ||
            this.headers['Content-Type'] === 'application/json' ?
                  JSON.stringify(data) : data;
  }
}
