/**
 * SearchAds API
 * @module @aexol/searchads-js
 *
 * @example
 * ```javascript
 * import Api from '@aexol/searchads-js'
 *
 * const auth = {pem: '', key: '', orgId: 1}
 * const api = new Api(auth)
 * const campaigns = await api.campaigns.get()
 * console.log(campaigns)
 * ```
 */

import Api from './api';
export default Api;
