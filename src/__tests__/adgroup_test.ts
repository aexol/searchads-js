import { AdGroupQuery } from '../adgroup';
import Api from '../api';
import { IPemAuthData } from '../auth';
import { CampaignQuery } from '../campaign';
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
  it('new adgroup by id request', () => {
    const campaign = api.campaigns[1] as ISearchAdsQuery<CampaignQuery>;
    const adgroup = campaign.adgroups[1] as ISearchAdsQuery<AdGroupQuery>;
    const pemAuth = adgroup.request.auth.getAuthInfo() as IPemAuthData;
    expect(adgroup.request.endpoint).toBe('campaigns/1/adgroups/1/');
    expect(pemAuth.orgId).toEqual(orgId);
    expect(pemAuth.cert.toString()).toEqual(pem);
    expect(pemAuth.key.toString()).toEqual(key);
  });
});
