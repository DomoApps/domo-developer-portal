# Domo Jupyter API

The Domo Jupyter API allows developers to interact programmatically with Domo's Jupyter notebook and workspace management endpoints. This documentation provides details for each endpoint, including request examples and parameter tables.

## Endpoints

### Search for Notebooks

**Method**: `POST`  
**Endpoint**: `/api/datascience/v1/search/notebooks`

**Headers**:

- `X-DOMO-Developer-Token`: `<developer token here>`
- `Accept`: `application/json`
- `Content-Type`: `application/json`

**Request Body**:

```json
{
  "filters": [
    {
      "type": "DATA_FLOW_ID",
      "values": [16]
    }
  ]
}
```

**Example**:

```json
{
  "method": "POST",
  "url": "https://{domo_instance}.domo.com/api/datascience/v1/search/notebooks",
  "headers": {
    "content-type": "application/json;charset=utf-8"
  },
  "body": {
    "filters": [
      { "type": "DATA_FLOW_ID", "values": [16] }
    ]
  }
}
```

---

### Get Workspaces

**Method**: `GET`  
**Endpoint**: `/api/datascience/v1/workspaces/`

**Example**:

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/datascience/v1/workspaces/"
}
```

---

### Get Workspace Config

**Method**: `GET`  
**Endpoint**: `/api/datascience/v1/workspaces/{jupyter_workspace}`

**Path Parameters**:

| Property Name      | Type   | Required | Description                  |
|-------------------|--------|----------|------------------------------|
| jupyter_workspace | String | Yes      | The workspace identifier     |

**Example**:

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.domo.com/api/datascience/v1/workspaces/{jupyter_workspace}"
}
```

---

### Download Notebook Content

**Method**: `GET`  
**Endpoint**: `https://{domo_instance}.{service_location}/{service_prefix}/api/contents?content={content_id}`

**Query Parameters**:

| Property Name | Type   | Required | Description                |
|---------------|--------|----------|----------------------------|
| content_id    | String | Yes      | The notebook content ID    |

**Example**:

```json
{
  "method": "GET",
  "url": "https://{domo_instance}.{service_location}/{service_prefix}/api/contents?content={content_id}"
}
```
