import { ICertAuth } from './auth';
import {Request} from './request';
export interface IEndpoint {
  auth: ICertAuth;
  endpoint: string;
}
export type ISearchAdsQuery<T> = {
  [P in keyof T]: T[P];
};

function newEndpoint<T extends ISearchAdsQuery<T>,
                    U extends IEndpoint>( TCreator: {new(e: IEndpoint): T},
                                          UCreator: {new(...args: any[]): U},
                                      ): (...args: any[]) => ISearchAdsQuery<T> {
  return (...cargs: any[]) => new Proxy(new TCreator(new UCreator(...cargs)), {
    get: (target: any, prop: string) => {
      if (target[prop]) {
        return target[prop];
      }
      const req = target.request;
      return (...args: any[]) => req[prop](...args);
    },
  });
}

export abstract class EndpointLeaf implements IEndpoint {
  constructor(protected prev: IEndpoint) {}
  protected abstract get leafEndpoint(): string|number;
  public get auth() {
    return this.prev.auth;
  }
  public get endpoint() {
    return `${this.prev.endpoint}${this.leafEndpoint}/`;
  }
}

/**
 * Base query with request.
 */
export class QueryBase<T> implements ISearchAdsQuery<QueryBase<T>> {
  constructor(public endpoint: IEndpoint) {}
  /**
   * @property request returns {Request} object for this endpoint.
   */
  public get request(): Request {
    return new Request(`${this.endpoint.endpoint}`, this.endpoint.auth);
  }
}

export default newEndpoint;
