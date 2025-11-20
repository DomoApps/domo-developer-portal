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

| Parameter     | Type    | Required | Description                                     |
|---------------|---------|----------|-------------------------------------------------|
| `name`        | string  | ✓ Yes    | The name for the file set.                      |
| `description` | string  | No       | A description for the file set.                 |
| `connector`   | string  | No       | The connector that powers the file set. Allowed values: `DOMO`, `CONFLUENCE`, `GITHUB`, `GOOGLE_DRIVE`, `S3` |
| `aiEnabled`   | boolean | No       | Indicates whether AI features are enabled for the file set. |

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
    name: "Policies (2025)",
    description: "Location for all new and updated policies for FY2025",
    aiEnabled: false,
    connector: "DOMO"
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

url = '/api/files/v1/filesets'
headers = {'Content-Type': 'application/json'}
data = {
    "name": "Policies (2025)",
    "description": "Location for all new and updated policies for FY2025",
    "aiEnabled": False,
    "connector": "DOMO"
}

response = requests.post(url, json=data, headers=headers)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST '/api/files/v1/filesets' \
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

| Parameter  | Type   | Required | Description                          |
|------------|--------|----------|--------------------------------------|
| `fileSetId` | string | ✔ Yes   | The ID of the FileSet to retrieve.   |

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

