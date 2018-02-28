import {PEMAuth} from '../pem_auth';

describe('pem auth test', () => {
  it('pem auth', () => {
    const pemAuth = new PEMAuth(1, Buffer.from('pem'), Buffer.from('key'));
    expect(pemAuth.getAuthInfo().cert.toString()).toEqual('pem');
    expect(pemAuth.getAuthInfo().key.toString()).toEqual('key');
    expect(pemAuth.getAuthInfo().orgId).toBe(1);
  });
});
