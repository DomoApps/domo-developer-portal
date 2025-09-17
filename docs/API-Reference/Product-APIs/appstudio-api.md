# AppStudio API

The AppStudio API provides endpoints to manage and interact with DataApps in your Domo instance. This documentation covers the available endpoints, their parameters, and example requests.

---

## Get DataApps - Admin Summary

**Method**: `POST`  
**Endpoint**: `/api/content/v1/dataapps/adminsummary`

**Headers**:
- `x-domo-authentication`: Session token for authentication
- `Content-Type`: `application/json`

**Request Body Example**:
```json
{
  "includeOwnerClause": "true",
  "includeTitleClause": "true",
  "orderBy": "title",
  "titleSearchText": ""
}
```

---


## Get DataApps

**Method**: `GET`  
**Endpoint**: `/api/content/v1/dataapps`

**Headers**:
- `x-domo-authentication`: Session token for authentication
- `Content-Type`: `application/json`

---

## Get DataApps by ID

**Method**: `GET`  
**Endpoint**: `/api/content/v1/dataapps/{data_app_id}`

**Path Parameters**:
- `data_app_id` - The unique identifier for the DataApp
  - Type: String
  - Required

**Query Parameters**:
| Property Name        | Type    | Required | Description                         |
|---------------------|---------|----------|-------------------------------------|
| authoring           | Boolean | No       | If true, returns authoring details  |
| includeHiddenViews  | Boolean | No       | If true, includes hidden views      |

**Headers**:
- `x-domo-authentication`: Session token for authentication
- `Content-Type`: `application/json`

**Example**:
```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/content/v1/dataapps/{data_app_id}?authoring=true&includeHiddenViews=true",
  "headers": {
    "x-domo-authentication": "<session_token>",
    "Content-Type": "application/json"
  }
}
```

---

## DataApps Access List

**Method**: `GET`  
**Endpoint**: `/api/content/v1/dataapps/{data_app_id}/access`

**Path Parameters**:
- `data_app_id` - The unique identifier for the DataApp
  - Type: String
  - Required

**Headers**:
- `x-domo-authentication`: Session token for authentication
- `Content-Type`: `application/json`

---

## Share DataApps

**Method**: `POST`  
**Endpoint**: `/api/content/v1/dataapps/share`

**Query Parameters**:
| Property Name | Type    | Required | Description                                 |
|--------------|---------|----------|---------------------------------------------|
| sendEmail    | Boolean | No       | If true, sends an email notification        |

**Headers**:
- `x-domo-authentication`: Session token for authentication
- `Content-Type`: `application/json`

**Request Body Example**:
```json
{
  "dataAppIds": ["{data_app_id}"],
  "recipients": [
    {
      "type": "group",
      "id": "{group_id}"
    }
  ],
  "message": "I thought you might find this page interesting."
}
```

---
