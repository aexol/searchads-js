import Api from '../api';
import { IPemAuthData } from '../auth';
import { CampaignQuery } from '../campaign';
import { FindQuery } from '../find';
import { ISearchAdsQuery } from '../searchads_query';

describe('campaign by id', () => {
  const pem = 'pem';
  const key = 'key';
  const orgId = 1;
  const auth = {pem, key, orgId};
  let api;
  beforeEach(() => {
    api = new Api(auth);
  });
  it('new campaign find request', () => {
    const find = api.campaigns.find as ISearchAdsQuery<FindQuery>;
    expect(find.request.endpoint).toBe('campaigns/find/');
    const pemAuth = find.request.auth.getAuthInfo() as IPemAuthData;
    expect(pemAuth.orgId).toEqual(orgId);
    expect(pemAuth.cert.toString()).toEqual(pem);
    expect(pemAuth.key.toString()).toEqual(key);
  });
  it('new adgroup find request', () => {
    const campaign = api.campaigns[1] as ISearchAdsQuery<CampaignQuery>;
    const find = campaign.adgroups.find as ISearchAdsQuery<CampaignQuery>;
    expect(find.request.endpoint).toBe('campaigns/1/adgroups/find/');
    const pemAuth = find.request.auth.getAuthInfo() as IPemAuthData;
    expect(pemAuth.orgId).toEqual(orgId);
    expect(pemAuth.cert.toString()).toEqual(pem);
    expect(pemAuth.key.toString()).toEqual(key);
  });
});
