import { PEMAuth } from './pem_auth';
import { PKCS12Auth } from './pkcs12_auth';

export interface IPemAuthData {
  cert: Buffer;
  key: Buffer;
  orgId: number;
}

export interface IPKCS12AuthData {
  pfx: Buffer;
  passphrase: string;
  orgId: number;
}

export interface IAuthInfo {
  getAuthInfo(): (IPemAuthData|IPKCS12AuthData|undefined);
}

export interface ICertAuth {
  pkcs12?: string|Buffer;
  passphrase?: string;
  pem?: string|Buffer;
  key?: string|Buffer;
  orgId: number;
}

export default (auth: ICertAuth): IAuthInfo => {
  if (auth.pkcs12 && auth.passphrase) {
    const pkcs12 = Buffer.isBuffer(auth.pkcs12) ?
              auth.pkcs12 : Buffer.from(auth.pkcs12);
    return new PKCS12Auth(auth.orgId, pkcs12, auth.passphrase);
  }
  if (auth.pem && auth.key) {
    const pem = Buffer.isBuffer(auth.pem) ?
              auth.pem : Buffer.from(auth.pem);
    const key = Buffer.isBuffer(auth.key) ?
              auth.key : Buffer.from(auth.key);
    return new PEMAuth(auth.orgId, pem, key);
  }
  return {
    getAuthInfo: (): undefined => {
      return;
    },
  };
};
