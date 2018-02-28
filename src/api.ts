import aclEndpoint, {AclQuery} from './acl';
import { ICertAuth } from './auth';
import campaignsEndpoint, {CampaignsQuery} from './campaigns';
import newEndpoint,
{
  IEndpoint,
  ISearchAdsQuery,
} from './searchads_query';

/**
 * @description SearchAds API.
 *
 * @property {CampaignsQuery} campaigns Instance of {CampaignsQuery} for this api obejct.
 * @property {AclQuery} acl Instance of {AclQuery} for this api object.
 */
export default class Api implements IEndpoint, ISearchAdsQuery<Api> {
  /**
   * @description Constructor taking SearchAds API auth. Auth must be
   * an object with `{pem: <Buffer|String>, key: <Buffer|String>` or
   * `{pkcs12: <Buffer|String>, passphrase: <String>`
   * @param auth SearchAds API auth certificates.
   */
  constructor(public auth: ICertAuth) {}
  public get endpoint(): string {
    return '';
  }
  public get acl() {
    return aclEndpoint(this);
  }

  public get campaigns() {
    return campaignsEndpoint(this);
  }
}
