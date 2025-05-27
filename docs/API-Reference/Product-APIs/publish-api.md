# Publish API

The Publish API allows you to manage and interact with Publish jobs and related resources in Domo Everywhere. This documentation provides details for each endpoint, including usage, parameters, and example requests and responses.

## Endpoints

## Get All Publish Jobs

**Method**: `GET`  
**Endpoint**: `/api/publish/v2/publication`

**Description**: Retrieve all publish jobs from the Domo instance.

**Example**:

```json
{
  "method": "GET",
  "url": "https://{instance}.domo.com/api/publish/v2/publication",
  "headers": {
    "x-domo-authentication": "<session_token>"
  }
}
```

**Response**:  
Returns an array of publish jobs.

```json
200:
[
  // Array of publish job objects
]
```

---

## Get Publish Jobs Summary

**Method**: `GET`  
**Endpoint**: `/api/publish/v2/publication/summaries`

**Query Parameters**:

| Property Name | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| limit         | Number | no       | Number of results to return       |
| offset        | Number | no       | Offset for pagination             |
| searchTerm    | String | no       | Search term to filter results     |

**Example**:

```json
{
  "method": "GET",
  "url": "https://{instance}.domo.com/api/publish/v2/publication/summaries?limit=40&offset=0&searchTerm=",
  "headers": {
    "x-domo-authentication": "<session_token>"
  }
}
```

**Response**:  
Returns a summary list of publish jobs.

```json
200:
[
  // Array of publish job summary objects
]
```

---

## Get Publish Job by ID

**Method**: `GET`  
**Endpoint**: `/api/publish/v2/publication/{publish_id}`

**Path Parameters**:

- `publish_id` - The ID of the publish job  
  - Type: String  
  - Required

**Example**:

```json
{
  "method": "GET",
  "url": "https://{instance}.domo.com/api/publish/v2/publication/{publish_id}",
  "headers": {
    "x-domo-authentication": "<session_token>"
  }
}
```

**Response**:  
Returns the publish job with all properties.

```json
200:
{
  "id": "",
  "name": "haleua test of form viewer",
  "customer_id": "",
  "created": 1651701184880,
  "content": {
    "id": "917a9757-632e-4361-97c7-8cbb4c080a65",
    "domain": "",
    "customerId": "",
    "userId": "Fake User Id",
    "type": "UNDEFINED",
    "updated": 1651701184880,
    "hash": ""
  },
  "description": "share form viewer instead of builder",
  "children": [
    {
      "id": "23b63afb-47e7-44ed-a31e-f2605d1af766",
      "customer_id": "",
      "created": 1651701184879,
      "content": {
        "id": "43433b62-e67c-47be-ac59-6be9ce0cec88",
        "domain": "",
        "customerId": "",
        "userId": "Fake User Id",
        "domoObjectId": "955478113",
        "type": "PAGE",
        "updated": 1651701184879,
        "hash": ""
      },
      "children": [],
      "subscription_authorizations": [],
      "subscribers": [],
      "useDirectContent": true,
      "type": "CONTENT",
      "isV2": true,
      "hasDuplicate": false,
      "isBackup": false,
      "childIds": []
    }
  ],
  "subscription_authorizations": [
    {
      "id": "",
      "domain": "",
      "created": 1623382254328,
      "publicationId": ""
    }
  ],
  "subscribers": [],
  "useDirectContent": true,
  "type": "CONTENT",
  "isV2": true,
  "hasDuplicate": false,
  "isBackup": false,
  "childIds": []
}
```

---

## Get Virtual Users

**Method**: `POST`  
**Endpoint**: `/api/publish/v2/proxy_user/domain/`

**Request Body**:

```json
{
  "domains": [
    "{instance}.domo.com",
    "{subscriber_instance}.domo.com"
  ]
}
```

**Example**:

```json
{
  "method": "POST",
  "url": "https://{instance}.domo.com/api/publish/v2/proxy_user/domain/",
  "headers": {
    "x-domo-authentication": "<session_token>"
  },
  "body": {
    "domains": [
      "{instance}.domo.com",
      "{subscriber_instance}.domo.com"
    ]
  }
}
```

