import Api from '../api';
import { IPemAuthData } from '../auth';

describe('acl test', () => {
  const pem = 'pem';
  const key = 'key';
  const orgId = 1;
  const auth = {pem, key, orgId};
  let api;
  beforeEach(() => {
    api = new Api(auth);
  });
  it('acl', () => {
    expect(api.acl.request.endpoint).toBe('acl/');
    const pemAuth = api.acl.request.auth.getAuthInfo() as IPemAuthData;
    expect(pemAuth.orgId).toEqual(orgId);
    expect(pemAuth.cert.toString()).toEqual(pem);
    expect(pemAuth.key.toString()).toEqual(key);
  });
});
