# Datasets API

## Get Partition List

**Method:** `GET`  
**Endpoint:** `/api/query/v1/datasources/{dataset_id}/partition`

**Description:** Retrieves a list of partitions associated with the dataset. Does not include metadata such as row counts.

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
  'https://<domo-instance-here>/api/query/v1/datasources/abc123/partition',
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
url = 'https://<domo-instance-here>/api/query/v1/datasources/abc123/partition'

with httpx.Client() as client:
    response = client.get(url, headers=headers)
    print(response.json())
```

<!-- type: tab-end -->

**Response:**

```json
[
  {
    "partitionId": "p1",
    "status": "active"
  },
  {
    "partitionId": "p2",
    "status": "archived"
  }
]
```

---

## Search Partition List

**Method:** `POST`  
**Endpoint:** `/api/query/v1/datasources/{dataset_id}/partition/search`

**Description:** Searches for partitions in a dataset using filter criteria. Returns a list of matching partitions and their metadata.

**Path Parameters:**

| Parameter  | Type   | Required | Description                       |
| ---------- | ------ | -------- | --------------------------------- |
| dataset_id | string | Yes      | Unique identifier of the dataset. |

**Body Parameters:**

| Parameter | Type   | Required | Description                               |
| --------- | ------ | -------- | ----------------------------------------- |
| filter    | object | Yes      | Filter criteria for searching partitions. |

<!--
type: tab
title: Javascript
-->

```javascript
fetch(
  'https://<domo-instance-here>/api/query/v1/datasources/abc123/partition/search',
  {
    method: 'POST',
    headers: {
      'X-DOMO-Developer-Token': '<your-token-here>',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ filter: { status: 'active' } }),
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
url = 'https://<domo-instance-here>/api/query/v1/datasources/abc123/partition/search'

payload = {"filter": {"status": "active"}}

with httpx.Client() as client:
    response = client.post(url, headers=headers, json=payload)
    print(response.json())
```

<!-- type: tab-end -->

**Response:**

```json
[
  {
    "partitionId": "p1",
    "status": "active",
    "rowCount": 1000
  },
  {
    "partitionId": "p2",
    "status": "active",
    "rowCount": 500
  }
]
```

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

```json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}
```

---

## Get Metadata

**Method:** `GET`  
**Endpoint:** `/api/data/v3/datasources/:datasetId`

**Description:** Retrieves metadata for a specified DataSet, including the dataset's properties and optionally requested parts of the metadata.

**Path Parameters:**

| Parameter | Type   | Required | Description                                     |
| --------- | ------ | -------- | ----------------------------------------------- |
| datasetId | string | Yes      | The ID of the DataSet to retrieve metadata for. |

**Query Parameters:**

| Parameter      | Type   | Required | Description                                          |
| -------------- | ------ | -------- | ---------------------------------------------------- |
| requestedParts | string | No       | A comma-separated list of metadata parts to include. |

<!--
type: tab
title: Javascript
-->

```javascript
fetch(
  'https://<domo-instance-here>/api/data/v3/datasources/abc123?requestedParts=core,permission',
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
url = 'https://<domo-instance-here>/api/data/v3/datasources/abc123?requestedParts=core,permission'

with httpx.Client() as client:
    response = client.get(url, headers=headers)
    print(response.json())
```

<!-- type: tab-end -->

**Response:**

```json
{
  "id": "abc123",
  "name": "Sample DataSet",
  "properties": {
    "rows": 1000,
    "columns": 10
  }
}
```

---

## Append Row to Dataset

**Method:** `POST`  
**Endpoint:** `/api/data/v3/datasources/:datasetId/uploads`

**Description:** Appends a row of values to a specified dataset.

**Path Parameters:**

| Parameter | Type   | Required | Description                                             |
| --------- | ------ | -------- | ------------------------------------------------------- |
| datasetId | string | Yes      | The ID of the dataset to which values will be appended. |

**Body Parameters:**

| Parameter | Type   | Required | Description                                                       |
| --------- | ------ | -------- | ----------------------------------------------------------------- |
| values    | string | Yes      | A comma-delimited text string of values to append to the dataset. |
| delimiter | string | No       | The delimiter used to split the values (default is comma).        |

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

```json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}
```

---

## Stream (Connector) - Create

**Method:** `POST`  
**Endpoint:** `/api/data/v1/streams`

**Description:** Creates a new data stream using a connector and specifies configuration details.

**Body Parameters:**

| Parameter            | Type   | Required | Description                                              |
| -------------------- | ------ | -------- | -------------------------------------------------------- |
| transport            | object | Yes      | Connector transport details, including type and version. |
| configuration        | array  | Yes      | List of key-value pairs defining stream configurations.  |
| account              | object | Yes      | Account information (e.g., ID).                          |
| updateMethod         | string | Yes      | Update method, e.g., `APPEND`.                           |
| dataProvider         | object | Yes      | Data provider details, including key.                    |
| dataSource           | object | Yes      | Dataset details, including name and description.         |
| advancedScheduleJson | string | No       | Schedule details in JSON format.                         |

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
    advancedScheduleJson: '{}',
  }),
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

```json
{
  "id": "streamId",
  "status": "created"
}
```

---

## Stream (Connector) - Get

**Method:** `GET`  
**Endpoint:** `/api/data/v1/streams/{stream_id}`

**Description:** Retrieves configuration details for a specific data stream.

**Path Parameters:**

| Parameter | Type   | Required | Description                      |
| --------- | ------ | -------- | -------------------------------- |
| stream_id | string | Yes      | Unique identifier of the stream. |

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
url = 'https://<domo-instance-here>/api/data/v1/streams/stream123'

with httpx.Client() as client:
    response = client.get(url, headers=headers)
    print(response.json())
```

