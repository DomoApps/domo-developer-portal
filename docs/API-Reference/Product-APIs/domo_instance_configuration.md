NOT DONE - NOT DONE
# Domo Instance Configuration API

The Domo Instance Configuration API provides endpoints to manage and retrieve configuration details for your Domo instance, including color palettes, company settings, authorized domains, IP whitelists, and more. This documentation outlines the available endpoints, their usage, and example requests and responses.

---

## Get Active Color Palette

**Method**: `GET`  
**Endpoint**: `/api/brandkit/v1/activeChartPalette`

**Query Parameters**:

| Property Name | Type   | Required | Description                |
| ------------- | ------ | -------- | -------------------------- |
| usePaletteId  | String | No       | Whether to use palette ID. |

**Example**:

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/brandkit/v1/activeChartPalette?usePaletteId=true",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  }
}
```

**Response**:  
Returns the active color palette configuration for charts.

```json
{
  
}
```

---

## Get Color Palette by ID

**Method**: `GET`  
**Endpoint**: `/api/brandkit/v1/chartColorPalettes`

**Query Parameters**:

| Property Name | Type   | Required | Description                |
| ------------- | ------ | -------- | -------------------------- |
| id            | String | Yes      | The ID of the color palette|
| type          | String | No       | Palette type (e.g., CUSTOMER) |

**Example**:

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/brandkit/v1/chartColorPalettes?id=1&type=CUSTOMER",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  }
}
```

**Response**:  
Returns the color palette details for the specified ID.

```json
{
  
}
```

---

## Get Domo Instance Configuration (Bootstrap API)

**Method**: `GET`  
**Endpoint**: `/api/domoweb/bootstrap`

**Query Parameters**:

| Property Name   | Type    | Required | Description                       |
| --------------- | ------- | -------- | --------------------------------- |
| v2Navigation    | Boolean | No       | Whether to use v2 navigation mode |

**Example**:

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/domoweb/bootstrap?v2Navigation=true",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
}
```

**Response**:  
Returns the Domo instance configuration, including enabled features and page hierarchies.

```json
{
    "notifierConfig": {
        "apiKey": "",
        "channelName": "",
        "presenceChannelName": "",
        "isEncrypted": false,
        "host": "api.pusherapp.com",
        "socketHost": "ws.pusherapp.com",
        "socketPort": "80",
        "socketSslPort": "443"
    },
    "currentUser": {
        "USER_ID": null,
        "USER_GROUP": "",
        "USER_FULLNAME": "",
        "USER_NAME": "",
        "DEFAULT_PAGE": "30507758",
        "USER_ROLE": "Admin",
        "USER_ROLE_ID": 1,
        "USER_LOCALE": "en-US",
        "USER_RIGHTS": 63,
        "SSO_USER": false,
        "USER_PAGESETTING_KPISIZE": {},
        "UNIQUE_VISITOR_ID": "",
        "DAYS_SINCE_USER_CREATED": 727
    },
    "data": {
        "landingPageId": "30507758",
        "favorites": [],
        "pages": [
            {
                "id": "1267639476",
                "title": "Dojo Solutions",
                "type": "page",
                "locked": true,
                "sharedView": true,
                "pageVisible": true,
                "pageLocation": 1,
                "owner": 587894148,
                "owners": [
                    {
                        "id": null,
                        "type": "USER",
                        "displayName": ""
                    }
                ],
                "isOwner": false,
                "ownerName": "",
                "children": [
                    {
                        "id": "1759878295",
                        "title": "Beast Modes",
                        "type": "page",
                        "locked": true,
                        "sharedView": true,
                        "pageVisible": true,
                        "pageLocation": 0,
                        "parent": "1267639476",
                        "owner": 587894148,
                        "owners": [
                            {
                                "id": 587894148,
                                "type": "USER",
                                "displayName": ""
                            }
                        ],
                        "isOwner": false,
                        "ownerName": "",
                        "childCount": 0,
                        "canAddCard": true,
                        "bibHiddenPage": false,
                        "hasAccess": true,
                        "hierarchy": 1
                    }
                ],
                "childCount": 3,
                "canAddCard": true,
                "bibHiddenPage": false,
                "hasAccess": true,
                "hierarchy": 0
            },
            {
                "id": "109096720",
                "title": "Domo IDEA Exchange",
                "type": "page",
                "locked": true,
                "sharedView": true,
                "pageVisible": true,
                "pageLocation": 2,
                "owner": "",
                "owners": [
                    {
                        "id": null,
                        "type": "USER",
                        "displayName": ""
                    }
                ],
                "isOwner": true,
                "ownerName": "",
                "children": [
                    {
                        "id": "727624603",
                        "title": "Beast Modes",
                        "type": "page",
                        "locked": false,
                        "sharedView": true,
                        "pageVisible": true,
                        "parent": "109096720",
                        "owner": 0,
                        "owners": [
                            {
                                "id": 55874022,
                                "type": "",
                                "displayName": ""
                            }
                        ],
                        "isOwner": false,
                        "childCount": 0,
                        "canAddCard": true,
                        "bibHiddenPage": false,
                        "hasAccess": true,
                        "hierarchy": 1
                    }
                ]
            }
        ]
    }
}
```

---

## Get IP Whitelist

**Method**: `GET`  
**Endpoint**: `/api/networksecurity/v1/ipwhitelist`

**Example**:

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/networksecurity/v1/ipwhitelist",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  }
}
```

