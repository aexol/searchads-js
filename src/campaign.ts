import adgroupsEndpoint, { AdGroupsQuery } from './adgroups';
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
 * Make request on `campaigns/${id}` endpoint.
 *
 * @property {AdGroups} adgroups Get adgroups for campaign
 * @augments Request
 */
export class CampaignQuery extends QueryBase<CampaignQuery> {
  public get adgroups() {
    return adgroupsEndpoint(this.endpoint);
  }
}

class Campaign extends EndpointLeaf {
  constructor(prev: IEndpoint, protected leafEndpoint: number) {
    super(prev);
  }
}

export default newEndpoint<CampaignQuery,
                Campaign>(CampaignQuery,
                Campaign);
