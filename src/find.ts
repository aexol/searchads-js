import { ICertAuth } from './auth';
import {Campaigns} from './campaigns';
import { Request } from './request';
import newEndpoint,
{
  EndpointLeaf,
  IEndpoint,
  ISearchAdsQuery,
  QueryBase,
} from './searchads_query';

export class FindQuery extends QueryBase<FindQuery> {}

export class Find extends EndpointLeaf {
  protected leafEndpoint = 'find';
  constructor(prev: IEndpoint) {
    super(prev);
  }
}

export default newEndpoint<FindQuery,
                Find>(FindQuery,
                Find);
