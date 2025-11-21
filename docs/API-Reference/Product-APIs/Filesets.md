# Documents API

> **Version:** 2.2.3101_master
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

| Parameter    | Type    | Required | Description                                                 |
|--------------|---------|----------|-------------------------------------------------------------|
| `name`       | string  | ✔ Yes    | The name for the file set.                                   |
| `description`| string  | No       | A description for the file set.                              |
| `connector`  | string  | No       | The connector that powers the file set. Allowed values: `DOMO`, `CONFLUENCE`, `GITHUB`, `GOOGLE_DRIVE`, `S3` |
| `aiEnabled`  | boolean | No       | Indicates whether AI features are enabled for the file set. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const axios = require('axios');

const data = {
  name: "Policies (2025)",
  description: "Location for all new and updated policies for FY2025",
  aiEnabled: false,
  connector: "DOMO"
};

axios.post('https://api.example.com/api/files/v1/filesets', data, {
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => console.log(response.data))
.catch(error => console.error(error));
```

<!--
type: tab
title: Python
-->

```python
import requests

url = "https://api.example.com/api/files/v1/filesets"
payload = {
    "name": "Policies (2025)",
    "description": "Location for all new and updated policies for FY2025",
    "aiEnabled": False,
    "connector": "DOMO"
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
curl -X POST https://api.example.com/api/files/v1/filesets \
  -H "Content-Type: application/json" \
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

| Status Code | Description      |
|-------------|------------------|
| `400`       | Bad Request      |
| `403`       | Forbidden        |
| `409`       | Conflict         |
| `413`       | Payload Too Large |

---

## Get a FileSet by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}`

Retrieve the details of a specific FileSet using its ID.

### Path Parameters

| Parameter   | Type   | Required | Description                        |
|-------------|--------|----------|------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to retrieve. |

### Query Parameters

_None_

### Request Body


### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript example using fetch
fetch('https://api.example.com/api/files/v1/filesets/4ad66c25-2e2c-45a9-b529-5e62fa0e4d1b', {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
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
# Python example using requests
import requests

response = requests.get(
    'https://api.example.com/api/files/v1/filesets/4ad66c25-2e2c-45a9-b529-5e62fa0e4d1b',
    headers={'Accept': 'application/json'}
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
# cURL example
curl -X GET 'https://api.example.com/api/files/v1/filesets/4ad66c25-2e2c-45a9-b529-5e62fa0e4d1b' -H 'Accept: application/json'
```

<!--
type: tab-end
-->

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

| Parameter  | Type   | Required | Description                           |
|------------|--------|----------|---------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet to update.      |

### Query Parameters

_None_

### Request Body

Represents a request to update a file set.  
At least one of the fields must be provided to update the file set.

| Parameter    | Type    | Required | Description                                                                                           |
|--------------|---------|----------|-------------------------------------------------------------------------------------------------------|
| `name`       | string  | No       | The name with which to update the file set's name. If not provided, the name will remain unchanged.   |
| `description`| string  | No       | Optional description with which to update the file set's description. If not provided, the description will remain unchanged. |
| `aiEnabled`  | boolean | No       | Optional flag to enable or disable AI features for the file set.                                      |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const fetch = require('node-fetch');

const url = 'https://api.example.com/api/files/v1/filesets/0e1ad128-3a18-487f-9eb7-46ecb658622a';
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Policies (FY25)',
    description: 'Repository for new policies created ONLY in FY2025',
  }),
};

fetch(url, options)
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

url = 'https://api.example.com/api/files/v1/filesets/0e1ad128-3a18-487f-9eb7-46ecb658622a'
payload = {
    'name': 'Policies (FY25)',
    'description': 'Repository for new policies created ONLY in FY2025'
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
curl -X POST 'https://api.example.com/api/files/v1/filesets/0e1ad128-3a18-487f-9eb7-46ecb658622a' \
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

- `id`: The unique identifier for the file set.
- `name`: The updated name of the file set.
- `description`: The updated description of the file set.
- `aiEnabled`: Indicates whether AI features are enabled for the file set.
- `indexStatus`: The status of indexing, if applicable.
- `connector`: Type of connector used.
- `created`: Timestamp of when the file set was created.
- `createdBy`: User ID of who created the file set.
- `updated`: Timestamp of the last update to the file set.
- `updatedBy`: User ID of who last updated the file set.
- `owner`: The owner ID of the file set.
- `accountId`: Account ID associated with the file set.
- `connectorContext`: Context associated with the connector.
- `permission`: Permission level for the file set.
- `size`: The size of the file set.
- `fileCount`: Number of files in the set.

### Error Responses

| Status Code | Description          |
|-------------|----------------------|
| `400`       | Bad Request          |
| `403`       | Forbidden            |
| `409`       | Conflict             |
| `413`       | Payload Too Large    |

---

## Delete a FileSet by ID

**Method:** `DELETE`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}`

Delete a specific FileSet using its ID.

### Path Parameters

| Parameter  | Type   | Required | Description                          |
|------------|--------|----------|--------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet to delete. |

### Query Parameters

_None_

### Request Body

_No request body is needed for this endpoint._

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://example.com/api/files/v1/filesets/bf924662-8389-4b67-b1b1-fdefbe1051dc', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (response.status === 204) {
    console.log('FileSet deleted successfully.');
  } else {
    console.log('Failed to delete FileSet.');
  }
});
```

<!--
type: tab
title: Python
-->

```python
import requests

response = requests.delete(
    'https://example.com/api/files/v1/filesets/bf924662-8389-4b67-b1b1-fdefbe1051dc',
    headers={'Content-Type': 'application/json'}
)

if response.status_code == 204:
    print('FileSet deleted successfully.')
else:
    print('Failed to delete FileSet.')
```

<!--
type: tab
title: cURL
-->

```bash
curl -X DELETE 'https://example.com/api/files/v1/filesets/bf924662-8389-4b67-b1b1-fdefbe1051dc' \
  -H 'Content-Type: application/json'
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

## Query FileSet for File Contents

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/query`

Query a specific FileSet for file contents related to the query criteria.

### Path Parameters

| Parameter | Type   | Required | Description                        |
|-----------|--------|----------|------------------------------------|
| `fileSetId` | string | ✓ Yes  | The ID of the FileSet to query.   |

### Query Parameters

_None_

### Request Body

Used to query a file set for the top K results based on the provided query.

| Parameter         | Type            | Required | Description                                                                               |
|-------------------|-----------------|----------|-------------------------------------------------------------------------------------------|
| `query`           | string          | ✓ Yes    | The query string to match against file contents within the file set.                      |
| `topK`            | integer (int32) | No       | The number of top results to return based on the query match. Defaults to 1.              |
| `pathPrefixFilter` | string         | No       | An optional prefix filter for the file paths to narrow down the search results.           |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://api.example.com/api/files/v1/filesets/640e287c-9869-4e59-bf2b-2920fe9d7d11/query', {
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

<!--
type: tab
title: Python
-->

```python
import requests

url = "https://api.example.com/api/files/v1/filesets/640e287c-9869-4e59-bf2b-2920fe9d7d11/query"
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

<!--
type: tab
title: cURL
-->

```bash
curl -X POST https://api.example.com/api/files/v1/filesets/640e287c-9869-4e59-bf2b-2920fe9d7d11/query \
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

| Status Code | Description          |
|-------------|----------------------|
| `400`       | Bad Request          |
| `403`       | Forbidden            |
| `409`       | Conflict             |
| `413`       | Payload Too Large    |

---

## Update FileSet Owner

**Method:** `POST`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/ownership`

Update the owner of a specific FileSet.

### Path Parameters

| Parameter   | Type   | Required | Description                                                |
|-------------|--------|----------|------------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet for which to update the owner.       |

### Query Parameters

_None_

### Request Body

Represents a request to transfer ownership of a file set.

Other users may be granted ownership level permissions, but only one user may be the sole owner of a file set.

| Parameter | Type             | Required | Description                                     |
|-----------|------------------|----------|-------------------------------------------------|
| `userId`  | integer (int64)  | ✔ Yes    | The ID of the user that will assume ownership.  |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript fetch example
fetch('https://api.example.com/api/files/v1/filesets/42624bdd-b1e3-4b2d-8cd9-1b8c573a1927/ownership', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    userId: 109
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
# Python requests example
import requests

url = "https://api.example.com/api/files/v1/filesets/42624bdd-b1e3-4b2d-8cd9-1b8c573a1927/ownership"
headers = {
    "Content-Type": "application/json"
}
data = {
    "userId": 109
}

response = requests.post(url, json=data, headers=headers)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
# cURL command example
curl -X POST https://api.example.com/api/files/v1/filesets/42624bdd-b1e3-4b2d-8cd9-1b8c573a1927/ownership \
     -H "Content-Type: application/json" \
     -d '{"userId":109}'
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

| Status Code | Description           |
|-------------|-----------------------|
| `400`       | Bad Request           |
| `403`       | Forbidden             |
| `409`       | Conflict              |
| `413`       | Payload Too Large     |

---

## Create a new File or Directory

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files`

Create a new File or Directory within a specified FileSet. If a file already exists at the specified path, it will attempt to overwrite it if the client has permission. If a Directory already exists at the specified path, it will return that Directory.

### Path Parameters

| Parameter  | Type   | Required | Description                                              |
|------------|--------|----------|----------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet in which to create the File.      |

### Query Parameters

_None_

### Request Body

Represents a request to upload a file or create a directory.

| Parameter     | Type           | Required | Description                                                                                                                                                   |
|---------------|----------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `file`        | string (binary)| No       | The file to be uploaded. Leave null if creating a directory.                                                                                                  |
| `directoryPath` | string      | No       | The directory path of the uploaded file, or the path of the created directory if no file is provided. Defaults to an empty string, i.e., the root directory, if not specified. Note: An empty string is not valid when intentionally creating a directory. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://api.example.com/api/files/v1/filesets/4b7dc420-dc93-4635-992d-eaf87e1b38e4/files', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    file: /* (binary data of the file) */,
    directoryPath: 'sample/directory/path'
  })
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
import requests

url = 'https://api.example.com/api/files/v1/filesets/4b7dc420-dc93-4635-992d-eaf87e1b38e4/files'
headers = {'Content-Type': 'application/json'}
data = {
    "file": "(binary data of the file)",
    "directoryPath": "sample/directory/path"
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

<!-- type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
curl -X POST 'https://api.example.com/api/files/v1/filesets/4b7dc420-dc93-4635-992d-eaf87e1b38e4/files' \
-H 'Content-Type: application/json' \
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
- `path`: The full path of the created file or directory.
- `name`: The name of the created file or directory.
- `size`: The size of the file (null for directories).
- `created`: The timestamp when the file or directory was created.
- `createdBy`: The ID of the user who created the file or directory.
- `fileType`: The type of the created resource, either FILE or DIRECTORY.

### Error Responses

| Status Code | Description                                                                                              |
|-------------|----------------------------------------------------------------------------------------------------------|
| `400`       | Bad Request                                                                                              |
| `403`       | Forbidden                                                                                                |
| `409`       | Conflict: File already exists at the specified path and client does not have overwrite permissions.      |
| `413`       | Payload Too Large                                                                                        |

---

## List Files and Directories for a FileSet

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/search`

Retrieve a paginated list of Files within a specific FileSet based on search criteria.

### Path Parameters

| Parameter  | Type   | Required | Description                                |
|------------|--------|----------|--------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet to search within. |

### Query Parameters

| Parameter         | Type            | Required | Description                                                                    |
|-------------------|-----------------|----------|--------------------------------------------------------------------------------|
| `directoryPath`   | string          | No       | The path to the directory within the FileSet, if applicable.                   |
| `immediateChildren` | boolean         | No       | Whether to list only immediate children of the specified directory. (Default: `False`) |
| `limit`           | integer (int32) | No       | The maximum number of Files to return. (Default: `100`)                        |
| `next`            | string          | No       | The pagination token for the next set of results.                              |

### Request Body

Request object for searching with specific filters and sorting options.

| Parameter    | Type  | Required | Description                                      |
|--------------|-------|----------|--------------------------------------------------|
| `fieldSort`  | array | No       | A list of field sort criteria to apply to the search. |
| `filters`    | array | No       | A list of filters to apply to the search.        |
| `dateFilters` | array | No       | A list of date filters to apply to the search.   |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const fetch = require('node-fetch');

const url = 'https://api.example.com/api/files/v1/filesets/d48656de-f63e-44b9-a4ca-0b22fbf28471/files/search';

const options = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
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
};

fetch(url, options)
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

url = 'https://api.example.com/api/files/v1/filesets/d48656de-f63e-44b9-a4ca-0b22fbf28471/files/search'
headers = {'Content-Type': 'application/json'}
body = {
    "fieldSort": [
        {
            "field": "created",
            "order": "ASC"
        }
    ],
    "filters": [
        {
            "field": "name",
            "value": ["paid"],
            "not": False,
            "operator": "LIKE"
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

response = requests.post(url, json=body, headers=headers)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST 'https://api.example.com/api/files/v1/filesets/d48656de-f63e-44b9-a4ca-0b22fbf28471/files/search' \
-H 'Content-Type: application/json' \
-d '{
  "fieldSort": [
    {
      "field": "created",
      "order": "ASC"
    }
  ],
  "filters": [
    {
      "field": "name",
      "value": [
        "paid"
      ],
      "not": false,
      "operator": "LIKE"
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

- `files`: List of files found in the search.
  - `id`: ID of the file.
  - `path`: Path to the file in the directory.
  - `name`: Name of the file.
  - `fileType`: Type of file (e.g., DOCUMENT).
  - `contentType`: MIME type of the file content.
  - `size`: Size of the file in bytes.
  - `hash`: Hash value of the file content.
  - `hashAlgorithm`: Algorithm used for hashing.
  - `created`: Creation timestamp of the file.
  - `createdBy`: ID of the user who created the file.
- `pageContext`: Pagination context for the results.
  - `next`: Pagination token to fetch the next set of results.

### Error Responses

| Status Code | Description             |
|-------------|-------------------------|
| `400`       | Bad Request             |
| `403`       | Forbidden               |
| `409`       | Conflict                |
| `413`       | Payload Too Large       |

---

## Initiate a split file upload.

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart`

Initiates a split file upload process for creating a new file within a FileSet.

### Path Parameters

| Parameter   | Type   | Required | Description                                         |
|-------------|--------|----------|-----------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet in which to create the File.  |

### Query Parameters

_None_

### Request Body

Represents a request to initiate a split file upload.

| Parameter | Type   | Required | Description                                                                  |
|-----------|--------|----------|------------------------------------------------------------------------------|
| `path`    | string | No       | The full path destination for the file once the upload is finalized.         |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript example using fetch

const fileSetId = "1f8af6b9-f088-4b9a-9ece-4a713d6bb633";
const url = `/api/files/v1/filesets/${fileSetId}/files/multipart`;

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    path: "example/path/to/resource"
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
# Python example using requests

import requests

fileSetId = "1f8af6b9-f088-4b9a-9ece-4a713d6bb633"
url = f"/api/files/v1/filesets/{fileSetId}/files/multipart"
headers = {
    'Content-Type': 'application/json',
}
data = {
    "path": "example/path/to/resource"
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
# cURL example

curl -X POST /api/files/v1/filesets/1f8af6b9-f088-4b9a-9ece-4a713d6bb633/files/multipart \
-H "Content-Type: application/json" \
-d '{"path":"example/path/to/resource"}'
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

| Status Code | Description                                                                            |
|-------------|----------------------------------------------------------------------------------------|
| `400`       | Bad Request                                                                            |
| `403`       | Forbidden                                                                              |
| `409`       | Conflict: File already exists at the specified path.                                   |
| `413`       | Payload Too Large                                                                      |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled.                |

---

## Submit a part of a file for upload.

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/part/{partNumber}`

Allows submitting a file in stages to create a new file within a FileSet.

### Path Parameters

| Parameter    | Type           | Required | Description                                                       |
|--------------|----------------|----------|-------------------------------------------------------------------|
| `fileSetId`  | string         | ✓ Yes    | The ID of the FileSet in which to the file is being uploaded.     |
| `fileId`     | string         | ✓ Yes    | The ID of the file being uploaded in parts.                       |
| `partNumber` | integer (int64) | ✓ Yes    | The part number of this file segment. Must be non-negative.       |

### Query Parameters

_None_

### Request Body

Represents a request to upload a part of a file in a split file upload operation.

| Parameter | Type           | Required | Description                                                     |
|-----------|----------------|----------|-----------------------------------------------------------------|
| `part`    | string (binary) | No       | The full path destination for the file once the upload is complete. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const axios = require('axios');
const fs = require('fs');

const data = fs.readFileSync('path/to/your/file.chunk');
const options = {
  method: 'POST',
  url: 'https://example.com/api/files/v1/filesets/aea01882-430d-4012-83b0-27607dbaeb8d/files/multipart/803cdeee-afbb-47f6-814f-82effe26a5aa/part/1234567890',
  headers: {
    'Content-Type': 'application/octet-stream'
  },
  data: data
};

axios(options)
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```

<!--
type: tab
title: Python
-->

```python
import requests

url = "https://example.com/api/files/v1/filesets/aea01882-430d-4012-83b0-27607dbaeb8d/files/multipart/803cdeee-afbb-47f6-814f-82effe26a5aa/part/1234567890"
headers = {
    'Content-Type': 'application/octet-stream'
}

with open('path/to/your/file.chunk', 'rb') as file_part:
    response = requests.post(url, headers=headers, data=file_part)

print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "https://example.com/api/files/v1/filesets/aea01882-430d-4012-83b0-27607dbaeb8d/files/multipart/803cdeee-afbb-47f6-814f-82effe26a5aa/part/1234567890" \
     -H "Content-Type: application/octet-stream" \
     --data-binary @path/to/your/file.chunk
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

| Status Code | Description                                                                        |
|-------------|------------------------------------------------------------------------------------|
| `400`       | Split file upload part did not match previous data segments.                       |
| `403`       | Forbidden                                                                           |
| `404`       | An "initiate split file" request was not performed prior to this request for the given file ID or has already been finalized or aborted. |
| `409`       | Conflict                                                                            |
| `413`       | Payload Too Large                                                                   |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled.            |

---

## Finalize a split file upload.

**Method:** `POST`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/finalize`

Declares that all parts of a split file upload have been submitted and the file can be assembled.

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fileSetId` | string | ✔ Yes | The ID of the FileSet in which the file has been uploaded. |
| `fileId` | string | ✔ Yes | The ID of the file whose parts have been uploaded. |

### Query Parameters

_None_

### Request Body



### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// As this request has no body, it's a simple POST request with path parameters.

fetch('https://api.example.com/api/files/v1/filesets/86e9679e-5d36-4c74-a8d8-55a309575ec8/files/multipart/f5bc93af-f64b-4600-8930-58aee4119423/finalize', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
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
# Using the requests library in Python to send a POST request with path parameters.

import requests

url = "https://api.example.com/api/files/v1/filesets/86e9679e-5d36-4c74-a8d8-55a309575ec8/files/multipart/f5bc93af-f64b-4600-8930-58aee4119423/finalize"

response = requests.post(url, headers={'Content-Type': 'application/json'})

print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
# cURL command to send a POST request with path parameters.

curl -X POST "https://api.example.com/api/files/v1/filesets/86e9679e-5d36-4c74-a8d8-55a309575ec8/files/multipart/f5bc93af-f64b-4600-8930-58aee4119423/finalize" \
     -H "Content-Type: application/json"
```

<!-- type: tab-end -->

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

- `file`: Contains details about the file that has been successfully finalized.
  - `id`: Unique identifier of the file.
  - `path`: Path where the file is stored.
  - `name`: Name of the file.
  - `fileType`: Type of the file (e.g., DOCUMENT).
  - `contentType`: MIME type of the file.
  - `size`: Size of the file in bytes.
  - `hash`: SHA-256 hash of the file.
  - `hashAlgorithm`: Hash algorithm used.
  - `downloadUrl`: URL to download the file (if available).
  - `created`: Timestamp when the file was created.
  - `createdBy`: ID of the user who created the file.
  - `connectorKey`, `indexStatus`, `indexReason`: Additional metadata (currently null).
- `status`: Indicates the operation was successful.

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

## Abort a Split File Upload

**Method:** `POST`  
**Endpoint:** `https://api.yourdomain.com/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/abort`

Aborts an ongoing split file upload process, discarding all uploaded parts.

### Path Parameters

| Parameter  | Type   | Required | Description                                                               |
|------------|--------|----------|---------------------------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet in which the file was being uploaded.              |
| `fileId`    | string | ✔ Yes    | The ID of the file whose upload is to be aborted.                        |

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
const url = 'https://api.yourdomain.com/api/files/v1/filesets/26ced2c1-afd0-4a52-959f-ff1ae822ddb5/files/multipart/0de66dfc-7688-4208-8510-aa0989b6bc09/abort';

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
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
import requests

url = 'https://api.yourdomain.com/api/files/v1/filesets/26ced2c1-afd0-4a52-959f-ff1ae822ddb5/files/multipart/0de66dfc-7688-4208-8510-aa0989b6bc09/abort'

response = requests.post(url, headers={'Content-Type': 'application/json'})
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST 'https://api.yourdomain.com/api/files/v1/filesets/26ced2c1-afd0-4a52-959f-ff1ae822ddb5/files/multipart/0de66dfc-7688-4208-8510-aa0989b6bc09/abort' \
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

**Note:** The `FAILED` status indicates the file upload was not successful, and any previously uploaded parts were discarded.

### Error Responses

The API can return the following errors:

- `400 Bad Request`: The request is malformed, possibly due to invalid parameters.
- `403 Forbidden`: The user does not have permission to abort the upload.
- `404 Not Found`: The file ID was not initiated for split file upload, or the process has already been finalized or aborted.
- `409 Conflict`: A conflicting operation is occurring; try again later.
- `413 Payload Too Large`: The request payload is too large for the server to handle.

---

## Get FileSet Access Permissions

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/access`

Retrieve the access permissions for a specific FileSet.

### Path Parameters

| Parameter  | Type   | Required | Description                                                                  |
|------------|--------|----------|------------------------------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet for which to retrieve access information.              |

### Query Parameters

_None_

### Request Body

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript fetch example
const fileSetId = "3f68c066-525a-43a9-aae3-13bee8a7e61e";
fetch(`https://example.com/api/files/v1/filesets/${fileSetId}/access`, {
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
type: tab
title: Python
-->

```python
# Python requests example
import requests

fileSetId = "3f68c066-525a-43a9-aae3-13bee8a7e61e"
url = f"https://example.com/api/files/v1/filesets/{fileSetId}/access"
response = requests.get(url, headers={'Content-Type': 'application/json'})

if response.ok:
    print(response.json())
else:
    print("Error:", response.status_code, response.text)
```

<!--
type: tab
title: cURL
-->

```bash
# cURL command example
curl -X GET "https://example.com/api/files/v1/filesets/3f68c066-525a-43a9-aae3-13bee8a7e61e/access" -H "Content-Type: application/json"
```

<!-- type: tab-end -->

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

- `fileSetId`: The ID of the FileSet.
- `fileSetAccess`: A list of access permissions.
  - `entityId`: Unique identifier for the entity (user or group).
  - `entityType`: Type of entity, e.g., USER.
  - `permission`: Access permission level, e.g., OWNER.

### Error Responses

| Status Code | Description      |
|-------------|------------------|
| `400`       | Bad Request      |
| `403`       | Forbidden        |
| `409`       | Conflict         |
| `413`       | Payload Too Large |

---

## Update FileSet Access Permissions

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/access`

Update the relevant access permissions for a specific FileSet.

### Path Parameters

| Parameter   | Type   | Required | Description                                                   |
|-------------|--------|----------|---------------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet for which to update access permissions. |

### Query Parameters

_None_

### Request Body

Request object for updating access permissions to a file set.

Only the permissions that are explicitly set in the request will be updated.

| Parameter       | Type  | Required | Description                                     |
|-----------------|-------|----------|-------------------------------------------------|
| `fileSetAccess` | array | ✔ Yes    | The access permissions for the file set.        |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://api.example.com/api/files/v1/filesets/486d6ad6-a57e-4109-b12a-a851efa27057/access', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    fileSetAccess: [
      {
        entityId: 42,
        entityType: "GROUP",
        permission: "EDIT"
      }
    ]
  })
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
import requests

url = 'https://api.example.com/api/files/v1/filesets/486d6ad6-a57e-4109-b12a-a851efa27057/access'
headers = {'Content-Type': 'application/json'}
data = {
    "fileSetAccess": [
        {
            "entityId": 42,
            "entityType": "GROUP",
            "permission": "EDIT"
        }
    ]
}

response = requests.post(url, headers=headers, json=data)
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
curl -X POST 'https://api.example.com/api/files/v1/filesets/486d6ad6-a57e-4109-b12a-a851efa27057/access' \
-H 'Content-Type: application/json' \
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

### Error Responses

| Status Code | Description          |
|-------------|----------------------|
| `400`       | Bad Request          |
| `403`       | Forbidden            |
| `409`       | Conflict             |
| `413`       | Payload Too Large    |

---

## List FileSets

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/search`

Retrieve a paginated list of FileSets based on search criteria.

### Path Parameters

_None_

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer (int32) | No | The maximum number of FileSets to return. (Default: `100`) |
| `offset` | integer (int32) | No | The offset for pagination. (Default: `0`) |

### Request Body

Request object for searching with specific filters and sorting options.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fieldSort` | array | No | A list of field sort criteria to apply to the search. |
| `filters` | array | No | A list of filters to apply to the search. |
| `dateFilters` | array | No | A list of date filters to apply to the search. |

### Request Example

<!-- type: tab title: JavaScript -->

```javascript
const url = '/api/files/v1/filesets/search?limit=10&offset=0';
const body = {
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

<!-- type: tab title: Python -->

```python
import requests

url = '/api/files/v1/filesets/search'
params = {
    'limit': 10,
    'offset': 0
}
body = {
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

response = requests.post(url, params=params, json=body)

if response.status_code == 200:
    print(response.json())
else:
    print('Error:', response.status_code, response.text)
```

<!-- type: tab title: cURL -->

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

| Status Code | Description |
|-------------|-------------|
| `400` | Bad Request |
| `403` | Forbidden |
| `409` | Conflict |
| `413` | Payload Too Large |

---

## Get FileSet Statistics

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/stats`

Retrieve statistics for a specific FileSet.

### Path Parameters

| Parameter  | Type   | Required | Description                                               |
|------------|--------|----------|-----------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet for which to retrieve statistics.   |

### Query Parameters

_None_

### Request Body

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Use fetch to call the API using the request
const fileSetId = '377ad910-081c-473a-8c02-5aa077d5801e';
fetch(`https://yourapi.com/api/files/v1/filesets/${fileSetId}/stats`)
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

fileSetId = '377ad910-081c-473a-8c02-5aa077d5801e'
response = requests.get(f'https://yourapi.com/api/files/v1/filesets/{fileSetId}/stats')

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
# Use the placeholder fileSetId in your request
curl -X GET 'https://yourapi.com/api/files/v1/filesets/377ad910-081c-473a-8c02-5aa077d5801e/stats'
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

- `imageFileTypeCount`: The count of image files.
- `audioFileTypeCount`: The count of audio files.
- `videoFileTypeCount`: The count of video files.
- `textFileTypeCount`: The count of text files.
- `documentFileTypeCount`: The count of document files.
- `otherFileTypeCount`: The count of other types of files.
- `notIndexedCount`: The count of files not indexed.
- `indexQueuedCount`: The count of files queued for indexing.
- `indexInProgressCount`: The count of files with indexing in progress.
- `indexCompleteCount`: The count of files where indexing is complete.
- `indexFailedCount`: The count of files where indexing failed.
- `indexSkippedCount`: The count of files where indexing was skipped.

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

| Parameter | Type   | Required | Description             |
|-----------|--------|----------|-------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet.  |

### Query Parameters

| Parameter | Type   | Required | Description                                          |
|-----------|--------|----------|------------------------------------------------------|
| `path`    | string | ✓ Yes    | The path to the File or Directory within the FileSet. |

### Request Body

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Generate a realistic fetch/axios example using the request body example
// Use the actual endpoint path with any path parameters filled in
// Include proper headers (Content-Type: application/json if body exists)
fetch('https://api.example.com/api/files/v1/filesets/a223e8f5-f51e-4914-8ff2-14cde6726cc5/path?path=example/path/to/resource', {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
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
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
import requests

url = 'https://api.example.com/api/files/v1/filesets/a223e8f5-f51e-4914-8ff2-14cde6726cc5/path'
params = {'path': 'example/path/to/resource'}

response = requests.get(url, params=params)
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
curl -X GET 'https://api.example.com/api/files/v1/filesets/a223e8f5-f51e-4914-8ff2-14cde6726cc5/path?path=example/path/to/resource' -H 'Accept: application/json'
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

- `id`: Unique identifier of the file or directory.
- `path`: The file or directory path within the FileSet.
- `name`: Name of the file.
- `fileType`: Type of file, e.g., DOCUMENT.
- `contentType`: MIME type of the file.
- `size`: Size of the file in bytes.
- `hash`: Hash value of the file.
- `hashAlgorithm`: Algorithm used to generate the hash.
- `downloadUrl`: URL to download the file (if available).
- `created`: Timestamp when the file was created.
- `createdBy`: Identifier of the user who created the file.
- `connectorKey`: Optional key associated with external connectors.
- `indexStatus`: Status of the indexing process.
- `indexReason`: Reason for the current index status.

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

| Parameter    | Type   | Required | Description                                   |
|--------------|--------|----------|-----------------------------------------------|
| `fileSetId`  | string | ✔ Yes    | The ID of the FileSet containing the File.    |

### Query Parameters

| Parameter | Type   | Required | Description                                                                                       |
|-----------|--------|----------|---------------------------------------------------------------------------------------------------|
| `path`    | string | ✔ Yes    | The path to the File or Directory to delete. If a Directory is specified, it and its children will be deleted. |

### Request Body

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Using the JavaScript fetch API to make a DELETE request
const fileSetId = "e1894bd5-03ff-46b0-a49a-feef397ec983";
const path = "example/path/to/resource";
const url = `/api/files/v1/filesets/${fileSetId}/path?path=${encodeURIComponent(path)}`;

fetch(url, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (response.status === 204) {
    console.log('File or directory deleted successfully');
  } else {
    console.error('Error deleting file or directory:', response.status);
  }
})
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
# Using the Python requests library to make a DELETE request
import requests

fileSetId = "e1894bd5-03ff-46b0-a49a-feef397ec983"
path = "example/path/to/resource"
url = f"/api/files/v1/filesets/{fileSetId}/path"
params = {'path': path}

response = requests.delete(url, params=params, headers={'Content-Type': 'application/json'})

if response.status_code == 204:
    print('File or directory deleted successfully')
else:
    print('Error deleting file or directory:', response.status_code, response.text)
```

<!--
type: tab-end
-->

<!--
type: tab
title: cURL
-->

```bash
# Using cURL to make a DELETE request
curl -X DELETE "/api/files/v1/filesets/e1894bd5-03ff-46b0-a49a-feef397ec983/path?path=example/path/to/resource" \
     -H "Content-Type: application/json"
```

<!--
type: tab-end
-->

### Response

**Status:** `204`

```json
{}
```

### Error Responses

| Status Code | Description         |
|-------------|---------------------|
| `400`       | Bad Request         |
| `403`       | Forbidden           |
| `409`       | Conflict            |
| `413`       | Payload Too Large   |

---

## Download a File by Path

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/path/download`

Download the contents of a specific File within a FileSet using its path. This will redirect to the file's download URL.

### Path Parameters

| Parameter  | Type   | Required | Description                                      |
|------------|--------|----------|--------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet containing the File. |

### Query Parameters

| Parameter | Type   | Required | Description                                     |
|-----------|--------|----------|-------------------------------------------------|
| `path`    | string | ✔ Yes    | The path of the File to download within the FileSet. |

### Request Body

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('/api/files/v1/filesets/ce8ab6e8-46cf-4f13-8976-46a3fc9bc9a4/path/download?path=example/path/to/resource', {
  method: 'GET'
})
.then(response => response.blob())
.then(blob => {
  // Handle the file download
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = 'filename.ext'; // Provide a filename
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
})
.catch(err => console.error('Download error:', err));
```

<!--
type: tab-end -->

<!--
type: tab
title: Python
-->

```python
import requests

response = requests.get('https://yourapi.com/api/files/v1/filesets/ce8ab6e8-46cf-4f13-8976-46a3fc9bc9a4/path/download', params={'path': 'example/path/to/resource'})

if response.status_code == 200:
    with open('downloaded_file.ext', 'wb') as file:
        file.write(response.content)
else:
    print(f'Error: {response.status_code}')
```

<!--
type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
curl -G 'https://yourapi.com/api/files/v1/filesets/ce8ab6e8-46cf-4f13-8976-46a3fc9bc9a4/path/download' \
--data-urlencode "path=example/path/to/resource" -o downloaded_file.ext
```

<!--
type: tab-end -->

### Response

**Status:** `200`

```json
{}
```

### Error Responses

| Status Code | Description         |
|-------------|---------------------|
| `400`       | Bad Request         |
| `403`       | Forbidden           |
| `409`       | Conflict            |
| `413`       | Payload Too Large   |

---

## Get a File or Directory by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}`

Retrieve a specific File or Directory within a FileSet using its ID.

### Path Parameters

| Parameter | Type   | Required | Description                                                        |
|-----------|--------|----------|--------------------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet containing the File or Directory.             |
| `fileId`    | string | ✔ Yes    | The ID of the File or Directory to retrieve.                        |

### Query Parameters

_None_

### Request Body

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Using fetch to get a file or directory by ID
fetch('https://api.example.com/api/files/v1/filesets/4a76f2e5-ef7b-47df-9825-156371bd5d60/files/63f66132-7bc0-4160-bc1d-c5372155a95c', {
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
type: tab
title: Python
-->

```python
import requests

# Using requests to get a file or directory by ID
url = "https://api.example.com/api/files/v1/filesets/4a76f2e5-ef7b-47df-9825-156371bd5d60/files/63f66132-7bc0-4160-bc1d-c5372155a95c"
headers = {
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
if response.ok:
    print(response.json())
else:
    print("Error:", response.status_code, response.text)
```

<!--
type: tab
title: cURL
-->

```bash
# Using cURL to get a file or directory by ID
curl -X GET "https://api.example.com/api/files/v1/filesets/4a76f2e5-ef7b-47df-9825-156371bd5d60/files/63f66132-7bc0-4160-bc1d-c5372155a95c" -H "Content-Type: application/json"
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

### Error Responses

| Status Code | Description     |
|-------------|-----------------|
| `400`       | Bad Request     |
| `403`       | Forbidden       |
| `409`       | Conflict        |
| `413`       | Payload Too Large |

---

## Delete a File or Directory by ID

**Method:** `DELETE`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}`

Delete a specific File or Directory within a FileSet using its ID.

### Path Parameters

| Parameter  | Type   | Required | Description                                                                                                                                          |
|------------|--------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File.                                                                                                           |
| `fileId`    | string | ✓ Yes    | The ID of the File or Directory to delete.   If a Directory is specified, it and its children will be deleted. |

### Query Parameters

_None_

### Request Body

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript example for deleting a file or directory
fetch('https://api.example.com/api/files/v1/filesets/959afc85-b98d-4b11-9af0-e4010fc298ea/files/231e3412-1ca4-40ec-a04c-a7c27a84c9ad', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
}).then(response => {
  if (response.status === 204) {
    console.log('File or Directory successfully deleted');
  } else {
    console.error('Error deleting file or directory', response.status);
  }
});
```

<!--
type: tab
title: Python
-->

```python
# Python example for deleting a file or directory
import requests

url = "https://api.example.com/api/files/v1/filesets/959afc85-b98d-4b11-9af0-e4010fc298ea/files/231e3412-1ca4-40ec-a04c-a7c27a84c9ad"
headers = {
    'Content-Type': 'application/json'
}

response = requests.delete(url, headers=headers)

if response.status_code == 204:
    print('File or Directory successfully deleted')
else:
    print(f'Error deleting file or directory: {response.status_code}')
```

<!--
type: tab
title: cURL
-->

```bash
# cURL example for deleting a file or directory
curl -X DELETE "https://api.example.com/api/files/v1/filesets/959afc85-b98d-4b11-9af0-e4010fc298ea/files/231e3412-1ca4-40ec-a04c-a7c27a84c9ad" \
-H "Content-Type: application/json"
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

## Download a File by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}/download`

Download the contents of a specific File within a FileSet using its ID. This will redirect to the file's download URL.

### Path Parameters

| Parameter   | Type   | Required | Description                                 |
|-------------|--------|----------|---------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File.  |
| `fileId`    | string | ✓ Yes    | The ID of the File to download.             |

### Query Parameters

_None_

### Request Body

_No request body needed for this GET request._

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://example.com/api/files/v1/filesets/fb3e8d22-d392-4a25-aae6-ed3e5e667530/files/da12c5ee-ca15-4623-a579-e329ac667c01/download', {
  method: 'GET'
})
.then(response => {
  if (response.status === 302) {
    // handle redirection or successful download initiation
  }
})
.catch(error => {
  console.error('Download failed:', error);
});
```

<!--
type: tab
title: Python
-->

```python
import requests

response = requests.get('https://example.com/api/files/v1/filesets/fb3e8d22-d392-4a25-aae6-ed3e5e667530/files/da12c5ee-ca15-4623-a579-e329ac667c01/download')

if response.status_code == 302:
    # handle redirection or successful download initiation
    download_url = response.headers.get('Location')
else:
    print(f"Failed to download file, status code: {response.status_code}")
```

<!--
type: tab
title: cURL
-->

```bash
curl -X GET 'https://example.com/api/files/v1/filesets/fb3e8d22-d392-4a25-aae6-ed3e5e667530/files/da12c5ee-ca15-4623-a579-e329ac667c01/download' -i
```

<!-- type: tab-end -->

### Response

**Status:** `302`  
**Description:** File download initiated successfully. The response will usually include a `Location` header for the download URL.

### Error Responses

- **400 Bad Request**: The request cannot be fulfilled due to bad syntax.
- **403 Forbidden**: You do not have permission to access the requested resource.
- **409 Conflict**: Conflict in the request, such as a file already being in use.
- **413 Payload Too Large**: The request is larger than the server is willing or able to process.

### JSON Parsing Error

In case of a JSON parsing error, a fallback validation will occur. Ensure that your request and response handling accommodates potential JSON parsing issues.

---

## Get File Content by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}/content`

Retrieve the content of a specific File within a FileSet using its ID. This endpoint requires a valid download token for authorization, which is generally obtained via a download endpoint and redirected here automatically.

### Path Parameters

| Parameter   | Type   | Required | Description                                   |
|-------------|--------|----------|-----------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File.    |
| `fileId`    | string | ✓ Yes    | The ID of the File to retrieve.               |

### Query Parameters

| Parameter | Type   | Required | Description                          |
|-----------|--------|----------|--------------------------------------|
| `token`   | string | ✓ Yes    | The download token for authorization.|

### Request Body

_Request body is not required._

### Request Example

<!-- type: tab title: JavaScript -->

```javascript
fetch('https://api.example.com/api/files/v1/filesets/6da7e619-46ff-4086-9f1c-c6ca7394dfc8/files/01cfcc03-3d7e-4bf2-82ea-4343c90b557e/content?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...', {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

<!-- type: tab-end -->

<!-- type: tab title: Python -->

```python
import requests

url = "https://api.example.com/api/files/v1/filesets/6da7e619-46ff-4086-9f1c-c6ca7394dfc8/files/01cfcc03-3d7e-4bf2-82ea-4343c90b557e/content"
params = {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
headers = {
    "Accept": "application/json"
}

response = requests.get(url, headers=headers, params=params)
print(response.json())
```

<!-- type: tab-end -->

<!-- type: tab title: cURL -->

```bash
curl -X GET "https://api.example.com/api/files/v1/filesets/6da7e619-46ff-4086-9f1c-c6ca7394dfc8/files/01cfcc03-3d7e-4bf2-82ea-4343c90b557e/content?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." -H "Accept: application/json"
```

<!-- type: tab-end -->

### Response

**Status:** `200`

- **Response Example:**
  ```json
  {
    "fileId": "01cfcc03-3d7e-4bf2-82ea-4343c90b557e",
    "fileSetId": "6da7e619-46ff-4086-9f1c-c6ca7394dfc8",
    "content": "File content as a string or in binary format depending on file type."
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

