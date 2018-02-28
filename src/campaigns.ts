import { ICertAuth } from './auth';
import campaignEndpoint, {CampaignQuery} from './campaign';
import findEndpoint, {FindQuery} from './find';
import { Request } from './request';
import newEndpoint,
{
  EndpointLeaf,
  IEndpoint,
  ISearchAdsQuery,
  QueryBase,
} from './searchads_query';

export class CampaignsQuery extends QueryBase<CampaignsQuery> {
  public get find() {
    return findEndpoint(this.endpoint);
  }
  [s: string]: ISearchAdsQuery<CampaignQuery|FindQuery>|IEndpoint|Request;
}

export class Campaigns extends EndpointLeaf {
  protected leafEndpoint = 'campaigns';
}

class ProxiedCampaigns extends CampaignsQuery {
  constructor(e: IEndpoint) {
    super(e);
    return new Proxy(this, {
      get: (target: CampaignsQuery, prop: string) => {
        if (!(isNaN(+prop))) {
          return campaignEndpoint(target.endpoint, +prop);
        }
        return target[prop];
      },
    });
  }
}

export default
    newEndpoint<CampaignsQuery, Campaigns>(ProxiedCampaigns, Campaigns);
