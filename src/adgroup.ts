import { ICertAuth } from './auth';
import { Request } from './request';
import newEndpoint,
{
    EndpointLeaf,
    IEndpoint,
    ISearchAdsQuery,
    QueryBase,
} from './searchads_query';

/**
 * Make request on `adgroups/${id}` endpoint.
 *
 * @augments Request
 */
export class AdGroupQuery extends QueryBase<AdGroupQuery> {}

class AdGroup  extends EndpointLeaf {
  constructor(prev: IEndpoint, protected leafEndpoint: number) {super(prev);}
}

export default newEndpoint<AdGroupQuery,
                AdGroup>(AdGroupQuery,
                AdGroup);
