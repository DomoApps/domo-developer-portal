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

| Parameter    | Type    | Required | Description                                        |
|--------------|---------|----------|----------------------------------------------------|
| `name`       | string  | ✔ Yes    | The name for the file set.                         |
| `description`| string  | No       | A description for the file set.                    |
| `connector`  | string  | No       | The connector that powers the file set. Allowed values: `DOMO`, `CONFLUENCE`, `GITHUB`, `GOOGLE_DRIVE`, `S3` |
| `aiEnabled`  | boolean | No       | Indicates whether AI features are enabled for the file set. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: "Policies (2025)",
    description: "Location for all new and updated policies for FY2025",
    aiEnabled: false,
    connector: "DOMO"
  })
};

fetch('https://example.com/api/files/v1/filesets', requestOptions)
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
import json

url = "https://example.com/api/files/v1/filesets"
payload = {
    "name": "Policies (2025)",
    "description": "Location for all new and updated policies for FY2025",
    "aiEnabled": False,
    "connector": "DOMO"
}

headers = {
    "Content-Type": "application/json"
}

response = requests.post(url, data=json.dumps(payload), headers=headers)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST https://example.com/api/files/v1/filesets \
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

- `id`: Unique identifier for the FileSet.
- `name`: Name of the FileSet.
- `description`: Descriptive text for the FileSet.
- `aiEnabled`: Boolean indicating if AI features are enabled.
- `indexStatus`: Status of the indexing process (null if not applicable).
- `connector`: The type of connector used.
- `created`: Timestamp of when the FileSet was created.
- `createdBy`: ID of the user who created the FileSet.
- `updated`: Timestamp of the last update.
- `updatedBy`: ID of the user who last updated the FileSet.
- `owner`: Owner ID of the FileSet.
- `accountId`: Account ID associated with the FileSet.
- `connectorContext`: Context of the connector (null if not applicable).
- `permission`: Permission level of the user.
- `size`: Size of the FileSet.
- `fileCount`: Number of files in the FileSet.

### Error Responses

| Status Code | Description          |
|-------------|----------------------|
| `400`       | Bad Request          |
| `403`       | Forbidden            |
| `409`       | Conflict             |
| `413`       | Payload Too Large    |

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

_None_

### Request Body


### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const axios = require('axios');

axios.get('https://api.example.com/api/files/v1/filesets/a29b6cee-d361-4bde-913f-9c811e704fde', {
  headers: {
    'Content-Type': 'application/json'
  }
}).then(response => {
  console.log(response.data);
}).catch(error => {
  console.error(error);
});
```

<!--
type: tab
title: Python
-->

```python
import requests

response = requests.get(
    'https://api.example.com/api/files/v1/filesets/a29b6cee-d361-4bde-913f-9c811e704fde',
    headers={
        'Content-Type': 'application/json'
    }
)

if response.ok:
    print(response.json())
else:
    print(response.status_code, response.text)
```

<!--
type: tab
title: cURL
-->

```bash
curl -X GET 'https://api.example.com/api/files/v1/filesets/a29b6cee-d361-4bde-913f-9c811e704fde' \
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
```

- `id`: The unique identifier for the FileSet.
- `name`: The name of the FileSet.
- `description`: Description or purpose of the FileSet.
- `aiEnabled`: Indicates if AI features are enabled.
- `indexStatus`: Current index status of the FileSet.
- `connector`: Connector type used for the FileSet.
- `created`: The date and time when the FileSet was created.
- `createdBy`: User ID of who created the FileSet.
- `updated`: The date and time of the last update to the FileSet.
- `updatedBy`: User ID of who last updated the FileSet.
- `owner`: Owner ID of the FileSet.
- `accountId`: Associated account ID.
- `connectorContext`: Context of the connector if any.
- `permission`: Permission level of the FileSet.
- `size`: Size of the FileSet.
- `fileCount`: Number of files in the FileSet.

### Error Responses

| Status Code | Description      |
|-------------|------------------|
| `400`       | Bad Request      |
| `403`       | Forbidden        |
| `409`       | Conflict         |
| `413`       | Payload Too Large|

---

## Update an existing FileSet

**Method:** `POST`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}`

Update the details of an existing FileSet. Only fields that are not null in the request will be updated.

### Path Parameters

| Parameter   | Type   | Required | Description                         |
|-------------|--------|----------|-------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to update.    |

### Query Parameters

_None_

### Request Body

Represents a request to update a file set. At least one of the fields must be provided to update the file set.

