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
| `name`       | string  | ✓ Yes    | The name for the file set.                                   |
| `description`| string  | No       | A description for the file set.                              |
| `connector`  | string  | No       | The connector that powers the file set. Allowed values: `DOMO`, `CONFLUENCE`, `GITHUB`, `GOOGLE_DRIVE`, `S3` |
| `aiEnabled`  | boolean | No       | Indicates whether AI features are enabled for the file set.  |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://api.example.com/api/files/v1/filesets', {
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

url = 'https://api.example.com/api/files/v1/filesets'
headers = {
    'Content-Type': 'application/json'
}
data = {
    "name": "Policies (2025)",
    "description": "Location for all new and updated policies for FY2025",
    "aiEnabled": False,
    "connector": "DOMO"
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

| Parameter  | Type   | Required | Description                        |
|------------|--------|----------|------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet to retrieve. |

### Query Parameters

_None_

### Request Body

_None_

### Request Example

<!-- type: tab title: JavaScript -->

```javascript
// Generate a realistic fetch/axios example using the request body example
// Use the actual endpoint path with any path parameters filled in
// Include proper headers (Content-Type: application/json if body exists)
const axios = require('axios');

axios.get('https://api.example.com/api/files/v1/filesets/e1239185-0325-4113-b7ad-84b508d1c6e9')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

<!-- type: tab title: Python -->

```python
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
import requests

response = requests.get('https://api.example.com/api/files/v1/filesets/e1239185-0325-4113-b7ad-84b508d1c6e9')

if response.status_code == 200:
    print(response.json())
else:
    print(f'Error: {response.status_code}')
```

<!-- type: tab title: cURL -->

```bash
# Generate a realistic cURL command
# Use the actual endpoint path
# Include -H headers and -d data as appropriate
curl -X GET 'https://api.example.com/api/files/v1/filesets/e1239185-0325-4113-b7ad-84b508d1c6e9'
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

| Status Code | Description       |
|-------------|-------------------|
| `400`       | Bad Request       |
| `403`       | Forbidden         |
| `409`       | Conflict          |
| `413`       | Payload Too Large |

---

## Update an existing FileSet

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}`

Update the details of an existing FileSet. Only fields that are not null in the request will be updated.

### Path Parameters

| Parameter   | Type   | Required | Description                       |
|-------------|--------|----------|-----------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to update.  |

### Query Parameters

_None_

### Request Body

Represents a request to update a file set.  
At least one of the fields must be provided to update the file set.

| Parameter    | Type    | Required | Description                                                                 |
|--------------|---------|----------|-----------------------------------------------------------------------------|
| `name`       | string  | No       | The name with which to update the file set's name. If not provided, the name will remain unchanged. |
| `description`| string  | No       | Optional description with which to update the file set's description. If not provided, the description will remain unchanged. |
| `aiEnabled`  | boolean | No       | Optional flag to enable or disable AI features for the file set.            |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Generate a realistic fetch/axios example using the request body example
// Use the actual endpoint path with any path parameters filled in
// Include proper headers (Content-Type: application/json if body exists)
{
  const axios = require('axios');

  const config = {
    method: 'post',
    url: 'https://example.com/api/files/v1/filesets/11167e22-a487-488e-9f35-0ee32f1b5b5a',
    headers: { 
      'Content-Type': 'application/json'
    },
    data: {
      "name": "Policies (FY25)",
      "description": "Repository for new policies created ONLY in FY2025"
    }
  };

  axios(config)
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error));
}
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

url = 'https://example.com/api/files/v1/filesets/11167e22-a487-488e-9f35-0ee32f1b5b5a'
headers = {
    'Content-Type': 'application/json'
}
data = {
    "name": "Policies (FY25)",
    "description": "Repository for new policies created ONLY in FY2025"
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
curl -X POST 'https://example.com/api/files/v1/filesets/11167e22-a487-488e-9f35-0ee32f1b5b5a' \
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

| Status Code | Description        |
|-------------|--------------------|
| `400`       | Bad Request        |
| `403`       | Forbidden          |
| `409`       | Conflict           |
| `413`       | Payload Too Large  |

---

## Delete a FileSet by ID

**Method:** `DELETE`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}`

Delete a specific FileSet using its ID.

### Path Parameters

| Parameter   | Type   | Required | Description                          |
|-------------|--------|----------|--------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to delete.     |

### Query Parameters

_None_

### Request Body

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const fileSetId = 'a444e2c6-af43-4a9d-ba2b-a87646a2c8ac';

