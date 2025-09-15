# Datasets API

## Get a Stream Representation

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

## Get a DataSource Representation

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

## Query with SQL

**Method:** `POST`  
**Endpoint:** `/api/query/v1/execute/:datasetId`

**Description:** Executes an SQL query on the specified DataSet and returns the result in the form of a list of objects.

**Path Parameters:**

| Parameter | Type   | Required | Description                     |
| --------- | ------ | -------- | ------------------------------- |
| datasetId | string | Yes      | The ID of the DataSet to query. |

**Body Parameters:**

| Parameter | Type   | Required | Description                   |
| --------- | ------ | -------- | ----------------------------- |
| sql       | string | Yes      | The SQL statement to execute. |

<!--
type: tab
title: Javascript
-->

```javascript
fetch('https://<domo-instance-here>/api/query/v1/execute/12345', {
  method: 'POST',
  headers: {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ sql: 'SELECT * FROM table' }),
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
url = 'https://<domo-instance-here>/api/query/v1/execute/12345'

payload = {"sql": "SELECT * FROM table"}

with httpx.Client() as client:
    response = client.post(url, headers=headers, json=payload)
    print(response.json())
```

<!-- type: tab-end -->

**Response:**

```json
[
  {
    "column1": "value1",
    "column2": "value2"
  }
]
```

---

## Dataset Access List

**Method:** `GET`  
**Endpoint:** `/api/data/v3/datasources/{dataset_id}/permissions`

**Description:** Retrieves a list of users and groups with access to the dataset, along with their permissions.

**Path Parameters:**

| Parameter  | Type   | Required | Description                       |
| ---------- | ------ | -------- | --------------------------------- |
| dataset_id | string | Yes      | Unique identifier of the dataset. |

<!--
type: tab
title: Javascript
-->

```javascript
fetch(
  'https://<domo-instance-here>/api/data/v3/datasources/abc123/permissions',
  {
    method: 'GET',
    headers: {
      'X-DOMO-Developer-Token': '<your-token-here>',
      'Content-Type': 'application/json',
    },
  },
)
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
url = 'https://<domo-instance-here>/api/data/v3/datasources/abc123/permissions'

with httpx.Client() as client:
    response = client.get(url, headers=headers)
    print(response.json())
```

<!-- type: tab-end -->

**Response:**

```json
{
  "list": [
    {
      "id": "user1",
      "type": "USER",
      "accessLevel": "READ"
    },
    {
      "id": "group1",
      "type": "GROUP",
      "accessLevel": "WRITE"
    }
  ]
}
```

---

## Revoke Dataset Access

**Method:** `DELETE`  
**Endpoint:** `/api/data/v3/datasources/:datasetId/permissions/USER/:userId`

**Description:** Revokes access to a specified DataSet for a given user.

**Path Parameters:**

| Parameter | Type   | Required | Description                                  |
| --------- | ------ | -------- | -------------------------------------------- |
| datasetId | string | Yes      | The ID of the DataSet to revoke access from. |
| userId    | string | Yes      | The ID of the user to revoke access for.     |

<!--
type: tab
title: Javascript
-->

```javascript
fetch(
  'https://<domo-instance-here>/api/data/v3/datasources/abc123/permissions/USER/user456',
  {
    method: 'DELETE',
    headers: {
      'X-DOMO-Developer-Token': '<your-token-here>',
      'Content-Type': 'application/json',
    },
  },
)
  .then((response) => {
    if (response.ok) {
      console.log('Access revoked successfully');
    } else {
      console.error('Failed to revoke access');
    }
  })
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
url = 'https://<domo-instance-here>/api/data/v3/datasources/abc123/permissions/USER/user456'

with httpx.Client() as client:
    response = client.delete(url, headers=headers)
    if response.status_code == 200:
        print('Access revoked successfully')
    else:
        print('Failed to revoke access')
```

<!-- type: tab-end -->

**Response:**

````json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}

---

## Get Metadata

**Method:** `GET`
**Endpoint:** `/api/data/v3/datasources/:datasetId`

**Description:** Retrieves metadata for a specified DataSet, including the dataset's properties and optionally requested parts of the metadata.

**Path Parameters:**

