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
 * Queries on `acl` endpoint in SearchAds API.
 *
 * @augments Request
 */
export class AclQuery extends QueryBase<AclQuery> {}

class Acl extends EndpointLeaf {
  protected leafEndpoint = 'acl';
}

export default
    newEndpoint<AclQuery, Acl>(AclQuery, Acl);
