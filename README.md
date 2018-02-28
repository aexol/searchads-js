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
<dt><a href="#Acl">Acl</a></dt>
<dd><p>Get ACL from SearchAds API for this auth.</p>
</dd>
<dt><a href="#AdGroup">AdGroup</a></dt>
<dd></dd>
<dt><a href="#Api">Api</a></dt>
<dd><p>Main api class.</p>
</dd>
<dt><a href="#Campaign">Campaign</a></dt>
<dd></dd>
</dl>

<a name="module_@aexol/searchads-js"></a>

## @aexol/searchads-js
SearchAds API

<a name="Acl"></a>

## Acl
Get ACL from SearchAds API for this auth.

**Kind**: global class  
<a name="AdGroup"></a>

## AdGroup
**Kind**: global class  
<a name="new_AdGroup_new"></a>

### new AdGroup(prev, leafEndpoint)

| Param | Description |
| --- | --- |
| prev | Parent endpoint |
| leafEndpoint | AdGroup id. |

<a name="Api"></a>

## Api
Main api class.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| campaigns | <code>Campaigns</code> | Campaigns endpoint in API. |
| acl | [<code>Acl</code>](#Acl) | ACL endpoint in API. |

<a name="new_Api_new"></a>

### new Api(auth)

| Param | Description |
| --- | --- |
| auth | SearchAds API auth certificates. Either object  `{pem: <Buffer|String>, key: <Buffer|String>` or  `{pkcs12: <Buffer|String>, passphrase: <String>` |

<a name="Campaign"></a>

## Campaign
**Kind**: global class  
<a name="new_Campaign_new"></a>

### new Campaign(prev, leafEndpoint)

| Param | Description |
| --- | --- |
| prev | Parent endpoint. |
| leafEndpoint | Campaign id. |

