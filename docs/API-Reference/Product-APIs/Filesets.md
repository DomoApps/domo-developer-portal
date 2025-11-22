# Documents API

> **Version:** 2.2.3108_master
>
> Domo Documents APIs

---

## Create a new FileSet

**Method:** `POST`
**Endpoint:** `/api/files/v1/filesets`

Create a new FileSet to store files.

### Path Parameters

_None_

### Query Parameters

_None_

### Request Body

Represents a request to create a file set.

| Parameter    | Type    | Required | Description                                                   |
|--------------|---------|----------|---------------------------------------------------------------|
| `name`       | string  | ✔ Yes    | The name for the file set.                                    |
| `description`| string  | No       | A description for the file set.                               |
| `connector`  | string  | No       | The connector that powers the file set. Allowed values: `DOMO`, `CONFLUENCE`, `GITHUB`, `GOOGLE_DRIVE`, `S3` |
| `aiEnabled`  | boolean | No       | Indicates whether AI features are enabled for the file set.   |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('/api/files/v1/filesets', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Policies (2025)',
    description: 'Location for all new and updated policies for FY2025',
    aiEnabled: false,
    connector: 'DOMO'
  })
})
  .then(response => response.json())
  .then(data => console.log(data));
```

<!--
type: tab
title: Python
-->

```python
import requests

url = '/api/files/v1/filesets'
headers = {'Content-Type': 'application/json'}
data = {
    'name': 'Policies (2025)',
    'description': 'Location for all new and updated policies for FY2025',
    'aiEnabled': False,
    'connector': 'DOMO'
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST /api/files/v1/filesets \
-H 'Content-Type: application/json' \
-d '{
  "name": "Policies (2025)",
  "description": "Location for all new and updated policies for FY2025",
  "aiEnabled": false,
  "connector": "DOMO"
}'
```

<!-- type: tab-end -->

### Response

**Status:** `201`

```json
{
  "id": "e49f188e-be98-451d-ba0f-ada1157bb656",
  "name": "Policies (2025)",
  "description": "Location for all new and updated policies for FY2025",
  "aiEnabled": false,
  "indexStatus": null,
  "connector": "DOMO",
  "created": "2025-07-28T20:17:43.958479Z",
  "createdBy": 27,
  "updated": "2025-07-28T20:17:43.958479Z",
  "updatedBy": 27,
  "owner": "27",
  "accountId": 0,
  "connectorContext": null,
  "permission": "OWNER",
  "size": 0,
  "fileCount": 0
}
```

### Error Responses

| Status Code | Description            |
|-------------|------------------------|
| `400`       | Bad Request            |
| `403`       | Forbidden              |
| `409`       | Conflict               |
| `413`       | Payload Too Large      |

---

## Get a FileSet by ID

**Method:** `GET`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}`

Retrieve the details of a specific FileSet using its ID.

### Path Parameters

| Parameter  | Type   | Required | Description                          |
|------------|--------|----------|--------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet to retrieve.   |

### Query Parameters

_None_

### Request Body

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Fetch example using fetch API
fetch('https://api.example.com/api/files/v1/filesets/54e39b6c-a92e-43cd-b678-34e67d28be90', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

<!--
type: tab
title: Python
-->

```python
# requests example
import requests

url = 'https://api.example.com/api/files/v1/filesets/54e39b6c-a92e-43cd-b678-34e67d28be90'
headers = {
    'Content-Type': 'application/json'
}

response = requests.get(url, headers=headers)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
# cURL command
curl -X GET 'https://api.example.com/api/files/v1/filesets/54e39b6c-a92e-43cd-b678-34e67d28be90' \
-H 'Content-Type: application/json'
```

<!-- type: tab-end -->

### Response

**Status:** `200`

```json
{
  "id": "e49f188e-be98-451d-ba0f-ada1157bb656",
  "name": "Policies (2025)",
  "description": "Location for all new and updated policies for FY2025",
  "aiEnabled": false,
  "indexStatus": null,
  "connector": "DOMO",
  "created": "2025-07-28T20:17:43.958479Z",
  "createdBy": 27,
  "updated": "2025-07-28T20:17:43.958479Z",
  "updatedBy": 27,
  "owner": "27",
  "accountId": 0,
  "connectorContext": null,
  "permission": "OWNER",
  "size": 0,
  "fileCount": 0
}
```

### Error Responses

| Status Code | Description         |
|-------------|---------------------|
| `400`       | Bad Request         |
| `403`       | Forbidden           |
| `409`       | Conflict            |
| `413`       | Payload Too Large   |

---

## Update an existing FileSet

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}`

Update the details of an existing FileSet. Only fields that are not null in the request will be updated.

### Path Parameters

| Parameter   | Type   | Required | Description                        |
|-------------|--------|----------|------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to update.   |

### Query Parameters

_None_

### Request Body

Represents a request to update a file set.  
At least one of the fields must be provided to update the file set.

| Parameter    | Type    | Required | Description                                                                                     |
|--------------|---------|----------|-------------------------------------------------------------------------------------------------|
| `name`       | string  | No       | The name with which to update the file set's name. If not provided, the name will remain unchanged. |
| `description`| string  | No       | Optional description with which to update the file set's description. If not provided, the description will remain unchanged. |
| `aiEnabled`  | boolean | No       | Optional flag to enable or disable AI features for the file set.                                |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const data = {
  name: "Policies (FY25)",
  description: "Repository for new policies created ONLY in FY2025"
};

fetch('https://api.example.com/api/files/v1/filesets/7c37a211-46a8-4219-be85-955035d953c4', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

<!--
type: tab
title: Python
-->

```python
import requests

url = 'https://api.example.com/api/files/v1/filesets/7c37a211-46a8-4219-be85-955035d953c4'
headers = {'Content-Type': 'application/json'}
data = {
    "name": "Policies (FY25)",
    "description": "Repository for new policies created ONLY in FY2025"
}

response = requests.post(url, json=data, headers=headers)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST 'https://api.example.com/api/files/v1/filesets/7c37a211-46a8-4219-be85-955035d953c4' \
-H 'Content-Type: application/json' \
-d '{
  "name": "Policies (FY25)",
  "description": "Repository for new policies created ONLY in FY2025"
}'
```

<!-- type: tab-end -->

### Response

**Status:** `200`

```json
{
  "id": "e49f188e-be98-451d-ba0f-ada1157bb656",
  "name": "Policies (FY25)",
  "description": "Repository for new policies created ONLY in FY2025",
  "aiEnabled": false,
  "indexStatus": null,
  "connector": "DOMO",
  "created": "2025-07-28T20:17:43.958479Z",
  "createdBy": 27,
  "updated": "2025-07-28T20:17:43.958479Z",
  "updatedBy": 27,
  "owner": "27",
  "accountId": 0,
  "connectorContext": null,
  "permission": "OWNER",
  "size": 0,
  "fileCount": 0
}
```

- `id`: The unique identifier of the FileSet.
- `name`: The updated name of the FileSet.
- `description`: The updated description of the FileSet.
- `aiEnabled`: Whether AI features are enabled.
- `indexStatus`: The status of file indexing (if applicable).
- `connector`: The connector type used.
- `created`: The timestamp when the FileSet was created.
- `createdBy`: The ID of the user who created the FileSet.
- `updated`: The timestamp when the FileSet was last updated.
- `updatedBy`: The ID of the user who last updated the FileSet.
- `owner`: The user ID of the owner of the FileSet.
- `accountId`: The account ID associated with the FileSet.
- `connectorContext`: Context-specific information for the connector.
- `permission`: The permission level of the FileSet.
- `size`: The size of the FileSet.
- `fileCount`: The number of files in the FileSet.

### Error Responses

| Status Code | Description    |
|-------------|----------------|
| `400`       | Bad Request    |
| `403`       | Forbidden      |
| `409`       | Conflict       |
| `413`       | Payload Too Large |

---

## Delete a FileSet by ID

**Method:** `DELETE`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}`

Delete a specific FileSet using its ID.

### Path Parameters

| Parameter   | Type   | Required | Description                     |
|-------------|--------|----------|---------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to delete. |

### Query Parameters

_None_

### Request Body

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const fileSetId = '4ba2fe1d-1dc2-431c-a4a4-0a3d29bd123a';

