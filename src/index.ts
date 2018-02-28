/**
 * SearchAds API
 * @module @aexol/searchads-js
 *
 * @example
 * ```javascript
 * import Api from '@aexol/searchads-js'
 * import fs from 'fs'
 *
 * const auth = {
 *   pem: fs.readFileSync('cert.pem'),
 *   key: fs.readFileSync('cert.key'),
 *   orgId: 1
 * }
 * const api = new Api(auth)
 * api.campaigns.get().then(console.log).catch(e => console.log(e.message))
 * ```
 */

import Api from './api';
export default Api;