**Response**:  
Returns a list of virtual users.

```json
200:
[
  {
    "id": "32eafd19-601c-4291-8744-d5d32c502fc2",
    "publisherDomain": "",
    "customerId": "",
    "subscriberCustomerId": null,
    "subscriberDomain": "",
    "virtualUserId": "fc:33c3a3a5-1432-45a7-b2e7-a0897c0ba331",
    "tenantId": null,
    "created": 1600463895000
  }
]
```

---

## Get Publish Status

**Method**: `GET`  
**Endpoint**: `/api/publish/v2/publication/status`

**Example**:

```json
{
  "method": "GET",
  "url": "https://{instance}.domo.com/api/publish/v2/publication/status",
  "headers": {
    "x-domo-authentication": "<session_token>"
  }
}
```

**Response**:  
Returns the status of the publish feature.

```json
200:
{
  "status": "READY"
}
```

---

## Create a Publish Job

**Method**: `POST`  
**Endpoint**: `/api/publish/v2/publication/`

**Request Body**:

```json
{
  "id": "2fb8a8cc-6800-4f4a-8866-c2663cf52c0d",
  "name": "TST_Oleksii",
  "description": "dd",
  "domain": "playstation-beta.domo.com",
  "content": [
    {
      "domain": "playstation-beta.domo.com",
      "domoObjectId": "de8deeda-99cb-4d9c-be6a-d67c81c24e15",
      "customerId": "playstation-beta.domo.com",
      "type": "DATASET"
    }
  ],
  "subscriberDomain": [
    "playstation-training-sandbox.domo.com"
  ],
  "new": "true"
}
```

**Example**:

```json
{
  "method": "POST",
  "url": "https://{instance}.domo.com/api/publish/v2/publication/",
  "headers": {
    "x-domo-authentication": "<session_token>"
  },
  "body": {
    // see above for structure
  }
}
```

**Response**:  
Accepted. No content returned.

```json
202:
{}
```

---

## Get Subscriptions

**Method**: `GET`  
**Endpoint**: `/api/publish/v2/subscription/summaries`

**Example**:

```json
{
  "method": "GET",
  "url": "https://{instance}.domo.com/api/publish/v2/subscription/summaries",
  "headers": {
    "x-domo-authentication": "<session_token>"
  }
}
```

**Response**:  
Returns a list of instances you are subscribed to.

```json
200:
[
  // Array of subscription summary objects
]
```

---

## Get Subscription Invitations

**Method**: `GET`  
**Endpoint**: `/api/publish/v2/subscription/invites`

**Example**:

```json
{
  "method": "GET",
  "url": "https://{instance}.domo.com/api/publish/v2/subscription/invites",
  "headers": {
    "x-domo-authentication": "<session_token>"
  }
}
```

**Response**:  
Returns an array with subscription jobs waiting to be accepted.

```json
200:
[
  // Array of subscription invitation objects
]
```

---

## Delete Publish Job

**Method**: `DELETE`  
**Endpoint**: `/api/publish/v2/publication/{publish_id}`

**Path Parameters**:

- `publish_id` - The ID of the publish job  
  - Type: String  
  - Required

**Example**:

```json
{
  "method": "DELETE",
  "url": "https://{instance}.domo.com/api/publish/v2/publication/{publish_id}",
  "headers": {
    "x-domo-authentication": "<session_token>"
  }
}
```

**Response**:  
No content returned on success.

```json
204:
{}
```

---

## Accept Subscription Invitation

**Method**: `POST`  
**Endpoint**: `/api/publish/v2/subscription/invites/accept`

**Example**:

```json
{
  "method": "POST",
  "url": "https://{instance}.domo.com/api/publish/v2/subscription/invites/accept",
  "headers": {
    "x-domo-authentication": "<session_token>"
  }
}
```

**Response**:  
Returns an array with accepted subscription jobs.

```json
200:
[
  // Array of accepted subscription jobs
]
```
