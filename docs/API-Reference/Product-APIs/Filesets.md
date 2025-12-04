# Documents API

> **Version:** 2.2.3159_master
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

| Parameter    | Type    | Required | Description                                                                 |
|--------------|---------|----------|-----------------------------------------------------------------------------|
| `name`       | string  | ✓ Yes    | The name for the file set.                                                   |
| `description`| string  | No       | A description for the file set.                                              |
| `connector`  | string  | No       | The connector that powers the file set. Allowed values: `DOMO`, `CONFLUENCE`, `GITHUB`, `GOOGLE_DRIVE`, `S3` |
| `aiEnabled`  | boolean | No       | Indicates whether AI features are enabled for the file set.                  |


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

url = "/api/files/v1/filesets"
headers = {
    'Content-Type': 'application/json'
}
payload = {
    "name": "Policies (2025)",
    "description": "Location for all new and updated policies for FY2025",
    "aiEnabled": False,
    "connector": "DOMO"
}

response = requests.post(url, json=payload, headers=headers)
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

| Status Code | Description    |
|-------------|----------------|
| `400`       | Bad Request    |
| `403`       | Forbidden      |
| `409`       | Conflict       |
| `413`       | Payload Too Large |

---

## Get a FileSet by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}`

Retrieve the details of a specific FileSet using its ID.

### Path Parameters

| Parameter  | Type   | Required | Description                         |
|------------|--------|----------|-------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to retrieve. |

### Query Parameters

_None_

### Request Body

_No request body needed for this endpoint._

_N/A_

### Request Example

<!-- type: tab title: JavaScript -->

```javascript
// Using fetch to retrieve a FileSet by ID
const fileSetId = '3308baf1-aab9-47ba-8bb1-39a95064d06a'; // Example ID
fetch(`https://api.yourservice.com/api/files/v1/filesets/${fileSetId}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

<!-- type: tab title: Python -->

```python
# Using requests to retrieve a FileSet by ID
import requests

fileSetId = '3308baf1-aab9-47ba-8bb1-39a95064d06a'  # Example ID
url = f'https://api.yourservice.com/api/files/v1/filesets/{fileSetId}'

response = requests.get(url, headers={'Content-Type': 'application/json'})

if response.status_code == 200:
    print(response.json())
else:
    print('Error:', response.status_code, response.text)
```

<!-- type: tab title: cURL -->

```bash
# cURL command to retrieve a FileSet by ID
curl -X GET \
  https://api.yourservice.com/api/files/v1/filesets/3308baf1-aab9-47ba-8bb1-39a95064d06a \
  -H "Content-Type: application/json"
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

- `id`: Unique identifier for the FileSet.
- `name`: Name of the FileSet.
- `description`: Description of the FileSet.
- `aiEnabled`: Boolean indicating if AI features are enabled.
- `indexStatus`: Status of the indexing process.
- `connector`: Type of connector used.
- `created`: Timestamp when the FileSet was created.
- `createdBy`: User ID of the creator.
- `updated`: Timestamp when the FileSet was last updated.
- `updatedBy`: User ID of who last updated the FileSet.
- `owner`: Owner ID of the FileSet.
- `accountId`: Account ID associated with the FileSet.
- `connectorContext`: Context for the connector.
- `permission`: Current user's permission level on the FileSet.
- `size`: Total size of the FileSet.
- `fileCount`: Number of files in the FileSet.

### Error Responses

| Status Code | Description          |
|-------------|----------------------|
| `400`       | Bad Request          |
| `403`       | Forbidden            |
| `409`       | Conflict             |
| `413`       | Payload Too Large    |

---

## Update an existing FileSet

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}`

Update the details of an existing FileSet. Only fields that are not null in the request will be updated.

### Path Parameters

| Parameter    | Type   | Required | Description                                 |
|--------------|--------|----------|---------------------------------------------|
| `fileSetId`  | string | ✓ Yes    | The ID of the FileSet to update.            |

### Query Parameters

_None_

### Request Body

Represents a request to update a file set.  
At least one of the fields must be provided to update the file set.

| Parameter     | Type    | Required | Description                                                                 |
|---------------|---------|----------|-----------------------------------------------------------------------------|
| `name`        | string  | No       | The name with which to update the file set's name. If not provided, the name will remain unchanged. |
| `description` | string  | No       | Optional description with which to update the file set's description. If not provided, the description will remain unchanged. |
| `aiEnabled`   | boolean | No       | Optional flag to enable or disable AI features for the file set.            |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const fetch = require('node-fetch');

const fileSetId = '28a7ea52-067d-46ba-87da-868af0a88dfd';

const url = `https://yourapi.com/api/files/v1/filesets/${fileSetId}`;