const fileSetId = '08947991-16bc-4b06-abc0-cc7df2cb45dc';
fetch(`https://yourapi.com/api/files/v1/filesets/${fileSetId}`, {
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
import requests

file_set_id = "08947991-16bc-4b06-abc0-cc7df2cb45dc"
response = requests.get(f"https://yourapi.com/api/files/v1/filesets/{file_set_id}", headers={"Accept": "application/json"})

if response.status_code == 200:
    print(response.json())
else:
    print(f"Failed to retrieve FileSet: {response.status_code}")
```

<!--
type: tab-end
-->

<!--
type: tab
title: cURL
-->

```bash
curl -X GET "https://yourapi.com/api/files/v1/filesets/08947991-16bc-4b06-abc0-cc7df2cb45dc" \
     -H "Accept: application/json"
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

- **id**: The unique identifier of the FileSet.
- **name**: The name of the FileSet.
- **description**: Details about the FileSet.
- **aiEnabled**: Indicator of AI processing capability.
- **connector**: The source connector for the FileSet.
- **created**: Timestamp of when the FileSet was created.
- **createdBy**: ID of the user who created the FileSet.
- **updated**: Timestamp of the last update on the FileSet.
- **updatedBy**: ID of the user who last updated the FileSet.
- **owner**: Identifier of the FileSet owner.
- **permission**: Level of access permission.
- **size**: Size of the FileSet.
- **fileCount**: Number of files in the FileSet.

### Error Responses

| Status Code | Description        |
|-------------|--------------------|
| `400`       | Bad Request        |
| `403`       | Forbidden          |
| `409`       | Conflict           |
| `413`       | Payload Too Large  |

---

## Update an existing FileSet

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}`

Update the details of an existing FileSet. Only fields that are not null in the request will be updated.

### Path Parameters

| Parameter  | Type   | Required | Description                             |
|------------|--------|----------|-----------------------------------------|
| `fileSetId`| string | ✓ Yes    | The ID of the FileSet to update.        |

### Query Parameters

_None_

### Request Body

Represents a request to update a file set.  
At least one of the fields must be provided to update the file set.

| Parameter    | Type    | Required | Description                                                                 |
|--------------|---------|----------|-----------------------------------------------------------------------------|
| `name`       | string  | No       | The name with which to update the file set's name. If not provided, the name will remain unchanged. |
| `description`| string  | No       | Optional description with which to update the file set's description. If not provided, the description will remain unchanged. |
| `aiEnabled`  | boolean | No       | Optional flag to enable or disable AI features for the file set.              |

### Request Example

<!-- type: tab -->
<!-- title: JavaScript -->

```javascript
// Generate a realistic fetch/axios example using the request body example
// Use the actual endpoint path with any path parameters filled in
// Include proper headers (Content-Type: application/json if body exists)
fetch('https://api.example.com/api/files/v1/filesets/d5a601d8-6f7e-4a41-bf90-781ea4e4fa37', {
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
  .catch(error => console.error('Error:', error));
```

<!-- type: tab-end -->
<!-- type: tab -->
<!-- title: Python -->

```python
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
import requests
import json

url = "https://api.example.com/api/files/v1/filesets/d5a601d8-6f7e-4a41-bf90-781ea4e4fa37"
headers = {"Content-Type": "application/json"}
data = {
    "name": "Policies (FY25)",
    "description": "Repository for new policies created ONLY in FY2025"
}

response = requests.post(url, headers=headers, data=json.dumps(data))
print(response.json())
```

<!-- type: tab-end -->
<!-- type: tab -->
<!-- title: cURL -->

```bash
# Generate a realistic cURL command
# Use the actual endpoint path
# Include -H headers and -d data as appropriate
curl -X POST "https://api.example.com/api/files/v1/filesets/d5a601d8-6f7e-4a41-bf90-781ea4e4fa37" \
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

| Parameter   | Type   | Required | Description                        |
|-------------|--------|----------|------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet to delete.   |

### Query Parameters

_None_

### Request Body

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Replace 'your-base-url' with the actual base URL of your API
fetch('your-base-url/api/files/v1/filesets/651efadf-9f1e-42c1-b5f0-dc2bf11dac3e', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (response.status === 204) {
    console.log('FileSet deleted successfully.');
  } else {
    console.error('Failed to delete the FileSet.');
  }
});
```

<!--
type: tab
title: Python
-->

```python
import requests

# Replace 'your-base-url' with the actual base URL of your API
response = requests.delete('your-base-url/api/files/v1/filesets/651efadf-9f1e-42c1-b5f0-dc2bf11dac3e', headers={
    'Content-Type': 'application/json'
})

if response.status_code == 204:
    print('FileSet deleted successfully.')
else:
    print('Failed to delete the FileSet.')
```

<!--
type: tab
title: cURL
-->

```bash
# Replace 'your-base-url' with the actual base URL of your API
curl -X DELETE 'your-base-url/api/files/v1/filesets/651efadf-9f1e-42c1-b5f0-dc2bf11dac3e' -H 'Content-Type: application/json'
```

<!-- type: tab-end -->

### Response

**Status:** `204`

```json
{}
```

### Error Responses

| Status Code | Description           |
|-------------|-----------------------|
| `400`       | Bad Request           |
| `403`       | Forbidden             |
| `409`       | Conflict              |
| `413`       | Payload Too Large     |

---

## Query FileSet for File Contents

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/query`

Query a specific FileSet for file contents related to the query criteria.

### Path Parameters

| Parameter   | Type   | Required | Description                        |
|-------------|--------|----------|------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to query.    |

### Query Parameters

_None_

### Request Body

Used to query a file set for the top K results based on the provided query.

| Parameter         | Type             | Required | Description                                                                 |
|-------------------|------------------|----------|-----------------------------------------------------------------------------|
| `query`           | string           | ✔ Yes    | The query string to match against file contents within the file set.       |
| `topK`            | integer (int32)  | No       | The number of top results to return based on the query match. Defaults to 1.|
| `pathPrefixFilter` | string           | No       | An optional prefix filter for the file paths to narrow down the search results.|

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const axios = require('axios');

const data = {
  query: 'benefit',
  pathPrefixFilter: 'sample/directory/path',
  topK: 2
};

axios.post('/api/files/v1/filesets/2ff9be69-be15-4a03-bfb3-e262095787a3/query', data, {
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

url = '/api/files/v1/filesets/2ff9be69-be15-4a03-bfb3-e262095787a3/query'
payload = {
    'query': 'benefit',
    'pathPrefixFilter': 'sample/directory/path',
    'topK': 2
}
headers = {'Content-Type': 'application/json'}

response = requests.post(url, json=payload, headers=headers)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST '/api/files/v1/filesets/2ff9be69-be15-4a03-bfb3-e262095787a3/query' \
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

| Parameter   | Type   | Required | Description                                           |
|-------------|--------|----------|-------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet for which to update the owner.  |

### Query Parameters

_None_

### Request Body

Represents a request to transfer ownership of a file set.  
Other users may be granted ownership level permissions, but only one user may be the sole owner of a file set.

| Parameter | Type           | Required | Description                                      |
|-----------|----------------|----------|--------------------------------------------------|
| `userId`  | integer (int64)| ✔ Yes    | The ID of the user that will assume ownership.   |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript Fetch Example
fetch('https://api.example.com/api/files/v1/filesets/7a04d1c0-9124-4f20-9ea3-fd9894701c16/ownership', {
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

<!--
type: tab
title: Python
-->

```python
# Python requests Example
import requests
import json

url = "https://api.example.com/api/files/v1/filesets/7a04d1c0-9124-4f20-9ea3-fd9894701c16/ownership"
headers = {
    "Content-Type": "application/json"
}
data = {
    "userId": 109
}

response = requests.post(url, headers=headers, data=json.dumps(data))
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
# cURL Example
curl -X POST "https://api.example.com/api/files/v1/filesets/7a04d1c0-9124-4f20-9ea3-fd9894701c16/ownership" \
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

- `fileSetId`: The identifier of the updated FileSet.
- `fileSetAccess`: A list of access permissions for the FileSet.
  - `entityId`: The ID of the entity (user).
  - `entityType`: The type of entity, e.g., "USER".
  - `permission`: The access level granted, e.g., "OWNER".

### Error Responses

| Status Code | Description      |
|-------------|------------------|
| `400`       | Bad Request      |
| `403`       | Forbidden        |
| `409`       | Conflict         |
| `413`       | Payload Too Large|

---

## Create a new File or Directory

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files`

Create a new File or Directory within a specified FileSet. If a file already exists at the specified path, it will attempt to overwrite it if the client has permission. If a Directory already exists at the specified path, it will return that Directory.

### Path Parameters

| Parameter    | Type   | Required | Description                                      |
|--------------|--------|----------|--------------------------------------------------|
| `fileSetId`  | string | ✓ Yes    | The ID of the FileSet in which to create the File. |

### Query Parameters

_None_

### Request Body

Represents a request to upload a file or create a directory.

| Parameter      | Type            | Required | Description                                                                                                                                             |
|----------------|-----------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| `file`         | string (binary) | No       | The file to be uploaded. Leave null if creating a directory.                                                                                            |
| `directoryPath`| string          | No       | The directory path of the uploaded file, or the path of the created directory if no file is provided. Defaults to an empty string, i.e., the root directory, if not specified. Note: An empty string is not valid when intentionally creating a directory. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const axios = require('axios');

const fileSetId = '842274d4-ba9b-40ac-b235-4387d3f752d5';
const data = {
  file: (binary data of the file),
  directoryPath: 'sample/directory/path'
};

axios.post(`https://api.example.com/api/files/v1/filesets/${fileSetId}/files`, data, {
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => console.log(response.data))
.catch(error => console.error('Error:', error));
```

<!--
type: tab
title: Python
-->

```python
import requests

fileSetId = '842274d4-ba9b-40ac-b235-4387d3f752d5'
url = f'https://api.example.com/api/files/v1/filesets/{fileSetId}/files'
data = {
    "file": (binary data of the file),
    "directoryPath": "sample/directory/path"
}

response = requests.post(url, json=data, headers={'Content-Type': 'application/json'})

print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST https://api.example.com/api/files/v1/filesets/842274d4-ba9b-40ac-b235-4387d3f752d5/files \
-H "Content-Type: application/json" \
-d '{"file": (binary data of the file), "directoryPath": "sample/directory/path"}'
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

### Error Responses

| Status Code | Description                                                                                         |
|-------------|-----------------------------------------------------------------------------------------------------|
| `400`       | Bad Request                                                                                         |
| `403`       | Forbidden                                                                                           |
| `409`       | Conflict: File already exists at the specified path and client does not have overwrite permissions. |
| `413`       | Payload Too Large                                                                                   |

---

## List Files and Directories for a FileSet

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/search`  

Retrieve a paginated list of Files within a specific FileSet based on search criteria.

### Path Parameters

| Parameter  | Type   | Required | Description                            |
|------------|--------|----------|----------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to search within. |

### Query Parameters

| Parameter          | Type             | Required | Description                                                                  |
|--------------------|------------------|----------|------------------------------------------------------------------------------|
| `directoryPath`    | string           | No       | The path to the directory within the FileSet, if applicable.                 |
| `immediateChildren` | boolean          | No       | Whether to list only immediate children of the specified directory. (Default: `False`) |
| `limit`            | integer (int32)  | No       | The maximum number of Files to return. (Default: `100`)                      |
| `next`             | string           | No       | The pagination token for the next set of results.                            |

### Request Body

Request object for searching with specific filters and sorting options.

| Parameter   | Type  | Required | Description                                                  |
|-------------|-------|----------|--------------------------------------------------------------|
| `fieldSort` | array | No       | A list of field sort criteria to apply to the search.        |
| `filters`   | array | No       | A list of filters to apply to the search.                    |
| `dateFilters` | array | No     | A list of date filters to apply to the search.               |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('/api/files/v1/filesets/d3b32b0e-9918-4ef3-bb14-c9103ef71fcb/files/search', {
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
}).then(response => response.json())
  .then(data => console.log(data));
```

<!-- type: tab-end -->

<!--
type: tab
title: Python
-->

```python
import requests

url = '/api/files/v1/filesets/d3b32b0e-9918-4ef3-bb14-c9103ef71fcb/files/search'
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

response = requests.post(url, headers=headers, json=body)
print(response.json())
```

<!-- type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
curl -X POST '/api/files/v1/filesets/d3b32b0e-9918-4ef3-bb14-c9103ef71fcb/files/search' \
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
```

### Error Responses

| Status Code | Description       |
|-------------|-------------------|
| `400`       | Bad Request       |
| `403`       | Forbidden         |
| `409`       | Conflict          |
| `413`       | Payload Too Large |

---

## Initiate a split file upload.

**Method:** `POST`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart`

Initiates a split file upload process for creating a new file within a FileSet.

### Path Parameters

| Parameter  | Type   | Required | Description                                         |
|------------|--------|----------|-----------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet in which to create the File. |

### Query Parameters

_None_

### Request Body

Represents a request to initiate a split file upload.

| Parameter | Type   | Required | Description                                                         |
|-----------|--------|----------|---------------------------------------------------------------------|
| `path`    | string | No       | The full path destination for the file once the upload is finalized. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Generate a realistic fetch/axios example using the request body example
// Use the actual endpoint path with any path parameters filled in
// Include proper headers (Content-Type: application/json if body exists)
fetch('https://api.example.com/api/files/v1/filesets/5b798589-f29a-4b4b-a417-69b103c8fc20/files/multipart', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    path: 'example/path/to/resource'
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
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
import requests

url = 'https://api.example.com/api/files/v1/filesets/5b798589-f29a-4b4b-a417-69b103c8fc20/files/multipart'
headers = {
    'Content-Type': 'application/json'
}
data = {
    'path': 'example/path/to/resource'
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
# Generate a realistic cURL command
# Use the actual endpoint path
# Include -H headers and -d data as appropriate
curl -X POST https://api.example.com/api/files/v1/filesets/5b798589-f29a-4b4b-a417-69b103c8fc20/files/multipart \
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
```

- `file.id`: The unique identifier of the created file.
- `file.path`: The storage path of the file in the file set.
- `file.name`: Name of the uploaded file.
- `file.fileType`: Type of the file.
- `file.hashAlgorithm`: The algorithm used for hashing the file.
- `file.created`: Timestamp of when the file was created.
- `file.createdBy`: Identifier of the user who created the file.
- `status`: The status of the file creation process.

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

| Parameter   | Type             | Required | Description                                                   |
|-------------|------------------|----------|---------------------------------------------------------------|
| `fileSetId` | string           | ✓ Yes    | The ID of the FileSet in which to the file is being uploaded. |
| `fileId`    | string           | ✓ Yes    | The ID of the file being uploaded in parts.                   |
| `partNumber`| integer (int64)  | ✓ Yes    | The part number of this file segment. Must be non-negative.   |

### Query Parameters

_None_

### Request Body

Represents a request to upload a part of a file in a split file upload operation.

| Parameter | Type            | Required | Description                                                                |
|-----------|-----------------|----------|----------------------------------------------------------------------------|
| `part`    | string (binary) | No       | The full path destination for the file once the upload is complete.        |


### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
async function uploadFilePart() {
    const url = `/api/files/v1/filesets/57188c8a-eea8-4bc0-ba56-f92a59142634/files/multipart/422468d4-3b99-420a-89ff-e382b0a3f988/part/1234567890`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            part: '(binary data of the file)'
        })
    });
    const data = await response.json();
    console.log(data);
}

uploadFilePart();
```

<!-- type: tab-end -->

<!--
type: tab
title: Python
-->

```python
import requests

url = '/api/files/v1/filesets/57188c8a-eea8-4bc0-ba56-f92a59142634/files/multipart/422468d4-3b99-420a-89ff-e382b0a3f988/part/1234567890'
headers = {
    'Content-Type': 'application/json'
}
data = {
    'part': '(binary data of the file)'
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
curl -X POST "/api/files/v1/filesets/57188c8a-eea8-4bc0-ba56-f92a59142634/files/multipart/422468d4-3b99-420a-89ff-e382b0a3f988/part/1234567890" \
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
```

### Error Responses

| Status Code | Description                                                                                       |
|-------------|---------------------------------------------------------------------------------------------------|
| `400`       | Split file upload part did not match previous data segments.                                      |
| `403`       | Forbidden                                                                                         |
| `404`       | An "initiate split file" request was not performed prior to this request for the given file ID or has already been finalized or aborted. |
| `409`       | Conflict                                                                                          |
| `413`       | Payload Too Large                                                                                 |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled.                          |

---

## Finalize a split file upload.

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/finalize`

Declares that all parts of a split file upload have been submitted and the file can be assembled.

### Path Parameters

| Parameter  | Type   | Required | Description                                                    |
|------------|--------|----------|----------------------------------------------------------------|
| `fileSetId`| string | ✔ Yes    | The ID of the FileSet in which the file has been uploaded.     |
| `fileId`   | string | ✔ Yes    | The ID of the file whose parts have been uploaded.             |

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
const fetch = require('node-fetch');

const fileSetId = "9be3c392-0a3b-4a33-a6c9-72a2a1883c7a";
const fileId = "1b960990-d7ed-46cc-8a69-b3571f84c0fe";

fetch(`https://api.yourservice.com/api/files/v1/filesets/${fileSetId}/files/multipart/${fileId}/finalize`, {
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
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
import requests

fileSetId = "9be3c392-0a3b-4a33-a6c9-72a2a1883c7a"
fileId = "1b960990-d7ed-46cc-8a69-b3571f84c0fe"

url = f"https://api.yourservice.com/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/finalize"

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
# Generate a realistic cURL command
# Use the actual endpoint path
# Include -H headers and -d data as appropriate
fileSetId="9be3c392-0a3b-4a33-a6c9-72a2a1883c7a"
fileId="1b960990-d7ed-46cc-8a69-b3571f84c0fe"

curl -X POST "https://api.yourservice.com/api/files/v1/filesets/${fileSetId}/files/multipart/${fileId}/finalize" \
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

### Error Responses

| Status Code | Description                                                                                                                                    |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| `400`       | Bad Request                                                                                                                                    |
| `403`       | Forbidden                                                                                                                                      |
| `404`       | An "initiate split file" request was not performed prior to this request for the given file ID and/or has not been uploaded any parts, or has already been finalized/aborted. |
| `409`       | Conflict: File already exists at the declared path.                                                                                            |
| `413`       | Payload Too Large                                                                                                                              |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled.                                                                        |

---

## Abort a split file upload.

**Method:** `POST`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/abort`

Aborts an ongoing split file upload process, discarding all uploaded parts.

### Path Parameters

| Parameter  | Type   | Required | Description                                                           |
|------------|--------|----------|-----------------------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet in which the file was being uploaded.           |
| `fileId`    | string | ✔ Yes    | The ID of the file whose upload is to be aborted.                     |

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
// This example uses fetch to abort a split file upload
const fileSetId = "63c8df0c-1b61-4adc-b02f-0fffe47bc3f9";
const fileId = "26175566-ee3e-44d4-a909-6de3ca4868ed";
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

fileSetId = "63c8df0c-1b61-4adc-b02f-0fffe47bc3f9"
fileId = "26175566-ee3e-44d4-a909-6de3ca4868ed"
url = f"/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/abort"
response = requests.post(url, headers={"Content-Type": "application/json"})

if response.status_code == 200:
    print(response.json())
else:
    print("Error:", response.status_code)
```

<!--
type: tab
title: cURL
-->

```bash
# This cURL command aborts a split file upload
curl -X POST "/api/files/v1/filesets/63c8df0c-1b61-4adc-b02f-0fffe47bc3f9/files/multipart/26175566-ee3e-44d4-a909-6de3ca4868ed/abort" -H "Content-Type: application/json"
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

- `file`: An object containing information about the file.
  - `id`: The ID of the file.
  - `path`: The directory path where the file is located.
  - `name`: The name of the file.
  - `fileType`: The type of the file, e.g., DOCUMENT.
  - `contentType`: The MIME type of the file.
  - `size`: The size of the file in bytes.
  - `hash`: The hash of the file (if available).
  - `hashAlgorithm`: The algorithm used for hashing.
  - `downloadUrl`: The URL to download the file (if available).
  - `created`: The timestamp when the file was created.
  - `createdBy`: The ID of the user who created the file.
  - `connectorKey`: The key for the connector (if applicable).
  - `indexStatus`: The status of indexing (if available).
  - `indexReason`: The reason for the indexing result (if applicable).
- `status`: The status of the file, indicated as "FAILED" in this response example.

### Error Responses

| Status Code | Description                                                                                     |
|-------------|-------------------------------------------------------------------------------------------------|
| `400`       | Bad Request                                                                                     |
| `403`       | Forbidden                                                                                       |
| `404`       | An "initiate split file" request was not performed prior to this request for the given file ID or has already been finalized or aborted. |
| `409`       | Conflict                                                                                        |
| `413`       | Payload Too Large                                                                               |

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
// JavaScript fetch example to get access permissions for a FileSet
fetch('https://api.example.com/api/files/v1/filesets/cf335553-b26b-4cbf-8e55-4582eef4ab20/access', {
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
# Python requests example to get access permissions for a FileSet
import requests

url = "https://api.example.com/api/files/v1/filesets/cf335553-b26b-4cbf-8e55-4582eef4ab20/access"

response = requests.get(url, headers={"Content-Type": "application/json"})

print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
# cURL example to get access permissions for a FileSet
curl -X GET "https://api.example.com/api/files/v1/filesets/cf335553-b26b-4cbf-8e55-4582eef4ab20/access" -H "Content-Type: application/json"
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

| Parameter   | Type   | Required | Description                                                |
|-------------|--------|----------|------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet for which to update access permissions. |

### Query Parameters

_None_

### Request Body

Request object for updating access permissions to a file set.

Only the permissions that are explicitly set in the request will be updated.

| Parameter      | Type  | Required | Description                                      |
|----------------|-------|----------|--------------------------------------------------|
| `fileSetAccess` | array | ✓ Yes    | The access permissions for the file set.         |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript fetch example
fetch('https://api.yourdomain.com/api/files/v1/filesets/5378f5d0-6a39-4c6d-9c17-65f266b2b865/access', {
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

url = 'https://api.yourdomain.com/api/files/v1/filesets/5378f5d0-6a39-4c6d-9c17-65f266b2b865/access'
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

response = requests.post(url, json=data, headers=headers)
print(response.json())
```

<!-- type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
# cURL command example
curl -X POST https://api.yourdomain.com/api/files/v1/filesets/5378f5d0-6a39-4c6d-9c17-65f266b2b865/access \
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

| Status Code | Description       |
|-------------|-------------------|
| `400`       | Bad Request       |
| `403`       | Forbidden         |
| `409`       | Conflict          |
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
const requestData = {
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

fetch('/api/files/v1/filesets/search', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(requestData)
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

url = '/api/files/v1/filesets/search'
headers = {
    'Content-Type': 'application/json'
}
data = {
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

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST /api/files/v1/filesets/search \
  -H 'Content-Type: application/json' \
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

- `fileSets`: A list of FileSets matching the search criteria.
  - `id`: The unique identifier of the FileSet.
  - `name`: The name of the FileSet.
  - `description`: Description of the FileSet.
  - `aiEnabled`: Indicates if AI is enabled for the FileSet.
  - `indexStatus`: The current index status (if applicable).
  - `connector`: The data source connector.
  - `created`: The timestamp when the FileSet was created.
  - `createdBy`: ID of the creator.
  - `updated`: The timestamp when the FileSet was last updated.
  - `updatedBy`: ID of the last user who updated the FileSet.
  - `owner`: The owner of the FileSet.
  - `accountId`: The associated account ID.
  - `connectorContext`: Additional context for the connector.
  - `permission`: The permission level associated with the FileSet.
  - `size`: The size of the FileSet in bytes.
  - `fileCount`: The number of files in the FileSet.
- `pageContext`: Information about the pagination.
  - `count`: The number of FileSets returned.
  - `totalCount`: The total number of FileSets matching the criteria.
  - `offset`: The current offset in the pagination.

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

| Parameter   | Type   | Required | Description                                                |
|-------------|--------|----------|------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet for which to retrieve statistics.    |

### Query Parameters

_None_

### Request Body

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const fetch = require('node-fetch');

fetch('https://api.example.com/api/files/v1/filesets/0e90ba67-9928-4903-95ef-623f0be572c0/stats', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

<!--
type: tab
title: Python
-->

```python
import requests

response = requests.get(
    'https://api.example.com/api/files/v1/filesets/0e90ba67-9928-4903-95ef-623f0be572c0/stats',
    headers={'Content-Type': 'application/json'}
)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X GET 'https://api.example.com/api/files/v1/filesets/0e90ba67-9928-4903-95ef-623f0be572c0/stats' \
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

- **imageFileTypeCount**: The number of image files in the FileSet.
- **audioFileTypeCount**: The number of audio files in the FileSet.
- **videoFileTypeCount**: The number of video files in the FileSet.
- **textFileTypeCount**: The number of text files in the FileSet.
- **documentFileTypeCount**: The number of document files in the FileSet.
- **otherFileTypeCount**: The number of other file types in the FileSet.
- **notIndexedCount**: The number of files that have not been indexed.
- **indexQueuedCount**: The number of files waiting to be indexed.
- **indexInProgressCount**: The number of files currently being indexed.
- **indexCompleteCount**: The number of files that have been completely indexed.
- **indexFailedCount**: The number of files that failed to index.
- **indexSkippedCount**: The number of files that were skipped during indexing.

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

| Parameter    | Type   | Required | Description               |
|--------------|--------|----------|---------------------------|
| `fileSetId`  | string | ✓ Yes    | The ID of the FileSet.    |

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
const fetch = require('node-fetch');

const fileSetId = '82f1492f-e7d2-41e7-b628-7a6ad29adfb2';
const path = 'example/path/to/resource';

fetch(`https://yourapi.domain/api/files/v1/filesets/${fileSetId}/path?path=${encodeURIComponent(path)}`, {
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

file_set_id = '82f1492f-e7d2-41e7-b628-7a6ad29adfb2'
path = 'example/path/to/resource'

response = requests.get(
    f'https://yourapi.domain/api/files/v1/filesets/{file_set_id}/path',
    params={'path': path},
    headers={'Content-Type': 'application/json'}
)

print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X GET "https://yourapi.domain/api/files/v1/filesets/82f1492f-e7d2-41e7-b628-7a6ad29adfb2/path?path=example/path/to/resource" -H "Content-Type: application/json"
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

- `id`: The unique identifier of the file or directory.
- `path`: The full path of the file or directory within the FileSet.
- `name`: The name of the file or directory.
- `fileType`: The type of the file (e.g., DOCUMENT).
- `contentType`: The MIME type of the file.
- `size`: The size of the file in bytes.
- `hash`: The hash value of the file content.
- `hashAlgorithm`: The algorithm used for hashing.
- `downloadUrl`: The URL to download the file, empty if not applicable.
- `created`: The timestamp when the file or directory was created.
- `createdBy`: The ID of the user who created the file or directory.
- `connectorKey`: The connector key, null if not applicable.
- `indexStatus`: The index status, null if not applicable.
- `indexReason`: The reason for the index status, null if not applicable.

### Error Responses

| Status Code | Description       |
|-------------|-------------------|
| `400`       | Bad Request       |
| `403`       | Forbidden         |
| `409`       | Conflict          |
| `413`       | Payload Too Large |

---

## Delete File or Directory by Path

**Method:** `DELETE`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/path`

Delete a specific File or Directory within a FileSet using its path.

### Path Parameters

| Parameter   | Type   | Required | Description                                      |
|-------------|--------|----------|--------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File.       |

### Query Parameters

| Parameter | Type   | Required | Description                                                                                    |
|-----------|--------|----------|------------------------------------------------------------------------------------------------|
| `path`    | string | ✓ Yes    | The path to the File or Directory to delete. If a directory is specified, it and its children will be deleted. |

### Request Body



_None_



### Request Example

<!-- type: tab
title: JavaScript
-->

```javascript
// JavaScript example using fetch
fetch('https://api.yourservice.com/api/files/v1/filesets/0731cb44-bf48-48ef-a304-59f49134a4c5/path?path=example/path/to/resource', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => console.log('Deleted successfully, status:', response.status))
.catch(error => console.error('Error:', error));
```

<!-- type: tab-end -->

<!-- type: tab
title: Python
-->

```python
# Python example using requests
import requests

url = 'https://api.yourservice.com/api/files/v1/filesets/0731cb44-bf48-48ef-a304-59f49134a4c5/path'
params = {'path': 'example/path/to/resource'}

response = requests.delete(url, params=params)

print('Deleted successfully, status:', response.status_code)
```

<!-- type: tab-end -->

<!-- type: tab
title: cURL
-->

```bash
# cURL example to perform DELETE request
curl -X DELETE "https://api.yourservice.com/api/files/v1/filesets/0731cb44-bf48-48ef-a304-59f49134a4c5/path?path=example/path/to/resource" \
-H "Content-Type: application/json"
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

Download the contents of a specific file within a FileSet using its path. This endpoint will redirect to the file's download URL or provide the binary file directly.

### Path Parameters

| Parameter   | Type   | Required | Description                                    |
|-------------|--------|----------|------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File.     |

### Query Parameters

| Parameter | Type   | Required | Description                                      |
|-----------|--------|----------|--------------------------------------------------|
| `path`    | string | ✓ Yes    | The path of the file to download within the FileSet. |

### Request Body

_None_

### Request Example

<!-- type: tab -->

#### JavaScript

```javascript
fetch("https://api.example.com/api/files/v1/filesets/66afaee5-28f0-4a25-a388-6275be9a5452/path/download?path=example/path/to/resource", {
    method: 'GET'
})
.then(response => response.blob())
.then(blob => {
    // handle the file blob
});
```

<!-- type: tab-end -->

<!-- type: tab -->

#### Python

```python
import requests

response = requests.get("https://api.example.com/api/files/v1/filesets/66afaee5-28f0-4a25-a388-6275be9a5452/path/download", params={"path": "example/path/to/resource"})

with open('downloaded_file', 'wb') as file:
    file.write(response.content)
```

<!-- type: tab-end -->

<!-- type: tab -->

#### cURL

```bash
curl -X GET "https://api.example.com/api/files/v1/filesets/66afaee5-28f0-4a25-a388-6275be9a5452/path/download?path=example/path/to/resource" -o downloaded_file
```

<!-- type: tab-end -->

### Response

- **Status:** `200`
- **Content:** The response can be a redirect to the file's URL or the binary data of the file itself, indicating a successful operation.

### Error Responses

| Status Code | Description                                                                                 |
|-------------|---------------------------------------------------------------------------------------------|
| `400`       | Bad Request. The server could not understand the request due to invalid syntax or parameters.|
| `403`       | Forbidden. The client does not have access rights to the content.                            |
| `409`       | Conflict. There was a conflict with the request, such as conflicting operations.             |
| `413`       | Payload Too Large. The request entity is larger than the server is willing or able to process.|

---

## Get a File or Directory by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}`

Retrieve a specific File or Directory within a FileSet using its ID.

### Path Parameters

| Parameter   | Type   | Required | Description                                                     |
|-------------|--------|----------|-----------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File or Directory.         |
| `fileId`    | string | ✓ Yes    | The ID of the File or Directory to retrieve.                   |

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

fetch('https://api.example.com/api/files/v1/filesets/c99d5228-8a2c-4f48-b795-edff3bdb4d8f/files/8972efb1-6ecf-48dd-b83d-b38174d96ab5', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
```

<!--
type: tab
title: Python
-->

```python
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in

import requests

url = "https://api.example.com/api/files/v1/filesets/c99d5228-8a2c-4f48-b795-edff3bdb4d8f/files/8972efb1-6ecf-48dd-b83d-b38174d96ab5"

response = requests.get(url, headers={"Content-Type": "application/json"})

if response.ok:
    print(response.json())
else:
    print(f"Error: {response.status_code}")
```

<!--
type: tab
title: cURL
-->

```bash
# Generate a realistic cURL command
# Use the actual endpoint path

curl -X GET "https://api.example.com/api/files/v1/filesets/c99d5228-8a2c-4f48-b795-edff3bdb4d8f/files/8972efb1-6ecf-48dd-b83d-b38174d96ab5" -H "Content-Type: application/json"
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

- `id`: The unique identifier of the file or directory.
- `path`: The path where the file or directory is located.
- `name`: The name of the file.
- `fileType`: Type of the file, e.g., DOCUMENT.
- `contentType`: MIME type of the file.
- `size`: Size of the file in bytes.
- `hash`: Hash value of the file contents.
- `hashAlgorithm`: Algorithm used to create the hash.
- `downloadUrl`: The URL to download the file.
- `created`: Timestamp when the file was created.
- `createdBy`: ID of the user who created the file.
- `connectorKey`: Integration-specific identifier (if any).
- `indexStatus`: Current indexing status of the file.
- `indexReason`: Reason for the index status.

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

| Parameter  | Type   | Required | Description                                                                 |
|------------|--------|----------|-----------------------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File.                                  |
| `fileId`   | string | ✓ Yes    | The ID of the File or Directory to delete. If a Directory is specified, it and its children will be deleted. |

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
// Deleting a file or directory using fetch
fetch('https://example.com/api/files/v1/filesets/0b821d2f-3451-4059-bd4c-a31af66afa23/files/5bc089c8-ecf6-40c9-ab98-8e84f54fe887', {
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
# Deleting a file or directory using requests
import requests

response = requests.delete(
    'https://example.com/api/files/v1/filesets/0b821d2f-3451-4059-bd4c-a31af66afa23/files/5bc089c8-ecf6-40c9-ab98-8e84f54fe887',
    headers={
        'Content-Type': 'application/json'
    }
)
```

<!--
type: tab
title: cURL
-->

```bash
# Deleting a file or directory using cURL
curl -X DELETE 'https://example.com/api/files/v1/filesets/0b821d2f-3451-4059-bd4c-a31af66afa23/files/5bc089c8-ecf6-40c9-ab98-8e84f54fe887' -H 'Content-Type: application/json'
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

Download the contents of a specific file within a file set using its ID. This endpoint will redirect to the file's download URL.

### Path Parameters

| Parameter  | Type   | Required | Description                                |
|------------|--------|----------|--------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the file set containing the file. |
| `fileId`    | string | ✔ Yes    | The ID of the file to download.             |

### Query Parameters

_None_

### Request Body

_None_

### Request Example

<details>  
<summary>JavaScript</summary>

```javascript
const fetch = require('node-fetch');

const fileSetId = 'bc664d89-e01c-4390-b152-43a1ba4dec1e';
const fileId = '83eb7bbc-b9ea-45eb-ad98-4189b7b51916';
const url = `https://api.example.com/api/files/v1/filesets/${fileSetId}/files/${fileId}/download`;

fetch(url, {
  method: 'GET',
  redirect: 'follow'
})
  .then(response => {
    if (response.status === 302) {
      return response.url; // Get the redirect URL
    }
  })
  .then(downloadUrl => console.log('Redirected to download URL:', downloadUrl))
  .catch(error => console.error('Error:', error));
```

</details>  

<details>  
<summary>Python</summary>

```python
import requests

fileSetId = 'bc664d89-e01c-4390-b152-43a1ba4dec1e'
fileId = '83eb7bbc-b9ea-45eb-ad98-4189b7b51916'
url = f"https://api.example.com/api/files/v1/filesets/{fileSetId}/files/{fileId}/download"

response = requests.get(url, allow_redirects=True)

if response.status_code == 302:
    download_url = response.url
    print('Redirected to download URL:', download_url)
else:
    print('Error:', response.status_code)
```

</details>  

<details>  
<summary>cURL</summary>

```bash
curl -L -X GET "https://api.example.com/api/files/v1/filesets/bc664d89-e01c-4390-b152-43a1ba4dec1e/files/83eb7bbc-b9ea-45eb-ad98-4189b7b51916/download"
```

</details>  

### Response

**Status:** `200`

- The request was successful, and the file download process has been initiated.

**Example Response:**

For status 302:

```json
{
  "message": "File download initiated successfully.",
  "redirectUrl": "https://example.com/file/path/to/download/file.ext"
}
```

### Error Responses

| Status Code | Description                          |
|-------------|--------------------------------------|
| `302`       | File download initiated successfully.|
| `400`       | Bad Request. The request was invalid or cannot be otherwise served. |
| `403`       | Forbidden. The client does not have access rights to the content. |
| `409`       | Conflict. There was a conflict with the request. |
| `413`       | Payload Too Large. The request is larger than the server is willing or able to process. |

In case of errors, verify the correctness of the provided IDs or ensure you have sufficient permissions to access the file.

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

| Parameter | Type   | Required | Description                            |
|-----------|--------|----------|----------------------------------------|
| `token`   | string | ✓ Yes    | The download token for authorization.  |

### Request Body

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://example.com/api/files/v1/filesets/b5429e3e-cef6-4421-9b8f-1a2e5ea10acb/files/00d13853-fc81-42ab-9934-aa60c36c3af8/content?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...', {
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
import requests

url = 'https://example.com/api/files/v1/filesets/b5429e3e-cef6-4421-9b8f-1a2e5ea10acb/files/00d13853-fc81-42ab-9934-aa60c36c3af8/content'
params = {
    'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
}
headers = {
    'Content-Type': 'application/json'
}

response = requests.get(url, headers=headers, params=params)
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
curl -X GET "https://example.com/api/files/v1/filesets/b5429e3e-cef6-4421-9b8f-1a2e5ea10acb/files/00d13853-fc81-42ab-9934-aa60c36c3af8/content?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." -H "Content-Type: application/json"
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

| Status Code | Description           |
|-------------|-----------------------|
| `400`       | Bad Request           |
| `403`       | Forbidden             |
| `409`       | Conflict              |
| `413`       | Payload Too Large     |

---

