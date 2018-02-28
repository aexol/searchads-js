import {IAuthInfo} from './auth';

export class PKCS12Auth implements IAuthInfo {
  constructor(private orgId: number,
              private pkcs12: Buffer,
              private passphrase: string) {}
  public getAuthInfo() {
    return {
      orgId: this.orgId,
      passphrase: this.passphrase,
      pfx: this.pkcs12,
    };
  }
}
