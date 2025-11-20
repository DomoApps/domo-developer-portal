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

| Parameter    | Type    | Required | Description                                                  |
|--------------|---------|----------|--------------------------------------------------------------|
| `name`       | string  | ✔ Yes    | The name for the file set.                                   |
| `description`| string  | No       | A description for the file set.                              |
| `connector`  | string  | No       | The connector that powers the file set. Allowed values: `DOMO`, `CONFLUENCE`, `GITHUB`, `GOOGLE_DRIVE`, `S3` |
| `aiEnabled`  | boolean | No       | Indicates whether AI features are enabled for the file set.  |

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
import json

url = "/api/files/v1/filesets"
headers = {'Content-Type': 'application/json'}
payload = {
    "name": "Policies (2025)",
    "description": "Location for all new and updated policies for FY2025",
    "aiEnabled": False,
    "connector": "DOMO"
}

response = requests.post(url, headers=headers, data=json.dumps(payload))
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "/api/files/v1/filesets" \
     -H "Content-Type: application/json" \
     -d '{"name": "Policies (2025)", "description": "Location for all new and updated policies for FY2025", "aiEnabled": false, "connector": "DOMO"}'
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

- `id`: Unique identifier for the FileSet.
- `name`: Name of the FileSet.
- `description`: Description provided for the FileSet.
- `aiEnabled`: Boolean indicating if AI features are enabled.
- `indexStatus`: Current indexing status (if applicable).
- `connector`: Connector in use for the FileSet.
- `created`: Timestamp of creation.
- `createdBy`: ID of the user who created the FileSet.
- `updated`: Timestamp of the last update.
- `updatedBy`: ID of the user who last updated the FileSet.
- `owner`: ID of the owner user.
- `accountId`: ID of the account associated with the FileSet.
- `connectorContext`: Additional context for the connector (if any).
- `permission`: Permission level of the owner.
- `size`: Current size of the FileSet.
- `fileCount`: Total file count in the FileSet.

### Error Responses

| Status Code | Description        |
|-------------|--------------------|
| `400`       | Bad Request        |
| `403`       | Forbidden          |
| `409`       | Conflict           |
| `413`       | Payload Too Large  |

---

## Get a FileSet by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}`

Retrieve the details of a specific FileSet using its ID.

### Path Parameters

| Parameter   | Type   | Required | Description                          |
|-------------|--------|----------|--------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to retrieve.   |

### Query Parameters

- _None_

### Request Body

- _None_

### Request Example

<!-- type: tab - title: JavaScript -->

```javascript
// Perform a GET request to retrieve a FileSet using fetch
// The {fileSetId} in the endpoint should be replaced with the actual ID
// Include the Accept header to receive JSON response
fetch('https://api.example.com/api/files/v1/filesets/0671b867-86a2-4600-8826-2f115f8c3bb7', {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching the FileSet:', error));
```

<!-- type: tab-end -->

<!-- type: tab - title: Python -->

```python
# Perform a GET request to retrieve a FileSet using the requests library
# Ensure the Accept header is included to receive JSON response
import requests

response = requests.get('https://api.example.com/api/files/v1/filesets/0671b867-86a2-4600-8826-2f115f8c3bb7', headers={'Accept': 'application/json'})

if response.status_code == 200:
    print(response.json())
else:
    print(f'Error fetching the FileSet: {response.status_code}')
```

<!-- type: tab-end -->

<!-- type: tab - title: cURL -->

```bash
# Execute a cURL command to fetch a FileSet
# Include the -H flag to specify the Accept header for JSON response
curl -X GET 'https://api.example.com/api/files/v1/filesets/0671b867-86a2-4600-8826-2f115f8c3bb7' -H 'Accept: application/json'
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

- `id`: The unique identifier for the FileSet.
- `name`: Name of the FileSet.
- `description`: Description providing details about the FileSet.
- `aiEnabled`: Boolean indicating if AI is enabled for this FileSet.
- `indexStatus`: Status of the index, can be null if not applicable.
- `connector`: Indicates the connector used, for example, "DOMO".
- `created`: Timestamp when the FileSet was created.
- `createdBy`: Identifier of the user who created the FileSet.
- `updated`: The last update timestamp of the FileSet.
- `updatedBy`: Identifier of the user who last updated the FileSet.
- `owner`: Owner of the FileSet.
- `accountId`: Account ID associated with the FileSet.
- `connectorContext`: Additional context about the connector, potentially null.
- `permission`: Permission level of the user viewing the FileSet.
- `size`: Size of the FileSet, often zero initially.
- `fileCount`: Number of files contained within the FileSet.

### Error Responses

| Status Code | Description       |
|-------------|-------------------|
| `400`       | Bad Request.      |
| `403`       | Forbidden.        |
| `409`       | Conflict.         |
| `413`       | Payload Too Large.|

---

## Update an existing FileSet

**Method:** `POST`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}`

Update the details of an existing FileSet. Only fields that are not null in the request will be updated.

### Path Parameters

