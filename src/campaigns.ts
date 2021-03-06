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

/**
 * Make request on `campaigns` endpoint.
 *
 * @property {FindQuery} find Get find for campaigns
 * @property {Campaign} [id] Get campaign by id.
 * @augments Request
 */
export class CampaignsQuery extends QueryBase<CampaignsQuery> {
  public get find() {
    return findEndpoint(this.endpoint);
  }
  [s: string]: any
}

class Campaigns extends EndpointLeaf {
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
