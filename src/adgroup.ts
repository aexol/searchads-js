import { ICertAuth } from './auth';
import { Request } from './request';
import newEndpoint,
{
    EndpointLeaf,
    IEndpoint,
    ISearchAdsQuery,
    QueryBase,
} from './searchads_query';

export class AdGroupQuery extends QueryBase<AdGroupQuery> {}

export class AdGroup  extends EndpointLeaf {
  /**
   *
   * @param prev Parent endpoint
   * @param leafEndpoint  AdGroup id.
   */
  constructor(prev: IEndpoint, protected leafEndpoint: number) {super(prev);}
}

export default newEndpoint<AdGroupQuery,
                AdGroup>(AdGroupQuery,
                AdGroup);
