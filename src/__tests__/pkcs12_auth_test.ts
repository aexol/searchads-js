import {PKCS12Auth} from '../pkcs12_auth';

describe('pem auth test', () => {
  it('pem auth', () => {
    const pkcs12Auth = new PKCS12Auth(1, Buffer.from('pkcs12'), 'passphrase');
    expect(pkcs12Auth.getAuthInfo().orgId).toBe(1);
    expect(pkcs12Auth.getAuthInfo().pfx.toString()).toEqual('pkcs12');
    expect(pkcs12Auth.getAuthInfo().passphrase.toString()).toEqual('passphrase');
  });
});
