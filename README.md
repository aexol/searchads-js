# Apple SearchAds api wrapper

## About
TODO

## Installation
npm install @aexol/searchads-js

## Usage

## API Reference
## Modules

<dl>
<dt><a href="#module_@aexol/searchads-js">@aexol/searchads-js</a></dt>
<dd><p>SearchAds API</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#AclQuery">AclQuery</a> ⇐ <code><a href="#Request">Request</a></code></dt>
<dd><p>Queries on <code>acl</code> endpoint in SearchAds API.</p>
</dd>
<dt><a href="#AdGroupQuery">AdGroupQuery</a> ⇐ <code><a href="#Request">Request</a></code></dt>
<dd><p>Make request on <code>adgroups/${id}</code> endpoint.</p>
</dd>
<dt><a href="#AdGroupsQuery">AdGroupsQuery</a> ⇐ <code><a href="#Request">Request</a></code></dt>
<dd><p>Make request on <code>adgroups</code> endpoint.</p>
</dd>
<dt><a href="#Api">Api</a></dt>
<dd></dd>
<dt><a href="#CampaignQuery">CampaignQuery</a> ⇐ <code><a href="#Request">Request</a></code></dt>
<dd><p>Make request on <code>campaigns/${id}</code> endpoint.</p>
</dd>
<dt><a href="#CampaignsQuery">CampaignsQuery</a> ⇐ <code><a href="#Request">Request</a></code></dt>
<dd><p>Make request on <code>campaigns</code> endpoint.</p>
</dd>
<dt><a href="#FindQuery">FindQuery</a> ⇐ <code><a href="#Request">Request</a></code></dt>
<dd><p>Make request on <code>find</code> endpoint.</p>
</dd>
<dt><a href="#Request">Request</a></dt>
<dd><p>Request to SearchAds API.</p>
</dd>
<dt><a href="#QueryBase">QueryBase</a></dt>
<dd><p>Base query with request.</p>
</dd>
</dl>

<a name="module_@aexol/searchads-js"></a>

## @aexol/searchads-js
SearchAds API

**Example**  
```javascript
import Api from '@aexol/searchads-js'

const auth = {pem: '', key: '', orgId: 1}
const api = new Api(auth)
const campaigns = await api.campaigns.get()
console.log(campaigns)
```
<a name="AclQuery"></a>

## AclQuery ⇐ [<code>Request</code>](#Request)
Queries on `acl` endpoint in SearchAds API.