| Parameter  | Type   | Required | Description                          |
| ---------- | ------ | -------- | ------------------------------------ |
| datasetId  | string | Yes      | The ID of the DataSet to retrieve metadata for. |

**Query Parameters:**

| Parameter       | Type   | Required | Description                                      |
| --------------- | ------ | -------- | ------------------------------------------------ |
| requestedParts  | string | No       | A comma-separated list of metadata parts to include. |

<!--
type: tab
title: Javascript
-->

```javascript
fetch('https://<domo-instance-here>/api/data/v3/datasources/abc123?requestedParts=core,permission', {
  method: 'GET',
  headers: {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(`Error: ${error}`));
````

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
url = 'https://<domo-instance-here>/api/data/v3/datasources/abc123?requestedParts=core,permission'

with httpx.Client() as client:
    response = client.get(url, headers=headers)
    print(response.json())
```

<!-- type: tab-end -->

**Response:**

````json
{
  "id": "abc123",
  "name": "Sample DataSet",
  "properties": {
    "rows": 1000,
    "columns": 10
  }
}

---

## Append Row to Dataset

**Method:** `POST`
**Endpoint:** `/api/data/v3/datasources/:datasetId/uploads`

**Description:** Appends a row of values to a specified dataset.

**Path Parameters:**

| Parameter  | Type   | Required | Description                          |
| ---------- | ------ | -------- | ------------------------------------ |
| datasetId  | string | Yes      | The ID of the dataset to which values will be appended. |

**Body Parameters:**

| Parameter  | Type   | Required | Description                          |
| ---------- | ------ | -------- | ------------------------------------ |
| values     | string | Yes      | A comma-delimited text string of values to append to the dataset. |
| delimiter  | string | No       | The delimiter used to split the values (default is comma). |

<!--
type: tab
title: Javascript
-->

```javascript
fetch('https://<domo-instance-here>/api/data/v3/datasources/abc123/uploads', {
  method: 'POST',
  headers: {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ values: 'value1,value2,value3', delimiter: ',' }),
})
  .then((response) => {
    if (response.ok) {
      console.log('Row appended successfully');
    } else {
      console.error('Failed to append row');
    }
  })
  .catch((error) => console.error(`Error: ${error}`));
````

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
url = 'https://<domo-instance-here>/api/data/v3/datasources/abc123/uploads'

payload = {
    "values": "value1,value2,value3",
    "delimiter": ","
}

with httpx.Client() as client:
    response = client.post(url, headers=headers, json=payload)
    if response.status_code == 200:
        print('Row appended successfully')
    else:
        print('Failed to append row')
```

<!-- type: tab-end -->

**Response:**

````json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}

---

## Stream (Connector) - Create

**Method:** `POST`
**Endpoint:** `/api/data/v1/streams`

**Description:** Creates a new data stream using a connector and specifies configuration details.

**Body Parameters:**

| Parameter            | Type    | Required | Description                                    |
| -------------------- | ------- | -------- | ---------------------------------------------- |
| transport            | object  | Yes      | Connector transport details, including type and version. |
| configuration        | array   | Yes      | List of key-value pairs defining stream configurations. |
| account              | object  | Yes      | Account information (e.g., ID).              |
| updateMethod         | string  | Yes      | Update method, e.g., `APPEND`.               |
| dataProvider         | object  | Yes      | Data provider details, including key.        |
| dataSource           | object  | Yes      | Dataset details, including name and description. |
| advancedScheduleJson | string  | No       | Schedule details in JSON format.             |

<!--
type: tab
title: Javascript
-->

```javascript
fetch('https://<domo-instance-here>/api/data/v1/streams', {
  method: 'POST',
  headers: {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    transport: { type: 'exampleType', version: '1.0' },
    configuration: [{ key: 'exampleKey', value: 'exampleValue' }],
    account: { id: 'accountId' },
    updateMethod: 'APPEND',
    dataProvider: { key: 'providerKey' },
    dataSource: { name: 'exampleName', description: 'exampleDescription' },
    advancedScheduleJson: '{}'
  }),
})
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(`Error: ${error}`));
````

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
url = 'https://<domo-instance-here>/api/data/v1/streams'

payload = {
    "transport": {"type": "exampleType", "version": "1.0"},
    "configuration": [{"key": "exampleKey", "value": "exampleValue"}],
    "account": {"id": "accountId"},
    "updateMethod": "APPEND",
    "dataProvider": {"key": "providerKey"},
    "dataSource": {"name": "exampleName", "description": "exampleDescription"},
    "advancedScheduleJson": "{}"
}

with httpx.Client() as client:
    response = client.post(url, headers=headers, json=payload)
    print(response.json())
```

