import aclEndpoint, {AclQuery} from './acl';
import { ICertAuth } from './auth';
import campaignsEndpoint, {CampaignsQuery} from './campaigns';
import newEndpoint,
{
  IEndpoint,
  ISearchAdsQuery,
} from './searchads_query';

export default class Api implements IEndpoint, ISearchAdsQuery<Api> {
  /**
   *
   * @param auth SearchAds API auth certificates. Either object
   *  {pem: {Buffer|String}, key: {Buffer|String} or
   *  {pkcs12: {Buffer|String}, passphrase: {String}}}
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