| Parameter   | Type   | Required | Description                           |
|-------------|--------|----------|---------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet to update.      |

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
const url = '/api/files/v1/filesets/d949d656-d48d-445a-86d0-8ccf0e84f2a0';
const body = {
  name: "Policies (FY25)",
  description: "Repository for new policies created ONLY in FY2025"
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
import requests

url = '/api/files/v1/filesets/d949d656-d48d-445a-86d0-8ccf0e84f2a0'
body = {
  "name": "Policies (FY25)",
  "description": "Repository for new policies created ONLY in FY2025"
}

response = requests.post(url, json=body, headers={'Content-Type': 'application/json'})

print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST '/api/files/v1/filesets/d949d656-d48d-445a-86d0-8ccf0e84f2a0' \
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

| Parameter  | Type   | Required | Description                     |
|------------|--------|----------|---------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to delete. |

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
fetch('/api/files/v1/filesets/8163cf31-608e-48aa-8e6f-6850bc541840', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
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
    'http://example.com/api/files/v1/filesets/8163cf31-608e-48aa-8e6f-6850bc541840',
    headers={'Content-Type': 'application/json'}
)
```

<!--
type: tab
title: cURL
-->

```bash
curl -X DELETE \
  'http://example.com/api/files/v1/filesets/8163cf31-608e-48aa-8e6f-6850bc541840' \
  -H 'Content-Type: application/json'
```

<!-- type: tab-end -->

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

## Query FileSet for File Contents

**Method:** `POST`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/query`

Query a specific FileSet for file contents related to the query criteria.

### Path Parameters

| Parameter   | Type   | Required | Description                       |
|-------------|--------|----------|-----------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to query.   |

### Query Parameters

_None_

### Request Body

Used to query a file set for the top K results based on the provided query.

| Parameter          | Type            | Required | Description                                                                     |
|--------------------|-----------------|----------|---------------------------------------------------------------------------------|
| `query`            | string          | ✔ Yes    | The query string to match against file contents within the file set.            |
| `topK`             | integer (int32) | No       | The number of top results to return based on the query match. Defaults to 1.    |
| `pathPrefixFilter` | string          | No       | An optional prefix filter for the file paths to narrow down the search results. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript fetch example
fetch('https://api.example.com/api/files/v1/filesets/71eedc0d-2563-455a-af06-3daf6e10def6/query', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: "benefit",
    pathPrefixFilter: "sample/directory/path",
    topK: 2
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

<!-- type: tab-end -->

<!--
type: tab
title: Python
-->

```python
# Python requests example
import requests

url = 'https://api.example.com/api/files/v1/filesets/71eedc0d-2563-455a-af06-3daf6e10def6/query'
headers = {
    'Content-Type': 'application/json'
}
data = {
    "query": "benefit",
    "pathPrefixFilter": "sample/directory/path",
    "topK": 2
}

response = requests.post(url, json=data, headers=headers)
print(response.json())
```

<!-- type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
# cURL example
curl -X POST https://api.example.com/api/files/v1/filesets/71eedc0d-2563-455a-af06-3daf6e10def6/query \
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

| Status Code | Description         |
|-------------|---------------------|
| `400`       | Bad Request         |
| `403`       | Forbidden           |
| `409`       | Conflict            |
| `413`       | Payload Too Large   |

---

## Update FileSet Owner

**Method:** `POST`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/ownership`

Update the owner of a specific FileSet.

### Path Parameters

| Parameter   | Type   | Required | Description                                                |
|-------------|--------|----------|------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet for which to update the owner.       |

### Query Parameters

_None_

### Request Body

Represents a request to transfer ownership of a file set.

Other users may be granted ownership level permissions, but only one user may be the sole owner of a file set.

| Parameter | Type           | Required | Description                                         |
|-----------|----------------|----------|-----------------------------------------------------|
| `userId`  | integer (int64) | ✓ Yes    | The ID of the user that will assume ownership.      |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://api.example.com/api/files/v1/filesets/26414aef-ff12-4f51-ab6a-b7b2f613ec7d/ownership', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    userId: 109
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
import json

url = "https://api.example.com/api/files/v1/filesets/26414aef-ff12-4f51-ab6a-b7b2f613ec7d/ownership"
headers = {
    "Content-Type": "application/json"
}
payload = {
    "userId": 109
}

response = requests.post(url, headers=headers, data=json.dumps(payload))
print(response.json())
```

<!-- type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
curl -X POST https://api.example.com/api/files/v1/filesets/26414aef-ff12-4f51-ab6a-b7b2f613ec7d/ownership \
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

| Status Code | Description          |
|-------------|----------------------|
| `400`       | Bad Request          |
| `403`       | Forbidden            |
| `409`       | Conflict             |
| `413`       | Payload Too Large    |

---

## Create a new File or Directory

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files`

Create a new File or Directory within a specified FileSet. If a file already exists at the specified path, it will attempt to overwrite it if the client has permission. If a Directory already exists at the specified path, it will return that Directory.

### Path Parameters

| Parameter  | Type   | Required | Description                                             |
|------------|--------|----------|---------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet in which to create the File.      |

### Query Parameters

_None_

### Request Body

Represents a request to upload a file or create a directory.

| Parameter      | Type             | Required | Description                                                                                                     |
|----------------|------------------|----------|-----------------------------------------------------------------------------------------------------------------|
| `file`         | string (binary)  | No       | The file to be uploaded. Leave null if creating a directory.                                                     |
| `directoryPath`| string           | No       | The directory path of the uploaded file, or the path of the created directory if no file is provided.           |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const fetch = require('node-fetch');
const data = {
  file: "(binary data)",
  directoryPath: "sample/directory/path"
};

fetch('https://api.example.com/api/files/v1/filesets/c74ab7cb-5c4e-4761-be03-320a6d446030/files', {
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

url = "https://api.example.com/api/files/v1/filesets/c74ab7cb-5c4e-4761-be03-320a6d446030/files"
headers = {'Content-Type': 'application/json'}
data = {
    "file": "(binary data)",
    "directoryPath": "sample/directory/path"
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "https://api.example.com/api/files/v1/filesets/c74ab7cb-5c4e-4761-be03-320a6d446030/files" \
    -H "Content-Type: application/json" \
    -d '{"file": "(binary data)", "directoryPath": "sample/directory/path"}'
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

- `id`: The unique identifier of the created file or directory.
- `path`: The path where the file or directory was created.
- `name`: The name of the file or directory.
- `size`: The size of the file; null if it is a directory.
- `created`: The timestamp when the file or directory was created.
- `createdBy`: The ID of the user who created the file or directory.
- `fileType`: The type, either 'DIRECTORY' or 'FILE'.

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

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fileSetId` | string | ✓ Yes | The ID of the FileSet to search within. |

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `directoryPath` | string | No | The path to the directory within the FileSet, if applicable. |
| `immediateChildren` | boolean | No | Whether to list only immediate children of the specified directory. (Default: `False`) |
| `limit` | integer (int32) | No | The maximum number of Files to return. (Default: `100`) |
| `next` | string | No | The pagination token for the next set of results. |

### Request Body

Request object for searching with specific filters and sorting options.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fieldSort` | array | No | A list of field sort criteria to apply to the search. |
| `filters` | array | No | A list of filters to apply to the search. |
| `dateFilters` | array | No | A list of date filters to apply to the search. |


### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Generate a realistic fetch/axios example using the request body example
// Use the actual endpoint path with any path parameters filled in
// Include proper headers (Content-Type: application/json if body exists)
fetch('/api/files/v1/filesets/dc469a2a-daf3-4efc-b152-f21669325e0b/files/search', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    fieldSort: [
      {
        field: "created",
        order: "ASC"
      }
    ],
    filters: [
      {
        field: "name",
        value: ["paid"],
        not: false,
        operator: "LIKE"
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

url = '/api/files/v1/filesets/dc469a2a-daf3-4efc-b152-f21669325e0b/files/search'
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
# Generate a realistic cURL command
# Use the actual endpoint path
# Include -H headers and -d data as appropriate
curl -X POST /api/files/v1/filesets/dc469a2a-daf3-4efc-b152-f21669325e0b/files/search \
-H "Content-Type: application/json" \
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
      "value": ["paid"],
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

### Error Responses

| Status Code | Description |
|-------------|-------------|
| `400` | Bad Request |
| `403` | Forbidden |
| `409` | Conflict |
| `413` | Payload Too Large |

---

## Initiate a split file upload.

**Method:** `POST`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart`

Initiates a split file upload process for creating a new file within a FileSet.

### Path Parameters

| Parameter     | Type   | Required | Description                                     |
|---------------|--------|----------|-------------------------------------------------|
| `fileSetId`   | string | ✔ Yes    | The ID of the FileSet in which to create the File. |

### Query Parameters

_None_

### Request Body

Represents a request to initiate a split file upload.

| Parameter | Type   | Required | Description                                                   |
|-----------|--------|----------|---------------------------------------------------------------|
| `path`    | string | No       | The full path destination for the file once the upload is finalized. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const fetch = require('node-fetch');

fetch('https://api.example.com/api/files/v1/filesets/acd423c4-5f19-4643-a61e-d2be9a765513/files/multipart', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "path": "example/path/to/resource"
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

url = "https://api.example.com/api/files/v1/filesets/acd423c4-5f19-4643-a61e-d2be9a765513/files/multipart"
payload = {
    "path": "example/path/to/resource"
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
curl -X POST "https://api.example.com/api/files/v1/filesets/acd423c4-5f19-4643-a61e-d2be9a765513/files/multipart" \
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

| Status Code | Description                                                              |
|-------------|--------------------------------------------------------------------------|
| `400`       | Bad Request                                                              |
| `403`       | Forbidden                                                                |
| `409`       | Conflict: File already exists at the specified path.                     |
| `413`       | Payload Too Large                                                        |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled. |

---

## Submit a part of a file for upload.

**Method:** `POST`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/part/{partNumber}`

Allows submitting a file in stages to create a new file within a FileSet.

### Path Parameters

| Parameter    | Type            | Required | Description                                                        |
|--------------|-----------------|----------|--------------------------------------------------------------------|
| `fileSetId`  | string          | ✓ Yes    | The ID of the FileSet in which to the file is being uploaded.      |
| `fileId`     | string          | ✓ Yes    | The ID of the file being uploaded in parts.                        |
| `partNumber` | integer (int64) | ✓ Yes    | The part number of this file segment. Must be non-negative.        |

### Query Parameters

_None_

### Request Body

Represents a request to upload a part of a file in a split file upload operation.

| Parameter | Type            | Required | Description                                                              |
|-----------|-----------------|----------|--------------------------------------------------------------------------|
| `part`    | string (binary) | No       | The full path destination for the file once the upload is complete.      |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('/api/files/v1/filesets/dcca0ec4-ce49-4a4a-9486-d284d4b37cc4/files/multipart/58d8ab18-080d-448e-bcbf-2231d2d2843e/part/1234567890', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    part: (binary data of the file)
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

url = 'http://api.example.com/api/files/v1/filesets/dcca0ec4-ce49-4a4a-9486-d284d4b37cc4/files/multipart/58d8ab18-080d-448e-bcbf-2231d2d2843e/part/1234567890'
headers = {
    'Content-Type': 'application/json'
}
data = {
    'part': '(binary data of the file)'
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
curl -X POST 'http://api.example.com/api/files/v1/filesets/dcca0ec4-ce49-4a4a-9486-d284d4b37cc4/files/multipart/58d8ab18-080d-448e-bcbf-2231d2d2843e/part/1234567890' \
-H 'Content-Type: application/json' \
-d '{
  "part": "(binary data of the file)"
}'
```

<!--
type: tab-end
-->

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

| Status Code | Description                                                                                          |
|-------------|------------------------------------------------------------------------------------------------------|
| `400`       | Split file upload part did not match previous data segments.                                         |
| `403`       | Forbidden                                                                                            |
| `404`       | An "initiate split file" request was not performed prior to this request for the given file ID or has already been finalized or aborted. |
| `409`       | Conflict                                                                                             |
| `413`       | Payload Too Large                                                                                    |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled.                             |

---

## Finalize a split file upload.

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/finalize`

Declares that all parts of a split file upload have been submitted and the file can be assembled.

### Path Parameters

| Parameter  | Type   | Required | Description                                                |
|------------|--------|----------|------------------------------------------------------------|
| `fileSetId`| string | ✓ Yes    | The ID of the FileSet in which the file has been uploaded. |
| `fileId`   | string | ✓ Yes    | The ID of the file whose parts have been uploaded.         |

### Query Parameters

_None_

### Request Body

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// The finalization POST request example using fetch
fetch("https://api.example.com/api/files/v1/filesets/ae4b3c53-ae9a-440c-882d-e593ebc39b47/files/multipart/995ed0e9-03b9-49a9-91fb-d05a971cfcb6/finalize", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
```

<!--
type: tab
title: Python
-->

```python
import requests

url = "https://api.example.com/api/files/v1/filesets/ae4b3c53-ae9a-440c-882d-e593ebc39b47/files/multipart/995ed0e9-03b9-49a9-91fb-d05a971cfcb6/finalize"

headers = {
  "Content-Type": "application/json"
}

response = requests.post(url, headers=headers)

print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "https://api.example.com/api/files/v1/filesets/ae4b3c53-ae9a-440c-882d-e593ebc39b47/files/multipart/995ed0e9-03b9-49a9-91fb-d05a971cfcb6/finalize" \
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
}
```

### Error Responses

| Status Code | Description |
|-------------|-------------|
| `400`       | Bad Request |
| `403`       | Forbidden |
| `404`       | An "initiate split file" request was not performed prior to this request for the given file ID and/or has not been uploaded any parts, or has already been finalized/aborted. |
| `409`       | Conflict: File already exists at the declared path. |
| `413`       | Payload Too Large |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled. |

---

## Abort a split file upload.

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/abort`

Aborts an ongoing split file upload process, discarding all uploaded parts.

### Path Parameters

| Parameter   | Type   | Required | Description                                                             |
|-------------|--------|----------|-------------------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet in which the file was being uploaded.             |
| `fileId`    | string | ✓ Yes    | The ID of the file whose upload is to be aborted.                       |

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
// Generate a realistic fetch/axios example using the request body example
// Use the actual endpoint path with any path parameters filled in
// Include proper headers (Content-Type: application/json if body exists)
fetch('/api/files/v1/filesets/4d4be4b5-bc9e-4e2c-8d7b-9640f33d9ce2/files/multipart/76b3f517-9096-4e80-8fd4-930afed3b789/abort', {
  method: 'POST',
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
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
import requests

response = requests.post('/api/files/v1/filesets/4d4be4b5-bc9e-4e2c-8d7b-9640f33d9ce2/files/multipart/76b3f517-9096-4e80-8fd4-930afed3b789/abort')
print(response.json())
```

<!-- type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
# Generate a realistic cURL command
# Use the actual endpoint path
# Include -H headers and -d data as appropriate
curl -X POST "/api/files/v1/filesets/4d4be4b5-bc9e-4e2c-8d7b-9640f33d9ce2/files/multipart/76b3f517-9096-4e80-8fd4-930afed3b789/abort"
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
```

### Error Responses

| Status Code | Description                                                                                       |
|-------------|---------------------------------------------------------------------------------------------------|
| `400`       | Bad Request                                                                                       |
| `403`       | Forbidden                                                                                         |
| `404`       | An "initiate split file" request was not performed prior to this request for the given file ID or has already been finalized or aborted. |
| `409`       | Conflict                                                                                          |
| `413`       | Payload Too Large                                                                                 |

---

## Get FileSet Access Permissions

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/access`

Retrieve the access permissions for a specific FileSet.

### Path Parameters

| Parameter   | Type   | Required | Description                                                         |
|-------------|--------|----------|---------------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet for which to retrieve access information.     |

### Query Parameters

_None_

### Request Body

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://api.example.com/api/files/v1/filesets/4404e230-0769-44fe-a9ca-629b2c7cb55a/access', {
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
import requests

response = requests.get(
  'https://api.example.com/api/files/v1/filesets/4404e230-0769-44fe-a9ca-629b2c7cb55a/access',
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
curl -X GET 'https://api.example.com/api/files/v1/filesets/4404e230-0769-44fe-a9ca-629b2c7cb55a/access' \
  -H 'Content-Type: application/json'
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

- `fileSetId`: The unique identifier of the FileSet for which access permissions are listed.
- `fileSetAccess`: A list of access permissions for entities.
  - `entityId`: The identifier of the entity (e.g., user or group) with access.
  - `entityType`: The type of entity (e.g., USER, GROUP) that has access.
  - `permission`: The level of access granted (e.g., OWNER, READ, WRITE).

### Error Responses

| Status Code | Description        |
|-------------|--------------------|
| `400`       | Bad Request        |
| `403`       | Forbidden          |
| `409`       | Conflict           |
| `413`       | Payload Too Large  |

---

## Update FileSet Access Permissions

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/access`

Update the relevant access permissions for a specific FileSet.

### Path Parameters

| Parameter   | Type   | Required | Description                                                          |
|-------------|--------|----------|----------------------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet for which to update access permissions.        |

### Query Parameters

_None_

### Request Body

Request object for updating access permissions to a file set.

Only the permissions that are explicitly set in the request will be updated.

| Parameter        | Type  | Required | Description                                         |
|------------------|-------|----------|-----------------------------------------------------|
| `fileSetAccess`  | array | ✔ Yes    | The access permissions for the file set.            |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const fetch = require('node-fetch');

const url = 'https://api.example.com/api/files/v1/filesets/26cb82a2-7f58-4111-bf5f-32143f305d54/access';
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    fileSetAccess: [
      {
        entityId: 42,
        entityType: 'GROUP',
        permission: 'EDIT'
      }
    ]
  })
};

fetch(url, options)
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

url = 'https://api.example.com/api/files/v1/filesets/26cb82a2-7f58-4111-bf5f-32143f305d54/access'
headers = {
    'Content-Type': 'application/json'
}
data = {
    'fileSetAccess': [
        {
            'entityId': 42,
            'entityType': 'GROUP',
            'permission': 'EDIT'
        }
    ]
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
curl -X POST https://api.example.com/api/files/v1/filesets/26cb82a2-7f58-4111-bf5f-32143f305d54/access \
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

### Error Responses

| Status Code | Description     |
|-------------|-----------------|
| `400`       | Bad Request     |
| `403`       | Forbidden       |
| `409`       | Conflict        |
| `413`       | Payload Too Large |

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

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://api.example.com/api/files/v1/filesets/search?limit=10&offset=0', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    fieldSort: [{ field: "name", order: "ASC" }],
    filters: [{ field: "owner", value: [27], not: false, operator: "EQUALS" }],
    dateFilters: [{ field: "created", start: "2025-05-12T23:30:00Z", not: false, end: null }]
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

url = 'https://api.example.com/api/files/v1/filesets/search'
params = {
    'limit': 10,
    'offset': 0
}
headers = {
    'Content-Type': 'application/json'
}
data = {
    "fieldSort": [{"field": "name", "order": "ASC"}],
    "filters": [{"field": "owner", "value": [27], "not": False, "operator": "EQUALS"}],
    "dateFilters": [{"field": "created", "start": "2025-05-12T23:30:00Z", "not": False, "end": None}]
}

response = requests.post(url, headers=headers, json=data, params=params)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST 'https://api.example.com/api/files/v1/filesets/search?limit=10&offset=0' \
-H 'Content-Type: application/json' \
-d '{
  "fieldSort": [{"field": "name", "order": "ASC"}],
  "filters": [{"field": "owner", "value": [27], "not": false, "operator": "EQUALS"}],
  "dateFilters": [{"field": "created", "start": "2025-05-12T23:30:00Z", "not": false, "end": null}]
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

| Parameter   | Type   | Required | Description                                                  |
|-------------|--------|----------|--------------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet for which to retrieve statistics.      |

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
const axios = require('axios');

axios.get('https://api.example.com/api/files/v1/filesets/7bdbe140-1ca0-4e9d-bdb8-83baa459a67c/stats')
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

response = requests.get('https://api.example.com/api/files/v1/filesets/7bdbe140-1ca0-4e9d-bdb8-83baa459a67c/stats')

if response.status_code == 200:
    print(response.json())
else:
    print(f"Error: {response.status_code}")
```

<!--
type: tab
title: cURL
-->

```bash
curl -X GET 'https://api.example.com/api/files/v1/filesets/7bdbe140-1ca0-4e9d-bdb8-83baa459a67c/stats'
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

### Error Responses

| Status Code | Description         |
|-------------|---------------------|
| `400`       | Bad Request         |
| `403`       | Forbidden           |
| `409`       | Conflict            |
| `413`       | Payload Too Large   |

---

## Get File or Directory by Path

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/path`

Retrieve a File or Directory within a FileSet using its path.

### Path Parameters

| Parameter   | Type   | Required | Description               |
|-------------|--------|----------|---------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet.    |

### Query Parameters

| Parameter | Type   | Required | Description                                                  |
|-----------|--------|----------|--------------------------------------------------------------|
| `path`    | string | ✓ Yes    | The path to the File or Directory within the FileSet.       |

### Request Body

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const fetch = require('node-fetch');

const fileSetId = '4747879e-3cac-4fcf-beb3-96bbb7dff5a8';
const path = encodeURIComponent('example/path/to/resource');
const url = `https://api.yourservice.com/api/files/v1/filesets/${fileSetId}/path?path=${path}`;

fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
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

file_set_id = '4747879e-3cac-4fcf-beb3-96bbb7dff5a8'
path = 'example/path/to/resource'
url = f'https://api.yourservice.com/api/files/v1/filesets/{file_set_id}/path?path={path}'

response = requests.get(url, headers={'Content-Type': 'application/json'})

if response.status_code == 200:
    print(response.json())
else:
    print(f'Error: {response.status_code}')
```

<!-- type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
curl -X GET "https://api.yourservice.com/api/files/v1/filesets/4747879e-3cac-4fcf-beb3-96bbb7dff5a8/path?path=example/path/to/resource" -H "Content-Type: application/json"
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

- `id`: Unique identifier for the file or directory.
- `path`: The directory path where the file is located.
- `name`: The name of the file.
- `fileType`: Type of the file (e.g., DOCUMENT).
- `contentType`: The MIME type of the file.
- `size`: The size of the file in bytes.
- `hash`: The hash of the file content.
- `hashAlgorithm`: The algorithm used to compute the file hash.
- `downloadUrl`: URL to download the file (empty if not applicable).
- `created`: ISO timestamp of when the file was created.
- `createdBy`: Identifier for the user who created the file.
- `connectorKey`: (Nullable) Reference to a connector if applicable.
- `indexStatus`: (Nullable) Index status if indexing is applied.
- `indexReason`: (Nullable) The reason for the index status.

### Error Responses

| Status Code | Description         |
|-------------|---------------------|
| `400`       | Bad Request         |
| `403`       | Forbidden           |
| `409`       | Conflict            |
| `413`       | Payload Too Large   |

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

| Parameter | Type   | Required | Description                                                                                       |
|-----------|--------|----------|---------------------------------------------------------------------------------------------------|
| `path`    | string | ✔ Yes    | The path to the File or Directory to delete. If a Directory is specified, it and its children will be deleted. |

### Request Body

_None_

<!--
type: tab
title: JavaScript
-->

```javascript
// Generate a realistic fetch/axios example using the request body example
// Use the actual endpoint path with any path parameters filled in
// Include proper headers (Content-Type: application/json if body exists)
fetch("https://api.example.com/api/files/v1/filesets/8111e565-f4a5-4622-a72e-8dc63effc68d/path?path=example/path/to/resource", {
  method: "DELETE",
}).then(response => {
  if (response.status === 204) {
    console.log("File or directory deleted successfully.");
  } else {
    console.error("An error occurred:", response.status);
  }
});
```

<!-- type: tab-end -->

<!--
type: tab
title: Python
-->

```python
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
import requests

response = requests.delete(
    "https://api.example.com/api/files/v1/filesets/8111e565-f4a5-4622-a72e-8dc63effc68d/path",
    params={"path": "example/path/to/resource"}
)

if response.status_code == 204:
    print("File or directory deleted successfully.")
else:
    print("An error occurred:", response.status_code)
```

<!-- type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
# Generate a realistic cURL command
# Use the actual endpoint path
# Include -H headers and -d data as appropriate
curl -X DELETE "https://api.example.com/api/files/v1/filesets/8111e565-f4a5-4622-a72e-8dc63effc68d/path?path=example/path/to/resource"
```

<!-- type: tab-end -->

### Response

**Status:** `204`

```json
{}
```

### Error Responses

| Status Code | Description          |
|-------------|----------------------|
| `400`       | Bad Request          |
| `403`       | Forbidden            |
| `409`       | Conflict             |
| `413`       | Payload Too Large    |

---

## Download a File by Path

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/path/download`

Download the contents of a specific File within a FileSet using its path. This will redirect to the file's download URL.

### Path Parameters

| Parameter    | Type   | Required | Description                                    |
|--------------|--------|----------|------------------------------------------------|
| `fileSetId`  | string | ✓ Yes    | The ID of the FileSet containing the File.     |

### Query Parameters

| Parameter | Type   | Required | Description                                  |
|-----------|--------|----------|----------------------------------------------|
| `path`    | string | ✓ Yes    | The path of the File to download within the FileSet. |

### Request Body

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://api.yourdomain.com/api/files/v1/filesets/8c4afa5a-51b5-466d-a294-1f93e98942c8/path/download?path=example/path/to/resource', {
  method: 'GET'
})
  .then(response => response.blob())
  .then(blob => {
    // Handle the blob to download the file
  })
  .catch(error => {
    console.error('Error downloading file:', error);
  });
```

<!--
type: tab
title: Python
-->

```python
import requests

response = requests.get(
    'https://api.yourdomain.com/api/files/v1/filesets/8c4afa5a-51b5-466d-a294-1f93e98942c8/path/download',
    params={'path': 'example/path/to/resource'}
)

if response.status_code == 200:
    with open('downloaded_file', 'wb') as f:
        f.write(response.content)
else:
    print('Error downloading file:', response.status_code)
```

<!--
type: tab
title: cURL
-->

```bash
curl -X GET "https://api.yourdomain.com/api/files/v1/filesets/8c4afa5a-51b5-466d-a294-1f93e98942c8/path/download?path=example/path/to/resource" -o downloaded_file
```

<!-- type: tab-end -->

### Response

**Status:** `200`

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

## Get a File or Directory by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}`

Retrieve a specific File or Directory within a FileSet using its ID.

### Path Parameters

| Parameter   | Type   | Required | Description                                                              |
|-------------|--------|----------|--------------------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File or Directory.                  |
| `fileId`    | string | ✓ Yes    | The ID of the File or Directory to retrieve.                             |

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
fetch('https://api.example.com/api/files/v1/filesets/9c586b5c-518b-4369-ad6a-2d7344eed083/files/0c36b35b-cf0a-4d47-8a7e-fbdb9c724ba2', {
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
type: tab-end -->

<!--
type: tab
title: Python
-->

```python
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
import requests

url = 'https://api.example.com/api/files/v1/filesets/9c586b5c-518b-4369-ad6a-2d7344eed083/files/0c36b35b-cf0a-4d47-8a7e-fbdb9c724ba2'
headers = {
    'Content-Type': 'application/json'
}

response = requests.get(url, headers=headers)

print(response.json())
```

<!--
type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
# Generate a realistic cURL command
# Use the actual endpoint path
# Include -H headers and -d data as appropriate
curl -X GET 'https://api.example.com/api/files/v1/filesets/9c586b5c-518b-4369-ad6a-2d7344eed083/files/0c36b35b-cf0a-4d47-8a7e-fbdb9c724ba2' -H 'Content-Type: application/json'
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

- `id`: The unique identifier for the file or directory.
- `path`: The file path of the retrieved item.
- `name`: The name of the file or directory.
- `fileType`: The type of file, such as "DOCUMENT".
- `contentType`: The MIME type of the file.
- `size`: The size of the file in bytes.
- `hash`: The SHA-256 hash of the file.
- `hashAlgorithm`: The algorithm used for hashing.
- `downloadUrl`: URL for downloading the file.
- `created`: Timestamp when the file or directory was created.
- `createdBy`: ID of the user who created the file or directory.
- `connectorKey`: Key for any related connector, if applicable.
- `indexStatus`: Status of the indexing process, if applicable.
- `indexReason`: Reason for the current index status, if applicable.

### Error Responses

| Status Code | Description       |
|-------------|-------------------|
| `400`       | Bad Request       |
| `403`       | Forbidden         |
| `409`       | Conflict          |
| `413`       | Payload Too Large |

---

## Delete a File or Directory by ID

**Method:** `DELETE`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}`

Delete a specific File or Directory within a FileSet using its ID.

### Path Parameters

| Parameter  | Type   | Required | Description                                                                                                                                 |
|------------|--------|----------|---------------------------------------------------------------------------------------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File.                                                                                                  |
| `fileId`    | string | ✓ Yes    | The ID of the File or Directory to delete. If a Directory is specified, it and its children will be deleted.                               |

### Query Parameters

_None_

### Request Body

_No request body is needed for a DELETE request._

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript example using fetch
fetch('https://api.example.com/api/files/v1/filesets/20ac81c2-0018-40b8-8590-748a9b2248c3/files/12160194-4de8-4375-9e33-fd95a13c2388', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
}).then(response => {
  if (response.status === 204) {
    console.log('File or directory deleted successfully.');
  }
});
```

<!--
type: tab
title: Python
-->

```python
# Python example using requests
import requests

url = 'https://api.example.com/api/files/v1/filesets/20ac81c2-0018-40b8-8590-748a9b2248c3/files/12160194-4de8-4375-9e33-fd95a13c2388'
headers = {
    'Content-Type': 'application/json'
}

response = requests.delete(url, headers=headers)

if response.status_code == 204:
    print('File or directory deleted successfully.')
```

<!--
type: tab
title: cURL
-->

```bash
# cURL example
curl -X DELETE 'https://api.example.com/api/files/v1/filesets/20ac81c2-0018-40b8-8590-748a9b2248c3/files/12160194-4de8-4375-9e33-fd95a13c2388' \
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

## Download a File by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}/download`

Download the contents of a specific File within a FileSet using its ID. This will redirect to the file's download URL.

### Path Parameters

| Parameter  | Type   | Required | Description                              |
|------------|--------|----------|------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File. |
| `fileId`    | string | ✓ Yes    | The ID of the File to download.          |

### Query Parameters

_None_

### Request Body

_N/A_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Generate a realistic fetch/axios example using the request body example
// Use the actual endpoint path with any path parameters filled in
// Include proper headers (Content-Type: application/json if body exists)
fetch('https://example.com/api/files/v1/filesets/d2e05622-7685-4a91-b9d7-722c5a2437c9/files/d6625553-e556-4e4c-a5cf-536be852653e/download', {
  method: 'GET'
})
.then(response => {
  if (response.redirected) {
    window.location.href = response.url;
  }
});
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

response = requests.get('https://example.com/api/files/v1/filesets/d2e05622-7685-4a91-b9d7-722c5a2437c9/files/d6625553-e556-4e4c-a5cf-536be852653e/download')

if response.history:
    for resp in response.history:
        print(f"Redirected: {resp.url}")
else:
    with open('downloaded_file', 'wb') as f:
        f.write(response.content)
```

<!--
type: tab
title: cURL
-->

```bash
# Generate a realistic cURL command
# Use the actual endpoint path
# Include -H headers and -d data as appropriate
curl -L 'https://example.com/api/files/v1/filesets/d2e05622-7685-4a91-b9d7-722c5a2437c9/files/d6625553-e556-4e4c-a5cf-536be852653e/download'
```

<!-- type: tab-end -->

### Response

**Status:** `200`

```json
{}
```

### Error Responses

| Status Code | Description                          |
|-------------|--------------------------------------|
| `302`       | File download initiated successfully |
| `400`       | Bad Request                          |
| `403`       | Forbidden                            |
| `409`       | Conflict                             |
| `413`       | Payload Too Large                    |

---

## Get File Content by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}/content`

Retrieve the content of a specific file within a file set using its ID. This endpoint requires a valid download token for authorization, which is generally obtained via a download endpoint and redirected here automatically.

### Path Parameters

| Parameter  | Type   | Required | Description                                    |
|------------|--------|----------|------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the file set containing the file.     |
| `fileId`    | string | ✔ Yes    | The ID of the file to retrieve.                |

### Query Parameters

| Parameter | Type   | Required | Description                          |
|-----------|--------|----------|--------------------------------------|
| `token`   | string | ✔ Yes    | The download token for authorization.|

### Request Body

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Example of fetching file content using fetch
const fetchFileContent = async () => {
  const fileSetId = 'd5ea9113-3966-4e19-8a2c-e3689ec77af9';
  const fileId = '36b8b3b5-ad31-4f45-a641-4538260d1cf6';
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';

  try {
    const response = await fetch(`https://api.example.com/api/files/v1/filesets/${fileSetId}/files/${fileId}/content?token=${token}`);
    if (response.ok) {
      const data = await response.blob();
      console.log('File content retrieved successfully.');
      // Handle file content
    } else {
      console.error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

fetchFileContent();
```

<!--
type: tab
title: Python
-->

```python
# Example of fetching file content using requests
import requests

fileSetId = 'd5ea9113-3966-4e19-8a2c-e3689ec77af9'
fileId = '36b8b3b5-ad31-4f45-a641-4538260d1cf6'
token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'

url = f'https://api.example.com/api/files/v1/filesets/{fileSetId}/files/{fileId}/content'
params = {'token': token}

response = requests.get(url, params=params)

if response.status_code == 200:
    print('File content retrieved successfully.')
    # Handle file content
else:
    print(f'Error: {response.status_code} - {response.text}')
```

<!--
type: tab
title: cURL
-->

```bash
# Example of fetching file content using cURL
curl -X GET "https://api.example.com/api/files/v1/filesets/d5ea9113-3966-4e19-8a2c-e3689ec77af9/files/36b8b3b5-ad31-4f45-a641-4538260d1cf6/content?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

<!-- type: tab-end -->

### Response

**Status:** `200`

**Response Body:**  
The response body contains the actual content of the file as a binary data stream. Here is an example of part of a JSON metadata response indicating success:

```json
{
  "status": "success",
  "contentLength": 12345,
  "fileType": "application/pdf"
}
```

### Error Responses

| Status Code | Description                                                                                                           |
|-------------|-----------------------------------------------------------------------------------------------------------------------|
| `400`       | Bad Request. Likely due to invalid or missing parameters.                                                             |
| `403`       | Forbidden. Indicates the token is invalid or access is denied.                                                        |
| `409`       | Conflict. A potential issue regarding the state of the file that prevents the operation from completing.               |
| `413`       | Payload Too Large. The request payload is larger than what the server can handle, usually due to excessive file size. |

---

