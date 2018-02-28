import {IAuthInfo} from './auth';
export class PEMAuth implements IAuthInfo {
  constructor(private orgId: number, private pem: Buffer, private key: Buffer) {}
  public getAuthInfo() {
    return {
      cert: this.pem,
      key: this.key,
      orgId: this.orgId,
    };
  }
}