<!-- type: tab-end -->

**Response:**

```json
{
  "id": "stream123",
  "name": "Sample Stream",
  "status": "active"
}
```

---

## Stream (Connector) - Update

**Method:** `PUT`  
**Endpoint:** `/api/data/v1/streams/{stream_id}`

**Description:** Updates the configuration of an existing data stream.

**Path Parameters:**

| Parameter | Type   | Required | Description                      |
| --------- | ------ | -------- | -------------------------------- |
| stream_id | string | Yes      | Unique identifier of the stream. |

**Body Parameters:**

| Parameter            | Type   | Required | Description                                              |
| -------------------- | ------ | -------- | -------------------------------------------------------- |
| transport            | object | Yes      | Connector transport details, including type and version. |
| configuration        | array  | Yes      | List of key-value pairs defining updated configurations. |
| account              | object | Yes      | Account information (e.g., ID).                          |
| updateMethod         | string | Yes      | Update method, e.g., `APPEND`.                           |
| dataProvider         | object | Yes      | Data provider details, including key.                    |
| dataSource           | object | Yes      | Dataset details, including name and description.         |
| advancedScheduleJson | string | No       | Schedule details in JSON format.                         |

<!--
type: tab
title: Javascript
-->

```javascript
fetch('https://<domo-instance-here>/api/data/v1/streams/stream123', {
  method: 'PUT',
  headers: {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    transport: {
      type: 'CONNECTOR',
      description: 'com.domo.connector.postgresql.partition',
      version: '0',
    },
    configuration: [
      {
        name: 'fetch_size',
        value: 'None',
        type: 'string',
        category: 'METADATA',
      },
    ],
    account: { id: 1 },
    updateMethod: 'APPEND',
    dataProvider: { key: 'postgresql-partition' },
    dataSource: { name: 'hello world', description: 'config works?' },
    advancedScheduleJson: '{"type": "MANUAL", "timezone": "UTC"}',
  }),
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
url = 'https://<domo-instance-here>/api/data/v1/streams/stream123'

payload = {
    "transport": {"type": "CONNECTOR", "description": "com.domo.connector.postgresql.partition", "version": "0"},
    "configuration": [
        {"name": "fetch_size", "value": "None", "type": "string", "category": "METADATA"}
    ],
    "account": {"id": 1},
    "updateMethod": "APPEND",
    "dataProvider": {"key": "postgresql-partition"},
    "dataSource": {"name": "hello world", "description": "config works?"},
    "advancedScheduleJson": '{"type": "MANUAL", "timezone": "UTC"}'
}

with httpx.Client() as client:
    response = client.put(url, headers=headers, json=payload)
    print(response.json())
```

<!-- type: tab-end -->

**Response:**

```json
{
  "id": "stream123",
  "status": "updated"
}
```

---

## Stream Execution History

**Method:** `GET`  
**Endpoint:** `/api/data/v1/streams/{stream_id}/history/aggregate`

**Description:** Retrieves the execution history for a specific data stream, including details about completed operations, errors, and performance metrics.

**Path Parameters:**

| Parameter | Type   | Required | Description                      |
| --------- | ------ | -------- | -------------------------------- |
| stream_id | string | Yes      | Unique identifier of the stream. |