**Response**:  
Returns an array of whitelisted IP addresses.

```json
{
  "address": ["address1", "address2"]
}
```

---

## Update IP Whitelist

**Method**: `PUT`  
**Endpoint**: `/api/networksecurity/v1/ipwhitelist`

**Example**:

```json
{
  "method": "PUT",
  "url": "https://{domo_instance}.domo.com/api/networksecurity/v1/ipwhitelist",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  },
  "body": {
    // IP whitelist update payload
  }
}
```

---

## Get Authorized Domains

**Method**: `GET`  
**Endpoint**: `/api/security/v1/authorizeddomains`

**Example**:

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/security/v1/authorizeddomains",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  }
}
```

---

## Update Authorized Domains

**Method**: `PUT`  
**Endpoint**: `/api/security/v1/authorizeddomains`

**Example**:

```json
{
  "method": "PUT",
  "url": "https://{domo_instance}.domo.com/api/security/v1/authorizeddomains",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  },
  "body": {
    // Authorized domains update payload
  }
}
```

---

## Get Company Settings

**Method**: `GET`  
**Endpoint**: `/api/company/v1/settings`

**Example**:

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/company/v1/settings",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  }
}
```

---

## Update Company Settings (Subpages and Main Page)

**Method**: `PUT`  
**Endpoint**: `/api/company/v1/settings/pages`

**Example**:

```json
{
  "method": "PUT",
  "url": "https://{domo_instance}.domo.com/api/company/v1/settings/pages",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  },
  "body": {
    // Subpages and main page update payload
  }
}
```

---

## Update Company Settings (Landing Page)

**Method**: `PUT`  
**Endpoint**: `/api/company/v1/settings/landingpage`

**Example**:

```json
{
  "method": "PUT",
  "url": "https://{domo_instance}.domo.com/api/company/v1/settings/landingpage",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  },
  "body": {
    // Landing page update payload
  }
}
```

---

## Get Company Cards

**Method**: `GET`  
**Endpoint**: `/api/company/v1/cards`

**Example**:

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/company/v1/cards",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  }
}
```

---

## Get Company Pages

**Method**: `POST`  
**Endpoint**: `/api/company/v1/pages`

**Example**:

```json
{
  "method": "POST",
  "url": "https://{domo_instance}.domo.com/api/company/v1/pages",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  },
  "body": {
    // Company pages request payload
  }
}
```

---

## Get User Attributes

**Method**: `GET`  
**Endpoint**: `/api/user/v1/attributes`

**Example**:

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/user/v1/attributes",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  }
}
```

---

## Create User Attribute

**Method**: `POST`  
**Endpoint**: `/api/user/v1/attributes`

**Example**:

```json
{
  "method": "POST",
  "url": "https://{domo_instance}.domo.com/api/user/v1/attributes",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  },
  "body": {
    "keyspace": "customer-defined",
    "key": "DomoLibraryStore",
    "securityVoter": "FULL_VIS_ADMIN_IDP",
    "validator": "ANY_VALUE",
    "title": "store_id2",
    "description": "store ids"
  }
}
```

---

## Delete User Attribute

**Method**: `DELETE`  
**Endpoint**: `/api/user/v1/attributes/{attributeId}`

**Path Parameters**:

- `attributeId` - The ID of the user attribute to delete
  - Param Type: String
  - Required

**Example**:

```json
{
  "method": "DELETE",
  "url": "https://{domo_instance}.domo.com/api/user/v1/attributes/{attributeId}",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  }
}
```

---

## Toggle Weekly Digest

**Method**: `PUT`  
**Endpoint**: `/api/content/v1/customer-states/come-back-to-domo-all-users`

**Example**:

```json
{
  "method": "PUT",
  "url": "https://{domo_instance}.domo.com/api/content/v1/customer-states/come-back-to-domo-all-users",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  },
  "body": {
    "name": "come-back-to-domo-all-users",
    "value": false
  }
}
```