<!-- type: tab-end -->

**Response:**

````json
{
  "id": "streamId",
  "status": "created"
}

---

## Stream (Connector) - Get

**Method:** `GET`
**Endpoint:** `/api/data/v1/streams/{stream_id}`

**Description:** Retrieves configuration details for a specific data stream.

**Path Parameters:**

| Parameter   | Type   | Required | Description                          |
| ----------- | ------ | -------- | ------------------------------------ |
| stream_id   | string | Yes      | Unique identifier of the stream.    |

<!--
type: tab
title: Javascript
-->

```javascript
fetch('https://<domo-instance-here>/api/data/v1/streams/stream123', {
  method: 'GET',
  headers: {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(`Error: ${error}`));
````

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
url = 'https://<domo-instance-here>/api/data/v1/streams/stream123'

with httpx.Client() as client:
    response = client.get(url, headers=headers)
    print(response.json())
```

<!-- type: tab-end -->

**Response:**

````json
{
  "id": "stream123",
  "name": "Sample Stream",
  "status": "active"
}

---

## Stream Execution History

**Method:** `GET`
**Endpoint:** `/api/data/v1/streams/{stream_id}/history/aggregate`

**Description:** Retrieves the execution history for a specific data stream, including details about completed operations, errors, and performance metrics.

**Path Parameters:**

| Parameter   | Type   | Required | Description                          |
| ----------- | ------ | -------- | ------------------------------------ |
| stream_id   | string | Yes      | Unique identifier of the stream.    |

<!--
type: tab
title: Javascript
-->

```javascript
fetch('https://<domo-instance-here>/api/data/v1/streams/stream123/history/aggregate', {
  method: 'GET',
  headers: {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(`Error: ${error}`));
````

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
url = 'https://<domo-instance-here>/api/data/v1/streams/stream123/history/aggregate'

with httpx.Client() as client:
    response = client.get(url, headers=headers)
    print(response.json())
```

<!-- type: tab-end -->

**Response:**

````json
[
  {
    "executionId": "exec123",
    "status": "completed",
    "duration": 120
  },
  {
    "executionId": "exec124",
    "status": "failed",
    "error": "Timeout error"
  }
]

---

## Execute Dataset Stream

**Method:** `POST`
**Endpoint:** `/api/data/v1/streams/:streamId/executions`

**Description:** Queries a dataset's stream ID and executes the dataset stream.

**Path Parameters:**

| Parameter  | Type   | Required | Description                          |
| ---------- | ------ | -------- | ------------------------------------ |
| streamId   | string | Yes      | The ID of the dataset stream to execute. |

**Body Parameters:**

| Parameter  | Type   | Required | Description                          |
| ---------- | ------ | -------- | ------------------------------------ |
| action     | string | Yes      | The action to execute on the dataset stream. Example: `Manual`. |

<!--
type: tab
title: Javascript
-->

```javascript
fetch('https://<domo-instance-here>/api/data/v1/streams/stream123/executions', {
  method: 'POST',
  headers: {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ action: 'Manual' }),
})
  .then((response) => {
    if (response.ok) {
      console.log('Stream executed successfully');
    } else {
      console.error('Failed to execute stream');
    }
  })
  .catch((error) => console.error(`Error: ${error}`));
````

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
url = 'https://<domo-instance-here>/api/data/v1/streams/stream123/executions'

payload = {
    "action": "Manual"
}

with httpx.Client() as client:
    response = client.post(url, headers=headers, json=payload)
    if response.status_code == 200:
        print('Stream executed successfully')
    else:
        print('Failed to execute stream')
```

<!-- type: tab-end -->

**Response:**

```json
{
  "executionId": "exec123",
  "status": "started"
}

---
```
