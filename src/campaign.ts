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

export class CampaignQuery extends QueryBase<CampaignQuery> {
  public get adgroups() {
    return adgroupsEndpoint(this.endpoint);
  }
}

export class Campaign extends EndpointLeaf {
  /**
   *
   * @param prev Parent endpoint.
   * @param leafEndpoint  Campaign id.
   */
  constructor(prev: IEndpoint, protected leafEndpoint: number) {
    super(prev);
  }
}

export default newEndpoint<CampaignQuery,
                Campaign>(CampaignQuery,
                Campaign);
