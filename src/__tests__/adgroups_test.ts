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
    const adgroups = campaign.adgroups;
    const pemAuth = adgroups.request.auth.getAuthInfo() as IPemAuthData;
    expect(adgroups.request.endpoint).toBe('campaigns/1/adgroups/');
    expect(pemAuth.orgId).toEqual(orgId);
    expect(pemAuth.cert.toString()).toEqual(pem);
    expect(pemAuth.key.toString()).toEqual(key);
  });
});
