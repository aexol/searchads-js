import { ICertAuth } from './auth';
import { Request } from './request';
import newEndpoint,
{
  EndpointLeaf,
  IEndpoint,
  ISearchAdsQuery,
  QueryBase,
} from './searchads_query';

/**
 * Make request on `find` endpoint.
 *
 * @augments Request
 */
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
