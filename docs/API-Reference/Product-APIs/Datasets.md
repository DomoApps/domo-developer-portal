# Datasets API

## Obtain a Stream Representation

**Method:** `GET`  
**Endpoint:** `/api/data/v1/streams/{streamId}`

**Description:** Obtain a Stream representation specified by the supplied ID.

**Path Parameters:**

| Parameter | Type    | Required | Description           |
| --------- | ------- | -------- | --------------------- |
| streamId  | integer | Yes      | The ID of the Stream. |

**Query Parameters:**

| Parameter | Type   | Required | Description                                                                                                                             |
| --------- | ------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| fields    | string | No       | Comma-separated fields to include, with 'all' to include all fields. Default: `id,userId,name,displayName,type,dataProviderType,valid`. |

**Response:**

```json
{
  "id": 12345,
  "userId": 67890,
  "name": "Sample Stream",
  "displayName": "Sample Stream Display",
  "type": "exampleType",
  "dataProviderType": "exampleProvider",
  "valid": true
}
```

---

## Example Usage for Stream Representation

<!--
type: tab
title: Javascript
-->

```javascript
fetch('https://<domo-instance-here>/api/data/v1/streams/12345', {
  method: 'GET',
  headers: {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(`Error: ${error}`));
```

<!--
type: tab
title: Python
-->

```python
import httpx

headers = {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
}
url = 'https://<domo-instance-here>/api/data/v1/streams/12345'

with httpx.Client() as client:
    response = client.get(url, headers=headers)
    print(response.json())
```

<!-- type: tab-end -->

---

## Obtain a DataSource Representation

**Method:** `GET`  
**Endpoint:** `/api/data/v3/datasources/{dataSourceId}`

**Description:** Obtain a DataSource representation specified by the supplied ID.

**Path Parameters:**

| Parameter    | Type   | Required | Description               |
| ------------ | ------ | -------- | ------------------------- |
| dataSourceId | string | Yes      | The ID of the DataSource. |

**Query Parameters:**

| Parameter         | Type    | Required | Description                                                                                |
| ----------------- | ------- | -------- | ------------------------------------------------------------------------------------------ |
| part              | array   | No       | Specific parts of the DataSource to include. Options: `core`, `permission`, `status`, etc. |
| includeAllDetails | boolean | No       | Whether to include all details. Default: `false`.                                          |

**Response:**

```json
{
  "id": "abc123",
  "name": "Sample DataSource",
  "type": "exampleType",
  "status": "active",
  "details": {
    "rows": 1000,
    "columns": 10
  }
}
```

---

## Example Usage for DataSource Representation

<!--
type: tab
title: Javascript
-->

```javascript
fetch('https://<domo-instance-here>/api/data/v3/datasources/abc123', {
  method: 'GET',
  headers: {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(`Error: ${error}`));
```

<!--
type: tab
title: Python
-->

```python
import httpx

headers = {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
}
url = 'https://<domo-instance-here>/api/data/v3/datasources/abc123'

with httpx.Client() as client:
    response = client.get(url, headers=headers)
    print(response.json())
```

<!-- type: tab-end -->
