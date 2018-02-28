import nodeFetch from 'node-fetch';
import auth, { IPemAuthData, IPKCS12AuthData } from '../auth';

describe('auth', () => {
  it('auth pem', () => {
    const pemBuff = auth({
      key: Buffer.from('key'),
      orgId: 1,
      pem: Buffer.from('pem'),
    });
    const pem = auth({
      key: 'key',
      orgId: 1,
      pem: 'pem',
    });
    expect((pemBuff.getAuthInfo() as IPemAuthData).cert.toString()).toEqual('pem');
    expect((pemBuff.getAuthInfo() as IPemAuthData).key.toString()).toEqual('key');
    expect((pemBuff.getAuthInfo() as IPemAuthData).orgId).toBe(1);
    expect((pem.getAuthInfo() as IPemAuthData).cert.toString()).toEqual('pem');
    expect((pem.getAuthInfo() as IPemAuthData).key.toString()).toEqual('key');
    expect((pem.getAuthInfo() as IPemAuthData).orgId).toBe(1);
  });
  it('auth pkcs12', () => {
    const pkcs12Buff = auth({
      orgId: 1,
      passphrase: 'passphrase',
      pkcs12: Buffer.from('cert'),
    });
    const pkcs12 = auth({
      orgId: 1,
      passphrase: 'passphrase',
      pkcs12: 'cert',
    });
    expect((pkcs12Buff.getAuthInfo() as IPKCS12AuthData).pfx.toString()).toEqual('cert');
    expect((pkcs12Buff.getAuthInfo() as IPKCS12AuthData).passphrase.toString()).toEqual('passphrase');
    expect((pkcs12Buff.getAuthInfo() as IPKCS12AuthData).orgId).toBe(1);
    expect((pkcs12.getAuthInfo() as IPKCS12AuthData).pfx.toString()).toEqual('cert');
    expect((pkcs12.getAuthInfo() as IPKCS12AuthData).passphrase.toString()).toEqual('passphrase');
    expect((pkcs12Buff.getAuthInfo() as IPKCS12AuthData).orgId).toBe(1);
  });
});
