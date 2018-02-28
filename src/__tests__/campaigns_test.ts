import Api from '../api';
import { IPemAuthData } from '../auth';

describe('campaigns', () => {
  const pem = 'pem';
  const key = 'key';
  const orgId = 1;
  const auth = {pem, key, orgId};
  let api: Api;
  beforeEach(() => {
    api = new Api(auth);
  });
  it('new campaigns', () => {
    expect(api.campaigns.request.endpoint).toEqual('campaigns/');
    const pemAuth = api.campaigns.request.auth.getAuthInfo() as IPemAuthData;
    expect(pemAuth.orgId).toEqual(orgId);
    expect(pemAuth.cert.toString()).toEqual(pem);
    expect(pemAuth.key.toString()).toEqual(key);
  });
});