| Parameter    | Type    | Required | Description                                                                 |
|--------------|---------|----------|-----------------------------------------------------------------------------|
| `name`       | string  | No       | The name with which to update the file set's name. If not provided, the name will remain unchanged. |
| `description`| string  | No       | Optional description with which to update the file set's description. If not provided, the description will remain unchanged. |
| `aiEnabled`  | boolean | No       | Optional flag to enable or disable AI features for the file set.             |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Generate a realistic fetch/axios example using the request body example
// Use the actual endpoint path with any path parameters filled in
// Include proper headers (Content-Type: application/json if body exists)
fetch('https://yourapi.com/api/files/v1/filesets/cec8f670-5cb9-447a-b4d7-67078807b938', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: "Policies (FY25)",
    description: "Repository for new policies created ONLY in FY2025"
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
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

url = "https://yourapi.com/api/files/v1/filesets/cec8f670-5cb9-447a-b4d7-67078807b938"
payload = {
    "name": "Policies (FY25)",
    "description": "Repository for new policies created ONLY in FY2025"
}
headers = {
    'Content-Type': 'application/json'
}

response = requests.post(url, json=payload, headers=headers)
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
curl -X POST "https://yourapi.com/api/files/v1/filesets/cec8f670-5cb9-447a-b4d7-67078807b938" \
-H "Content-Type: application/json" \
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

| Status Code | Description       |
|-------------|-------------------|
| `400`       | Bad Request       |
| `403`       | Forbidden         |
| `409`       | Conflict          |
| `413`       | Payload Too Large |

---

## Delete a FileSet by ID

**Method:** `DELETE`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}`

Delete a specific FileSet using its ID.

### Path Parameters

| Parameter  | Type   | Required | Description                        |
|------------|--------|----------|------------------------------------|
| `fileSetId`| string | ✓ Yes    | The ID of the FileSet to delete.   |

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
const fetch = require('node-fetch');

const fileSetId = 'd0c60498-7279-48e1-af64-ca8d4433a811';
fetch(`https://yourapi.com/api/files/v1/filesets/${fileSetId}`, {
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

fileSetId = 'd0c60498-7279-48e1-af64-ca8d4433a811'
response = requests.delete(f'https://yourapi.com/api/files/v1/filesets/{fileSetId}')
```

<!--
type: tab
title: cURL
-->

```bash
curl -X DELETE "https://yourapi.com/api/files/v1/filesets/d0c60498-7279-48e1-af64-ca8d4433a811" -H "Content-Type: application/json"
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

| Parameter   | Type   | Required | Description                     |
|-------------|--------|----------|---------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to query. |

### Query Parameters

_None_

### Request Body

Used to query a file set for the top K results based on the provided query.

| Parameter          | Type            | Required | Description                                                              |
|--------------------|-----------------|----------|--------------------------------------------------------------------------|
| `query`            | string          | ✔ Yes    | The query string to match against file contents within the file set.     |
| `topK`             | integer (int32) | No       | The number of top results to return based on the query match. Defaults to 1. |
| `pathPrefixFilter` | string          | No       | An optional prefix filter for the file paths to narrow down the search results. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const fetch = require('node-fetch');

const response = fetch('https://example.com/api/files/v1/filesets/d91ca94d-64ec-4b29-ab22-9e308cc31e27/query', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: 'benefit',
    pathPrefixFilter: 'sample/directory/path',
    topK: 2
  })
});
```

<!--
type: tab
title: Python
-->

```python
import requests

url = 'https://example.com/api/files/v1/filesets/d91ca94d-64ec-4b29-ab22-9e308cc31e27/query'
headers = {'Content-Type': 'application/json'}
data = {
  'query': 'benefit',
  'pathPrefixFilter': 'sample/directory/path',
  'topK': 2
}

response = requests.post(url, headers=headers, json=data)
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST 'https://example.com/api/files/v1/filesets/d91ca94d-64ec-4b29-ab22-9e308cc31e27/query' \
-H 'Content-Type: application/json' \
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

| Status Code | Description        |
|-------------|--------------------|
| `400`       | Bad Request        |
| `403`       | Forbidden          |
| `409`       | Conflict           |
| `413`       | Payload Too Large  |

---

## Update FileSet Owner

**Method:** `POST`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/ownership`

Update the owner of a specific FileSet.

### Path Parameters

| Parameter   | Type   | Required | Description                                         |
|-------------|--------|----------|-----------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet for which to update the owner.|

### Query Parameters

_None_

### Request Body

Represents a request to transfer ownership of a file set.
  
Other users may be granted ownership level permissions, but only one user may be the sole owner of a file set.

| Parameter | Type             | Required | Description                                      |
|-----------|------------------|----------|--------------------------------------------------|
| `userId`  | integer (int64)  | ✓ Yes    | The ID of the user that will assume ownership.   |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const axios = require('axios');

axios.post('https://example.com/api/files/v1/filesets/08908739-3ec9-4444-aa4e-8d7da728cfe7/ownership', {
  userId: 109
}, {
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

url = "https://example.com/api/files/v1/filesets/08908739-3ec9-4444-aa4e-8d7da728cfe7/ownership"
payload = {
    "userId": 109
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
curl -X POST https://example.com/api/files/v1/filesets/08908739-3ec9-4444-aa4e-8d7da728cfe7/ownership \
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

| Status Code | Description         |
|-------------|---------------------|
| `400`       | Bad Request         |
| `403`       | Forbidden           |
| `409`       | Conflict            |
| `413`       | Payload Too Large   |

---

## Create a new File or Directory

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files`

Create a new File or Directory within a specified FileSet. If a file already exists at the specified path, it will attempt to overwrite it if the client has permission. If a Directory already exists at the specified path, it will return that Directory.

### Path Parameters

| Parameter   | Type   | Required | Description                                              |
|-------------|--------|----------|----------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet in which to create the File.       |

### Query Parameters

_None_

### Request Body

Represents a request to upload a file or create a directory.