fetch(`https://api.example.com/api/files/v1/filesets/${fileSetId}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if(response.status === 204) {
    console.log('FileSet deleted successfully.');
  }
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

fileSetId = 'a444e2c6-af43-4a9d-ba2b-a87646a2c8ac'
response = requests.delete(f'https://api.example.com/api/files/v1/filesets/{fileSetId}', headers={'Content-Type': 'application/json'})

if response.status_code == 204:
    print('FileSet deleted successfully.')
```

<!--
type: tab-end
-->

<!--
type: tab
title: cURL
-->

```bash
curl -X DELETE 'https://api.example.com/api/files/v1/filesets/a444e2c6-af43-4a9d-ba2b-a87646a2c8ac' -H 'Content-Type: application/json'
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

| Parameter  | Type   | Required | Description                          |
|------------|--------|----------|--------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to query.      |

### Query Parameters

_None_

### Request Body

Used to query a file set for the top K results based on the provided query.

| Parameter        | Type           | Required | Description                                                                              |
|------------------|----------------|----------|------------------------------------------------------------------------------------------|
| `query`          | string         | ✔ Yes    | The query string to match against file contents within the file set.                      |
| `topK`           | integer (int32)| No       | The number of top results to return based on the query match. Defaults to 1.              |
| `pathPrefixFilter` | string       | No       | An optional prefix filter for the file paths to narrow down the search results.           |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript request example using fetch
fetch('https://api.example.com/api/files/v1/filesets/db8326f7-1270-488c-b101-45daa0d385f7/query', {
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
# Python request example using requests
import requests

url = 'https://api.example.com/api/files/v1/filesets/db8326f7-1270-488c-b101-45daa0d385f7/query'
headers = {
    'Content-Type': 'application/json'
}
data = {
    "query": "benefit",
    "pathPrefixFilter": "sample/directory/path",
    "topK": 2
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
# cURL command example
curl -X POST 'https://api.example.com/api/files/v1/filesets/db8326f7-1270-488c-b101-45daa0d385f7/query' \
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

| Parameter  | Type   | Required | Description                                                |
|------------|--------|----------|------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet for which to update the owner.      |

### Query Parameters

_None_

### Request Body

Represents a request to transfer ownership of a file set.

Other users may be granted ownership level permissions, but only one user may be the sole owner of a file set.

| Parameter | Type            | Required | Description                                           |
|-----------|-----------------|----------|-------------------------------------------------------|
| `userId`  | integer (int64) | ✓ Yes    | The ID of the user that will assume ownership.        |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const fileSetId = "a1cd0506-c4c6-4905-83eb-55a6bac1fea8";

fetch(`https://api.example.com/api/files/v1/filesets/${fileSetId}/ownership`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ userId: 109 })
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

fileSetId = "a1cd0506-c4c6-4905-83eb-55a6bac1fea8"
url = f"https://api.example.com/api/files/v1/filesets/{fileSetId}/ownership"
headers = {"Content-Type": "application/json"}
data = {"userId": 109}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
fileSetId="a1cd0506-c4c6-4905-83eb-55a6bac1fea8"
curl -X POST "https://api.example.com/api/files/v1/filesets/$fileSetId/ownership" \
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

| Parameter   | Type   | Required | Description                                          |
|-------------|--------|----------|------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet in which to create the File.   |

### Query Parameters

_None_

### Request Body

Represents a request to upload a file or create a directory.

| Parameter      | Type            | Required | Description                                                                                                                                   |
|----------------|-----------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| `file`         | string (binary) | No       | The file to be uploaded. Leave null if creating a directory.                                                                                  |
| `directoryPath`| string          | No       | The directory path of the uploaded file, or the path of the created directory if no file is provided. Defaults to an empty string, i.e., the root directory, if not specified. Note: An empty string is not valid when intentionally creating a directory. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const axios = require('axios');
const fs = require('fs');

const options = {
  method: 'POST',
  url: 'https://example.com/api/files/v1/filesets/1a11d65d-ba07-4dd4-a649-2eb05aa1a27c/files',
  headers: {'Content-Type': 'application/json'},
  data: {
    file: fs.readFileSync('path/to/your/file'),
    directoryPath: 'sample/directory/path'
  }
};

axios.request(options).then(response => {
  console.log(response.data);
}).catch(error => {
  console.error(error);
});
```

<!--
type: tab-end -->

<!--
type: tab
title: Python
-->

```python
import requests

url = "https://example.com/api/files/v1/filesets/1a11d65d-ba07-4dd4-a649-2eb05aa1a27c/files"
payload = {
    "file": open("path/to/your/file", "rb").read(),
    "directoryPath": "sample/directory/path"
}
headers = {
    "Content-Type": "application/json"
}
response = requests.post(url, json=payload, headers=headers)
print(response.json())
```

<!--
type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "https://example.com/api/files/v1/filesets/1a11d65d-ba07-4dd4-a649-2eb05aa1a27c/files" \
-H "Content-Type: application/json" \
-d '{
  "file": "(binary data of the file)",
  "directoryPath": "sample/directory/path"
}'
```

<!--
type: tab-end -->

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
- `path`: The path where the file or directory is located.
- `name`: The name of the file or directory.
- `size`: The size of the file; null for directories.
- `created`: The timestamp when the file or directory was created.
- `createdBy`: The ID of the user who created the file or directory.
- `fileType`: The type of the created item, which can be `FILE` or `DIRECTORY`.

### Error Responses

| Status Code | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| `400`       | Bad Request                                                                  |
| `403`       | Forbidden                                                                    |
| `409`       | Conflict: File already exists at the specified path and client does not have overwrite permissions. |
| `413`       | Payload Too Large                                                            |

---

## List Files and Directories for a FileSet

**Method:** `POST`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/search`

Retrieve a paginated list of Files within a specific FileSet based on search criteria.

### Path Parameters

| Parameter   | Type   | Required | Description                                |
|-------------|--------|----------|--------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to search within.    |

### Query Parameters

| Parameter          | Type           | Required | Description                                                                       |
|--------------------|----------------|----------|-----------------------------------------------------------------------------------|
| `directoryPath`    | string         | No       | The path to the directory within the FileSet, if applicable.                      |
| `immediateChildren`| boolean        | No       | Whether to list only immediate children of the specified directory. (Default: `False`) |
| `limit`            | integer (int32)| No       | The maximum number of Files to return. (Default: `100`)                           |
| `next`             | string         | No       | The pagination token for the next set of results.                                 |

### Request Body

Request object for searching with specific filters and sorting options.

| Parameter    | Type  | Required | Description                                     |
|--------------|-------|----------|-------------------------------------------------|
| `fieldSort`  | array | No       | A list of field sort criteria to apply to the search. |
| `filters`    | array | No       | A list of filters to apply to the search.       |
| `dateFilters`| array | No       | A list of date filters to apply to the search.  |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const fetch = require('node-fetch');

const data = {
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
};

fetch('https://api.example.com/api/files/v1/filesets/f9b75e50-6587-42a7-bc65-63cf7866f704/files/search', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(res => res.json())
.then(console.log)
.catch(console.error);
```

<!--
type: tab
title: Python
-->

```python
import requests

url = 'https://api.example.com/api/files/v1/filesets/f9b75e50-6587-42a7-bc65-63cf7866f704/files/search'
headers = {'Content-Type': 'application/json'}
data = {
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

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST 'https://api.example.com/api/files/v1/filesets/f9b75e50-6587-42a7-bc65-63cf7866f704/files/search' \
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

| Parameter  | Type   | Required | Description                                              |
|------------|--------|----------|----------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet in which to create the File.       |

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
// Generate a realistic fetch/axios example using the request body example
// Use the actual endpoint path with any path parameters filled in
// Include proper headers (Content-Type: application/json if body exists)
fetch('https://api.example.com/api/files/v1/filesets/33d10b22-bd47-4b25-a703-c32e15943ed8/files/multipart', {
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
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
import requests
import json

url = 'https://api.example.com/api/files/v1/filesets/33d10b22-bd47-4b25-a703-c32e15943ed8/files/multipart'
headers = {
    'Content-Type': 'application/json'
}
data = {
    "path": "example/path/to/resource"
}

response = requests.post(url, headers=headers, data=json.dumps(data))
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
curl -X POST 'https://api.example.com/api/files/v1/filesets/33d10b22-bd47-4b25-a703-c32e15943ed8/files/multipart' \
-H 'Content-Type: application/json' \
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

| Status Code | Description                                                                |
|-------------|----------------------------------------------------------------------------|
| `400`       | Bad Request                                                                |
| `403`       | Forbidden                                                                  |
| `409`       | Conflict: File already exists at the specified path.                        |
| `413`       | Payload Too Large                                                          |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled.   |

---

## Submit a part of a file for upload.

**Method:** `POST`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/part/{partNumber}`

Allows submitting a file in stages to create a new file within a FileSet.

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fileSetId` | string | ✓ Yes | The ID of the FileSet in which to the file is being uploaded. |
| `fileId` | string | ✓ Yes | The ID of the file being uploaded in parts. |
| `partNumber` | integer (int64) | ✓ Yes | The part number of this file segment. Must be non-negative. |

### Query Parameters

_None_

### Request Body

Represents a request to upload a part of a file in a split file upload operation.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `part` | string (binary) | No | The full path destination for the file once the upload is complete. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('http://example.com/api/files/v1/filesets/c56bf8c6-a153-4142-8464-cd06e0fd1fc5/files/multipart/a9b67500-725a-4426-a841-f0a754974da8/part/1234567890', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    part: '(binary data)',
  }),
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
import requests

url = "http://example.com/api/files/v1/filesets/c56bf8c6-a153-4142-8464-cd06e0fd1fc5/files/multipart/a9b67500-725a-4426-a841-f0a754974da8/part/1234567890"
headers = {
    "Content-Type": "application/json"
}
data = {
    "part": "(binary data)"
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
curl -X POST "http://example.com/api/files/v1/filesets/c56bf8c6-a153-4142-8464-cd06e0fd1fc5/files/multipart/a9b67500-725a-4426-a841-f0a754974da8/part/1234567890" \
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

| Status Code | Description |
|-------------|-------------|
| `400` | Split file upload part did not match previous data segments. |
| `403` | Forbidden |
| `404` | An "initiate split file" request was not performed prior to this request for the given file ID or has already been finalized or aborted. |
| `409` | Conflict |
| `413` | Payload Too Large |
| `422` | Unprocessable Entity: Request for the split file could not be fulfilled. |

---

## Finalize a split file upload.

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/finalize`

Declares that all parts of a split file upload have been submitted and the file can be assembled.

### Path Parameters

| Parameter  | Type   | Required | Description                                                         |
|------------|--------|----------|---------------------------------------------------------------------|
| `fileSetId`| string | ✓ Yes    | The ID of the FileSet in which the file has been uploaded.          |
| `fileId`   | string | ✓ Yes    | The ID of the file whose parts have been uploaded.                  |

### Query Parameters

_None_

### Request Body

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Finalize the file upload using fetch
const url = 'https://api.example.com/api/files/v1/filesets/4b3e3f63-0081-4346-b025-750fe43c59a1/files/multipart/ba80fff2-1385-4f77-85cf-35ed391c9fc4/finalize';

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

<!-- type: tab-end -->

<!--
type: tab
title: Python
-->

```python
# Finalize the file upload using requests
import requests

url = 'https://api.example.com/api/files/v1/filesets/4b3e3f63-0081-4346-b025-750fe43c59a1/files/multipart/ba80fff2-1385-4f77-85cf-35ed391c9fc4/finalize'
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
# Finalize the file upload using cURL
curl -X POST \
  'https://api.example.com/api/files/v1/filesets/4b3e3f63-0081-4346-b025-750fe43c59a1/files/multipart/ba80fff2-1385-4f77-85cf-35ed391c9fc4/finalize' \
  -H 'Content-Type: application/json'
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

- `file.id`: The unique identifier for the finalized file.
- `file.path`: The directory path where the file is stored.
- `file.name`: The name of the file.
- `file.fileType`: The type/category of the file.
- `file.contentType`: The MIME type of the file.
- `file.size`: The size of the file in bytes.
- `file.hash`: The cryptographic hash of the file.
- `file.hashAlgorithm`: The algorithm used to compute the hash.
- `file.downloadUrl`: The URL to download the file.
- `file.created`: The timestamp of when the file was created.
- `file.createdBy`: The identifier of the user who created the file.

### Error Responses

| Status Code | Description                                                                                           |
|-------------|-------------------------------------------------------------------------------------------------------|
| `400`       | Bad Request                                                                                           |
| `403`       | Forbidden                                                                                             |
| `404`       | An "initiate split file" request was not performed prior to this request for the given file ID and/or has not been uploaded any parts, or has already been finalized/aborted. |
| `409`       | Conflict: File already exists at the declared path.                                                   |
| `413`       | Payload Too Large                                                                                     |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled.                              |

---

## Abort a split file upload.

**Method:** `POST`  
**Endpoint:** `https://api.example.com/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/abort`

Aborts an ongoing split file upload process, discarding all uploaded parts.

### Path Parameters

| Parameter  | Type   | Required | Description                                                          |
|------------|--------|----------|----------------------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet in which the file was being uploaded.         |
| `fileId`    | string | ✔ Yes    | The ID of the file whose upload is to be aborted.                   |

### Query Parameters

_None_

### Request Body

This endpoint does not expect a request body. Parameters need to be provided in the path.

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const axios = require('axios');

const fileSetId = '9adf4961-71f1-489f-90f4-e9e49af5cbd5';
const fileId = 'd921a0b6-4e73-4659-bc13-d02c5c3e4a92';
const endpoint = `https://api.example.com/api/files/v1/filesets/${fileSetId}/files/multipart/${fileId}/abort`;

axios.post(endpoint, {}, { headers: { 'Content-Type': 'application/json' } })
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```

<!--
type: tab
title: Python
-->

```python
import requests

fileSetId = '9adf4961-71f1-489f-90f4-e9e49af5cbd5'
fileId = 'd921a0b6-4e73-4659-bc13-d02c5c3e4a92'
endpoint = f'https://api.example.com/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/abort'

response = requests.post(endpoint, headers={'Content-Type': 'application/json'})

print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "https://api.example.com/api/files/v1/filesets/9adf4961-71f1-489f-90f4-e9e49af5cbd5/files/multipart/d921a0b6-4e73-4659-bc13-d02c5c3e4a92/abort" \
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

### Error Responses

- `400 Bad Request`: The request was malformed or contained invalid parameters.
- `403 Forbidden`: Access is denied due to insufficient permissions.
- `404 Not Found`: An "initiate split file" request was not performed prior to this request for the given file ID, or it has already been finalized or aborted.
- `409 Conflict`: The request could not be completed due to a conflict with the current state of the resource.
- `413 Payload Too Large`: The request entity is larger than the server is willing or able to process.

---

## Get FileSet Access Permissions

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/access`

Retrieve the access permissions for a specific FileSet.

### Path Parameters

| Parameter  | Type   | Required | Description                                                              |
|------------|--------|----------|--------------------------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet for which to retrieve access information.  |

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
// JavaScript example using fetch
const fileSetId = '5108a51e-cd5c-4524-950a-cda612a89e59';

fetch(`/api/files/v1/filesets/${fileSetId}/access`, {
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
# Python example using requests
import requests

fileSetId = '5108a51e-cd5c-4524-950a-cda612a89e59'
url = f'/api/files/v1/filesets/{fileSetId}/access'

response = requests.get(url, headers={'Content-Type': 'application/json'})

if response.status_code == 200:
    print(response.json())
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
# cURL command example
curl --request GET \
  --url /api/files/v1/filesets/5108a51e-cd5c-4524-950a-cda612a89e59/access \
  --header 'Content-Type: application/json'
```

<!--
type: tab-end -->

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

| Parameter   | Type   | Required | Description                                                        |
|-------------|--------|----------|--------------------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet for which to update access permissions.      |

### Query Parameters

_None_

### Request Body

Request object for updating access permissions to a file set.

Only the permissions that are explicitly set in the request will be updated.

| Parameter        | Type  | Required | Description                              |
|------------------|-------|----------|------------------------------------------|
| `fileSetAccess`  | array | ✔ Yes    | The access permissions for the file set. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript request example using fetch
const fileSetId = "d90ad768-6c1c-4a63-8742-a385c33f9ac2";
fetch(`/api/files/v1/filesets/${fileSetId}/access`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    fileSetAccess: [
      {
        entityId: 42,
        entityType: 'GROUP',
        permission: 'EDIT',
      },
    ],
  }),
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
# Python request example using requests
import requests