<!--
type: tab
title: Javascript
-->

```javascript
fetch(
  'https://<domo-instance-here>/api/data/v1/streams/stream123/history/aggregate',
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
url = 'https://<domo-instance-here>/api/data/v1/streams/stream123/history/aggregate'

with httpx.Client() as client:
    response = client.get(url, headers=headers)
    print(response.json())
```

<!-- type: tab-end -->

**Response:**

```json
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
```

---

## Execute Dataset Stream

**Method:** `POST`  
**Endpoint:** `/api/data/v1/streams/:streamId/executions`

**Description:** Queries a dataset's stream ID and executes the dataset stream.

**Path Parameters:**

| Parameter | Type   | Required | Description                              |
| --------- | ------ | -------- | ---------------------------------------- |
| streamId  | string | Yes      | The ID of the dataset stream to execute. |

**Body Parameters:**

| Parameter | Type   | Required | Description                                                     |
| --------- | ------ | -------- | --------------------------------------------------------------- |
| action    | string | Yes      | The action to execute on the dataset stream. Example: `Manual`. |

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
```

---

## Create Dataset Tag

**Method:** `POST`  
**Endpoint:** `/api/data/ui/v3/datasources/:datasetId/tags`

**Description:** This endpoint creates a tag for the specified dataset.

**Path Parameters:**

| Parameter | Type   | Required | Description                   |
| --------- | ------ | -------- | ----------------------------- |
| datasetId | string | Yes      | The ID of the dataset to tag. |

**Body Parameters:**

| Parameter | Type  | Required | Description                                |
| --------- | ----- | -------- | ------------------------------------------ |
| tag       | array | Yes      | An array of tags to assign to the dataset. |

<!--
type: tab
title: Javascript
-->

```javascript
fetch('https://<domo-instance-here>/api/data/ui/v3/datasources/abc123/tags', {
  method: 'POST',
  headers: {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(['tag1', 'tag2']),
})
  .then((response) => {
    if (response.ok) {
      console.log('Tags created successfully');
    } else {
      console.error('Failed to create tags');
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
url = 'https://<domo-instance-here>/api/data/ui/v3/datasources/abc123/tags'

payload = ["tag1", "tag2"]

with httpx.Client() as client:
    response = client.post(url, headers=headers, json=payload)
    if response.status_code == 200:
        print('Tags created successfully')
    else:
        print('Failed to create tags')
```

<!-- type: tab-end -->

**Response:**

```json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}
```

---

## Share Dataset with Access Permissions

**Method:** `POST`  
**Endpoint:** `/api/data/v3/datasources/:datasetId/share`

**Description:** This endpoint shares a dataset and grants access permissions to specified users.

**Path Parameters:**

| Parameter | Type   | Required | Description                     |
| --------- | ------ | -------- | ------------------------------- |
| datasetId | string | Yes      | The ID of the dataset to share. |

**Body Parameters:**

| Parameter   | Type    | Required | Description                                                                                     |
| ----------- | ------- | -------- | ----------------------------------------------------------------------------------------------- |
| permissions | array   | Yes      | A list of owners to add to the dataset. Each owner is an object with id, type, and accessLevel. |
| sendEmail   | boolean | Yes      | A flag indicating whether to send an email.                                                     |

<!--
type: tab
title: Javascript
-->

```javascript
fetch('https://<domo-instance-here>/api/data/v3/datasources/abc123/share', {
  method: 'POST',
  headers: {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    permissions: [
      { id: 'user1', type: 'USER', accessLevel: 'READ' },
      { id: 'group1', type: 'GROUP', accessLevel: 'WRITE' },
    ],
    sendEmail: true,
  }),
})
  .then((response) => {
    if (response.ok) {
      console.log('Dataset shared successfully');
    } else {
      console.error('Failed to share dataset');
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
url = 'https://<domo-instance-here>/api/data/v3/datasources/abc123/share'

payload = {
    "permissions": [
        {"id": "user1", "type": "USER", "accessLevel": "READ"},
        {"id": "group1", "type": "GROUP", "accessLevel": "WRITE"}
    ],
    "sendEmail": True
}

with httpx.Client() as client:
    response = client.post(url, headers=headers, json=payload)
    if response.status_code == 200:
        print('Dataset shared successfully')
    else:
        print('Failed to share dataset')
```

<!-- type: tab-end -->

**Response:**

```json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}
```

---

## Remove User from Dataset

**Method:** `DELETE`  
**Endpoint:** `/api/data/v3/datasources/:datasetId/USERS/:userId`

**Description:** This endpoint removes a user from a dataset's permissions.

**Path Parameters:**

| Parameter | Type   | Required | Description                                                  |
| --------- | ------ | -------- | ------------------------------------------------------------ |
| datasetId | string | Yes      | The ID of the dataset from which the user will be removed.   |
| userId    | string | Yes      | The ID of the user to remove from the dataset's permissions. |

<!--
type: tab
title: Javascript
-->

```javascript
fetch(
  'https://<domo-instance-here>/api/data/v3/datasources/abc123/USERS/user456',
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
      console.log('User removed successfully');
    } else {
      console.error('Failed to remove user');
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
url = 'https://<domo-instance-here>/api/data/v3/datasources/abc123/USERS/user456'

with httpx.Client() as client:
    response = client.delete(url, headers=headers)
    if response.status_code == 200:
        print('User removed successfully')
    else:
        print('Failed to remove user')
```

<!-- type: tab-end -->

**Response:**

```json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}
```

---

## Remove Multiple Users from Dataset

**Method:** `DELETE`  
**Endpoint:** `/api/data/v3/datasources/:datasetId/users`

**Description:** This endpoint removes multiple people from a dataset's permissions.

**Path Parameters:**

| Parameter | Type   | Required | Description                                                  |
| --------- | ------ | -------- | ------------------------------------------------------------ |
| datasetId | string | Yes      | The ID of the dataset from which the people will be removed. |

**Body Parameters:**

| Parameter | Type  | Required | Description                                                           |
| --------- | ----- | -------- | --------------------------------------------------------------------- |
| body      | array | Yes      | An array of user objects, each containing `id` and `type` properties. |

<!--
type: tab
title: Javascript
-->

```javascript
fetch('https://<domo-instance-here>/api/data/v3/datasources/abc123/users', {
  method: 'DELETE',
  headers: {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify([
    { id: 'user1', type: 'USER' },
    { id: 'user2', type: 'USER' },
  ]),
})
  .then((response) => {
    if (response.ok) {
      console.log('Users removed successfully');
    } else {
      console.error('Failed to remove users');
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
url = 'https://<domo-instance-here>/api/data/v3/datasources/abc123/users'

payload = [
    {"id": "user1", "type": "USER"},
    {"id": "user2", "type": "USER"}
]

with httpx.Client() as client:
    response = client.delete(url, headers=headers, json=payload)
    if response.status_code == 200:
        print('Users removed successfully')
    else:
        print('Failed to remove users')
```

<!-- type: tab-end -->

**Response:**

```json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}
```

---

## Upload CSV - Get Upload ID

**Method:** `POST`  
**Endpoint:** `/api/data/v3/datasources/:dataset_id/uploads`

**Description:** Generates an `uploadId` for appending or replacing data in the dataset. The `uploadId` is required for subsequent upload stages.

**Path Parameters:**

| Parameter  | Type   | Required | Description                       |
| ---------- | ------ | -------- | --------------------------------- |
| dataset_id | string | Yes      | Unique identifier of the dataset. |

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
url = 'https://<domo-instance-here>/api/data/v3/datasources/abc123/uploads'

with httpx.Client() as client:
    response = client.post(url, headers=headers)
    print(response.json())
```

<!-- type: tab-end -->

**Response:**

```json
{
  "dataSourceId": "abc123",
  "uploadId": "upload123",
  "requestedAsOf": 1654557838137
}
```

---

## Upload CSV - Commit and Index

**Method:** `PUT`  
**Endpoint:** `/api/data/v3/datasources/:dataset_id/uploads/:upload_id/commit`

**Description:** Finalizes the data upload by committing the uploaded parts and indexing the dataset.

**Path Parameters:**

| Parameter  | Type   | Required | Description                             |
| ---------- | ------ | -------- | --------------------------------------- |
| dataset_id | string | Yes      | Unique identifier of the dataset.       |
| upload_id  | string | Yes      | Upload ID generated in the first stage. |

**Body Parameters:**

| Parameter | Type    | Required | Description                               |
| --------- | ------- | -------- | ----------------------------------------- |
| action    | string  | Yes      | Accepts `APPEND` or `REPLACE`.            |
| index     | boolean | Yes      | Indicates if indexing should be executed. |

<!--
type: tab
title: Javascript
-->

```javascript
fetch(
  'https://<domo-instance-here>/api/data/v3/datasources/abc123/uploads/upload123/commit',
  {
    method: 'PUT',
    headers: {
      'X-DOMO-Developer-Token': '<your-token-here>',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ action: 'APPEND', index: true }),
  },
)
  .then((response) => {
    if (response.ok) {
      console.log('Upload committed successfully');
    } else {
      console.error('Failed to commit upload');
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
url = 'https://<domo-instance-here>/api/data/v3/datasources/abc123/uploads/upload123/commit'

payload = {
    "action": "APPEND",
    "index": True
}

with httpx.Client() as client:
    response = client.put(url, headers=headers, json=payload)
    if response.status_code == 200:
        print('Upload committed successfully')
    else:
        print('Failed to commit upload')
```

<!-- type: tab-end -->

**Response:**

```json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}
```

---

## Get Data Versions

**Method:** `GET`  
**Endpoint:** `/api/data/v3/datasources/{dataset_id}/dataversions/details`

**Description:**  
Retrieves detailed information about all data versions associated with the dataset.

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
  'https://<domo-instance-here>/api/data/v3/datasources/abc123/dataversions/details',
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
url = 'https://<domo-instance-here>/api/data/v3/datasources/abc123/dataversions/details'

with httpx.Client() as client:
    response = client.get(url, headers=headers)
    print(response.json())
```

<!-- type: tab-end -->

**Response:**

```json
[
  {
    "versionId": "v1",
    "createdAt": "2025-09-01T12:00:00Z",
    "status": "active"
  },
  {
    "versionId": "v2",
    "createdAt": "2025-09-10T12:00:00Z",
    "status": "archived"
  }
]
```

---

## Retrieve Partition List

**Method:** `GET`  
**Endpoint:** `/api/query/v1/datasources/{dataset_id}/partition`

**Description:**  
Retrieves a list of partitions associated with the dataset. Does not include metadata such as row counts.

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
  'https://<domo-instance-here>/api/query/v1/datasources/abc123/partition',
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
url = 'https://<domo-instance-here>/api/query/v1/datasources/abc123/partition'

with httpx.Client() as client:
    response = client.get(url, headers=headers)
    print(response.json())
```

<!-- type: tab-end -->

**Response:**

```json
[
  {
    "partitionId": "p1",
    "status": "active"
  },
  {
    "partitionId": "p2",
    "status": "archived"
  }
]
```

---

## Get Dataset Schema

**Method:** `GET`  
**Endpoint:** `/api/data/v3/datasources/{dataset_id}/schema`

**Description:** Retrieves the schema of a dataset, including column names, types, and other metadata.

**Path Parameters:**

| Parameter  | Type   | Required | Description                       |
| ---------- | ------ | -------- | --------------------------------- |
| dataset_id | string | Yes      | Unique identifier of the dataset. |

<!--
type: tab
title: Javascript
-->

```javascript
fetch('https://<domo-instance-here>/api/data/v3/datasources/abc123/schema', {
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
url = 'https://<domo-instance-here>/api/data/v3/datasources/abc123/schema'

with httpx.Client() as client:
    response = client.get(url, headers=headers)
    print(response.json())
```

<!-- type: tab-end -->

**Response:**

```json
{
  "columns": [
    {
      "name": "column1",
      "type": "STRING",
      "description": "Description of column1"
    },
    {
      "name": "column2",
      "type": "INTEGER",
      "description": "Description of column2"
    }
  ]
}
```

---

## Get Dataset Data

**Method:** `GET`  
**Endpoint:** `/api/data/v3/datasources/{dataset_id}/data`

**Description:** Retrieves the data from a dataset. Supports optional query parameters for pagination and filtering.

**Path Parameters:**

| Parameter  | Type   | Required | Description                       |
| ---------- | ------ | -------- | --------------------------------- |
| dataset_id | string | Yes      | Unique identifier of the dataset. |

**Query Parameters:**

| Parameter | Type   | Required | Description                                |
| --------- | ------ | -------- | ------------------------------------------ |
| offset    | int    | No       | The starting row offset for pagination.    |
| limit     | int    | No       | The maximum number of rows to return.      |
| filter    | string | No       | Filter expression to apply to the dataset. |

<!--
type: tab
title: Javascript
-->

```javascript
fetch(
  'https://<domo-instance-here>/api/data/v3/datasources/abc123/data?offset=0&limit=10',
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
url = 'https://<domo-instance-here>/api/data/v3/datasources/abc123/data?offset=0&limit=10'

with httpx.Client() as client:
    response = client.get(url, headers=headers)
    print(response.json())
```

<!-- type: tab-end -->

**Response:**

```json
{
  "rows": [
    ["value1", "value2", "value3"],
    ["value4", "value5", "value6"]
  ],
  "columns": ["column1", "column2", "column3"]
}
```

---

## Get Dataset Data (CSV)

**Method:** `GET`  
**Endpoint:** `/api/data/v3/datasources/{dataset_id}/data?format=csv`

**Description:** Retrieves the data from a dataset in CSV format. Supports optional query parameters for pagination and filtering.

**Path Parameters:**

| Parameter  | Type   | Required | Description                       |
| ---------- | ------ | -------- | --------------------------------- |
| dataset_id | string | Yes      | Unique identifier of the dataset. |

**Query Parameters:**

| Parameter | Type   | Required | Description                                 |
| --------- | ------ | -------- | ------------------------------------------- |
| offset    | int    | No       | The starting row offset for pagination.     |
| limit     | int    | No       | The maximum number of rows to return.       |
| filter    | string | No       | Filter expression to apply to the dataset.  |
| format    | string | Yes      | Must be set to `csv` to receive CSV output. |

<!--
type: tab
title: Javascript
-->

```javascript
fetch(
  'https://<domo-instance-here>/api/data/v3/datasources/abc123/data?format=csv&offset=0&limit=10',
  {
    method: 'GET',
    headers: {
      'X-DOMO-Developer-Token': '<your-token-here>',
      'Content-Type': 'application/json',
    },
  },
)
  .then((response) => response.text())
  .then((csv) => console.log(csv))
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
url = 'https://<domo-instance-here>/api/data/v3/datasources/abc123/data?format=csv&offset=0&limit=10'

with httpx.Client() as client:
    response = client.get(url, headers=headers)
    print(response.text)
```

<!-- type: tab-end -->

**Response:**

```csv
column1,column2,column3
value1,value2,value3
value4,value5,value6
```

---

## Delete Partition Tag

**Method:** `DELETE`  
**Endpoint:** `/api/query/v1/datasources/{dataset_id}/partition/{dataset_partition_id}`

**Description:** Removes the association of a partition tag with its dataset, ensuring it no longer appears in the partition list.

**Path Parameters:**

| Parameter            | Type   | Required | Description                                    |
| -------------------- | ------ | -------- | ---------------------------------------------- |
| dataset_id           | string | Yes      | Unique identifier of the dataset.              |
| dataset_partition_id | string | Yes      | Identifier of the dataset partition to remove. |

<!--
type: tab
title: Javascript
-->

```javascript
fetch(
  'https://<domo-instance-here>/api/query/v1/datasources/abc123/partition/partition456',
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
      console.log('Partition tag deleted successfully');
    } else {
      console.error('Failed to delete partition tag');
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
url = 'https://<domo-instance-here>/api/query/v1/datasources/abc123/partition/partition456'

with httpx.Client() as client:
    response = client.delete(url, headers=headers)
    if response.status_code == 200:
        print('Partition tag deleted successfully')
    else:
        print('Failed to delete partition tag')
```

<!-- type: tab-end -->

**Response:**

```json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}

---
```

## Delete Data Version

**Method:** `DELETE`  
**Endpoint:** `/api/query/v1/datasources/{dataset_id}/tag/{dataset_partition_id}/data`

**Description:**  
Marks the data version associated with a partition tag as deleted. This does not delete the partition tag itself or remove the association between the partition tag and the data version.

**Path Parameters:**

| Parameter            | Type   | Required | Description                                    |
| -------------------- | ------ | -------- | ---------------------------------------------- |
| dataset_id           | String | Yes      | Unique identifier of the dataset.              |
| dataset_partition_id | String | Yes      | Identifier of the dataset partition to delete. |

<!--
type: tab
title: Javascript
-->

```javascript
fetch(
  'https://<domo-instance-here>/api/query/v1/datasources/abc123/tag/partition456/data',
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
      console.log('Data version deleted successfully');
    } else {
      console.error('Failed to delete data version');
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
url = 'https://<domo-instance-here>/api/query/v1/datasources/abc123/tag/partition456/data'

with httpx.Client() as client:
    response = client.delete(url, headers=headers)
    if response.status_code == 200:
        print('Data version deleted successfully')
    else:
        print('Failed to delete data version')
```

<!-- type: tab-end -->

**Response:**

```json
{
  "HTTP/1.1": "200 OK",
  "body": {}
}

---
```