**Kind**: global class  
**Extends**: [<code>Request</code>](#Request)  

* [AclQuery](#AclQuery) ⇐ [<code>Request</code>](#Request)
    * [.delete()](#Request+delete) ⇒ <code>Promise</code>
    * [.get()](#Request+get) ⇒ <code>Promise</code>
    * [.post(data)](#Request+post) ⇒ <code>Promise</code>
    * [.put(data)](#Request+put) ⇒ <code>Promise</code>

<a name="Request+delete"></a>

### aclQuery.delete() ⇒ <code>Promise</code>
Delete on endpoint.

**Kind**: instance method of [<code>AclQuery</code>](#AclQuery)  
<a name="Request+get"></a>

### aclQuery.get() ⇒ <code>Promise</code>
Get on endpoint.

**Kind**: instance method of [<code>AclQuery</code>](#AclQuery)  
<a name="Request+post"></a>

### aclQuery.post(data) ⇒ <code>Promise</code>
Post on endpoint.

**Kind**: instance method of [<code>AclQuery</code>](#AclQuery)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>any</code> | post payload |

<a name="Request+put"></a>

### aclQuery.put(data) ⇒ <code>Promise</code>
Put on endpoint.

**Kind**: instance method of [<code>AclQuery</code>](#AclQuery)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>any</code> | put payload |

<a name="AdGroupQuery"></a>

## AdGroupQuery ⇐ [<code>Request</code>](#Request)
Make request on `adgroups/${id}` endpoint.

**Kind**: global class  
**Extends**: [<code>Request</code>](#Request)  

* [AdGroupQuery](#AdGroupQuery) ⇐ [<code>Request</code>](#Request)
    * [.delete()](#Request+delete) ⇒ <code>Promise</code>
    * [.get()](#Request+get) ⇒ <code>Promise</code>
    * [.post(data)](#Request+post) ⇒ <code>Promise</code>
    * [.put(data)](#Request+put) ⇒ <code>Promise</code>

<a name="Request+delete"></a>

### adGroupQuery.delete() ⇒ <code>Promise</code>
Delete on endpoint.

**Kind**: instance method of [<code>AdGroupQuery</code>](#AdGroupQuery)  
<a name="Request+get"></a>

### adGroupQuery.get() ⇒ <code>Promise</code>
Get on endpoint.

**Kind**: instance method of [<code>AdGroupQuery</code>](#AdGroupQuery)  
<a name="Request+post"></a>

### adGroupQuery.post(data) ⇒ <code>Promise</code>
Post on endpoint.

**Kind**: instance method of [<code>AdGroupQuery</code>](#AdGroupQuery)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>any</code> | post payload |

<a name="Request+put"></a>

### adGroupQuery.put(data) ⇒ <code>Promise</code>
Put on endpoint.

**Kind**: instance method of [<code>AdGroupQuery</code>](#AdGroupQuery)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>any</code> | put payload |

<a name="AdGroupsQuery"></a>

## AdGroupsQuery ⇐ [<code>Request</code>](#Request)
Make request on `adgroups` endpoint.

**Kind**: global class  
**Extends**: [<code>Request</code>](#Request)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| find | [<code>FindQuery</code>](#FindQuery) | Get find for adgroups. |
| [id] | <code>AdGroup</code> | Get adgroup by id. |


* [AdGroupsQuery](#AdGroupsQuery) ⇐ [<code>Request</code>](#Request)
    * [.delete()](#Request+delete) ⇒ <code>Promise</code>
    * [.get()](#Request+get) ⇒ <code>Promise</code>
    * [.post(data)](#Request+post) ⇒ <code>Promise</code>
    * [.put(data)](#Request+put) ⇒ <code>Promise</code>

<a name="Request+delete"></a>

### adGroupsQuery.delete() ⇒ <code>Promise</code>
Delete on endpoint.

**Kind**: instance method of [<code>AdGroupsQuery</code>](#AdGroupsQuery)  
<a name="Request+get"></a>

### adGroupsQuery.get() ⇒ <code>Promise</code>
Get on endpoint.

**Kind**: instance method of [<code>AdGroupsQuery</code>](#AdGroupsQuery)  
<a name="Request+post"></a>

### adGroupsQuery.post(data) ⇒ <code>Promise</code>
Post on endpoint.

**Kind**: instance method of [<code>AdGroupsQuery</code>](#AdGroupsQuery)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>any</code> | post payload |

<a name="Request+put"></a>

### adGroupsQuery.put(data) ⇒ <code>Promise</code>
Put on endpoint.

**Kind**: instance method of [<code>AdGroupsQuery</code>](#AdGroupsQuery)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>any</code> | put payload |

<a name="Api"></a>

## Api
**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| campaigns | [<code>CampaignsQuery</code>](#CampaignsQuery) | Instance of {CampaignsQuery} for this api obejct. |
| acl | [<code>AclQuery</code>](#AclQuery) | Instance of {AclQuery} for this api object. |

<a name="new_Api_new"></a>

### new Api(auth)
SearchAds API.


| Param | Description |
| --- | --- |
| auth | SearchAds API auth certificates. |

<a name="CampaignQuery"></a>

## CampaignQuery ⇐ [<code>Request</code>](#Request)
Make request on `campaigns/${id}` endpoint.

**Kind**: global class  
**Extends**: [<code>Request</code>](#Request)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| adgroups | <code>AdGroups</code> | Get adgroups for campaign |


* [CampaignQuery](#CampaignQuery) ⇐ [<code>Request</code>](#Request)
    * [.delete()](#Request+delete) ⇒ <code>Promise</code>
    * [.get()](#Request+get) ⇒ <code>Promise</code>
    * [.post(data)](#Request+post) ⇒ <code>Promise</code>
    * [.put(data)](#Request+put) ⇒ <code>Promise</code>

<a name="Request+delete"></a>

### campaignQuery.delete() ⇒ <code>Promise</code>
Delete on endpoint.

**Kind**: instance method of [<code>CampaignQuery</code>](#CampaignQuery)  
<a name="Request+get"></a>

### campaignQuery.get() ⇒ <code>Promise</code>
Get on endpoint.

**Kind**: instance method of [<code>CampaignQuery</code>](#CampaignQuery)  
<a name="Request+post"></a>

### campaignQuery.post(data) ⇒ <code>Promise</code>
Post on endpoint.

**Kind**: instance method of [<code>CampaignQuery</code>](#CampaignQuery)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>any</code> | post payload |

<a name="Request+put"></a>

### campaignQuery.put(data) ⇒ <code>Promise</code>
Put on endpoint.

**Kind**: instance method of [<code>CampaignQuery</code>](#CampaignQuery)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>any</code> | put payload |

<a name="CampaignsQuery"></a>

## CampaignsQuery ⇐ [<code>Request</code>](#Request)
Make request on `campaigns` endpoint.

**Kind**: global class  
**Extends**: [<code>Request</code>](#Request)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| find | [<code>FindQuery</code>](#FindQuery) | Get find for campaigns |
| [id] | <code>Campaign</code> | Get campaign by id. |


* [CampaignsQuery](#CampaignsQuery) ⇐ [<code>Request</code>](#Request)
    * [.delete()](#Request+delete) ⇒ <code>Promise</code>
    * [.get()](#Request+get) ⇒ <code>Promise</code>
    * [.post(data)](#Request+post) ⇒ <code>Promise</code>
    * [.put(data)](#Request+put) ⇒ <code>Promise</code>

<a name="Request+delete"></a>

### campaignsQuery.delete() ⇒ <code>Promise</code>
Delete on endpoint.

**Kind**: instance method of [<code>CampaignsQuery</code>](#CampaignsQuery)  
<a name="Request+get"></a>

### campaignsQuery.get() ⇒ <code>Promise</code>
Get on endpoint.

**Kind**: instance method of [<code>CampaignsQuery</code>](#CampaignsQuery)  
<a name="Request+post"></a>

### campaignsQuery.post(data) ⇒ <code>Promise</code>
Post on endpoint.

**Kind**: instance method of [<code>CampaignsQuery</code>](#CampaignsQuery)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>any</code> | post payload |

<a name="Request+put"></a>

### campaignsQuery.put(data) ⇒ <code>Promise</code>
Put on endpoint.

**Kind**: instance method of [<code>CampaignsQuery</code>](#CampaignsQuery)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>any</code> | put payload |

<a name="FindQuery"></a>

## FindQuery ⇐ [<code>Request</code>](#Request)
Make request on `find` endpoint.

**Kind**: global class  
**Extends**: [<code>Request</code>](#Request)  

* [FindQuery](#FindQuery) ⇐ [<code>Request</code>](#Request)
    * [.delete()](#Request+delete) ⇒ <code>Promise</code>
    * [.get()](#Request+get) ⇒ <code>Promise</code>
    * [.post(data)](#Request+post) ⇒ <code>Promise</code>
    * [.put(data)](#Request+put) ⇒ <code>Promise</code>

<a name="Request+delete"></a>

### findQuery.delete() ⇒ <code>Promise</code>
Delete on endpoint.

**Kind**: instance method of [<code>FindQuery</code>](#FindQuery)  
<a name="Request+get"></a>

### findQuery.get() ⇒ <code>Promise</code>
Get on endpoint.

**Kind**: instance method of [<code>FindQuery</code>](#FindQuery)  
<a name="Request+post"></a>

### findQuery.post(data) ⇒ <code>Promise</code>
Post on endpoint.

**Kind**: instance method of [<code>FindQuery</code>](#FindQuery)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>any</code> | post payload |

<a name="Request+put"></a>

### findQuery.put(data) ⇒ <code>Promise</code>
Put on endpoint.

**Kind**: instance method of [<code>FindQuery</code>](#FindQuery)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>any</code> | put payload |

<a name="Request"></a>

## Request
Request to SearchAds API.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| endpoint | <code>String</code> | Search ads api endpoint. |
| auth | <code>ICertAuth</code> | Search ads api auth. |
| headers | <code>Headers</code> | Search ads api request headers. |


* [Request](#Request)
    * [.delete()](#Request+delete) ⇒ <code>Promise</code>
    * [.get()](#Request+get) ⇒ <code>Promise</code>
    * [.post(data)](#Request+post) ⇒ <code>Promise</code>
    * [.put(data)](#Request+put) ⇒ <code>Promise</code>

<a name="Request+delete"></a>

### request.delete() ⇒ <code>Promise</code>
Delete on endpoint.

**Kind**: instance method of [<code>Request</code>](#Request)  
<a name="Request+get"></a>

### request.get() ⇒ <code>Promise</code>
Get on endpoint.

**Kind**: instance method of [<code>Request</code>](#Request)  
<a name="Request+post"></a>

### request.post(data) ⇒ <code>Promise</code>
Post on endpoint.

**Kind**: instance method of [<code>Request</code>](#Request)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>any</code> | post payload |

<a name="Request+put"></a>

### request.put(data) ⇒ <code>Promise</code>
Put on endpoint.

**Kind**: instance method of [<code>Request</code>](#Request)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>any</code> | put payload |

<a name="QueryBase"></a>

## QueryBase
Base query with request.

**Kind**: global class  
<a name="QueryBase+request"></a>

### queryBase.request
**Kind**: instance property of [<code>QueryBase</code>](#QueryBase)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| request | [<code>Request</code>](#Request) | returns  object for this endpoint. |

