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
 * api.campaigns.get().then(console.log)
 * ```
 */

import Api from './api';
export default Api;