| Parameter       | Type           | Required | Description                                                                                                                                                 |
|-----------------|----------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `file`          | string (binary) | No       | The file to be uploaded. Leave null if creating a directory.                                                                                                |
| `directoryPath` | string         | No       | The directory path of the uploaded file, or the path of the created directory if no file is provided. Defaults to an empty string, i.e., the root directory, if not specified. Note: An empty string is not valid when intentionally creating a directory. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Generate a realistic fetch/axios example using the request body example
// Use the actual endpoint path with any path parameters filled in
// Include proper headers (Content-Type: application/json if body exists)
fetch('https://api.example.com/api/files/v1/filesets/66b7482f-126c-4217-9d1f-25af2692a105/files', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    file: "(binary data)",
    directoryPath: "sample/directory/path"
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

url = 'https://api.example.com/api/files/v1/filesets/66b7482f-126c-4217-9d1f-25af2692a105/files'
headers = {
    'Content-Type': 'application/json'
}
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
# Generate a realistic cURL command
# Use the actual endpoint path
# Include -H headers and -d data as appropriate
curl -X POST 'https://api.example.com/api/files/v1/filesets/66b7482f-126c-4217-9d1f-25af2692a105/files' \
     -H 'Content-Type: application/json' \
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

- `id`: The unique identifier of the file or directory.
- `path`: The path of the created file or directory.
- `name`: The name of the file or directory.
- `size`: The size of the file, if applicable; null for directories.
- `created`: Timestamp of when the file or directory was created.
- `createdBy`: ID of the user who created the file or directory.
- `fileType`: The type of file; indicates if it is a "DIRECTORY".

### Error Responses

| Status Code | Description                                                                                       |
|-------------|---------------------------------------------------------------------------------------------------|
| `400`       | Bad Request                                                                                       |
| `403`       | Forbidden                                                                                         |
| `409`       | Conflict: File already exists at the specified path and client does not have overwrite permissions.|
| `413`       | Payload Too Large                                                                                 |

---

## List Files and Directories for a FileSet

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/search`

Retrieve a paginated list of Files within a specific FileSet based on search criteria.

### Path Parameters

| Parameter  | Type   | Required | Description                          |
|------------|--------|----------|--------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to search within. |

### Query Parameters

| Parameter          | Type             | Required | Description                                                   |
|--------------------|------------------|----------|---------------------------------------------------------------|
| `directoryPath`    | string           | No       | The path to the directory within the FileSet, if applicable.  |
| `immediateChildren`| boolean          | No       | Whether to list only immediate children of the specified directory. (Default: `False`) |
| `limit`            | integer (int32)  | No       | The maximum number of Files to return. (Default: `100`)       |
| `next`             | string           | No       | The pagination token for the next set of results.             |

### Request Body

Request object for searching with specific filters and sorting options.

| Parameter    | Type  | Required | Description                                     |
|--------------|-------|----------|-------------------------------------------------|
| `fieldSort`  | array | No       | A list of field sort criteria to apply to the search. |
| `filters`    | array | No       | A list of filters to apply to the search.       |
| `dateFilters`| array | No       | A list of date filters to apply to the search.  |

### Request Example

<!-- type: tab title: JavaScript -->

```javascript
const axios = require('axios');

const data = {
  fieldSort: [{ field: "created", order: "ASC" }],
  filters: [{ field: "name", value: ["paid"], not: false, operator: "LIKE" }],
  dateFilters: [{ field: "created", start: "2025-05-12T23:30:00Z", not: false }]
};

axios.post('/api/files/v1/filesets/5e786999-84e4-47eb-b581-7a87da00d6c4/files/search', data, {
  headers: {
    'Content-Type': 'application/json'
  }
}).then(response => {
  console.log(response.data);
});
```

<!-- type: tab title: Python -->

```python
import requests

url = '/api/files/v1/filesets/5e786999-84e4-47eb-b581-7a87da00d6c4/files/search'
data = {
    "fieldSort": [{"field": "created", "order": "ASC"}],
    "filters": [{"field": "name", "value": ["paid"], "not": False, "operator": "LIKE"}],
    "dateFilters": [{"field": "created", "start": "2025-05-12T23:30:00Z", "not": False}]
}

response = requests.post(url, json=data, headers={'Content-Type': 'application/json'})
print(response.json())
```

<!-- type: tab title: cURL -->

```bash
curl -X POST /api/files/v1/filesets/5e786999-84e4-47eb-b581-7a87da00d6c4/files/search \
-H "Content-Type: application/json" \
-d '{
  "fieldSort": [{"field": "created", "order": "ASC"}],
  "filters": [{"field": "name", "value": ["paid"], "not": false, "operator": "LIKE"}],
  "dateFilters": [{"field": "created", "start": "2025-05-12T23:30:00Z", "not": false}]
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

- `files`: An array of file objects matching the search criteria.
  - `id`: Unique identifier for the file.
  - `path`: Path to the file within the file system.
  - `name`: Name of the file.
  - `fileType`: Type of file, such as DOCUMENT.
  - `contentType`: MIME type of the file.
  - `size`: Size of the file in bytes.
  - `hash`: Hash of the file content for integrity.
  - `hashAlgorithm`: Algorithm used to compute the file hash.
  - `created`: Timestamp of when the file was created.
  - `createdBy`: ID of the user who created the file.
- `pageContext`: Information about pagination.
  - `next`: Token to retrieve the next set of results.

### Error Responses

| Status Code | Description    |
|-------------|----------------|
| `400`       | Bad Request    |
| `403`       | Forbidden      |
| `409`       | Conflict       |
| `413`       | Payload Too Large |

---

## Initiate a split file upload.

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart`

Initiates a split file upload process for creating a new file within a FileSet.

### Path Parameters

| Parameter   | Type   | Required | Description                                         |
|-------------|--------|----------|-----------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet in which to create the File. |

### Query Parameters

_None_

### Request Body

Represents a request to initiate a split file upload.

| Parameter | Type   | Required | Description                                                      |
|-----------|--------|----------|------------------------------------------------------------------|
| `path`    | string | No       | The full path destination for the file once the upload is finalized. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const data = {
  path: "example/path/to/resource"
};

fetch('http://your-api-url.com/api/files/v1/filesets/8b828928-3597-486f-a65e-8c7bfafda085/files/multipart', {
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

url = 'http://your-api-url.com/api/files/v1/filesets/8b828928-3597-486f-a65e-8c7bfafda085/files/multipart'
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
curl -X POST 'http://your-api-url.com/api/files/v1/filesets/8b828928-3597-486f-a65e-8c7bfafda085/files/multipart' \
-H 'Content-Type: application/json' \
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

- `file`: Object containing the details of the created file.
  - `id`: Unique identifier for the file.
  - `path`: Path where the file is stored.
  - `name`: Name of the file.
  - `fileType`: Type of the file.
  - `hashAlgorithm`: Algorithm used to hash the file.
  - `created`: Timestamp of when the file was created.
  - `createdBy`: ID of the user who created the file.

### Error Responses

| Status Code | Description                                                       |
|-------------|-------------------------------------------------------------------|
| `400`       | Bad Request                                                       |
| `403`       | Forbidden                                                         |
| `409`       | Conflict: File already exists at the specified path.               |
| `413`       | Payload Too Large                                                 |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled. |

---

## Submit a part of a file for upload.

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/part/{partNumber}`

Allows submitting a file in stages to create a new file within a FileSet.

### Path Parameters

| Parameter   | Type           | Required | Description                                              |
|-------------|----------------|----------|----------------------------------------------------------|
| `fileSetId` | string         | ✓ Yes    | The ID of the FileSet in which to the file is being uploaded. |
| `fileId`    | string         | ✓ Yes    | The ID of the file being uploaded in parts.              |
| `partNumber`| integer (int64)| ✓ Yes    | The part number of this file segment. Must be non-negative. |

### Query Parameters

_None_

### Request Body

Represents a request to upload a part of a file in a split file upload operation.

| Parameter | Type           | Required | Description                                                         |
|-----------|----------------|----------|---------------------------------------------------------------------|
| `part`    | string (binary)| No       | The full path destination for the file once the upload is complete. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Generate a realistic fetch/axios example using the request body example
// Use the actual endpoint path with any path parameters filled in
// Include proper headers (Content-Type: application/json if body exists)
fetch("https://api.example.com/api/files/v1/filesets/18799b74-3fc6-48e2-9ac5-3cd2a968aef8/files/multipart/fc52d16d-24a4-4436-9f3d-d473dd83d4c4/part/1234567890", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    part: "(binary data)"
  })
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