const body = {
  name: 'Policies (FY25)',
  description: 'Repository for new policies created ONLY in FY2025'
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

file_set_id = '28a7ea52-067d-46ba-87da-868af0a88dfd'
url = f'https://yourapi.com/api/files/v1/filesets/{file_set_id}'

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
curl -X POST https://yourapi.com/api/files/v1/filesets/28a7ea52-067d-46ba-87da-868af0a88dfd \
     -H "Content-Type: application/json" \
     -d '{"name": "Policies (FY25)", "description": "Repository for new policies created ONLY in FY2025"}'
```

<!-- type: tab-end -->

### Response

**Status:** `200`

```json
{
  'id': 'e49f188e-be98-451d-ba0f-ada1157bb656',
  'name': 'Policies (FY25)',
  'description': 'Repository for new policies created ONLY in FY2025',
  'aiEnabled': false,
  'indexStatus': null,
  'connector': 'DOMO',
  'created': '2025-07-28T20:17:43.958479+00:00',
  'createdBy': 27,
  'updated': '2025-07-28T20:17:43.958479+00:00',
  'updatedBy': 27,
  'owner': '27',
  'accountId': 0,
  'connectorContext': null,
  'permission': 'OWNER',
  'size': 0,
  'fileCount': 0
}
```

- `id`: Unique identifier for the file set.
- `name`: The updated name of the file set.
- `description`: The updated description for the file set.
- `aiEnabled`: Indicates if AI features are enabled for the file set.
- `indexStatus`: Current indexing status of the file set (if applicable).
- `connector`: System connector associated with the file set.
- `created`: Date and time when the file set was created.
- `createdBy`: User ID of the person who created the file set.
- `updated`: Date and time when the file set was last updated.
- `updatedBy`: User ID of the person who last updated the file set.
- `owner`: Owner ID of the file set.
- `accountId`: Identifier for the account associated with the file set.
- `connectorContext`: Context information for the system connector (if applicable).
- `permission`: Access permissions for the file set.
- `size`: Current size of the file set.
- `fileCount`: Number of files currently in the file set.

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

| Parameter  | Type   | Required | Description                       |
|------------|--------|----------|-----------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet to delete. |

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
const axios = require('axios');

const fileSetId = '79c79fc8-5bc1-436c-89e3-07a81dfc2e7d';

axios.delete(`https://api.example.com/api/files/v1/filesets/${fileSetId}`)
  .then(response => console.log(response.status))
  .catch(error => console.error(error));
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

fileSetId = '79c79fc8-5bc1-436c-89e3-07a81dfc2e7d'

response = requests.delete(f'https://api.example.com/api/files/v1/filesets/{fileSetId}')

print(response.status_code)
```

<!--
type: tab
title: cURL
-->

```bash
# Generate a realistic cURL command
# Use the actual endpoint path
# Include -H headers and -d data as appropriate
curl -X DELETE "https://api.example.com/api/files/v1/filesets/79c79fc8-5bc1-436c-89e3-07a81dfc2e7d"
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

## Query FileSet for File Contents

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/query`

Query a specific FileSet for file contents related to the query criteria.

### Path Parameters

| Parameter | Type   | Required | Description                         |
|-----------|--------|----------|-------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet to query. |

### Query Parameters

_None_

### Request Body

Used to query a file set for the top K results based on the provided query.

| Parameter         | Type            | Required | Description                                                                 |
|-------------------|-----------------|----------|-----------------------------------------------------------------------------|
| `query`           | string          | ✓ Yes    | The query string to match against file contents within the file set.        |
| `topK`            | integer (int32) | No       | The number of top results to return based on the query match. Defaults to 1. |
| `pathPrefixFilter`| string          | No       | An optional prefix filter for the file paths to narrow down the search results. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('/api/files/v1/filesets/80e51f01-88c5-452f-81e8-5cd61a7fc31f/query', {
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

url = '/api/files/v1/filesets/80e51f01-88c5-452f-81e8-5cd61a7fc31f/query'
headers = {
    'Content-Type': 'application/json'
}
data = {
    'query': 'benefit',
    'pathPrefixFilter': 'sample/directory/path',
    'topK': 2
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST /api/files/v1/filesets/80e51f01-88c5-452f-81e8-5cd61a7fc31f/query \
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

| Parameter   | Type   | Required | Description                                           |
|-------------|--------|----------|-------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet for which to update the owner.  |

### Query Parameters

_None_

### Request Body

Represents a request to transfer ownership of a file set.  

Other users may be granted ownership level permissions, but only one user may be the sole owner of a file set.

| Parameter | Type            | Required | Description                                 |
|-----------|-----------------|----------|---------------------------------------------|
| `userId`  | integer (int64) | ✓ Yes    | The ID of the user that will assume ownership. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('/api/files/v1/filesets/05a69b6b-f6b6-428c-98f3-e1fc28e1d40b/ownership', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
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

response = requests.post(
    url='http://example.com/api/files/v1/filesets/05a69b6b-f6b6-428c-98f3-e1fc28e1d40b/ownership',
    headers={'Content-Type': 'application/json'},
    json={'userId': 109}
)

print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST 'http://example.com/api/files/v1/filesets/05a69b6b-f6b6-428c-98f3-e1fc28e1d40b/ownership' \
-H 'Content-Type: application/json' \
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

| Status Code | Description            |
|-------------|------------------------|
| `400`       | Bad Request            |
| `403`       | Forbidden              |
| `409`       | Conflict               |
| `413`       | Payload Too Large      |

---

## Create a new File or Directory

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files`

Create a new File or Directory within a specified FileSet. If a file already exists at the specified path, it will attempt to overwrite it if the client has permission. If a Directory already exists at the specified path, it will return that Directory.

### Path Parameters

| Parameter   | Type   | Required | Description                                        |
|-------------|--------|----------|----------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet in which to create the File. |

### Query Parameters

_None_

### Request Body

Represents a request to upload a file or create a directory.

| Parameter      | Type            | Required | Description                                                                                                                                                        |
|----------------|-----------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `file`         | string (binary) | No       | The file to be uploaded. Leave null if creating a directory.                                                                                                       |
| `directoryPath`| string          | No       | The directory path of the uploaded file, or the path of the created directory if no file is provided. Defaults to an empty string, i.e., the root directory, if not specified. Note: An empty string is not valid when intentionally creating a directory. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const axios = require('axios');

const data = new FormData();
data.append('file', /* binary data of the file */);
data.append('directoryPath', 'sample/directory/path');

axios.post(
  'https://example.com/api/files/v1/filesets/c9314b09-4652-4523-bbdf-6f5b9d439ec1/files',
  data,
  {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }
).then(response => console.log(response.data))
 .catch(error => console.error(error));
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

files = {'file': ('filename', open('path/to/file', 'rb'))}
data = {
    'directoryPath': 'sample/directory/path'
}

response = requests.post(
    'https://example.com/api/files/v1/filesets/c9314b09-4652-4523-bbdf-6f5b9d439ec1/files',
    files=files,
    data=data
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
curl -X POST https://example.com/api/files/v1/filesets/c9314b09-4652-4523-bbdf-6f5b9d439ec1/files \
  -H "Content-Type: multipart/form-data" \
  -F "file=@path/to/file" \
  -F "directoryPath=sample/directory/path"
```

<!--
type: tab-end
-->

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

- **id**: Unique identifier of the created file or directory.
- **path**: Path where the file or directory is located.
- **name**: Name of the file or directory.
- **size**: Size of the file. This is null for directories.
- **created**: Timestamp of when the file or directory was created.
- **createdBy**: ID of the user who created the file or directory.
- **fileType**: Type of file, which can be 'DIRECTORY' or another type if a file was uploaded.

### Error Responses

| Status Code | Description                                                                             |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | Bad Request                                                                             |
| `403`       | Forbidden                                                                               |
| `409`       | Conflict: File already exists at the specified path and client does not have overwrite permissions. |
| `413`       | Payload Too Large                                                                       |

---

## List Files and Directories for a FileSet

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/search`

Retrieve a paginated list of Files within a specific FileSet based on search criteria.

### Path Parameters

| Parameter   | Type   | Required | Description                             |
|-------------|--------|----------|-----------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to search within. |

### Query Parameters

| Parameter          | Type              | Required | Description                                                        |
|--------------------|-------------------|----------|--------------------------------------------------------------------|
| `directoryPath`    | string            | No       | The path to the directory within the FileSet, if applicable.       |
| `immediateChildren`| boolean           | No       | Whether to list only immediate children of the specified directory. (Default: `False`) |
| `limit`            | integer (int32)   | No       | The maximum number of Files to return. (Default: `100`)            |
| `next`             | string            | No       | The pagination token for the next set of results.                  |

### Request Body

Request object for searching with specific filters and sorting options.

| Parameter   | Type  | Required | Description                                    |
|-------------|-------|----------|------------------------------------------------|
| `fieldSort` | array | No       | A list of field sort criteria to apply to the search. |
| `filters`   | array | No       | A list of filters to apply to the search.      |
| `dateFilters`| array | No      | A list of date filters to apply to the search. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const axios = require('axios');

const fileSetId = '9682f2f7-8caf-49d7-86a9-1f0020206ce7';
const url = `/api/files/v1/filesets/${fileSetId}/files/search`;
const requestBody = {
  fieldSort: [{ field: 'created', order: 'ASC' }],
  filters: [{ field: 'name', value: ['paid'], not: false, operator: 'LIKE' }],
  dateFilters: [{
    field: 'created',
    start: new Date('2025-05-12T23:30:00Z'),
    not: false,
    end: null
  }]
};

axios.post(url, requestBody, {
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
from datetime import datetime, timezone

url = "/api/files/v1/filesets/9682f2f7-8caf-49d7-86a9-1f0020206ce7/files/search"
headers = {
    "Content-Type": "application/json"
}
body = {
    "fieldSort": [{"field": "created", "order": "ASC"}],
    "filters": [{"field": "name", "value": ["paid"], "not": False, "operator": "LIKE"}],
    "dateFilters": [{"field": "created", "start": datetime(2025, 5, 12, 23, 30, tzinfo=timezone.utc), "not": False, "end": None}]
}

response = requests.post(url, headers=headers, json=body)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "/api/files/v1/filesets/9682f2f7-8caf-49d7-86a9-1f0020206ce7/files/search" \
     -H "Content-Type: application/json" \
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
      "created": "2025-07-28T21:47:39.814456+00:00",
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

| Status Code | Description          |
|-------------|----------------------|
| `400`       | Bad Request          |
| `403`       | Forbidden            |
| `409`       | Conflict             |
| `413`       | Payload Too Large    |

---

## Reindex Files within a FileSet

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/reindex`

Initiate another indexing attempt for specific files within a FileSet.

### Path Parameters

| Parameter   | Type   | Required | Description                                      |
|-------------|--------|----------|--------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet to reindex files within.   |

### Query Parameters

_None_

### Request Body

Request object for another indexing attempt for specific files within a file set.

| Parameter | Type  | Required | Description                            |
|-----------|-------|----------|----------------------------------------|
| `fileIds` | array | ✓ Yes    | The IDs of the files to be reindexed.  |

### Request Example

<!-- type: tab title: JavaScript -->

```javascript
fetch('https://api.example.com/api/files/v1/filesets/7e9c0c2b-cb37-4fa5-8e25-6c1d8f1e69ce/files/reindex', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    fileIds: [
      "7150e608-c3a9-4b40-ac2d-eb182cc98c6f",
      "22e1514a-354b-470f-bc32-c354812738f2"
    ]
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

url = "https://api.example.com/api/files/v1/filesets/7e9c0c2b-cb37-4fa5-8e25-6c1d8f1e69ce/files/reindex"
headers = {"Content-Type": "application/json"}
data = {
    "fileIds": [
        "7150e608-c3a9-4b40-ac2d-eb182cc98c6f",
        "22e1514a-354b-470f-bc32-c354812738f2"
    ]
}

response = requests.post(url, json=data, headers=headers)
print(response.json())
```

<!-- type: tab-end -->

<!-- type: tab title: cURL -->

```bash
curl -X POST "https://api.example.com/api/files/v1/filesets/7e9c0c2b-cb37-4fa5-8e25-6c1d8f1e69ce/files/reindex" \
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

- `retriedFilesCount`: The number of files for which the reindexing was retried.

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

| Parameter   | Type   | Required | Description                                        |
|-------------|--------|----------|----------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet in which to create the File. |

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
// JavaScript fetch example for initiating a split file upload
const fileSetId = 'f970b4a1-7b9e-4af7-8d67-55266cfec4b8';
const url = `/api/files/v1/filesets/${fileSetId}/files/multipart`;

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    path: 'example/path/to/resource'
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
# Python requests example for initiating a split file upload
import requests

fileSetId = 'f970b4a1-7b9e-4af7-8d67-55266cfec4b8'
url = f'/api/files/v1/filesets/{fileSetId}/files/multipart'
headers = {'Content-Type': 'application/json'}
data = {'path': 'example/path/to/resource'}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
# cURL command for initiating a split file upload
curl -X POST /api/files/v1/filesets/f970b4a1-7b9e-4af7-8d67-55266cfec4b8/files/multipart \
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

| Status Code | Description                                            |
|-------------|--------------------------------------------------------|
| `400`       | Bad Request                                            |
| `403`       | Forbidden                                              |
| `409`       | Conflict: File already exists at the specified path.   |
| `413`       | Payload Too Large                                      |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled. |

---

## Submit a part of a file for upload.

**Method:** `POST`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/part/{partNumber}`

Allows submitting a file in stages to create a new file within a FileSet.

### Path Parameters

| Parameter      | Type            | Required | Description                                                                       |
|----------------|-----------------|----------|-----------------------------------------------------------------------------------|
| `fileSetId`    | string          | ✓ Yes    | The ID of the FileSet in which to the file is being uploaded.                     |
| `fileId`       | string          | ✓ Yes    | The ID of the file being uploaded in parts.                                       |
| `partNumber`   | integer (int64) | ✓ Yes    | The part number of this file segment. Must be non-negative.                       |

### Query Parameters

_None_

### Request Body

Represents a request to upload a part of a file in a split file upload operation.

| Parameter | Type           | Required | Description                                                |
|-----------|----------------|----------|------------------------------------------------------------|
| `part`    | string (binary) | No       | The full path destination for the file once the upload is complete. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const axios = require('axios');
const fs = require('fs');

// Assuming the part is a file to be uploaded.
fs.readFile('/path/to/your/binary/file', (err, data) => {
    if (err) throw err;
    axios.post('https://api.example.com/api/files/v1/filesets/112e260c-ed38-434d-956e-8ab07a465925/files/multipart/013b58f5-184b-46a0-80d2-e7b65aa076ad/part/1234567890', data, {
        headers: {
            'Content-Type': 'application/octet-stream'
        }
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });
});
```

<!--
type: tab
title: Python
-->

```python
import requests

url = "https://api.example.com/api/files/v1/filesets/112e260c-ed38-434d-956e-8ab07a465925/files/multipart/013b58f5-184b-46a0-80d2-e7b65aa076ad/part/1234567890"
headers = {"Content-Type": "application/octet-stream"}

data = b"(binary data of the file)"

response = requests.post(url, headers=headers, data=data)

print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "https://api.example.com/api/files/v1/filesets/112e260c-ed38-434d-956e-8ab07a465925/files/multipart/013b58f5-184b-46a0-80d2-e7b65aa076ad/part/1234567890" \
-H "Content-Type: application/octet-stream" \
--data-binary "@path/to/your/binary/file"
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
    "created": "2025-08-25T16:05:56.676114+00:00",
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

| Parameter   | Type   | Required | Description                                         |
|-------------|--------|----------|-----------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet in which the file has been uploaded. |
| `fileId`    | string | ✔ Yes    | The ID of the file whose parts have been uploaded.       |

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
fetch('https://api.example.com/api/files/v1/filesets/bbf480dc-6cd5-4e63-b628-d9f536d8bf9e/files/multipart/8378351c-c1e7-4911-88ea-21425a0c9280/finalize', {
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

url = "https://api.example.com/api/files/v1/filesets/bbf480dc-6cd5-4e63-b628-d9f536d8bf9e/files/multipart/8378351c-c1e7-4911-88ea-21425a0c9280/finalize"
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
curl -X POST "https://api.example.com/api/files/v1/filesets/bbf480dc-6cd5-4e63-b628-d9f536d8bf9e/files/multipart/8378351c-c1e7-4911-88ea-21425a0c9280/finalize" -H "Content-Type: application/json"
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
    "created": "2025-08-25T16:05:56.676114+00:00",
    "createdBy": 27,
    "connectorKey": null,
    "indexStatus": null,
    "indexReason": null
  },
  "status": "SUCCESS"
```

- **file.id**: Unique identifier for the file.
- **file.path**: The directory path where the file is stored.
- **file.name**: The name of the file.
- **file.fileType**: Type of file (e.g., DOCUMENT).
- **file.contentType**: Content type or MIME type of the file.
- **file.size**: Size of the file in bytes.
- **file.hash**: SHA-256 hash of the file content.
- **file.hashAlgorithm**: Algorithm used for hashing the file.
- **status**: Status of the operation, e.g., SUCCESS.

### Error Responses

| Status Code | Description                                                                                                                                     |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| `400`       | Bad Request                                                                                                                                     |
| `403`       | Forbidden                                                                                                                                       |
| `404`       | An "initiate split file" request was not performed prior to this request for the given file ID and/or has not been uploaded any parts, or has already been finalized/aborted. |
| `409`       | Conflict: File already exists at the declared path.                                                                                            |
| `413`       | Payload Too Large                                                                                                                              |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled.                                                                       |

---

## Abort a split file upload.

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/abort`

Aborts an ongoing split file upload process, discarding all uploaded parts.

### Path Parameters

| Parameter   | Type   | Required | Description                                                                |
|-------------|--------|----------|----------------------------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet in which the file was being uploaded.                |
| `fileId`    | string | ✔ Yes    | The ID of the file whose upload is to be aborted.                           |

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
// JavaScript example using fetch API
fetch('https://api.example.com/api/files/v1/filesets/eafd2a1d-38b8-4d23-ac08-a7226e477229/files/multipart/1d42e8f7-14d2-4ec0-b435-5be5ae647944/abort', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}).then(response => response.json())
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

url = 'https://api.example.com/api/files/v1/filesets/eafd2a1d-38b8-4d23-ac08-a7226e477229/files/multipart/1d42e8f7-14d2-4ec0-b435-5be5ae647944/abort'
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
# cURL command
curl -X POST 'https://api.example.com/api/files/v1/filesets/eafd2a1d-38b8-4d23-ac08-a7226e477229/files/multipart/1d42e8f7-14d2-4ec0-b435-5be5ae647944/abort' \
     -H 'Content-Type: application/json'
```

<!--
type: tab-end
-->

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
    "created": "2025-08-25T16:05:56.676114+00:00",
    "createdBy": 27,
    "connectorKey": null,
    "indexStatus": null,
    "indexReason": null
  },
  "status": "FAILED"
}
```

- **file.id**: The unique identifier of the aborted file.
- **file.path**: The path where the file was supposed to be stored.
- **file.name**: The name of the aborted file.
- **file.fileType**: The type of the file.
- **file.contentType**: The MIME type of the file.
- **file.size**: The size of the file in bytes.
- **status**: The status of the abort operation, indicating failure in this response.

### Error Responses

| Status Code | Description                                                                                         |
|-------------|-----------------------------------------------------------------------------------------------------|
| `400`       | Bad Request                                                                                         |
| `403`       | Forbidden                                                                                            |
| `404`       | An "initiate split file" request was not performed prior to this request for the given file ID or has already been finalized or aborted. |
| `409`       | Conflict                                                                                            |
| `413`       | Payload Too Large                                                                                   |

---

## Get FileSet Access Permissions

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/access`

Retrieve the access permissions for a specific FileSet.

### Path Parameters

| Parameter   | Type   | Required | Description                                                        |
|-------------|--------|----------|--------------------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet for which to retrieve access information.    |

### Query Parameters

_None_

### Request Body


### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Example of retrieving FileSet access permissions using fetch
const fileSetId = "b9280400-2acc-40be-92dc-e006b42fe601";
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
type: tab-end
-->

<!--
type: tab
title: Python
-->

```python
import requests

fileSetId = "b9280400-2acc-40be-92dc-e006b42fe601"
response = requests.get(
    f"/api/files/v1/filesets/{fileSetId}/access",
    headers={"Content-Type": "application/json"}
)

if response.status_code == 200:
    print(response.json())
else:
    print("Error:", response.status_code)
```

<!--
type: tab-end
-->

<!--
type: tab
title: cURL
-->

```bash
curl -X GET "/api/files/v1/filesets/b9280400-2acc-40be-92dc-e006b42fe601/access" \
     -H "Content-Type: application/json"
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

- **fileSetId**: The ID of the FileSet.
- **fileSetAccess**: A list of access permissions.
  - **entityId**: The ID of the entity (e.g., user or group).
  - **entityType**: The type of entity (e.g., USER, GROUP).
  - **permission**: The level of access granted (e.g., OWNER, READ, WRITE).

### Error Responses

| Status Code | Description          |
|-------------|----------------------|
| `400`       | Bad Request          |
| `403`       | Forbidden            |
| `409`       | Conflict             |
| `413`       | Payload Too Large    |

---

## Update FileSet Access Permissions

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/access`

Update the relevant access permissions for a specific FileSet.

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fileSetId` | string | ✓ Yes | The ID of the FileSet for which to update access permissions. |

### Query Parameters

_None_

### Request Body

Request object for updating access permissions to a file set.

Only the permissions that are explicitly set in the request will be updated.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fileSetAccess` | array | ✓ Yes | The access permissions for the file set. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Example using fetch for updating file set access permissions
fetch('https://yourapi.domain.com/api/files/v1/filesets/33706184-7bb7-43be-bca5-10a7ba3a88b1/access', {
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
# Example using requests for updating file set access permissions
import requests

url = "https://yourapi.domain.com/api/files/v1/filesets/33706184-7bb7-43be-bca5-10a7ba3a88b1/access"
payload = {
    "fileSetAccess": [
        {
            "entityId": 42,
            "entityType": "GROUP",
            "permission": "EDIT"
        }
    ]
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
# Example using cURL for updating file set access permissions
curl -X POST "https://yourapi.domain.com/api/files/v1/filesets/33706184-7bb7-43be-bca5-10a7ba3a88b1/access" \
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

**Response Fields:**

- `fileSetId`: Unique identifier of the FileSet.
- `fileSetAccess`: Array of objects detailing the access permissions for the FileSet.
  - `entityId`: ID of the entity (user or group).
  - `entityType`: Type of the entity, such as `GROUP` or `USER`.
  - `permission`: Level of permission granted, such as `EDIT` or `OWNER`.

### Error Responses

| Status Code | Description |
|-------------|-------------|
| `400` | Bad Request |
| `403` | Forbidden |
| `409` | Conflict |
| `413` | Payload Too Large |

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
fetch('/api/files/v1/filesets/search?limit=100&offset=0', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    fieldSort: [{'field': 'name', 'order': 'ASC'}],
    filters: [{'field': 'owner', 'value': [27], 'not': false, 'operator': 'EQUALS'}],
    dateFilters: [{'field': 'created', 'start': '2025-05-12T23:30:00Z', 'not': false, 'end': null}]
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
from datetime import datetime, timezone

url = '/api/files/v1/filesets/search?limit=100&offset=0'
headers = {'Content-Type': 'application/json'}
body = {
    "fieldSort": [{"field": "name", "order": "ASC"}],
    "filters": [{"field": "owner", "value": [27], "not": False, "operator": "EQUALS"}],
    "dateFilters": [{"field": "created", "start": datetime(2025, 5, 12, 23, 30, tzinfo=timezone.utc).isoformat(), "not": False, "end": None}]
}

response = requests.post(url, headers=headers, data=json.dumps(body))
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST '/api/files/v1/filesets/search?limit=100&offset=0' \
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
      "created": "2025-07-28T20:17:43.958479+00:00",
      "createdBy": 27,
      "updated": "2025-07-28T20:17:43.958479+00:00",
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

| Parameter   | Type   | Required | Description                                         |
|-------------|--------|----------|-----------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet for which to retrieve statistics.  |

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
fetch('https://api.example.com/api/files/v1/filesets/fb54c1d3-133a-4176-8ad2-f8e25ac39ea6/stats', {
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

url = 'https://api.example.com/api/files/v1/filesets/fb54c1d3-133a-4176-8ad2-f8e25ac39ea6/stats'
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
curl -X GET 'https://api.example.com/api/files/v1/filesets/fb54c1d3-133a-4176-8ad2-f8e25ac39ea6/stats' -H 'Content-Type: application/json'
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

- **imageFileTypeCount**: Number of image files.
- **audioFileTypeCount**: Number of audio files.
- **videoFileTypeCount**: Number of video files.
- **textFileTypeCount**: Number of text files.
- **documentFileTypeCount**: Number of document files.
- **otherFileTypeCount**: Number of files of other types.
- **notIndexedCount**: Number of files not indexed.
- **indexQueuedCount**: Number of files queued for indexing.
- **indexInProgressCount**: Number of files currently indexing.
- **indexCompleteCount**: Number of files indexed completely.
- **indexFailedCount**: Number of files index failed.
- **indexSkippedCount**: Number of files index skipped.

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

| Parameter | Type   | Required | Description                 |
|-----------|--------|----------|-----------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet.      |

### Query Parameters

| Parameter | Type   | Required | Description                                             |
|-----------|--------|----------|---------------------------------------------------------|
| `path`    | string | ✔ Yes    | The path to the File or Directory within the FileSet. |

### Request Body

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://api.example.com/api/files/v1/filesets/fbe9ea8c-cd08-463c-8623-1e0258bce29a/path?path=example/path/to/resource', {
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
type: tab-end
-->

<!--
type: tab
title: Python
-->

```python
import requests

url = 'https://api.example.com/api/files/v1/filesets/fbe9ea8c-cd08-463c-8623-1e0258bce29a/path'
params = {
    'path': 'example/path/to/resource'
}

response = requests.get(url, params=params, headers={'Content-Type': 'application/json'})

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
curl -X GET "https://api.example.com/api/files/v1/filesets/fbe9ea8c-cd08-463c-8623-1e0258bce29a/path?path=example/path/to/resource" -H "Content-Type: application/json"
```

<!--
type: tab-end
-->

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
  "created": "2025-07-28T21:47:39.814456+00:00",
  "createdBy": 27,
  "connectorKey": null,
  "indexStatus": null,
  "indexReason": null
}
```

- `id`: Unique identifier for the file or directory.
- `path`: The complete path to the file or directory.
- `name`: The name of the file or directory.
- `fileType`: The type of the file, e.g., DOCUMENT.
- `contentType`: The MIME type of the file.
- `size`: The size of the file in bytes.
- `hash`: The SHA-256 HEX hash of the file.
- `hashAlgorithm`: The algorithm used for hashing the file.
- `downloadUrl`: The URL for downloading the file.
- `created`: The datetime when the file was created.
- `createdBy`: The ID of the user who created the file.
- `connectorKey`: Key related to the connector, if any.
- `indexStatus`: Indexing status of the file.
- `indexReason`: The reason for indexing the file, if any.

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

| Parameter   | Type   | Required | Description                                    |
|-------------|--------|----------|------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File.     |

### Query Parameters

| Parameter | Type   | Required | Description                                                                                                 |
|-----------|--------|----------|-------------------------------------------------------------------------------------------------------------|
| `path`    | string | ✓ Yes    | The path to the File or Directory to delete. If a Directory is specified, it and its children will be deleted. |

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
{
  fetch('/api/files/v1/filesets/2ca4fb29-5bc3-4e39-b001-dc1e795d1f6e/path?path=example/path/to/resource', {
    method: 'DELETE',
  }).then(response => {
    if (response.status === 204) {
      console.log('File or Directory deleted successfully.');
    }
  }).catch(error => console.error('Error:', error));
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

url = 'https://example.com/api/files/v1/filesets/2ca4fb29-5bc3-4e39-b001-dc1e795d1f6e/path'
params = {'path': 'example/path/to/resource'}

response = requests.delete(url, params=params)

if response.status_code == 204:
    print('File or Directory deleted successfully.')
else:
    print('Error:', response.status_code, response.text)
```

<!--
type: tab
title: cURL
-->

```bash
# Generate a realistic cURL command
# Use the actual endpoint path
# Include -H headers and -d data as appropriate
curl -X DELETE "https://example.com/api/files/v1/filesets/2ca4fb29-5bc3-4e39-b001-dc1e795d1f6e/path?path=example/path/to/resource"
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

## Download a File by Path

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/path/download`

Download the contents of a specific File within a FileSet using its path. This will redirect to the file's download URL.

### Path Parameters

| Parameter  | Type   | Required | Description                                     |
|------------|--------|----------|-------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet containing the File. |

### Query Parameters

| Parameter | Type   | Required | Description                                       |
|-----------|--------|----------|---------------------------------------------------|
| `path`    | string | ✔ Yes    | The path of the File to download within the FileSet. |

### Request Body

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript Fetch Example
fetch('https://api.example.com/api/files/v1/filesets/ac206c9b-4e6b-4c04-9572-9db28beb4bd7/path/download?path=example/path/to/resource', {
  method: 'GET'
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
# Python Requests Example
import requests

url = "https://api.example.com/api/files/v1/filesets/ac206c9b-4e6b-4c04-9572-9db28beb4bd7/path/download"
params = {
    "path": "example/path/to/resource"
}

response = requests.get(url, params=params)
print(response.json())
```

<!-- type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
# cURL Example
curl -X GET "https://api.example.com/api/files/v1/filesets/ac206c9b-4e6b-4c04-9572-9db28beb4bd7/path/download?path=example/path/to/resource"
```

<!-- type: tab-end -->

### Response

**Status:** `200`

```json
{}
```

### Error Responses

| Status Code | Description      |
|-------------|------------------|
| `400`       | Bad Request      |
| `403`       | Forbidden        |
| `409`       | Conflict         |
| `413`       | Payload Too Large |

---

## Get a File or Directory by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}`

Retrieve a specific File or Directory within a FileSet using its ID.

### Path Parameters

| Parameter   | Type   | Required | Description                                                 |
|-------------|--------|----------|-------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File or Directory.     |
| `fileId`    | string | ✓ Yes    | The ID of the File or Directory to retrieve.                |

### Query Parameters

_None_

### Request Body


### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Using fetch to retrieve a specific file or directory by ID
fetch('https://your-api-base-url.com/api/files/v1/filesets/a44b3f8c-0d2c-45bc-abea-70e374e4ca48/files/1ad02854-3e03-4bad-8172-02ec1d1cc89e', {
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
# Using requests to retrieve a specific file or directory by ID
import requests

url = "https://your-api-base-url.com/api/files/v1/filesets/a44b3f8c-0d2c-45bc-abea-70e374e4ca48/files/1ad02854-3e03-4bad-8172-02ec1d1cc89e"

headers = {
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)

print(response.json())
```

<!-- type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
# Using cURL to retrieve a specific file or directory by ID
curl -X GET "https://your-api-base-url.com/api/files/v1/filesets/a44b3f8c-0d2c-45bc-abea-70e374e4ca48/files/1ad02854-3e03-4bad-8172-02ec1d1cc89e" -H "Content-Type: application/json"
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

**Response Fields:**

- `id`: The unique identifier for the file or directory.
- `path`: The path of the file or directory.
- `name`: The name of the file.
- `fileType`: The type of the file (e.g., DOCUMENT).
- `contentType`: The content type of the file.
- `size`: The size of the file in bytes.
- `hash`: The hash of the file for integrity verification.
- `hashAlgorithm`: The algorithm used for hashing.
- `downloadUrl`: The URL to download the file, if applicable.
- `created`: The UTC timestamp of when the file or directory was created.
- `createdBy`: The ID of the user who created the file or directory.
- `connectorKey`: The key of the connector, if applicable.
- `indexStatus`: The indexing status, if applicable.
- `indexReason`: The reason for the indexing status, if applicable.

### Error Responses

| Status Code | Description      |
|-------------|------------------|
| `400`       | Bad Request      |
| `403`       | Forbidden        |
| `409`       | Conflict         |
| `413`       | Payload Too Large |

---

## Delete a File or Directory by ID

**Method:** `DELETE`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}`

Delete a specific File or Directory within a FileSet using its ID.

### Path Parameters

| Parameter  | Type   | Required | Description                                                                                                                                                  |
|------------|--------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File.                                                                                                                   |
| `fileId`    | string | ✓ Yes    | The ID of the File or Directory to delete. If a Directory is specified, it and its children will be deleted.                                                 |

### Query Parameters

_None_

### Request Body

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const fileSetId = '2a62c190-ba3d-47ea-b633-662e1d3f06e7';
const fileId = '791297eb-1772-45bb-8852-6616d2bd3f6f';

fetch(`https://yourdomain.com/api/files/v1/filesets/${fileSetId}/files/${fileId}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (response.status === 204) {
    console.log('File or directory deleted successfully.');
  } else {
    console.error('Failed to delete the file or directory.');
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

fileSetId = '2a62c190-ba3d-47ea-b633-662e1d3f06e7'
fileId = '791297eb-1772-45bb-8852-6616d2bd3f6f'

url = f'https://yourdomain.com/api/files/v1/filesets/{fileSetId}/files/{fileId}'

response = requests.delete(url, headers={'Content-Type': 'application/json'})

if response.status_code == 204:
    print('File or directory deleted successfully.')
else:
    print('Failed to delete the file or directory.')
```

<!--
type: tab
title: cURL
-->

```bash
fileSetId="2a62c190-ba3d-47ea-b633-662e1d3f06e7"
fileId="791297eb-1772-45bb-8852-6616d2bd3f6f"

curl -X DELETE "https://yourdomain.com/api/files/v1/filesets/$fileSetId/files/$fileId" \
     -H "Content-Type: application/json"
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

Download the contents of a specific File within a FileSet using its ID. This will redirect to the file's download URL.

### Path Parameters

| Parameter  | Type   | Required | Description                             |
|------------|--------|----------|-----------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet containing the File. |
| `fileId`    | string | ✔ Yes    | The ID of the File to download.          |

### Query Parameters

_None_

### Request Body

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript fetch example for downloading a file by ID
fetch('https://yourapi.com/api/files/v1/filesets/18463c6f-5588-4499-9f35-c9d0364fa367/files/870b4664-c793-428b-8ac7-c56416463ea8/download', {
  method: 'GET'
})
.then(response => response.blob())
.then(blob => {
  // Handle the file download here, e.g., creating an object URL to trigger download
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'yourfile.txt';  // Change the filename as needed
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.URL.revokeObjectURL(url);
})
.catch(error => console.error('Error downloading the file:', error));
```

<!--
type: tab
title: Python
-->

```python
# Python requests example for downloading a file by ID
import requests

response = requests.get('https://yourapi.com/api/files/v1/filesets/18463c6f-5588-4499-9f35-c9d0364fa367/files/870b4664-c793-428b-8ac7-c56416463ea8/download', stream=True)

if response.status_code == 200:
    with open('yourfile.txt', 'wb') as file:  # Change the filename as needed
        for chunk in response.iter_content(chunk_size=8192):
            file.write(chunk)
else:
    print('Failed to download the file:', response.status_code, response.text)
```

<!--
type: tab
title: cURL
-->

```bash
# cURL command for downloading a file by ID
curl -o yourfile.txt 'https://yourapi.com/api/files/v1/filesets/18463c6f-5588-4499-9f35-c9d0364fa367/files/870b4664-c793-428b-8ac7-c56416463ea8/download'
```

<!-- type: tab-end -->

### Response

**Status:** `200`

```json
{}
```

### Error Responses

| Status Code | Description                    |
|-------------|--------------------------------|
| `302`       | File download initiated successfully |
| `400`       | Bad Request                    |
| `403`       | Forbidden                      |
| `409`       | Conflict                       |
| `413`       | Payload Too Large              |

---

## Get File Content by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}/content`

Retrieve the content of a specific File within a FileSet using its ID. This endpoint requires a valid download token for authorization, which is generally obtained via a download endpoint and redirected here automatically.

### Path Parameters

| Parameter  | Type   | Required | Description                                     |
|------------|--------|----------|-------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet containing the File.      |
| `fileId`    | string | ✔ Yes    | The ID of the File to retrieve.                 |

### Query Parameters

| Parameter | Type   | Required | Description                         |
|-----------|--------|----------|-------------------------------------|
| `token`   | string | ✔ Yes    | The download token for authorization. |

### Request Body

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://api.example.com/api/files/v1/filesets/d0705563-505d-4782-8300-15e71095d7cd/files/a91234c0-6929-4fb2-8e8f-71a4d7393682/content?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...', {
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

url = "https://api.example.com/api/files/v1/filesets/d0705563-505d-4782-8300-15e71095d7cd/files/a91234c0-6929-4fb2-8e8f-71a4d7393682/content"
params = {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

response = requests.get(url, params=params)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X GET "https://api.example.com/api/files/v1/filesets/d0705563-505d-4782-8300-15e71095d7cd/files/a91234c0-6929-4fb2-8e8f-71a4d7393682/content?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." -H "Content-Type: application/json"
```

<!-- type: tab-end -->

### Response

**Status:** `200`

```json
{}
```

### Error Responses

| Status Code | Description     |
|-------------|-----------------|
| `400`       | Bad Request     |
| `403`       | Forbidden       |
| `409`       | Conflict        |
| `413`       | Payload Too Large |

---