fetch(`/api/files/v1/filesets/${fileSetId}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(response => {
    if (response.status === 204) {
      console.log('FileSet deleted successfully.');
    } else {
      console.log('Error deleting FileSet:', response.status);
    }
  })
  .catch(error => console.error('Error:', error));
```

<!--
type: tab
title: Python
-->

```python
import requests

fileSetId = '4ba2fe1d-1dc2-431c-a4a4-0a3d29bd123a'
url = f'/api/files/v1/filesets/{fileSetId}'
headers = {'Content-Type': 'application/json'}

response = requests.delete(url, headers=headers)

if response.status_code == 204:
    print('FileSet deleted successfully.')
else:
    print('Error deleting FileSet:', response.status_code)
```

<!--
type: tab
title: cURL
-->

```bash
curl -X DELETE "/api/files/v1/filesets/4ba2fe1d-1dc2-431c-a4a4-0a3d29bd123a" -H "Content-Type: application/json"
```

<!-- type: tab-end -->

### Response

**Status:** `204`

```json
{}
```

### Error Responses

| Status Code | Description       |
|-------------|-------------------|
| `400`       | Bad Request       |
| `403`       | Forbidden         |
| `409`       | Conflict          |
| `413`       | Payload Too Large |

---

## Query FileSet for File Contents

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/query`

Query a specific FileSet for file contents related to the query criteria.

### Path Parameters

| Parameter    | Type   | Required | Description                        |
|--------------|--------|----------|------------------------------------|
| `fileSetId`  | string | ✔ Yes    | The ID of the FileSet to query.    |

### Query Parameters

_None_

### Request Body

Used to query a file set for the top K results based on the provided query.

| Parameter         | Type   | Required | Description                                                                                      |
|-------------------|--------|----------|--------------------------------------------------------------------------------------------------|
| `query`           | string | ✔ Yes    | The query string to match against file contents within the file set.                             |
| `topK`            | integer (int32) | No       | The number of top results to return based on the query match. Defaults to 1.                      |
| `pathPrefixFilter`| string | No       | An optional prefix filter for the file paths to narrow down the search results.                  |

### Request Example

<!-- type: tab title: JavaScript -->

```javascript
const fetch = require('node-fetch');

fetch('https://api.example.com/api/files/v1/filesets/a7fba258-da01-47fd-ae54-96c0d446294f/query', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: 'benefit',
    pathPrefixFilter: 'sample/directory/path',
    topK: 2
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

<!-- type: tab-end -->

<!-- type: tab title: Python -->

```python
import requests

url = "https://api.example.com/api/files/v1/filesets/a7fba258-da01-47fd-ae54-96c0d446294f/query"
payload = {
    "query": "benefit",
    "pathPrefixFilter": "sample/directory/path",
    "topK": 2
}
headers = {
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())
```

<!-- type: tab-end -->

<!-- type: tab title: cURL -->

```bash
curl -X POST https://api.example.com/api/files/v1/filesets/a7fba258-da01-47fd-ae54-96c0d446294f/query \
-H "Content-Type: application/json" \
-d '{
  "query": "benefit",
  "pathPrefixFilter": "sample/directory/path",
  "topK": 2
}'
```

<!-- type: tab-end -->

### Response

**Status:** `200`

```json
{
  "matches": [
    {
      "content": {
        "text": "# Paid Time Off (PTO) Policy\n\n## Overview\nOur PTO policy is designed to provide...(924 characters omitted for brevity)",
        "type": "TEXT"
      },
      "metadata": {
        "fileId": "7150e608-c3a9-4b40-ac2d-eb182cc98c6f",
        "path": "sample/directory/path/PaidTimeOffPolicy.pdf"
      },
      "score": 0.41046342
    },
    {
      "content": {
        "uri": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA...(4777 characters omitted for brevity)",
        "type": "IMAGE"
      },
      "metadata": {
        "fileId": "7150e608-c3a9-4b40-ac2d-eb182cc98c6f",
        "path": "sample/directory/path/PaidTimeOffPolicy.pdf"
      },
      "score": 0.43281752
    }
  ]
}
```

### Error Responses

| Status Code | Description       |
|-------------|-------------------|
| `400`       | Bad Request       |
| `403`       | Forbidden         |
| `409`       | Conflict          |
| `413`       | Payload Too Large |

---

## Update FileSet Owner

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/ownership`

Update the owner of a specific FileSet.

### Path Parameters

| Parameter  | Type   | Required | Description                                          |
|------------|--------|----------|------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet for which to update the owner. |

### Query Parameters

_None_

### Request Body

Represents a request to transfer ownership of a file set.

Other users may be granted ownership level permissions, but only one user may be the sole owner of a file set.

| Parameter | Type            | Required | Description                                      |
|-----------|-----------------|----------|--------------------------------------------------|
| `userId`  | integer (int64) | ✓ Yes    | The ID of the user that will assume ownership.   |

### Request Example

<!-- type: tab -->
<!-- title: JavaScript -->

```javascript
const fetch = require('node-fetch');

const fileSetId = '013e22f9-a891-4786-b536-b8a036a2d49b'; // Example fileSetId
const url = `/api/files/v1/filesets/${fileSetId}/ownership`;

const requestBody = {
  userId: 109
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(requestBody)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

<!-- type: tab-end -->

<!-- type: tab -->
<!-- title: Python -->

```python
import requests

fileSetId = '013e22f9-a891-4786-b536-b8a036a2d49b'  # Example fileSetId
url = f'/api/files/v1/filesets/{fileSetId}/ownership'

request_body = {
    'userId': 109
}

response = requests.post(url, json=request_body, headers={'Content-Type': 'application/json'})

print(response.json())
```

<!-- type: tab-end -->

<!-- type: tab -->
<!-- title: cURL -->

```bash
fileSetId="013e22f9-a891-4786-b536-b8a036a2d49b" # Example fileSetId
curl -X POST "/api/files/v1/filesets/$fileSetId/ownership" \
     -H "Content-Type: application/json" \
     -d '{"userId": 109}'
```

<!-- type: tab-end -->

### Response

**Status:** `200`

```json
{
  "fileSetId": "e49f188e-be98-451d-ba0f-ada1157bb656",
  "fileSetAccess": [
    {
      "entityId": 109,
      "entityType": "USER",
      "permission": "OWNER"
    },
    {
      "entityId": 27,
      "entityType": "USER",
      "permission": "OWNER"
    }
  ]
}
```

### Error Responses

| Status Code | Description        |
|-------------|--------------------|
| `400`       | Bad Request        |
| `403`       | Forbidden          |
| `409`       | Conflict           |
| `413`       | Payload Too Large  |

---

## Create a new File or Directory

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files`

Create a new File or Directory within a specified FileSet. If a file already exists at the specified path, it will attempt to overwrite it if the client has permission. If a Directory already exists at the specified path, it will return that Directory.

### Path Parameters

| Parameter  | Type   | Required | Description                                          |
|------------|--------|----------|------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet in which to create the File. |

### Query Parameters

_None_

### Request Body

Represents a request to upload a file or create a directory.

| Parameter     | Type           | Required | Description                                                                                                                                                      |
|---------------|----------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `file`        | string (binary) | No       | The file to be uploaded. Leave null if creating a directory.                                                                                               |
| `directoryPath` | string         | No       | The directory path of the uploaded file, or the path of the created directory if no file is provided. Defaults to an empty string, i.e., the root directory, if not specified. Note: An empty string is not valid when intentionally creating a directory. |

### Request Example

<!-- type: tab title: JavaScript -->

```javascript
// Using fetch to create a new File or Directory
const fileSetId = '23771828-166e-4751-a9ed-56bcda60dc88';

fetch(`/api/files/v1/filesets/${fileSetId}/files`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    file: '(binary data of the file)',
    directoryPath: 'sample/directory/path',
  }),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

<!-- type: tab title: Python -->

```python
# Using requests to create a new File or Directory
import requests

file_set_id = '23771828-166e-4751-a9ed-56bcda60dc88'
url = f'/api/files/v1/filesets/{file_set_id}/files'

headers = {
    'Content-Type': 'application/json',
}

payload = {
    "file": "(binary data of the file)",
    "directoryPath": "sample/directory/path"
}

response = requests.post(url, headers=headers, json=payload)

print(response.json())
```

<!-- type: tab title: cURL -->

```bash
# Using cURL to create a new File or Directory
curl -X POST /api/files/v1/filesets/23771828-166e-4751-a9ed-56bcda60dc88/files \
-H "Content-Type: application/json" \
-d '{
  "file": "(binary data of the file)",
  "directoryPath": "sample/directory/path"
}'
```

<!-- type: tab-end -->

### Response

**Status:** `200`

```json
{
  "id": "22e1514a-354b-470f-bc32-c354812738f2",
  "path": "sample/directory/path",
  "name": "path",
  "size": null,
  "created": "2025-07-28T21:49:34.503181Z",
  "createdBy": 27,
  "fileType": "DIRECTORY"
}
```

- `id`: The unique identifier for the created file or directory.
- `path`: The path where the file or directory was created.
- `name`: The name of the created file or directory.
- `size`: The size of the file (null for directories).
- `created`: The timestamp of when the file or directory was created.
- `createdBy`: The ID of the user who created the file or directory.
- `fileType`: The type of the created item, either `FILE` or `DIRECTORY`.

### Error Responses

| Status Code | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| `400`       | Bad Request                                                                 |
| `403`       | Forbidden                                                                   |
| `409`       | Conflict: File already exists at the specified path and client does not have overwrite permissions. |
| `413`       | Payload Too Large                                                           |

---

## List Files and Directories for a FileSet

**Method:** `POST`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/search`

Retrieve a paginated list of Files within a specific FileSet based on search criteria.

### Path Parameters

| Parameter   | Type   | Required | Description                                   |
|-------------|--------|----------|-----------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to search within.       |

### Query Parameters

| Parameter          | Type            | Required | Description                                                   |
|--------------------|-----------------|----------|---------------------------------------------------------------|
| `directoryPath`    | string          | No       | The path to the directory within the FileSet, if applicable. |
| `immediateChildren`| boolean         | No       | Whether to list only immediate children of the specified directory. (Default: `False`) |
| `limit`            | integer (int32) | No       | The maximum number of Files to return. (Default: `100`)       |
| `next`             | string          | No       | The pagination token for the next set of results.             |

### Request Body

Request object for searching with specific filters and sorting options.

| Parameter   | Type  | Required | Description                                     |
|-------------|-------|----------|-------------------------------------------------|
| `fieldSort` | array | No       | A list of field sort criteria to apply to the search. |
| `filters`   | array | No       | A list of filters to apply to the search.       |
| `dateFilters`| array | No      | A list of date filters to apply to the search.  |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript example with fetch
fetch('https://example.com/api/files/v1/filesets/0b2c1c74-39af-4d9c-97dd-b0d40a1e7409/files/search', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    fieldSort: [
      {
        field: 'created',
        order: 'ASC'
      }
    ],
    filters: [
      {
        field: 'name',
        value: ['paid'],
        not: false,
        operator: 'LIKE'
      }
    ],
    dateFilters: [
      {
        field: 'created',
        start: '2025-05-12T23:30:00Z',
        not: false,
        end: null
      }
    ]
  })
});
```

<!--
type: tab
title: Python
-->

```python
# Python example with requests
import requests

url = 'https://example.com/api/files/v1/filesets/0b2c1c74-39af-4d9c-97dd-b0d40a1e7409/files/search'
headers = {'Content-Type': 'application/json'}
data = {
    "fieldSort": [{"field": "created", "order": "ASC"}],
    "filters": [{"field": "name", "value": ["paid"], "not": False, "operator": "LIKE"}],
    "dateFilters": [{"field": "created", "start": "2025-05-12T23:30:00Z", "not": False, "end": None}]
}

response = requests.post(url, headers=headers, json=data)
```

<!--
type: tab
title: cURL
-->

```bash
# cURL example
curl -X POST 'https://example.com/api/files/v1/filesets/0b2c1c74-39af-4d9c-97dd-b0d40a1e7409/files/search' \
-H 'Content-Type: application/json' \
-d '{
  "fieldSort": [{"field": "created", "order": "ASC"}],
  "filters": [{"field": "name", "value": ["paid"], "not": false, "operator": "LIKE"}],
  "dateFilters": [{"field": "created", "start": "2025-05-12T23:30:00Z", "not": false, "end": null}]
}'
```

<!-- type: tab-end -->

### Response

**Status:** `200`

```json
{
  "files": [
    {
      "id": "7150e608-c3a9-4b40-ac2d-eb182cc98c6f",
      "path": "sample/directory/path/PaidTimeOffPolicy.pdf",
      "name": "PaidTimeOffPolicy.pdf",
      "fileType": "DOCUMENT",
      "contentType": "application/pdf",
      "size": 69502,
      "hash": "ce0da94c741125c597cf3d54a3202cebdc16d7fe1074698219f724654595221c",
      "hashAlgorithm": "SHA_256_HEX",
      "downloadUrl": "",
      "created": "2025-07-28T21:47:39.814456Z",
      "createdBy": 27,
      "connectorKey": null,
      "indexStatus": null,
      "indexReason": null
    }
  ],
  "pageContext": {
    "next": "eyJpZCI6ImJiZjU3MDVkLWU1ZjQtNGRkMy1hMTUyLTgzNzdhNTYwYzY0YiIsInBhdGgiOiJzYW1wbGUvZGlyZWN0b3J5L3BhdGgiLCJuYW1lIjoicGF0aCIsInNpemUiOm51bGwsImNyZWF0ZWQiOiIyMDI1LTA3LTI5VDE4OjA3OjI2Ljc2MzE5M1oifQ=="
  }
}
```

### Error Responses

| Status Code | Description     |
|-------------|-----------------|
| `400`       | Bad Request     |
| `403`       | Forbidden       |
| `409`       | Conflict        |
| `413`       | Payload Too Large |

---

## Reindex Files within a FileSet

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/reindex`

Initiate another indexing attempt for specific files within a FileSet.

### Path Parameters

| Parameter    | Type   | Required | Description                                      |
|--------------|--------|----------|--------------------------------------------------|
| `fileSetId`  | string | ✓ Yes    | The ID of the FileSet to reindex files within.   |

### Query Parameters

_None_

### Request Body

Request object for another indexing attempt for specific files within a file set.

| Parameter | Type  | Required | Description                         |
|-----------|-------|----------|-------------------------------------|
| `fileIds` | array | ✓ Yes    | The IDs of the files to be reindexed. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://api.example.com/api/files/v1/filesets/2a9085dc-b103-4ba2-ac90-dcb31d46573e/files/reindex', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "fileIds": [
      "7150e608-c3a9-4b40-ac2d-eb182cc98c6f",
      "22e1514a-354b-470f-bc32-c354812738f2"
    ]
  })
})
  .then(response => response.json())
  .then(data => console.log(data));
```

<!--
type: tab
title: Python
-->

```python
import requests

url = "https://api.example.com/api/files/v1/filesets/2a9085dc-b103-4ba2-ac90-dcb31d46573e/files/reindex"
headers = {
    "Content-Type": "application/json"
}
data = {
    "fileIds": [
        "7150e608-c3a9-4b40-ac2d-eb182cc98c6f",
        "22e1514a-354b-470f-bc32-c354812738f2"
    ]
}

response = requests.post(url, json=data, headers=headers)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST https://api.example.com/api/files/v1/filesets/2a9085dc-b103-4ba2-ac90-dcb31d46573e/files/reindex \
-H "Content-Type: application/json" \
-d '{
  "fileIds": [
    "7150e608-c3a9-4b40-ac2d-eb182cc98c6f",
    "22e1514a-354b-470f-bc32-c354812738f2"
  ]
}'
```

<!-- type: tab-end -->

### Response

**Status:** `202`

```json
{
  "retriedFilesCount": 2
}
```

### Error Responses

| Status Code | Description          |
|-------------|----------------------|
| `400`       | Bad Request          |
| `403`       | Forbidden            |
| `409`       | Conflict             |
| `413`       | Payload Too Large    |

---

## Initiate a split file upload.

**Method:** `POST`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart`

Initiates a split file upload process for creating a new file within a FileSet.

### Path Parameters

| Parameter    | Type   | Required | Description                                             |
|--------------|--------|----------|---------------------------------------------------------|
| `fileSetId`  | string | ✔ Yes    | The ID of the FileSet in which to create the File.      |

### Query Parameters

_None_

### Request Body

Represents a request to initiate a split file upload.

| Parameter | Type   | Required | Description                                                           |
|-----------|--------|----------|-----------------------------------------------------------------------|
| `path`    | string | No       | The full path destination for the file once the upload is finalized.  |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const axios = require('axios');

const fileSetId = '14a697d1-7d36-40df-ba0a-7620de990511'; // Example FileSet ID
const requestBody = {
  path: 'example/path/to/resource'
};

axios.post(`/api/files/v1/filesets/${fileSetId}/files/multipart`, requestBody, {
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});
```

<!--
type: tab
title: Python
-->

```python
import requests

url = '/api/files/v1/filesets/14a697d1-7d36-40df-ba0a-7620de990511/files/multipart'  # Example FileSet ID
payload = {
    "path": "example/path/to/resource"
}
headers = {
    'Content-Type': 'application/json'
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "/api/files/v1/filesets/14a697d1-7d36-40df-ba0a-7620de990511/files/multipart" \
     -H "Content-Type: application/json" \
     -d '{"path": "example/path/to/resource"}'
```

<!-- type: tab-end -->

### Response

**Status:** `202`

```json
{
  "file": {
    "id": "df5fd883-e5cb-4cbb-a158-0e9ff1d37097",
    "path": "sample/directory/path/PaidTimeOffPolicy.pdf",
    "name": "PaidTimeOffPolicy.pdf",
    "fileType": "OTHER",
    "contentType": null,
    "size": null,
    "hash": null,
    "hashAlgorithm": "SHA_256_HEX",
    "downloadUrl": null,
    "created": "2025-08-25T16:05:56.676114Z",
    "createdBy": 27,
    "connectorKey": null,
    "indexStatus": null,
    "indexReason": null
  },
  "status": "CREATED"
}
```

### Error Responses

| Status Code | Description                                                           |
|-------------|-----------------------------------------------------------------------|
| `400`       | Bad Request                                                           |
| `403`       | Forbidden                                                             |
| `409`       | Conflict: File already exists at the specified path.                  |
| `413`       | Payload Too Large                                                     |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled. |

---

## Submit a part of a file for upload.

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/part/{partNumber}`

Allows submitting a file in stages to create a new file within a FileSet.

### Path Parameters

| Parameter     | Type            | Required | Description                                                       |
|---------------|-----------------|----------|-------------------------------------------------------------------|
| `fileSetId`   | string          | ✓ Yes    | The ID of the FileSet in which to the file is being uploaded.     |
| `fileId`      | string          | ✓ Yes    | The ID of the file being uploaded in parts.                       |
| `partNumber`  | integer (int64) | ✓ Yes    | The part number of this file segment. Must be non-negative.       |

### Query Parameters

_None_

### Request Body

Represents a request to upload a part of a file in a split file upload operation.

| Parameter | Type            | Required | Description                                                          |
|-----------|-----------------|----------|----------------------------------------------------------------------|
| `part`    | string (binary) | No       | The full path destination for the file once the upload is complete.  |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://api.example.com/api/files/v1/filesets/121bfeb9-dc2c-4949-8062-a21386131cb7/files/multipart/219c581a-8ecc-40da-9909-34bb674d853d/part/1234567890', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    part: "(binary data of the file)"
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

<!--
type: tab
title: Python
-->

```python
import requests

url = "https://api.example.com/api/files/v1/filesets/121bfeb9-dc2c-4949-8062-a21386131cb7/files/multipart/219c581a-8ecc-40da-9909-34bb674d853d/part/1234567890"
headers = {
    'Content-Type': 'application/json'
}
data = {
    'part': "(binary data of the file)"
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "https://api.example.com/api/files/v1/filesets/121bfeb9-dc2c-4949-8062-a21386131cb7/files/multipart/219c581a-8ecc-40da-9909-34bb674d853d/part/1234567890" \
-H "Content-Type: application/json" \
-d '{"part": "(binary data of the file)"}'
```

<!-- type: tab-end -->

### Response

**Status:** `202`

```json
{
  "file": {
    "id": "df5fd883-e5cb-4cbb-a158-0e9ff1d37097",
    "path": "sample/directory/path/PaidTimeOffPolicy.pdf",
    "name": "PaidTimeOffPolicy.pdf",
    "fileType": "DOCUMENT",
    "contentType": "application/pdf",
    "size": 69502,
    "hash": null,
    "hashAlgorithm": "SHA_256_HEX",
    "downloadUrl": null,
    "created": "2025-08-25T16:05:56.676114Z",
    "createdBy": 27,
    "connectorKey": null,
    "indexStatus": null,
    "indexReason": null
  },
  "status": "PROCESSING"
}
```

### Error Responses

| Status Code | Description                                                                                             |
|-------------|---------------------------------------------------------------------------------------------------------|
| `400`       | Split file upload part did not match previous data segments.                                            |
| `403`       | Forbidden                                                                                                |
| `404`       | An "initiate split file" request was not performed prior to this request for the given file ID or has already been finalized or aborted. |
| `409`       | Conflict                                                                                                 |
| `413`       | Payload Too Large                                                                                        |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled.                                 |

---

## Finalize a split file upload.

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/finalize`

Declares that all parts of a split file upload have been submitted and the file can be assembled.

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fileSetId` | string | ✓ Yes | The ID of the FileSet in which the file has been uploaded. |
| `fileId` | string | ✓ Yes | The ID of the file whose parts have been uploaded. |

### Query Parameters

_None_

### Request Body

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const axios = require('axios');

const fileSetId = '9e0f8dbc-2735-4b30-855b-c8de3f42dbc4';
const fileId = '6c1e047f-d374-49b8-b6ec-4b7f83dd7f3a';

axios.post(`/api/files/v1/filesets/${fileSetId}/files/multipart/${fileId}/finalize`, null, {
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});
```

<!--
type: tab-end
-->

<!--
type: tab
title: Python
-->

```python
import requests

fileSetId = '9e0f8dbc-2735-4b30-855b-c8de3f42dbc4'
fileId = '6c1e047f-d374-49b8-b6ec-4b7f83dd7f3a'

url = f'/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/finalize'
headers = {
    'Content-Type': 'application/json'
}

response = requests.post(url, headers=headers)
print(response.json())
```

<!--
type: tab-end
-->

<!--
type: tab
title: cURL
-->

```bash
fileSetId='9e0f8dbc-2735-4b30-855b-c8de3f42dbc4'
fileId='6c1e047f-d374-49b8-b6ec-4b7f83dd7f3a'

curl -X POST "/api/files/v1/filesets/$fileSetId/files/multipart/$fileId/finalize" \
     -H "Content-Type: application/json"
```

<!--
type: tab-end
-->

### Response

**Status:** `201`

```json
{
  "file": {
    "id": "df5fd883-e5cb-4cbb-a158-0e9ff1d37097",
    "path": "sample/directory/path/PaidTimeOffPolicy.pdf",
    "name": "PaidTimeOffPolicy.pdf",
    "fileType": "DOCUMENT",
    "contentType": "application/pdf",
    "size": 69502,
    "hash": "ce0da94c741125c597cf3d54a3202cebdc16d7fe1074698219f724654595221c",
    "hashAlgorithm": "SHA_256_HEX",
    "downloadUrl": "",
    "created": "2025-08-25T16:05:56.676114Z",
    "createdBy": 27,
    "connectorKey": null,
    "indexStatus": null,
    "indexReason": null
  },
  "status": "SUCCESS"
```

- `file`: Details of the finalized file.
  - `id`: The unique identifier of the file.
  - `path`: File path after being assembled.
  - `name`: The name of the file.
  - `fileType`: The type of the file.
  - `contentType`: MIME type of the file.
  - `size`: Size of the file in bytes.
  - `hash`: SHA-256 hash of the file.
  - `hashAlgorithm`: Algorithm used for hashing.
  - `created`: Timestamp of file creation.
  - `createdBy`: Identifier for the user who created the file.
- `status`: Status of the operation, typically "SUCCESS".

### Error Responses

| Status Code | Description |
|-------------|-------------|
| `400` | Bad Request |
| `403` | Forbidden |
| `404` | An "initiate split file" request was not performed prior to this request for the given file ID and/or has not been uploaded any parts, or has already been finalized/aborted. |
| `409` | Conflict: File already exists at the declared path. |
| `413` | Payload Too Large |
| `422` | Unprocessable Entity: Request for the split file could not be fulfilled. |

---

## Abort a split file upload

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/abort`

Aborts an ongoing split file upload process, discarding all uploaded parts.

### Path Parameters

| Parameter   | Type   | Required | Description                                                   |
|-------------|--------|----------|---------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet in which the file was being uploaded.   |
| `fileId`    | string | ✓ Yes    | The ID of the file whose upload is to be aborted.             |

### Query Parameters

_None_

### Request Body

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Example using fetch to abort a split file upload
fetch('https://api.example.com/api/files/v1/filesets/dcc0491d-7201-4a04-b3c8-a6760749dfc5/files/multipart/a768596b-818f-44dc-b10f-69b79ae4c2c6/abort', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

<!-- type: tab-end -->

<!--
type: tab
title: Python
-->

```python
# Example using requests to abort a split file upload
import requests

url = 'https://api.example.com/api/files/v1/filesets/dcc0491d-7201-4a04-b3c8-a6760749dfc5/files/multipart/a768596b-818f-44dc-b10f-69b79ae4c2c6/abort'
headers = {
    'Content-Type': 'application/json'
}

response = requests.post(url, headers=headers)
print(response.json())
```

<!-- type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
# Example using cURL to abort a split file upload
curl -X POST 'https://api.example.com/api/files/v1/filesets/dcc0491d-7201-4a04-b3c8-a6760749dfc5/files/multipart/a768596b-818f-44dc-b10f-69b79ae4c2c6/abort' \
  -H 'Content-Type: application/json'
```

<!-- type: tab-end -->

### Response

**Status:** `200`

```json
{
  "file": {
    "id": "df5fd883-e5cb-4cbb-a158-0e9ff1d37097",
    "path": "sample/directory/path/PaidTimeOffPolicy.pdf",
    "name": "PaidTimeOffPolicy.pdf",
    "fileType": "DOCUMENT",
    "contentType": "application/pdf",
    "size": 69502,
    "hash": null,
    "hashAlgorithm": "SHA_256_HEX",
    "downloadUrl": null,
    "created": "2025-08-25T16:05:56.676114Z",
    "createdBy": 27,
    "connectorKey": null,
    "indexStatus": null,
    "indexReason": null
  },
  "status": "FAILED"
}
```

- `file`: Object containing information about the file.
  - `id`: The unique identifier of the file.
  - `path`: The path where the file is stored.
  - `name`: Name of the file.
  - `fileType`: Type of the file (e.g., DOCUMENT).
  - `contentType`: The MIME type of the file.
  - `size`: Size of the file in bytes.
  - `hash`: The hash of the file, if available.
  - `hashAlgorithm`: The algorithm used to generate the hash.
  - `downloadUrl`: The URL to download the file, if available.
  - `created`: The timestamp of when the file was created.
  - `createdBy`: The ID of the user who created the file.
  - `connectorKey`: Key used for external connections, if any.
  - `indexStatus`: Status of the file indexing, if applicable.
  - `indexReason`: Reason for the index status, if any.
- `status`: The status of the abort operation, which is "FAILED" in this context.

### Error Responses

| Status Code | Description                                                                                          |
|-------------|------------------------------------------------------------------------------------------------------|
| `400`       | Bad Request                                                                                          |
| `403`       | Forbidden                                                                                            |
| `404`       | An "initiate split file" request was not performed prior to this request for the given file ID or has already been finalized or aborted. |
| `409`       | Conflict                                                                                             |
| `413`       | Payload Too Large                                                                                    |

#### Error Response Examples

<details>
<summary>400 Bad Request</summary>

```json
{
  "error": {
    "code": "BadRequest",
    "message": "Invalid parameters were provided for aborting the file upload."
  }
}
```

</details>

<details>
<summary>403 Forbidden</summary>

```json
{
  "error": {
    "code": "Forbidden",
    "message": "You do not have permission to abort this file upload."
  }
}
```

</details>

<details>
<summary>409 Conflict</summary>

```json
{
  "error": {
    "code": "Conflict",
    "message": "The file upload cannot be aborted because it has already been completed or is not in progress."
  }
}
```

</details>

<details>
<summary>413 Payload Too Large</summary>

```json
{
  "error": {
    "code": "PayloadTooLarge",
    "message": "The request payload exceeds the allowable limit."
  }
}
```

</details>

---

## Get FileSet Access Permissions

**Method:** `GET`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/access`

Retrieve the access permissions for a specific FileSet.

### Path Parameters

| Parameter   | Type   | Required | Description                                                         |
|-------------|--------|----------|---------------------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet for which to retrieve access information.     |

### Query Parameters

_None_

### Request Body


_None_




### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Using fetch to get FileSet access information
fetch('https://example.com/api/files/v1/filesets/5186918b-dcf0-41d4-ae28-8320674f7c69/access', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

<!--
type: tab-end
-->

<!--
type: tab
title: Python
-->

```python
# Using requests to get FileSet access information
import requests

response = requests.get(
    'https://example.com/api/files/v1/filesets/5186918b-dcf0-41d4-ae28-8320674f7c69/access',
    headers={'Content-Type': 'application/json'}
)

print(response.json())
```

<!--
type: tab-end
-->

<!--
type: tab
title: cURL
-->

```bash
# Using cURL to get FileSet access information
curl -X GET 'https://example.com/api/files/v1/filesets/5186918b-dcf0-41d4-ae28-8320674f7c69/access' \
     -H 'Content-Type: application/json'
```

<!--
type: tab-end
-->

### Response

**Status:** `200`

```json
{
  "fileSetId": "e49f188e-be98-451d-ba0f-ada1157bb656",
  "fileSetAccess": [
    {
      "entityId": 27,
      "entityType": "USER",
      "permission": "OWNER"
    }
  ]
}
```

- `fileSetId`: The unique identifier for the FileSet whose access information is being retrieved.
- `fileSetAccess`: A list of access permissions for the FileSet.
  - `entityId`: The ID of the entity (such as a user or group) that has access.
  - `entityType`: The type of entity (e.g., USER, GROUP).
  - `permission`: The access level or permission granted (e.g., OWNER, READ).

### Error Responses

| Status Code | Description     |
|-------------|-----------------|
| `400`       | Bad Request     |
| `403`       | Forbidden       |
| `409`       | Conflict        |
| `413`       | Payload Too Large |

---

## Update FileSet Access Permissions

**Method:** `POST`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/access`

Update the relevant access permissions for a specific FileSet.

### Path Parameters

| Parameter   | Type   | Required | Description                                                        |
|-------------|--------|----------|--------------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet for which to update access permissions. |

### Query Parameters

_None_

### Request Body

Request object for updating access permissions to a file set.

Only the permissions that are explicitly set in the request will be updated.

| Parameter       | Type  | Required | Description                                      |
|-----------------|-------|----------|--------------------------------------------------|
| `fileSetAccess` | array | ✓ Yes    | The access permissions for the file set. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript example using fetch
const fileSetId = '005ee743-e75e-4411-8008-25b3d8b7a1bb';
const url = `/api/files/v1/filesets/${fileSetId}/access`;
const body = {
  fileSetAccess: [
    {
      entityId: 42,
      entityType: 'GROUP',
      permission: 'EDIT'
    }
  ]
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

<!--
type: tab
title: Python
-->

```python
# Python example using requests
import requests

fileSetId = '005ee743-e75e-4411-8008-25b3d8b7a1bb'
url = f'/api/files/v1/filesets/{fileSetId}/access'
body = {
    "fileSetAccess": [
        {
            "entityId": 42,
            "entityType": "GROUP",
            "permission": "EDIT"
        }
    ]
}

response = requests.post(url, json=body, headers={'Content-Type': 'application/json'})
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
# cURL example
curl -X POST /api/files/v1/filesets/005ee743-e75e-4411-8008-25b3d8b7a1bb/access \
  -H "Content-Type: application/json" \
  -d '{
  "fileSetAccess": [
    {
      "entityId": 42,
      "entityType": "GROUP",
      "permission": "EDIT"
    }
  ]
}'
```

<!-- type: tab-end -->

### Response

**Status:** `200`

```json
{
  "fileSetId": "e49f188e-be98-451d-ba0f-ada1157bb656",
  "fileSetAccess": [
    {
      "entityId": 42,
      "entityType": "GROUP",
      "permission": "EDIT"
    },
    {
      "entityId": 27,
      "entityType": "USER",
      "permission": "OWNER"
    }
  ]
}
```

- `fileSetId`: The ID of the FileSet with updated access permissions.
- `fileSetAccess`: An array containing objects with the updated access permissions:
  - `entityId`: The ID of the entity (user or group).
  - `entityType`: The type of the entity, either `GROUP` or `USER`.
  - `permission`: The level of permission granted or updated.

### Error Responses

| Status Code | Description        |
|-------------|--------------------|
| `400`       | Bad Request        |
| `403`       | Forbidden          |
| `409`       | Conflict           |
| `413`       | Payload Too Large  |

---

## List FileSets

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/search`

Retrieve a paginated list of FileSets based on search criteria.

### Path Parameters

_None_

### Query Parameters

| Parameter | Type            | Required | Description                                        |
|-----------|-----------------|----------|----------------------------------------------------|
| `limit`   | integer (int32) | No       | The maximum number of FileSets to return. (Default: `100`.) |
| `offset`  | integer (int32) | No       | The offset for pagination. (Default: `0`.)          |

### Request Body

Request object for searching with specific filters and sorting options.

| Parameter    | Type  | Required | Description                                           |
|--------------|-------|----------|-------------------------------------------------------|
| `fieldSort`  | array | No       | A list of field sort criteria to apply to the search. |
| `filters`    | array | No       | A list of filters to apply to the search.             |
| `dateFilters`| array | No       | A list of date filters to apply to the search.        |


### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch("/api/files/v1/filesets/search?limit=10&offset=0", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    fieldSort: [
      {
        field: "name",
        order: "ASC"
      }
    ],
    filters: [
      {
        field: "owner",
        value: [27],
        not: false,
        operator: "EQUALS"
      }
    ],
    dateFilters: [
      {
        field: "created",
        start: "2025-05-12T23:30:00Z",
        not: false,
        end: null
      }
    ]
  })
}).then(response => response.json())
  .then(data => console.log(data));
```

<!--
type: tab
title: Python
-->

```python
import requests

url = "/api/files/v1/filesets/search"

payload = {
    "fieldSort": [
        {
            "field": "name",
            "order": "ASC"
        }
    ],
    "filters": [
        {
            "field": "owner",
            "value": [27],
            "not": False,
            "operator": "EQUALS"
        }
    ],
    "dateFilters": [
        {
            "field": "created",
            "start": "2025-05-12T23:30:00Z",
            "not": False,
            "end": None
        }
    ]
}

headers = {
    "Content-Type": "application/json"
}

response = requests.post(url, params={"limit": 10, "offset": 0}, json=payload, headers=headers)

print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "/api/files/v1/filesets/search?limit=10&offset=0" \
-H "Content-Type: application/json" \
-d '{
  "fieldSort": [
    {
      "field": "name",
      "order": "ASC"
    }
  ],
  "filters": [
    {
      "field": "owner",
      "value": [27],
      "not": false,
      "operator": "EQUALS"
    }
  ],
  "dateFilters": [
    {
      "field": "created",
      "start": "2025-05-12T23:30:00Z",
      "not": false,
      "end": null
    }
  ]
}'
```

<!-- type: tab-end -->

### Response

**Status:** `200`

```json
{
  "fileSets": [
    {
      "id": "e49f188e-be98-451d-ba0f-ada1157bb656",
      "name": "Policies (2025)",
      "description": "Location for all new and updated policies for FY2025",
      "aiEnabled": false,
      "indexStatus": null,
      "connector": "DOMO",
      "created": "2025-07-28T20:17:43.958479Z",
      "createdBy": 27,
      "updated": "2025-07-28T20:17:43.958479Z",
      "updatedBy": 27,
      "owner": "27",
      "accountId": 0,
      "connectorContext": null,
      "permission": "OWNER",
      "size": 0,
      "fileCount": 0
    }
  ],
  "pageContext": {
    "count": 1,
    "totalCount": 1,
    "offset": 0
  }
}
```

### Error Responses

| Status Code | Description         |
|-------------|---------------------|
| `400`       | Bad Request         |
| `403`       | Forbidden           |
| `409`       | Conflict            |
| `413`       | Payload Too Large   |

---

## Get FileSet Statistics

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/stats`

Retrieve statistics for a specific FileSet.

### Path Parameters

| Parameter  | Type   | Required | Description                                            |
|------------|--------|----------|--------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet for which to retrieve statistics. |

### Query Parameters

_None_

### Request Body

### Request Example

<!-- type: tab title: JavaScript -->

```javascript
// Generate a realistic fetch/axios example using the request body example
// Use the actual endpoint path 
// Include proper headers (Content-Type: application/json if body exists)
fetch('https://yourapi.com/api/files/v1/filesets/41f4904c-0e6d-4605-b865-c692d6afed1b/stats', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

<!-- type: tab-end -->

<!-- type: tab title: Python -->

```python
# Generate a realistic requests example using the request body example
# Use the actual endpoint path 
# Include proper headers if needed
import requests

response = requests.get(
    'https://yourapi.com/api/files/v1/filesets/41f4904c-0e6d-4605-b865-c692d6afed1b/stats',
    headers={'Content-Type': 'application/json'}
)

print(response.json())
```

<!-- type: tab-end -->

<!-- type: tab title: cURL -->

```bash
# Generate a realistic cURL command
# Use the actual endpoint path
# Include -H headers
curl -X GET 'https://yourapi.com/api/files/v1/filesets/41f4904c-0e6d-4605-b865-c692d6afed1b/stats' \
     -H 'Content-Type: application/json'
```

<!-- type: tab-end -->

### Response

**Status:** `200`

```json
{
  "imageFileTypeCount": 113,
  "audioFileTypeCount": 17,
  "videoFileTypeCount": 4,
  "textFileTypeCount": 422,
  "documentFileTypeCount": 98,
  "otherFileTypeCount": 9,
  "notIndexedCount": 0,
  "indexQueuedCount": 0,
  "indexInProgressCount": 19,
  "indexCompleteCount": 623,
  "indexFailedCount": 0,
  "indexSkippedCount": 21
}
```

- `imageFileTypeCount`: Number of image file types in the FileSet.
- `audioFileTypeCount`: Number of audio file types in the FileSet.
- `videoFileTypeCount`: Number of video file types in the FileSet.
- `textFileTypeCount`: Number of text file types in the FileSet.
- `documentFileTypeCount`: Number of document file types in the FileSet.
- `otherFileTypeCount`: Number of other file types in the FileSet.
- `notIndexedCount`: Number of files not indexed.
- `indexQueuedCount`: Number of files queued for indexing.
- `indexInProgressCount`: Number of files currently being indexed.
- `indexCompleteCount`: Number of files completely indexed.
- `indexFailedCount`: Number of files that failed indexing.
- `indexSkippedCount`: Number of files where indexing was skipped.

### Error Responses

| Status Code | Description       |
|-------------|-------------------|
| `400`       | Bad Request       |
| `403`       | Forbidden         |
| `409`       | Conflict          |
| `413`       | Payload Too Large |

---

## Get File or Directory by Path

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/path`

Retrieve a File or Directory within a FileSet using its path.

### Path Parameters

| Parameter   | Type   | Required | Description             |
|-------------|--------|----------|-------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet.  |

### Query Parameters

| Parameter | Type   | Required | Description                                      |
|-----------|--------|----------|--------------------------------------------------|
| `path`    | string | ✓ Yes    | The path to the File or Directory within the FileSet. |

### Request Body

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const axios = require('axios');

axios.get('/api/files/v1/filesets/1a87cba3-9a62-472a-9487-bb0637d28920/path', {
  params: {
    path: 'example/path/to/resource'
  }
})
.then(response => console.log(response.data))
.catch(error => console.error('Error fetching file by path:', error));
```

<!--
type: tab
title: Python
-->

```python
import requests

url = '/api/files/v1/filesets/1a87cba3-9a62-472a-9487-bb0637d28920/path'
params = {'path': 'example/path/to/resource'}

response = requests.get(url, params=params)

if response.status_code == 200:
    print(response.json())
else:
    print(f'Error: {response.status_code}, {response.text}')
```

<!--
type: tab
title: cURL
-->

```bash
curl -X GET '/api/files/v1/filesets/1a87cba3-9a62-472a-9487-bb0637d28920/path' \
  -G --data-urlencode 'path=example/path/to/resource'
```

<!-- type: tab-end -->

### Response

**Status:** `200`

```json
{
  "id": "7150e608-c3a9-4b40-ac2d-eb182cc98c6f",
  "path": "sample/directory/path/PaidTimeOffPolicy.pdf",
  "name": "PaidTimeOffPolicy.pdf",
  "fileType": "DOCUMENT",
  "contentType": "application/pdf",
  "size": 69502,
  "hash": "ce0da94c741125c597cf3d54a3202cebdc16d7fe1074698219f724654595221c",
  "hashAlgorithm": "SHA_256_HEX",
  "downloadUrl": "",
  "created": "2025-07-28T21:47:39.814456Z",
  "createdBy": 27,
  "connectorKey": null,
  "indexStatus": null,
  "indexReason": null
}
```

### Error Responses

| Status Code | Description        |
|-------------|--------------------|
| `400`       | Bad Request        |
| `403`       | Forbidden          |
| `409`       | Conflict           |
| `413`       | Payload Too Large  |

---

## Delete File or Directory by Path

**Method:** `DELETE`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/path`

Delete a specific File or Directory within a FileSet using its path.

### Path Parameters

| Parameter    | Type   | Required | Description                                      |
|--------------|--------|----------|--------------------------------------------------|
| `fileSetId`  | string | ✔ Yes    | The ID of the FileSet containing the File.       |

### Query Parameters

| Parameter | Type   | Required | Description                                                                 |
|-----------|--------|----------|-----------------------------------------------------------------------------|
| `path`    | string | ✔ Yes    | The path to the File or Directory to delete. If a Directory is specified, it and its children will be deleted. |

### Request Body

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const axios = require('axios');

const fileSetId = '1bc5ee4a-e332-46f0-86cd-a2437804c04e';
const path = 'example/path/to/resource';

axios.delete(`https://api.example.com/api/files/v1/filesets/${fileSetId}/path`, {
  params: { path }
})
.then(response => {
  if (response.status === 204) {
    console.log('File or directory deleted successfully.');
  }
})
.catch(error => {
  console.error('Error deleting file or directory:', error.response.status);
});
```

<!--
type: tab
title: Python
-->

```python
import requests

file_set_id = '1bc5ee4a-e332-46f0-86cd-a2437804c04e'
path = 'example/path/to/resource'

response = requests.delete(
    f'https://api.example.com/api/files/v1/filesets/{file_set_id}/path',
    params={'path': path}
)

if response.status_code == 204:
    print('File or directory deleted successfully.')
else:
    print(f'Error deleting file or directory: {response.status_code}')
```

<!--
type: tab
title: cURL
-->

```bash
fileSetId="1bc5ee4a-e332-46f0-86cd-a2437804c04e"
path="example/path/to/resource"

curl -X DELETE "https://api.example.com/api/files/v1/filesets/$fileSetId/path?path=$path" \
     -w "%{http_code}\n" -o /dev/null -s
```

<!-- type: tab-end -->

### Response

**Status:** `204`

```json
{}
```

### Error Responses

| Status Code | Description        |
|-------------|--------------------|
| `400`       | Bad Request        |
| `403`       | Forbidden          |
| `409`       | Conflict           |
| `413`       | Payload Too Large  |

---

## Download a File by Path

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/path/download`

Download the contents of a specific File within a FileSet using its path. This will redirect to the file's download URL.

### Path Parameters

| Parameter   | Type   | Required | Description                                      |
|-------------|--------|----------|--------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet containing the File.       |

### Query Parameters

| Parameter | Type   | Required | Description                                   |
|-----------|--------|----------|-----------------------------------------------|
| `path`    | string | ✔ Yes    | The path of the File to download within the FileSet. |

### Request Body

_Request body is not required for this endpoint._

_N/A_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const fileSetId = "8025d9ac-cee1-4646-b755-fd1f4824c28f";
const path = "example/path/to/resource";

fetch(`/api/files/v1/filesets/${fileSetId}/path/download?path=${encodeURIComponent(path)}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

<!--
type: tab
title: Python
-->

```python
import requests

fileSetId = "8025d9ac-cee1-4646-b755-fd1f4824c28f"
path = "example/path/to/resource"

url = f"http://localhost/api/files/v1/filesets/{fileSetId}/path/download"
params = {'path': path}

response = requests.get(url, params=params, headers={"Content-Type": "application/json"})
if response.status_code == 200:
    print(response.json())
else:
    print(f"Request failed with status {response.status_code}")
```

<!--
type: tab
title: cURL
-->

```bash
fileSetId="8025d9ac-cee1-4646-b755-fd1f4824c28f"
path="example/path/to/resource"

curl -X GET "http://localhost/api/files/v1/filesets/${fileSetId}/path/download?path=${path}" -H "Content-Type: application/json"
```

<!-- type: tab-end -->

### Response

**Status:** `200`

The content of the response will be a direct file download or a redirect to the file's download URL. It does not return a JSON response with metadata.

### Error Responses

| Status Code | Description         | Example Response |
|-------------|---------------------|------------------|
| `400`       | Bad Request         | `{"error": "Invalid path parameter."}` |
| `403`       | Forbidden           | `{"error": "Access denied."}` |
| `409`       | Conflict            | `{"error": "File conflict detected."}` |
| `413`       | Payload Too Large   | `{"error": "The requested file is too large to process."}` |

---

## Get a File or Directory by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}`

Retrieve a specific File or Directory within a FileSet using its ID.

### Path Parameters

| Parameter  | Type   | Required | Description                                                |
|------------|--------|----------|------------------------------------------------------------|
| `fileSetId`| string | ✓ Yes    | The ID of the FileSet containing the File or Directory.    |
| `fileId`   | string | ✓ Yes    | The ID of the File or Directory to retrieve.               |

### Query Parameters

_None_

### Request Body

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Generate a realistic fetch/axios example using the request body example
// Use the actual endpoint path with any path parameters filled in
// Include proper headers (Content-Type: application/json if body exists)
fetch('/api/files/v1/filesets/86c7bf81-46cd-4c7f-bb21-3d22c1534db6/files/abefa3dd-39b8-4414-9c84-1f3cdbacb27d', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log(data));
```

<!--
type: tab
title: Python
-->

```python
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
import requests

response = requests.get(
  url='/api/files/v1/filesets/86c7bf81-46cd-4c7f-bb21-3d22c1534db6/files/abefa3dd-39b8-4414-9c84-1f3cdbacb27d',
  headers={
    'Content-Type': 'application/json'
  }
)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
# Generate a realistic cURL command
# Use the actual endpoint path
# Include -H headers and -d data as appropriate
curl -X GET '/api/files/v1/filesets/86c7bf81-46cd-4c7f-bb21-3d22c1534db6/files/abefa3dd-39b8-4414-9c84-1f3cdbacb27d' \
-H 'Content-Type: application/json'
```

<!-- type: tab-end -->

### Response

**Status:** `200`

```json
{
  "id": "7150e608-c3a9-4b40-ac2d-eb182cc98c6f",
  "path": "sample/directory/path/PaidTimeOffPolicy.pdf",
  "name": "PaidTimeOffPolicy.pdf",
  "fileType": "DOCUMENT",
  "contentType": "application/pdf",
  "size": 69502,
  "hash": "ce0da94c741125c597cf3d54a3202cebdc16d7fe1074698219f724654595221c",
  "hashAlgorithm": "SHA_256_HEX",
  "downloadUrl": "",
  "created": "2025-07-28T21:47:39.814456Z",
  "createdBy": 27,
  "connectorKey": null,
  "indexStatus": null,
  "indexReason": null
```

- `id`: The unique identifier of the file.
- `path`: The directory path to the file.
- `name`: Name of the file.
- `fileType`: Type of file (e.g. DOCUMENT).
- `contentType`: MIME type of the file.
- `size`: Size of the file in bytes.
- `hash`: Hash of the file content.
- `hashAlgorithm`: Algorithm used for hashing.
- `downloadUrl`: URL to download the file.
- `created`: Timestamp of when the file was created.
- `createdBy`: ID of the user who created the file.
- `connectorKey`: Key for the connector service.
- `indexStatus`: Status of indexing.
- `indexReason`: Reason for indexing status.

### Error Responses

| Status Code | Description      |
|-------------|------------------|
| `400`       | Bad Request      |
| `403`       | Forbidden        |
| `409`       | Conflict         |
| `413`       | Payload Too Large|

---

## Delete a File or Directory by ID

**Method:** `DELETE`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}`

Delete a specific File or Directory within a FileSet using its ID.

### Path Parameters

| Parameter   | Type   | Required | Description                                                                                                                                                                                                             |
|-------------|--------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File.                                                                                                                                                                              |
| `fileId`    | string | ✓ Yes    | The ID of the File or Directory to delete. If a Directory is specified, it and its children will be deleted. |

### Query Parameters

_None_

### Request Body

_None_

### Request Example

<!-- type: tab -->
<!-- type: tab title: JavaScript -->

```javascript
// JavaScript fetch example
fetch('https://example.com/api/files/v1/filesets/4a1ff344-d458-4d90-aaa3-f58418293827/files/18e23f9c-3e08-4c63-9734-036f64479f7e', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (response.status === 204) {
    console.log('File or Directory deleted successfully');
  } else if (response.status === 400) {
    console.error('Bad Request - Invalid file or fileset ID');
  } else if (response.status === 403) {
    console.error('Forbidden - You do not have permission to delete this File or Directory');
  } else if (response.status === 409) {
    console.error('Conflict - Resource is in use or locked');
  } else if (response.status === 413) {
    console.error('Payload Too Large - Request entity is too large');
  } else {
    console.error('Failed to delete the File or Directory');
  }
});
```

<!-- type: tab-end -->
<!-- type: tab -->
<!-- type: tab title: Python -->

```python
# Python requests example
import requests

response = requests.delete(
    'https://example.com/api/files/v1/filesets/4a1ff344-d458-4d90-aaa3-f58418293827/files/18e23f9c-3e08-4c63-9734-036f64479f7e',
    headers={'Content-Type': 'application/json'}
)

if response.status_code == 204:
    print('File or Directory deleted successfully')
elif response.status_code == 400:
    print('Bad Request - Invalid file or fileset ID')
elif response.status_code == 403:
    print('Forbidden - You do not have permission to delete this File or Directory')
elif response.status_code == 409:
    print('Conflict - Resource is in use or locked')
elif response.status_code == 413:
    print('Payload Too Large - Request entity is too large')
else:
    print('Failed to delete the File or Directory')
```

<!-- type: tab-end -->
<!-- type: tab -->
<!-- type: tab title: cURL -->

```bash
# cURL example
curl -X DELETE 'https://example.com/api/files/v1/filesets/4a1ff344-d458-4d90-aaa3-f58418293827/files/18e23f9c-3e08-4c63-9734-036f64479f7e' \
  -H 'Content-Type: application/json'
```

<!-- type: tab-end -->

### Response

**Status:** `204`

```json
{}
```

### Error Responses

- **400 Bad Request:** The request was invalid or cannot be otherwise served. This may occur if the file or fileset ID is invalid.
- **403 Forbidden:** The user does not have permission to delete the File or Directory. Ensure proper authorization.
- **409 Conflict:** The request could not be completed due to a conflict with the current state of the resource, such as the resource being in use or locked.
- **413 Payload Too Large:** The request entity is larger than the server is willing or able to process.

---

## Download a File by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}/download`

Download the contents of a specific File within a FileSet using its ID. This will redirect to the file's download URL.

### Path Parameters

| Parameter  | Type   | Required | Description                                   |
|------------|--------|----------|-----------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File.    |
| `fileId`   | string | ✓ Yes    | The ID of the File to download.              |

### Query Parameters

- _None_

### Request Body

- _None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const fetchDownloadUrl = async () => {
  const response = await fetch('https://api.example.com/api/files/v1/filesets/6c22b040-b714-4126-808b-45894c9c933a/files/ee10c2a6-fae2-4220-a878-3afc9146d21b/download', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    console.log('File download initiated successfully.');
  } else {
    console.error('Error downloading file:', response.status);
  }
};

fetchDownloadUrl();
```

<!--
type: tab
title: Python
-->

```python
import requests

def download_file():
    url = 'https://api.example.com/api/files/v1/filesets/6c22b040-b714-4126-808b-45894c9c933a/files/ee10c2a6-fae2-4220-a878-3afc9146d21b/download'
    headers = {
        'Content-Type': 'application/json'
    }

    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        print('File download initiated successfully.')
    else:
        print(f'Error downloading file: {response.status_code}')

download_file()
```

<!--
type: tab
title: cURL
-->

```bash
curl -X GET "https://api.example.com/api/files/v1/filesets/6c22b040-b714-4126-808b-45894c9c933a/files/ee10c2a6-fae2-4220-a878-3afc9146d21b/download" \
     -H "Content-Type: application/json"
```

<!-- type: tab-end -->

### Response

**Status:** `200`

When the request is successful, the response body will contain the file download initiation confirmation.

```json
{
  "message": "File download initiated successfully."
}
```

### Error Responses

When the request fails, different status codes indicate various potential issues. 

- **302 Found:** The file download has been initiated successfully but using a redirection. This is the expected behavior.
- **400 Bad Request:** The request parameters were missing or invalid.
- **403 Forbidden:** The requester does not have permission to access the file.
- **409 Conflict:** There was a conflict with the request, such as the file being locked.
- **413 Payload Too Large:** The request entity was too large, exceeding the server's limits.

For each error, ensure to check the status code and handle the errors appropriately in your application by logging the error and informing the user.

---

## Get File Content by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}/content`

Retrieve the content of a specific File within a FileSet using its ID. This endpoint requires a valid download token for authorization, which is generally obtained via a download endpoint and redirected here automatically.

### Path Parameters

| Parameter   | Type   | Required | Description                                |
|-------------|--------|----------|--------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet containing the File. |
| `fileId`    | string | ✔ Yes    | The ID of the File to retrieve.            |

### Query Parameters

| Parameter | Type   | Required | Description                        |
|-----------|--------|----------|------------------------------------|
| `token`   | string | ✔ Yes    | The download token for authorization. |

### Request Body

_No request body is required for this endpoint._

### Request Example

<!-- type: tab -->
title: JavaScript
-->

```javascript
// JavaScript fetch example
const fileSetId = '82a76763-c98f-479e-940b-a5e456091986';
const fileId = '483cdd5c-239a-4034-9089-816f47017dad';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';

fetch(`https://yourdomain.com/api/files/v1/filesets/${fileSetId}/files/${fileId}/content?token=${token}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

<!-- type: tab-end -->

<!-- type: tab -->
title: Python
-->

```python
# Python requests example
import requests

fileSetId = "82a76763-c98f-479e-940b-a5e456091986"
fileId = "483cdd5c-239a-4034-9089-816f47017dad"
token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
url = f"https://yourdomain.com/api/files/v1/filesets/{fileSetId}/files/{fileId}/content"
params = {'token': token}

try:
    response = requests.get(url, params=params)
    response.raise_for_status()
    print(response.json())
except requests.exceptions.HTTPError as err:
    print(f"HTTP error occurred: {err}")
except Exception as err:
    print(f"Other error occurred: {err}")
```

<!-- type: tab-end -->

<!-- type: tab -->
title: cURL
-->

```bash
# cURL command example
curl -X GET "https://yourdomain.com/api/files/v1/filesets/82a76763-c98f-479e-940b-a5e456091986/files/483cdd5c-239a-4034-9089-816f47017dad/content?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." -H "Content-Type: application/json" || echo 'Request failed'
```

<!-- type: tab-end -->

### Response

**Status:** `200`

The response body contains the requested file content. The structure might vary depending on the file type; however, it is generally returned as a blob or raw file content.

### Error Responses

| Status Code | Description        |
|-------------|--------------------|
| `400`       | Bad Request        |
| `403`       | Forbidden          |
| `409`       | Conflict           |
| `413`       | Payload Too Large  |

---

