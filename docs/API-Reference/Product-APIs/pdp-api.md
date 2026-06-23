# PDP API

The PDP (Personalized Data Permissions) API allows developers to manage PDP Groups for datasets in Domo. This includes retrieving, creating, and updating PDP Groups, which control row-level security policies for datasets.

## Get PDP Groups

**Method**: `GET`  
**Endpoint**: `/api/query/v1/data-control/{dataset_id}/filter-groups/`

**Path Parameters**:

- `dataset_id` - The ID of the dataset for which to retrieve PDP Groups  
  - Type: String  
  - Required

**Query Parameters**:

| Property Name | Type   | Required | Description                                                        |
| ------------- | ------ | -------- | ------------------------------------------------------------------ |
| options       | String | No       | Comma-separated options: `load_associations,load_filters,include_open_policy` |

**Example**:

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/query/v1/data-control/{dataset_id}/filter-groups/?options=load_associations,load_filters,include_open_policy",
  "headers": {
    "x-domo-authentication": "<session_token>",
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
}
```

**Response**:  
Returns a list of PDP Groups with all properties.

```json
[
  {
    "name": "Test_DO NOT DELETE",
    "filterGroupId": 593,
    "dataSourceId": "94a4edfa-5926-4f0c-ad1e-a341f53f6113",
    "type": "user",
    "groupIds": [1324037627],
    "dataSourcePermissions": false,
    "resources": {
      "GROUP": ["1324037627"]
    },
    "parameters": [
      {
        "name": "Action",
        "value": "ACCOUNT_LOCKED",
        "values": ["ACCOUNT_LOCKED"],
        "type": "COLUMN",
        "operator": "EQUALS",
        "not": false,
        "ignoreCase": false
      }
    ]
  }
]
```

---

## Create PDP Group

**Method**: `POST`  
**Endpoint**: `/api/query/v1/data-control/{dataset_id}/filter-groups`

**Path Parameters**:

- `dataset_id` - The ID of the dataset for which to create a PDP Group  
  - Type: String  
  - Required

**Request Body**:

| Property Name         | Type     | Required | Description                                  |
| -------------------- | -------- | -------- | -------------------------------------------- |
| name                 | String   | Yes      | Name of the PDP Group                        |
| dataSourceId         | String   | Yes      | Dataset ID                                   |
| userIds              | Array    | No       | List of user IDs                             |
| virtualUserIds       | Array    | No       | List of virtual user IDs                     |
| groupIds             | Array    | Yes      | List of group IDs                            |
| dataSourcePermissions| Boolean  | No       | Dataset permissions                          |
| parameters           | Array    | Yes      | List of policy parameters (see below)        |

**Example**:

```json
{
  "method": "POST",
  "url": "https://{domo_instance}.domo.com/api/query/v1/data-control/{dataset_id}/filter-groups",
  "headers": {
    "x-domo-authentication": "<session_token>",
    "Content-Type": "application/json"
  },
  "body": {
    "name": "Policy_trusted_attribute",
    "dataSourceId": "94a4edfa-5926-4f0c-ad1e-a341f53f6113",
    "userIds": [],
    "virtualUserIds": [],
    "groupIds": ["1324037627"],
    "dataSourcePermissions": false,
    "parameters": [
      {
        "type": "DYNAMIC",
        "name": "Email",
        "values": ["domo.policy.managed_user_department"],
        "operator": "EQUALS",
        "ignoreCase": false
      }
    ]
  }
}
```

**Response**:  
Returns the created PDP Group with all properties.

```json
{
  "name": "Policy_trusted_attribute",
  "filterGroupId": 595,
  "dataSourceId": "94a4edfa-5926-4f0c-ad1e-a341f53f6113",
  "policySetId": 474,
  "groupIds": [1324037627],
  "dataSourcePermissions": false,
  "parameters": [
    {
      "name": "Email",
      "value": "domo.policy.managed_user_department",
      "values": ["domo.policy.managed_user_department"],
      "type": "DYNAMIC",
      "operator": "EQUALS",
      "not": false,
      "ignoreCase": false
    }
  ]
}
```

---

## Update PDP Group

**Method**: `PUT`  
**Endpoint**: `/api/query/v1/data-control/{dataset_id}/filter-groups/{filter_group_id}`

**Path Parameters**:

- `dataset_id` - The ID of the dataset  
  - Type: String  
  - Required
- `filter_group_id` - The ID of the PDP Group to update  
  - Type: Integer  
  - Required

**Request Body**:

| Property Name         | Type     | Required | Description                                  |
| -------------------- | -------- | -------- | -------------------------------------------- |
| name                 | String   | Yes      | Name of the PDP Group                        |
| filterGroupId        | Integer  | Yes      | ID of the PDP Group                          |
| dataSourceId         | String   | Yes      | Dataset ID                                   |
| userIds              | Array    | No       | List of user IDs                             |
| virtualUserIds       | Array    | No       | List of virtual user IDs                     |
| groupIds             | Array    | Yes      | List of group IDs                            |
| dataSourcePermissions| Boolean  | No       | Dataset permissions                          |
| parameters           | Array    | Yes      | List of policy parameters (see below)        |

**Example**:

```json
{
  "method": "PUT",
  "url": "https://{domo_instance}.domo.com/api/query/v1/data-control/{dataset_id}/filter-groups/{filter_group_id}",
  "headers": {
    "x-domo-authentication": "<session_token>",
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  "body": {
    "name": "Simple Filter",
    "filterGroupId": 593,
    "dataSourceId": "94a4edfa-5926-4f0c-ad1e-a341f53f6113",
    "userIds": [],
    "virtualUserIds": [],
    "groupIds": [1324037627],
    "dataSourcePermissions": false,
    "parameters": [
      {
        "type": "COLUMN",
        "name": "Action",
        "values": ["ACCOUNT_LOCKED"],
        "operator": "EQUALS",
        "ignoreCase": false
      },
      {
        "type": "COLUMN",
        "name": "Department",
        "values": ["Crystal Ballers"],
        "operator": "EQUALS",
        "ignoreCase": false
      }
    ]
  }
}
```

**Response**:  
Returns the updated PDP Group with all properties.

```json
{
  "name": "Simple Filter",
  "filterGroupId": 593,
  "dataSourceId": "94a4edfa-5926-4f0c-ad1e-a341f53f6113",
  "groupIds": [1324037627],
  "dataSourcePermissions": false,
  "parameters": [
    {
      "name": "Action",
      "value": "ACCOUNT_LOCKED",
      "values": ["ACCOUNT_LOCKED"],
      "type": "COLUMN",
      "operator": "EQUALS",
      "not": false,
      "ignoreCase": false
    },
    {
      "name": "Department",
      "value": "Crystal Ballers",
      "values": ["Crystal Ballers"],
      "type": "COLUMN",
      "operator": "EQUALS",
      "not": false,
      "ignoreCase": false
    }
  ]
}
```

For more information, see the [Domo Knowledge Base](https://domohelp.domo.com/hc/en-us/articles/360042934614-Creating-and-Deleting-PDP-Policies).
