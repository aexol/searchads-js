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
  it('new campaign by id request', () => {
    const campaign = api.campaigns[1] as ISearchAdsQuery<CampaignQuery>;
    expect(campaign.request.endpoint).toBe('campaigns/1/');
    const pemAuth = campaign.request.auth.getAuthInfo() as IPemAuthData;
    expect(pemAuth.orgId).toEqual(orgId);
    expect(pemAuth.cert.toString()).toEqual(pem);
    expect(pemAuth.key.toString()).toEqual(key);
  });
});