file_set_id = "d90ad768-6c1c-4a63-8742-a385c33f9ac2"
url = f"/api/files/v1/filesets/{file_set_id}/access"
headers = {
    'Content-Type': 'application/json',
}
data = {
    "fileSetAccess": [
        {
            "entityId": 42,
            "entityType": "GROUP",
            "permission": "EDIT",
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
# cURL request example
curl -X POST "/api/files/v1/filesets/d90ad768-6c1c-4a63-8742-a385c33f9ac2/access" \
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

- `fileSetId`: Identifier of the file set.
- `fileSetAccess`: List of access permissions applied to the file set.
  - `entityId`: Identifier of the entity (user or group).
  - `entityType`: Type of the entity, either `USER` or `GROUP`.
  - `permission`: The access level granted, such as `EDIT` or `OWNER`.

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
fetch('/api/files/v1/filesets/search', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    fieldSort: [
      {
        field: 'name',
        order: 'ASC'
      }
    ],
    filters: [
      {
        field: 'owner',
        value: [27],
        not: false,
        operator: 'EQUALS'
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

url = '/api/files/v1/filesets/search'
headers = {'Content-Type': 'application/json'}
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
curl -X POST '/api/files/v1/filesets/search' \
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

| Parameter   | Type   | Required | Description                                               |
|-------------|--------|----------|-----------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet for which to retrieve statistics. |

### Query Parameters

_None_

### Request Body

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript request example using fetch

const fileSetId = "4819d303-10c0-4d9b-82e3-a0de99a2dcb3";
fetch(`/api/files/v1/filesets/${fileSetId}/stats`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
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
# Python request example using requests

import requests

fileSetId = "4819d303-10c0-4d9b-82e3-a0de99a2dcb3"
response = requests.get(f'/api/files/v1/filesets/{fileSetId}/stats', headers={'Content-Type': 'application/json'})

print(response.json())
```

<!-- type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
# cURL request example

curl -X GET "/api/files/v1/filesets/4819d303-10c0-4d9b-82e3-a0de99a2dcb3/stats" -H "Content-Type: application/json"
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

- `imageFileTypeCount`: Number of image files in the FileSet.
- `audioFileTypeCount`: Number of audio files in the FileSet.
- `videoFileTypeCount`: Number of video files in the FileSet.
- `textFileTypeCount`: Number of text files in the FileSet.
- `documentFileTypeCount`: Number of document files in the FileSet.
- `otherFileTypeCount`: Number of other file types in the FileSet.
- `notIndexedCount`: Number of files not indexed yet.
- `indexQueuedCount`: Number of files queued for indexing.
- `indexInProgressCount`: Number of files currently being indexed.
- `indexCompleteCount`: Number of files index completed.
- `indexFailedCount`: Number of files that failed to index.
- `indexSkippedCount`: Number of files skipped during indexing.

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

| Parameter   | Type   | Required | Description              |
|-------------|--------|----------|--------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet.   |

### Query Parameters

| Parameter | Type   | Required | Description                                          |
|-----------|--------|----------|------------------------------------------------------|
| `path`    | string | ✓ Yes    | The path to the File or Directory within the FileSet.|

### Request Body

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript example using fetch
fetch('https://api.example.com/api/files/v1/filesets/70fd00fc-72b1-44ed-a5ac-a87a5de7e42b/path?path=example/path/to/resource', {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
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
# Python example using requests
import requests

headers = {
    'Accept': 'application/json',
}

response = requests.get(
    'https://api.example.com/api/files/v1/filesets/70fd00fc-72b1-44ed-a5ac-a87a5de7e42b/path',
    headers=headers,
    params={'path': 'example/path/to/resource'},
)

print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
# cURL command
curl -X GET 'https://api.example.com/api/files/v1/filesets/70fd00fc-72b1-44ed-a5ac-a87a5de7e42b/path?path=example/path/to/resource' -H 'Accept: application/json'
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
- `path`: The path of the file within the file set.
- `name`: The name of the file.
- `fileType`: The type of file (e.g., DOCUMENT).
- `contentType`: The MIME type of the file.
- `size`: The size of the file in bytes.
- `hash`: The hash of the file.
- `hashAlgorithm`: The hash algorithm used.
- `downloadUrl`: URL for downloading the file.
- `created`: The timestamp when the file was created.
- `createdBy`: The ID of the creator.
- `connectorKey`: Key for the connector (if applicable).
- `indexStatus`: The indexing status.
- `indexReason`: The reason for the indexing status.

### Error Responses

| Status Code | Description      |
|-------------|------------------|
| `400`       | Bad Request      |
| `403`       | Forbidden        |
| `409`       | Conflict         |
| `413`       | Payload Too Large|

---

## Delete File or Directory by Path

**Method:** `DELETE`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/path`

Delete a specific File or Directory within a FileSet using its path.

### Path Parameters

| Parameter    | Type   | Required | Description                                       |
|--------------|--------|----------|---------------------------------------------------|
| `fileSetId`  | string | ✔ Yes    | The ID of the FileSet containing the File.        |

### Query Parameters

| Parameter | Type   | Required | Description                                                                                            |
|-----------|--------|----------|--------------------------------------------------------------------------------------------------------|
| `path`    | string | ✔ Yes    | The path to the File or Directory to delete. If a Directory is specified, it and its children will be deleted. |

### Request Body

N/A

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch("https://api.example.com/api/files/v1/filesets/52e881ad-e2b8-45b8-8bea-8be5ca1f7376/path?path=example/path/to/resource", {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json"
  }
})
.then(response => {
  if (response.status === 204) {
    console.log("File or directory deleted successfully.");
  } else {
    console.log("Failed to delete. Status code:", response.status);
  }
})
.catch(error => console.error("Error:", error));
```

<!--
type: tab
title: Python
-->

```python
import requests

url = "https://api.example.com/api/files/v1/filesets/52e881ad-e2b8-45b8-8bea-8be5ca1f7376/path"
params = {
    "path": "example/path/to/resource"
}

response = requests.delete(url, params=params)

if response.status_code == 204:
    print("File or directory deleted successfully.")
else:
    print(f"Failed to delete. Status code: {response.status_code}")
```

<!--
type: tab
title: cURL
-->

```bash
curl -X DELETE "https://api.example.com/api/files/v1/filesets/52e881ad-e2b8-45b8-8bea-8be5ca1f7376/path?path=example/path/to/resource" \
-H "Content-Type: application/json"
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

| Parameter   | Type   | Required | Description                                      |
|-------------|--------|----------|--------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File.       |

### Query Parameters

| Parameter | Type   | Required | Description                                           |
|-----------|--------|----------|-------------------------------------------------------|
| `path`    | string | ✓ Yes    | The path of the File to download within the FileSet.  |

### Request Body

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://api.example.com/api/files/v1/filesets/db659449-c14e-41bf-9482-f237d64eea79/path/download?path=example/path/to/resource', {
  method: 'GET'
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

<!--
type: tab
title: Python
-->

```python
import requests

url = "https://api.example.com/api/files/v1/filesets/db659449-c14e-41bf-9482-f237d64eea79/path/download"
params = {
    "path": "example/path/to/resource"
}

response = requests.get(url, params=params)

if response.status_code == 200:
    print(response.json())
else:
    print(f"Error: {response.status_code}")
```

<!-- type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
curl -X GET "https://api.example.com/api/files/v1/filesets/db659449-c14e-41bf-9482-f237d64eea79/path/download?path=example/path/to/resource"
```

<!-- type: tab-end -->

### Response

**Status:** `200`

```json
{
  "fileUrl": "https://files.example.com/download/xyz123",
  "fileName": "example.txt",
  "fileSize": 123456
}
```

### Error Responses

| Status Code | Description         |
|-------------|---------------------|
| `400`       | Bad Request.        |
| `403`       | Forbidden.          |
| `409`       | Conflict.           |
| `413`       | Payload Too Large.  |

---

## Get a File or Directory by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}`

Retrieve a specific File or Directory within a FileSet using its ID.

### Path Parameters

| Parameter   | Type   | Required | Description                                                           |
|-------------|--------|----------|-----------------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File or Directory.               |
| `fileId`    | string | ✓ Yes    | The ID of the File or Directory to retrieve.                         |

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

axios.get('https://api.example.com/api/files/v1/filesets/a2c39924-dafd-4b60-9998-44b5e5e8c9c6/files/622166df-cbdb-44c2-941e-e8246ac37c0e')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

<!-- type: tab-end -->

<!--
type: tab
title: Python
-->

```python
import requests

response = requests.get('https://api.example.com/api/files/v1/filesets/a2c39924-dafd-4b60-9998-44b5e5e8c9c6/files/622166df-cbdb-44c2-941e-e8246ac37c0e')

if response.ok:
    print(response.json())
else:
    print(response.status_code, response.text)
```

<!-- type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
curl -X GET 'https://api.example.com/api/files/v1/filesets/a2c39924-dafd-4b60-9998-44b5e5e8c9c6/files/622166df-cbdb-44c2-941e-e8246ac37c0e'
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

- `id`: Unique identifier of the file or directory.
- `path`: File path where the document is located.
- `name`: The name of the file or directory.
- `fileType`: Type of the file, e.g., DOCUMENT.
- `contentType`: MIME type of the file.
- `size`: Size of the file in bytes.
- `hash`: SHA-256 checksum of the file.
- `hashAlgorithm`: The algorithm used for hashing.
- `downloadUrl`: URL to download the file.
- `created`: Timestamp when the file was created.
- `createdBy`: ID of the user who created the file.
- `connectorKey`: Optional connector key if applicable.
- `indexStatus`: Status of file indexing if available.
- `indexReason`: Reason for the current index status if available.

### Error Responses

| Status Code | Description          |
|-------------|----------------------|
| `400`       | Bad Request          |
| `403`       | Forbidden            |
| `409`       | Conflict             |
| `413`       | Payload Too Large    |

---

## Delete a File or Directory by ID

**Method:** `DELETE`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}`

Delete a specific File or Directory within a FileSet using its ID.

### Path Parameters

| Parameter   | Type   | Required | Description                                                                                     |
|-------------|--------|----------|-------------------------------------------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File.                                                      |
| `fileId`    | string | ✓ Yes    | The ID of the File or Directory to delete. If a Directory is specified, it and its children will be deleted. |

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
fetch('/api/files/v1/filesets/bdca80d5-a47f-405e-b803-91fd5e3f3e2f/files/079f5cac-1be7-4604-8aaf-56e088ab2b99', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
}).then(response => {
  if (response.status === 204) {
    console.log('File or directory deleted successfully.');
  } else {
    console.error('Error deleting the file or directory:', response.statusText);
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

url = '/api/files/v1/filesets/bdca80d5-a47f-405e-b803-91fd5e3f3e2f/files/079f5cac-1be7-4604-8aaf-56e088ab2b99'
headers = {
    'Content-Type': 'application/json'
}

response = requests.delete(url, headers=headers)

if response.status_code == 204:
    print('File or directory deleted successfully.')
else:
    print('Error deleting the file or directory:', response.status_code)
```

<!--
type: tab
title: cURL
-->

```bash
# Generate a realistic cURL command
# Use the actual endpoint path
# Include -H headers and -d data as appropriate
curl -X DELETE '/api/files/v1/filesets/bdca80d5-a47f-405e-b803-91fd5e3f3e2f/files/079f5cac-1be7-4604-8aaf-56e088ab2b99' \
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

## Download a File by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}/download`

Download the contents of a specific file within a FileSet using its ID. This endpoint redirects to the file's download URL.

### Path Parameters

| Parameter   | Type   | Required | Description                                  |
|-------------|--------|----------|----------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the file.   |
| `fileId`    | string | ✓ Yes    | The ID of the file to download.              |

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
const fileSetId = '5075326c-9f35-4a4f-b590-edc6e4f7ccbb';
const fileId = 'a06ec036-7b1e-462f-a7df-0e046a6889a5';

fetch(`https://api.example.com/api/files/v1/filesets/${fileSetId}/files/${fileId}/download`, {
  method: 'GET'
})
  .then(response => {
    if (response.ok) {
      // Handle the file download logic
      console.log('File download initiated');
    } else {
      console.error('Failed to download file');
    }
  });
```

<!--
type: tab
title: Python
-->

```python
import requests

file_set_id = '5075326c-9f35-4a4f-b590-edc6e4f7ccbb'
file_id = 'a06ec036-7b1e-462f-a7df-0e046a6889a5'
url = f'https://api.example.com/api/files/v1/filesets/{file_set_id}/files/{file_id}/download'

response = requests.get(url)

if response.status_code == 302:
    # Handle the file download logic
    print('File download initiated')
else:
    print('Failed to download file')
```

<!--
type: tab
title: cURL
-->

```bash
curl -X GET "https://api.example.com/api/files/v1/filesets/5075326c-9f35-4a4f-b590-edc6e4f7ccbb/files/a06ec036-7b1e-462f-a7df-0e046a6889a5/download"
```

<!-- type: tab-end -->

### Response

**Status:** `302`

- Initiates a redirect to the file's download URL. The client should follow this redirection to start downloading the file.

### Error Responses

| Status Code | Description                |
|-------------|----------------------------|
| `400`       | Bad Request                |
| `403`       | Forbidden                  |
| `409`       | Conflict                   |
| `413`       | Payload Too Large          |

---

## Get File Content by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}/content`

Retrieve the content of a specific File within a FileSet using its ID. This endpoint requires a valid download token for authorization, which is generally obtained via a download endpoint and redirected here automatically.

### Path Parameters

| Parameter  | Type   | Required | Description                                  |
|------------|--------|----------|----------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File.   |
| `fileId`    | string | ✓ Yes    | The ID of the File to retrieve.              |

### Query Parameters

| Parameter | Type   | Required | Description                         |
|-----------|--------|----------|-------------------------------------|
| `token`   | string | ✓ Yes    | The download token for authorization. |

### Request Body

_None_

### Request Example

<!-- type: tab title: JavaScript -->

```javascript
fetch('/api/files/v1/filesets/f23e1c41-f9b3-4792-bd28-8b969d67f01c/files/eba26374-c302-4240-878c-25404ed6874e/content?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...', {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
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

url = "https://api.example.com/api/files/v1/filesets/f23e1c41-f9b3-4792-bd28-8b969d67f01c/files/eba26374-c302-4240-878c-25404ed6874e/content"
headers = {
    "Accept": "application/json"
}
params = {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

response = requests.get(url, headers=headers, params=params)

print(response.json())
```

<!-- type: tab-end -->

<!-- type: tab title: cURL -->

```bash
curl -X GET "https://api.example.com/api/files/v1/filesets/f23e1c41-f9b3-4792-bd28-8b969d67f01c/files/eba26374-c302-4240-878c-25404ed6874e/content?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." -H "Accept: application/json"
```

<!-- type: tab-end -->

### Response

**Status:** `200`

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

