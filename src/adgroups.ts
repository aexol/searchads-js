import adGroupEndpoint, {AdGroupQuery} from './adgroup';
import { ICertAuth } from './auth';
import findEndpoint, {FindQuery} from './find';
import { Request } from './request';
import newEndpoint,
{
    EndpointLeaf,
    IEndpoint,
    ISearchAdsQuery,
    QueryBase,
} from './searchads_query';

/**
 * Make request on `adgroups` endpoint.
 *
 * @property {FindQuery} find Get find for adgroups.
 * @property {AdGroup} [id] Get adgroup by id.
 * @augments Request
 */
export class AdGroupsQuery extends QueryBase<AdGroupsQuery> {
  public get find() {
    return findEndpoint(this.endpoint);
  }
  [s: string]: ISearchAdsQuery<AdGroupQuery|FindQuery>|IEndpoint|Request;
}

class AdGroups extends EndpointLeaf {
  protected leafEndpoint = 'adgroups';
}

class ProxiedAdGroups extends AdGroupsQuery {
  constructor(e: IEndpoint) {
    super(e);
    return new Proxy(this, {
      get: (target: AdGroupsQuery, prop: string) => {
        if (!(isNaN(+prop))) {
          return adGroupEndpoint(target.endpoint, +prop);
        }
        return target[prop];
      },
    });
  }
}

export default newEndpoint<AdGroupsQuery,
                AdGroups>(ProxiedAdGroups,
                AdGroups);