url = "https://api.example.com/api/files/v1/filesets/18799b74-3fc6-48e2-9ac5-3cd2a968aef8/files/multipart/fc52d16d-24a4-4436-9f3d-d473dd83d4c4/part/1234567890"
headers = {
    "Content-Type": "application/json"
}
data = {
    "part": "(binary data)"
}

response = requests.post(url, headers=headers, json=data)
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
curl -X POST "https://api.example.com/api/files/v1/filesets/18799b74-3fc6-48e2-9ac5-3cd2a968aef8/files/multipart/fc52d16d-24a4-4436-9f3d-d473dd83d4c4/part/1234567890" \
-H "Content-Type: application/json" \
-d '{
  "part": "(binary data)"
}'
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

| Status Code | Description                                                                 |
|-------------|-------------------------------------------------------------------------------|
| `400`       | Split file upload part did not match previous data segments.                  |
| `403`       | Forbidden                                                                     |
| `404`       | An "initiate split file" request was not performed prior to this request for the given file ID or has already been finalized or aborted. |
| `409`       | Conflict                                                                      |
| `413`       | Payload Too Large                                                             |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled.      |

---

## Finalize a split file upload

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
fetch('https://yourapi.com/api/files/v1/filesets/6a8bddc4-3a0a-46ad-952e-e9d033bbbe51/files/multipart/379095df-a95d-40fb-8eae-bdacbbb60e21/finalize', {
  method: 'POST'
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
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
import requests

response = requests.post(
    'https://yourapi.com/api/files/v1/filesets/6a8bddc4-3a0a-46ad-952e-e9d033bbbe51/files/multipart/379095df-a95d-40fb-8eae-bdacbbb60e21/finalize'
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
# Generate a realistic cURL command
# Use the actual endpoint path
# Include -H headers and -d data as appropriate
curl -X POST 'https://yourapi.com/api/files/v1/filesets/6a8bddc4-3a0a-46ad-952e-e9d033bbbe51/files/multipart/379095df-a95d-40fb-8eae-bdacbbb60e21/finalize'
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

- `file`: Contains details about the uploaded file.
  - `id`: The unique identifier of the file.
  - `path`: The directory path where the file is stored.
  - `name`: The name of the file.
  - `fileType`: The type of file.
  - `contentType`: The MIME type of the file.
  - `size`: The size of the file in bytes.
  - `hash`: A hash of the file content for integrity checks.
  - `hashAlgorithm`: The algorithm used to generate the hash.
  - `downloadUrl`: The URL to download the file (can be empty).
  - `created`: The timestamp of when the file was created.
  - `createdBy`: The ID of the user who created the file.
  - `connectorKey`, `indexStatus`, `indexReason`: Additional metadata fields (can be null).

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

## Abort a split file upload.

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/abort`

Aborts an ongoing split file upload process, discarding all uploaded parts.

### Path Parameters

| Parameter   | Type   | Required | Description                                                        |
|-------------|--------|----------|--------------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet in which the file was being uploaded.        |
| `fileId`    | string | ✓ Yes    | The ID of the file whose upload is to be aborted.                  |

### Query Parameters

_None_

### Request Body

_No request body required for this endpoint._

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const fileSetId = 'd6695855-fc3c-4c42-94e4-9fe9a3a4a73f';
const fileId = '730a4601-9768-4ad9-b88b-67661fbcb5e8';

fetch(`/api/files/v1/filesets/${fileSetId}/files/multipart/${fileId}/abort`, {
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

file_set_id = 'd6695855-fc3c-4c42-94e4-9fe9a3a4a73f'
file_id = '730a4601-9768-4ad9-b88b-67661fbcb5e8'
url = f'/api/files/v1/filesets/{file_set_id}/files/multipart/{file_id}/abort'

response = requests.post(url, headers={'Content-Type': 'application/json'})

print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "/api/files/v1/filesets/d6695855-fc3c-4c42-94e4-9fe9a3a4a73f/files/multipart/730a4601-9768-4ad9-b88b-67661fbcb5e8/abort" \
-H "Content-Type: application/json"
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

- `file`: Contains information about the file.
  - `id`: The unique identifier of the file.
  - `path`: The path where the file was intended to be uploaded.
  - `name`: The name of the file.
  - `fileType`: The type of file.
  - `contentType`: The MIME type of the file.
  - `size`: Size of the file in bytes.
  - `created`: The timestamp when the file was created.
  - `createdBy`: The ID of the user who initiated the file upload.
- `status`: The status of the upload operation, indicating it was aborted.

### Error Responses

| Status Code | Description                                                                                              |
|-------------|----------------------------------------------------------------------------------------------------------|
| `400`       | Bad Request                                                                                              |
| `403`       | Forbidden                                                                                                |
| `404`       | An "initiate split file" request was not performed prior to this request for the given file ID or has already been finalized or aborted. |
| `409`       | Conflict                                                                                                 |
| `413`       | Payload Too Large                                                                                        |

---

## Get FileSet Access Permissions

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/access`

Retrieve the access permissions for a specific FileSet.

### Path Parameters

| Parameter   | Type   | Required | Description                                                     |
|-------------|--------|----------|-----------------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet for which to retrieve access information. |

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
// Example using fetch to get FileSet Access Permissions
fetch('https://api.example.com/api/files/v1/filesets/8dab2613-8bb9-4696-bab6-7e9b98e1b5e7/access', {
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

<!--
type: tab
title: Python
-->

```python
import requests

# Example using requests to get FileSet Access Permissions
response = requests.get(
    'https://api.example.com/api/files/v1/filesets/8dab2613-8bb9-4696-bab6-7e9b98e1b5e7/access',
    headers={'Content-Type': 'application/json'}
)

print(response.json())
```

<!-- type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
# Example using cURL to get FileSet Access Permissions
curl -X GET 'https://api.example.com/api/files/v1/filesets/8dab2613-8bb9-4696-bab6-7e9b98e1b5e7/access' \
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

### Error Responses

| Status Code | Description       |
|-------------|-------------------|
| `400`       | Bad Request       |
| `403`       | Forbidden         |
| `409`       | Conflict          |
| `413`       | Payload Too Large |

---

## Update FileSet Access Permissions

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/access`

Update the relevant access permissions for a specific FileSet.

### Path Parameters

| Parameter   | Type   | Required | Description                                                             |
|-------------|--------|----------|-------------------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet for which to update access permissions. |

### Query Parameters

_None_

### Request Body

Request object for updating access permissions to a file set.

Only the permissions that are explicitly set in the request will be updated.

| Parameter       | Type  | Required | Description                                |
|-----------------|-------|----------|--------------------------------------------|
| `fileSetAccess` | array | ✓ Yes    | The access permissions for the file set. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Generate a realistic fetch/axios example using the request body example
// Use the actual endpoint path with any path parameters filled in
// Include proper headers (Content-Type: application/json if body exists)
fetch('https://example.com/api/files/v1/filesets/1d37f610-ec8d-4eaf-8195-5e7ad34b8fd7/access', {
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

url = 'https://example.com/api/files/v1/filesets/1d37f610-ec8d-4eaf-8195-5e7ad34b8fd7/access'
headers = {'Content-Type': 'application/json'}
payload = {
    "fileSetAccess": [
        {
            "entityId": 42,
            "entityType": "GROUP",
            "permission": "EDIT"
        }
    ]
}

response = requests.post(url, json=payload, headers=headers)
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
curl -X POST https://example.com/api/files/v1/filesets/1d37f610-ec8d-4eaf-8195-5e7ad34b8fd7/access \
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

| Status Code | Description         |
|-------------|---------------------|
| `400`       | Bad Request         |
| `403`       | Forbidden           |
| `409`       | Conflict            |
| `413`       | Payload Too Large   |

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
fetch("/api/files/v1/filesets/search?limit=100&offset=0", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
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

url = "/api/files/v1/filesets/search?limit=100&offset=0"

headers = {
    "Content-Type": "application/json"
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

response = requests.post(url, headers=headers, data=json.dumps(body))
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "/api/files/v1/filesets/search?limit=100&offset=0" \
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
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet for which to retrieve statistics.  |

### Query Parameters

_None_

### Request Body

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Example using fetch
fetch('https://example.com/api/files/v1/filesets/ec8ac87a-07d9-46be-9d30-8b5a5f3d9409/stats', {
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
# Example using requests
import requests

response = requests.get(
    'https://example.com/api/files/v1/filesets/ec8ac87a-07d9-46be-9d30-8b5a5f3d9409/stats',
    headers={'Content-Type': 'application/json'}
)

print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
# Example cURL command
curl -X GET 'https://example.com/api/files/v1/filesets/ec8ac87a-07d9-46be-9d30-8b5a5f3d9409/stats' \
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

- `imageFileTypeCount`: Number of image files.
- `audioFileTypeCount`: Number of audio files.
- `videoFileTypeCount`: Number of video files.
- `textFileTypeCount`: Number of text files.
- `documentFileTypeCount`: Number of document files.
- `otherFileTypeCount`: Number of files of other types.
- `notIndexedCount`: Number of files not indexed.
- `indexQueuedCount`: Number of files queued for indexing.
- `indexInProgressCount`: Number of files currently being indexed.
- `indexCompleteCount`: Number of files that have been successfully indexed.
- `indexFailedCount`: Number of files that failed to index.
- `indexSkippedCount`: Number of files skipped during indexing.

### Error Responses

| Status Code | Description     |
|-------------|-----------------|
| `400`       | Bad Request     |
| `403`       | Forbidden       |
| `409`       | Conflict        |
| `413`       | Payload Too Large |

---

## Get File or Directory by Path

**Method:** `GET`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/path`

Retrieve a File or Directory within a FileSet using its path.

### Path Parameters

| Parameter   | Type   | Required | Description              |
|-------------|--------|----------|--------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet.   |

### Query Parameters

| Parameter | Type   | Required | Description                                         |
|-----------|--------|----------|-----------------------------------------------------|
| `path`    | string | ✓ Yes    | The path to the File or Directory within the FileSet. |

### Request Body

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const fileSetId = 'f2151eb4-ffe2-4998-adc6-aaedd620ced7';
const path = 'example/path/to/resource';

fetch(`/api/files/v1/filesets/${fileSetId}/path?path=${encodeURIComponent(path)}`, {
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

fileSetId = 'f2151eb4-ffe2-4998-adc6-aaedd620ced7'
path = 'example/path/to/resource'

url = f'/api/files/v1/filesets/{fileSetId}/path?path={path}'
headers = {'Content-Type': 'application/json'}

response = requests.get(url, headers=headers)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
fileSetId='f2151eb4-ffe2-4998-adc6-aaedd620ced7'
path='example/path/to/resource'

curl -X GET "/api/files/v1/filesets/$fileSetId/path?path=$path" -H "Content-Type: application/json"
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

| Parameter   | Type   | Required | Description                                    |
|-------------|--------|----------|------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet containing the File.     |

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

const fileSetId = 'cd58204d-b17e-473b-af3e-7c3299ca83f5';
const path = 'example/path/to/resource';

axios.delete(`/api/files/v1/filesets/${fileSetId}/path`, {
  params: { path }
})
.then(response => console.log(response))
.catch(error => console.error(error));
```

<!--
type: tab
title: Python
-->

```python
import requests

file_set_id = 'cd58204d-b17e-473b-af3e-7c3299ca83f5'
path = 'example/path/to/resource'

response = requests.delete(f'/api/files/v1/filesets/{file_set_id}/path', params={'path': path})

print(response.status_code)
```

<!--
type: tab
title: cURL
-->

```bash
curl -X DELETE "/api/files/v1/filesets/cd58204d-b17e-473b-af3e-7c3299ca83f5/path?path=example/path/to/resource"
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

## Download a File by Path

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/path/download`

Download the contents of a specific file within a FileSet using its path. This will redirect to the file's download URL.

### Path Parameters

| Parameter   | Type   | Required | Description                                    |
|-------------|--------|----------|------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet containing the file.     |

### Query Parameters

| Parameter | Type   | Required | Description                                                  |
|-----------|--------|----------|--------------------------------------------------------------|
| `path`    | string | ✔ Yes    | The path of the file to download within the FileSet.         |

### Request Body

N/A

### Request Example

<!-- type: tab title: JavaScript -->

```javascript
fetch("https://example.com/api/files/v1/filesets/57ff59e4-7906-45a6-8843-ffa608a7e2eb/path/download?path=example/path/to/resource", {
  method: 'GET'
})
  .then(response => response.blob())
  .then(data => {
    // Handle the file download
    console.log('File downloaded successfully');
  })
  .catch(error => console.error('Error downloading file:', error));
```

<!-- type: tab-end -->

<!-- type: tab title: Python -->

```python
import requests

url = "https://example.com/api/files/v1/filesets/57ff59e4-7906-45a6-8843-ffa608a7e2eb/path/download"
params = {
    'path': 'example/path/to/resource'
}
response = requests.get(url, params=params)

with open('downloaded_file', 'wb') as file:
    file.write(response.content)

print("File downloaded successfully")
```

<!-- type: tab-end -->

<!-- type: tab title: cURL -->

```bash
curl -X GET "https://example.com/api/files/v1/filesets/57ff59e4-7906-45a6-8843-ffa608a7e2eb/path/download?path=example/path/to/resource" -o downloaded_file
```

<!-- type: tab-end -->

### Headers

- No specific headers are required beyond the basics.

### Response Example for Success (200)

When the request is successful, the response will typically be a binary stream of the file being downloaded. Ensure your application handles the file download accordingly.

Consider the following example when the file is downloaded as binary data:

- **Content-Type:** application/octet-stream

### Error Responses

| Status Code | Description       |
|-------------|-------------------|
| `400`       | Bad Request       |
| `403`       | Forbidden         |
| `409`       | Conflict          |
| `413`       | Payload Too Large |

---

## Get a File or Directory by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}`

Retrieve a specific File or Directory within a FileSet using its ID.

### Path Parameters

| Parameter  | Type    | Required | Description                                                      |
|------------|---------|----------|------------------------------------------------------------------|
| `fileSetId` | string  | ✓ Yes    | The ID of the FileSet containing the File or Directory.          |
| `fileId`   | string  | ✓ Yes    | The ID of the File or Directory to retrieve.                     |

### Query Parameters

_None_

### Request Body

_No request body required for this endpoint._

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// This JavaScript example uses fetch to get a file or directory by ID
fetch('https://api.example.com/api/files/v1/filesets/53870875-767e-45b7-a4f5-76fd5f99a838/files/cde75f9a-c936-4843-9a33-be4fc5f0dd72', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
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
# This Python example uses requests to get a file or directory by ID
import requests

url = 'https://api.example.com/api/files/v1/filesets/53870875-767e-45b7-a4f5-76fd5f99a838/files/cde75f9a-c936-4843-9a33-be4fc5f0dd72'
headers = {
    'Content-Type': 'application/json',
}

response = requests.get(url, headers=headers)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
# This cURL example retrieves a file or directory by ID
curl -X GET 'https://api.example.com/api/files/v1/filesets/53870875-767e-45b7-a4f5-76fd5f99a838/files/cde75f9a-c936-4843-9a33-be4fc5f0dd72' \
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
}
```

### Error Responses

| Status Code | Description     |
|-------------|-----------------|
| `400`       | Bad Request     |
| `403`       | Forbidden       |
| `409`       | Conflict        |
| `413`       | Payload Too Large|

---

## Delete a File or Directory by ID

**Method:** `DELETE`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}`

Delete a specific File or Directory within a FileSet using its ID.

### Path Parameters

| Parameter   | Type   | Required | Description                                                                                   |
|-------------|--------|----------|-----------------------------------------------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet containing the File.                                                    |
| `fileId`    | string | ✔ Yes    | The ID of the File or Directory to delete. If a Directory is specified, it and its children will be deleted. |

### Query Parameters

_None_

### Request Body

- No request body is required for this endpoint.

### Request Example

<details>
<summary>JavaScript</summary>

```javascript
// Using fetch API to send a DELETE request
const fileSetId = "891e70c0-bf21-405d-8876-d18993e29fa2";
const fileId = "1dc614d0-478c-47ae-841d-3acadb78d494";
const url = `https://your-api-domain.com/api/files/v1/filesets/${fileSetId}/files/${fileId}`;

fetch(url, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
})
.then(response => {
  if (response.status === 204) {
    console.log('File or Directory successfully deleted.');
  } else {
    console.error('Failed to delete the File or Directory.');
  }
});
```
</details>

<details>
<summary>Python</summary>

```python
import requests

fileSetId = "891e70c0-bf21-405d-8876-d18993e29fa2"
fileId = "1dc614d0-478c-47ae-841d-3acadb78d494"
url = f"https://your-api-domain.com/api/files/v1/filesets/{fileSetId}/files/{fileId}"

response = requests.delete(url, headers={"Content-Type": "application/json"})

if response.status_code == 204:
    print("File or Directory successfully deleted.")
else:
    print("Failed to delete the File or Directory.")
```
</details>

<details>
<summary>cURL</summary>

```bash
fileSetId="891e70c0-bf21-405d-8876-d18993e29fa2"
fileId="1dc614d0-478c-47ae-841d-3acadb78d494"
curl -X DELETE "https://your-api-domain.com/api/files/v1/filesets/$fileSetId/files/$fileId" -H "Content-Type: application/json"
```
</details>

<!-- type: tab-end -->

### Response

**Status:** `204 No Content`

```json
{}
```

### Error Responses

| Status Code | Description                              | Example Response                                                                                               |
|-------------|------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| `400`       | Bad Request                              | ```json {"error": "Invalid fileSetId or fileId format."}```                                                    |
| `403`       | Forbidden                                | ```json {"error": "You do not have permission to delete this File or Directory."}```                           |
| `409`       | Conflict                                 | ```json {"error": "The File or Directory cannot be deleted due to internal conflicts."}```                     |
| `413`       | Payload Too Large                        | ```json {"error": "The request entity is too large."}```                                                       |

---

## Download a File by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}/download`

Download the contents of a specific file within a FileSet using its ID. This request will redirect to the file's download URL.

### Path Parameters

| Parameter  | Type   | Required | Description                                      |
|------------|--------|----------|--------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the file.       |
| `fileId` | string | ✓ Yes    | The ID of the file to download.                  |

### Query Parameters

_None_

### Request Body

There is no request body for this GET request.

### Request Example

<!-- type: tab title: JavaScript -->

```javascript
const fileSetId = '1ae9448f-0852-4a9a-8d77-891e083d57c8';
const fileId = '7071e9b2-d269-4f46-b29d-10f8ac04bcce';
const url = `/api/files/v1/filesets/${fileSetId}/files/${fileId}/download`;

fetch(url, {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
})
  .then(response => response.blob())
  .then(blob => {
    // Handle file download
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'downloaded-file.ext'; // Use the actual filename and extension
    document.body.appendChild(a);
    a.click();
    a.remove();
  })
  .catch(error => console.error('Download failed:', error));
```

<!-- type: tab title: Python -->

```python
import requests

file_set_id = '1ae9448f-0852-4a9a-8d77-891e083d57c8'
file_id = '7071e9b2-d269-4f46-b29d-10f8ac04bcce'
url = f'/api/files/v1/filesets/{file_set_id}/files/{file_id}/download'

response = requests.get(url, headers={'Content-Type': 'application/json'})

if response.status_code == 200:
    with open('downloaded-file.ext', 'wb') as file:  # Use the actual filename and extension
        file.write(response.content)
else:
    print('Download failed:', response.status_code, response.text)
```

<!-- type: tab title: cURL -->

```bash
curl -X GET "/api/files/v1/filesets/1ae9448f-0852-4a9a-8d77-891e083d57c8/files/7071e9b2-d269-4f46-b29d-10f8ac04bcce/download" -H "Content-Type: application/json" -o "downloaded-file.ext" # Replace with actual file extension
```

<!-- type: tab-end -->

### Response

- **Status Code:** `302`
  - Indicates that the request for the file download is successful, and the client should follow the redirect to the actual file URL.
- **Status Code:** `200`
  - The file has been successfully retrieved. However, typically a 302 is expected for initiating downloads.

### Error Responses

- **302:** File download initiated successfully. The client should follow the redirect to obtain the file.
- **400:** Bad Request. The request is malformed, usually due to incorrect parameters.
- **403:** Forbidden. The client does not have permission to access the requested resource.
- **409:** Conflict. There is a conflict with the current state of the target resource, such as duplicate requests.
- **413:** Payload Too Large. The request is too large for the server to process.

---

## Get File Content by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}/content`

Retrieve the content of a specific File within a FileSet using its ID. This endpoint requires a valid download token for authorization, which is generally obtained via a download endpoint and redirected here automatically.

### Path Parameters

| Parameter  | Type   | Required | Description                                          |
|------------|--------|----------|------------------------------------------------------|
| `fileSetId`| string | ✓ Yes    | The ID of the FileSet containing the File.           |
| `fileId`   | string | ✓ Yes    | The ID of the File to retrieve.                      |

### Query Parameters

| Parameter | Type   | Required | Description                           |
|-----------|--------|----------|---------------------------------------|
| `token`   | string | ✓ Yes    | The download token for authorization. |

### Request Body

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const fetch = require('node-fetch');

const fileSetId = 'aa1d3927-10ed-4256-810e-9915af3a4c96';
const fileId = '6d885e04-6603-4604-a8f3-a71b76dfa1e0';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';

fetch(`https://api.example.com/api/files/v1/filesets/${fileSetId}/files/${fileId}/content?token=${token}`)
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

file_set_id = 'aa1d3927-10ed-4256-810e-9915af3a4c96'
file_id = '6d885e04-6603-4604-a8f3-a71b76dfa1e0'
token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'

url = f'https://api.example.com/api/files/v1/filesets/{file_set_id}/files/{file_id}/content'
params = {'token': token}

response = requests.get(url, params=params)

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
curl -X GET "https://api.example.com/api/files/v1/filesets/aa1d3927-10ed-4256-810e-9915af3a4c96/files/6d885e04-6603-4604-a8f3-a71b76dfa1e0/content?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

<!--
type: tab-end
-->

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

