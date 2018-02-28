import { ICertAuth } from './auth';
import { Request } from './request';
import newEndpoint,
{
  EndpointLeaf,
  IEndpoint,
  ISearchAdsQuery,
  QueryBase,
} from './searchads_query';

export class AclQuery extends QueryBase<AclQuery> {}

/**
 * Get ACL from SearchAds API for this auth.
 */
export class Acl extends EndpointLeaf {
  protected leafEndpoint = 'acl';
}

export default
    newEndpoint<AclQuery, Acl>(AclQuery, Acl);
