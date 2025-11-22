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

| Parameter   | Type    | Required | Description                                              |
|-------------|---------|----------|----------------------------------------------------------|
| `name`      | string  | ✓ Yes    | The name for the file set.                               |
| `description` | string  | No       | A description for the file set.                          |
| `connector` | string  | No       | The connector that powers the file set. Allowed values: `DOMO`, `CONFLUENCE`, `GITHUB`, `GOOGLE_DRIVE`, `S3` |
| `aiEnabled` | boolean | No       | Indicates whether AI features are enabled for the file set. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const url = '/api/files/v1/filesets';
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Policies (2025)',
    description: 'Location for all new and updated policies for FY2025',
    aiEnabled: false,
    connector: 'DOMO',
  }),
};

fetch(url, options)
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

url = '/api/files/v1/filesets'
headers = {
    'Content-Type': 'application/json',
}
data = {
    'name': 'Policies (2025)',
    'description': 'Location for all new and updated policies for FY2025',
    'aiEnabled': False,
    'connector': 'DOMO',
}

response = requests.post(url, json=data, headers=headers)
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
curl -X POST /api/files/v1/filesets \
-H "Content-Type: application/json" \
-d '{
  "name": "Policies (2025)",
  "description": "Location for all new and updated policies for FY2025",
  "aiEnabled": false,
  "connector": "DOMO"
}'
```

<!--
type: tab-end
-->

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

- **id**: Unique identifier for the FileSet.
- **name**: Name of the FileSet.
- **description**: Description of the FileSet.
- **aiEnabled**: Indicates if AI features are enabled.
- **indexStatus**: Current indexing status (if applicable).
- **connector**: Type of connector used for FileSet.
- **created**: Date and time when the FileSet was created.
- **createdBy**: User ID of the creator.
- **updated**: Date and time of the last update.
- **updatedBy**: User ID of who made the last update.
- **owner**: User ID of the owner.
- **accountId**: Account ID associated with the FileSet.
- **connectorContext**: Context specific for the connector (if applicable).
- **permission**: Permission level for the FileSet.
- **size**: Storage size of the FileSet.
- **fileCount**: Number of files in the FileSet.

### Error Responses

| Status Code | Description |
|-------------|-------------|
| `400`       | Bad Request |
| `403`       | Forbidden   |
| `409`       | Conflict    |
| `413`       | Payload Too Large |

---

## Get a FileSet by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}`

Retrieve the details of a specific FileSet using its ID.

### Path Parameters

| Parameter   | Type   | Required | Description                         |
|-------------|--------|----------|-------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet to retrieve.  |

### Query Parameters

_None_

### Request Body

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Example JavaScript request using fetch
const fileSetId = '51ac091d-1057-41b5-9a57-90391e376c30';
const url = `/api/files/v1/filesets/${fileSetId}`;

fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch((error) => console.error('Error:', error));
```

<!-- type: tab-end -->

<!--
type: tab
title: Python
-->

```python
# Example Python request using requests library
import requests

fileSetId = '51ac091d-1057-41b5-9a57-90391e376c30'
url = f'/api/files/v1/filesets/{fileSetId}'

response = requests.get(url, headers={'Content-Type': 'application/json'})

if response.status_code == 200:
    print(response.json())
else:
    print('Error:', response.status_code, response.text)
```

<!-- type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
# Example cURL request
fileSetId="51ac091d-1057-41b5-9a57-90391e376c30"
curl -X GET "/api/files/v1/filesets/$fileSetId" -H "Content-Type: application/json"
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

- **id**: The unique identifier for the FileSet.
- **name**: The name of the FileSet.
- **description**: A description of the FileSet.
- **aiEnabled**: Indicates if AI is enabled for the FileSet.
- **connector**: The connector type being used.
- **created**: Timestamp of when the FileSet was created.
- **createdBy**: The ID of the user who created the FileSet.
- **updated**: Timestamp of the last update to the FileSet.
- **updatedBy**: The ID of the user who last updated the FileSet.
- **owner**: The owner ID for the FileSet.
- **accountId**: The account ID associated with the FileSet.
- **permission**: Permissions level of the current user with respect to the FileSet.
- **size**: The size of the FileSet.
- **fileCount**: Number of files within the FileSet.

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

| Parameter | Type   | Required | Description                          |
|-----------|--------|----------|--------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet to update.       |

### Query Parameters

_None_

### Request Body

Represents a request to update a file set.  
At least one of the fields must be provided to update the file set.

| Parameter     | Type    | Required | Description                                                                 |
|---------------|---------|----------|-----------------------------------------------------------------------------|
| `name`        | string  | No       | The name with which to update the file set's name. If not provided, the name will remain unchanged. |
| `description` | string  | No       | Optional description with which to update the file set's description. If not provided, the description will remain unchanged. |
| `aiEnabled`   | boolean | No       | Optional flag to enable or disable AI features for the file set.             |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Example using fetch
fetch('https://example.com/api/files/v1/filesets/86315605-0a33-4132-b113-10b6934006eb', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: "Policies (FY25)",
    description: "Repository for new policies created ONLY in FY2025"
  })
});
```

<!--
type: tab
title: Python
-->

```python
# Example using requests
import requests

url = 'https://example.com/api/files/v1/filesets/86315605-0a33-4132-b113-10b6934006eb'
headers = {
    'Content-Type': 'application/json'
}
data = {
    "name": "Policies (FY25)",
    "description": "Repository for new policies created ONLY in FY2025"
}

response = requests.post(url, headers=headers, json=data)
```

<!--
type: tab
title: cURL
-->

```bash
# Example using cURL
curl -X POST 'https://example.com/api/files/v1/filesets/86315605-0a33-4132-b113-10b6934006eb' \
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

- `id`: Unique identifier of the updated file set.
- `name`: Name of the file set.
- `description`: Description of the file set.
- `aiEnabled`: Indicates if AI features are enabled.
- `created`: Timestamp when the file set was created.
- `updated`: Timestamp when the file set was last updated.
- `owner`: ID of the owner of the file set.
- `permission`: User's permission level for the file set.
- `size`: Size of the file set in bytes.
- `fileCount`: Number of files in the file set.

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

| Parameter   | Type   | Required | Description                     |
|-------------|--------|----------|---------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to delete.|

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
fetch('/api/files/v1/filesets/3b4f874b-dd70-44b0-b3af-da0581f76fb4', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
}).then(response => {
  if (response.status === 204) {
    console.log('FileSet deleted successfully.');
  } else {
    console.error('Failed to delete FileSet.');
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

url = '/api/files/v1/filesets/3b4f874b-dd70-44b0-b3af-da0581f76fb4'
headers = {
    'Content-Type': 'application/json'
}

response = requests.delete(url, headers=headers)

if response.status_code == 204:
    print('FileSet deleted successfully.')
else:
    print('Failed to delete FileSet.')
```

<!--
type: tab-end
-->

<!--
type: tab
title: cURL
-->

```bash
curl -X DELETE '/api/files/v1/filesets/3b4f874b-dd70-44b0-b3af-da0581f76fb4' -H 'Content-Type: application/json'
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

| Parameter   | Type   | Required | Description                       |
|-------------|--------|----------|-----------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to query.   |

### Query Parameters

_None_

### Request Body

Used to query a file set for the top K results based on the provided query.

| Parameter          | Type             | Required | Description                                                                           |
|--------------------|------------------|----------|---------------------------------------------------------------------------------------|
| `query`            | string           | ✔ Yes    | The query string to match against file contents within the file set.                  |
| `topK`             | integer (int32)  | No       | The number of top results to return based on the query match. Defaults to 1.           |
| `pathPrefixFilter` | string           | No       | An optional prefix filter for the file paths to narrow down the search results.       |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Generate a realistic fetch/axios example using the request body example
// Use the actual endpoint path with any path parameters filled in
// Include proper headers (Content-Type: application/json if body exists)
fetch('https://api.example.com/api/files/v1/filesets/9643f240-89fb-494e-b8cb-e37cc59d033a/query', {
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
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
import requests

url = "https://api.example.com/api/files/v1/filesets/9643f240-89fb-494e-b8cb-e37cc59d033a/query"
payload = {
    "query": "benefit",
    "pathPrefixFilter": "sample/directory/path",
    "topK": 2
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
# Generate a realistic cURL command
# Use the actual endpoint path
# Include -H headers and -d data as appropriate
curl -X POST https://api.example.com/api/files/v1/filesets/9643f240-89fb-494e-b8cb-e37cc59d033a/query \
  -H 'Content-Type: application/json' \
  -d '{"query": "benefit", "pathPrefixFilter": "sample/directory/path", "topK": 2}'
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

**Response Fields:**

- `matches`: A list of objects detailing matched files.
  - `content`: Contains either the `text` or an `uri`, indicating the type of content.
  - `metadata`: Includes `fileId` and `path` for the matched file.
  - `score`: Represents the relevance score of the match.

### Error Responses

| Status Code | Description            |
|-------------|------------------------|
| `400`       | Bad Request            |
| `403`       | Forbidden              |
| `409`       | Conflict               |
| `413`       | Payload Too Large      |

---

## Update FileSet Owner

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/ownership`

Update the owner of a specific FileSet.

### Path Parameters

| Parameter   | Type   | Required | Description                                              |
|-------------|--------|----------|----------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet for which to update the owner.     |

### Query Parameters

_None_

### Request Body

Represents a request to transfer ownership of a file set.

Other users may be granted ownership level permissions, but only one user may be the sole owner of a file set.

| Parameter | Type            | Required | Description                                      |
|-----------|-----------------|----------|--------------------------------------------------|
| `userId`  | integer (int64) | ✓ Yes    | The ID of the user that will assume ownership.   |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const fetch = require('node-fetch');

const url = 'http://example.com/api/files/v1/filesets/9b42aaf2-4d71-4f91-b8ab-cd0a05de0862/ownership';
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        userId: 109
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
import json

url = 'http://example.com/api/files/v1/filesets/9b42aaf2-4d71-4f91-b8ab-cd0a05de0862/ownership'
headers = {
    'Content-Type': 'application/json'
}
data = {
    'userId': 109
}

response = requests.post(url, headers=headers, data=json.dumps(data))
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST 'http://example.com/api/files/v1/filesets/9b42aaf2-4d71-4f91-b8ab-cd0a05de0862/ownership' \
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

- `fileSetId`: The ID of the updated FileSet.
- `fileSetAccess`: A list of entities with access to the FileSet, including their permission levels.
  - `entityId`: The ID of the entity (user).
  - `entityType`: The type of entity, typically "USER".
  - `permission`: The permission level of the entity, such as "OWNER".

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

| Parameter   | Type   | Required | Description                                            |
|-------------|--------|----------|--------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet in which to create the File.     |

### Query Parameters

_None_

### Request Body

Represents a request to upload a file or create a directory.

| Parameter       | Type            | Required | Description                                                                                                                                                          |
|-----------------|-----------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `file`          | string (binary) | No       | The file to be uploaded. This should be provided in binary form in your request body. Leave null if creating a directory.                                            |
| `directoryPath` | string          | No       | The directory path of the uploaded file, or the path of the created directory if no file is provided. Defaults to an empty string (root directory) if not specified. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const url = 'https://api.example.com/api/files/v1/filesets/8906ff74-de67-4adf-851a-248c6f0fb1e6/files';
const data = {
    file: "(binary data of the file)",
    directoryPath: 'sample/directory/path'
};

fetch(url, {
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
import json

url = 'https://api.example.com/api/files/v1/filesets/8906ff74-de67-4adf-851a-248c6f0fb1e6/files'
data = {
    "file": "(binary data of the file)",
    "directoryPath": "sample/directory/path"
}

headers = {
    'Content-Type': 'application/json'
}

response = requests.post(url, headers=headers, json=json.dumps(data))

print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST https://api.example.com/api/files/v1/filesets/8906ff74-de67-4adf-851a-248c6f0fb1e6/files \
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

- **id**: Unique identifier for the created file or directory.
- **path**: The path where the file or directory was created.
- **name**: The name of the file or directory.
- **size**: Size of the file in bytes, `null` for directories.
- **created**: Timestamp of when the file or directory was created.
- **createdBy**: ID of the user who created the file or directory.
- **fileType**: Type of the created object, either `FILE` or `DIRECTORY`.

### Error Responses

| Status Code | Description                                                                                          |
|-------------|------------------------------------------------------------------------------------------------------|
| `400`       | Bad Request.                                                                                         |
| `403`       | Forbidden.                                                                                           |
| `409`       | Conflict: File already exists at the specified path and client does not have overwrite permissions.  |
| `413`       | Payload Too Large.                                                                                   |

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

| Parameter         | Type              | Required | Description                                                          |
|-------------------|-------------------|----------|----------------------------------------------------------------------|
| `directoryPath`   | string            | No       | The path to the directory within the FileSet, if applicable.         |
| `immediateChildren` | boolean         | No       | Whether to list only immediate children of the specified directory. (Default: `False`) |
| `limit`           | integer (int32)   | No       | The maximum number of Files to return. (Default: `100`)              |
| `next`            | string            | No       | The pagination token for the next set of results.                    |

### Request Body

Request object for searching with specific filters and sorting options.

| Parameter     | Type  | Required | Description                               |
|---------------|-------|----------|-------------------------------------------|
| `fieldSort`   | array | No       | A list of field sort criteria to apply to the search. |
| `filters`     | array | No       | A list of filters to apply to the search. |
| `dateFilters` | array | No       | A list of date filters to apply to the search. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://example.com/api/files/v1/filesets/e8db05d9-2709-4a54-98d1-4da5cf2a35e1/files/search', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    fieldSort: [{ field: 'created', order: 'ASC' }],
    filters: [{ field: 'name', value: ['paid'], not: false, operator: 'LIKE' }],
    dateFilters: [{ field: 'created', start: '2025-05-12T23:30:00Z', not: false, end: null }]
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

<!--
type: tab-end -->

<!--
type: tab
title: Python
-->

```python
import requests

url = "https://example.com/api/files/v1/filesets/e8db05d9-2709-4a54-98d1-4da5cf2a35e1/files/search"
payload = {
    "fieldSort": [{"field": "created", "order": "ASC"}],
    "filters": [{"field": "name", "value": ["paid"], "not": False, "operator": "LIKE"}],
    "dateFilters": [{"field": "created", "start": "2025-05-12T23:30:00Z", "not": False, "end": None}]
}
headers = {
    'Content-Type': 'application/json'
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
curl -X POST "https://example.com/api/files/v1/filesets/e8db05d9-2709-4a54-98d1-4da5cf2a35e1/files/search" \
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

| Status Code | Description        |
|-------------|--------------------|
| `400`       | Bad Request        |
| `403`       | Forbidden          |
| `409`       | Conflict           |
| `413`       | Payload Too Large  |

---

## Reindex Files within a FileSet

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/reindex`

Initiate another indexing attempt for specific files within a FileSet.

### Path Parameters

| Parameter   | Type   | Required | Description                                             |
|-------------|--------|----------|---------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet to reindex files within. |

### Query Parameters

_None_

### Request Body

Request object for another indexing attempt for specific files within a file set.

| Parameter | Type  | Required | Description                           |
|-----------|-------|----------|---------------------------------------|
| `fileIds` | array | ✓ Yes    | The IDs of the files to be reindexed. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://api.example.com/api/files/v1/filesets/a1998233-e944-40ba-adf0-0dcdc18adbbd/files/reindex', {
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

<!--
type: tab
title: Python
-->

```python
import requests

url = "https://api.example.com/api/files/v1/filesets/a1998233-e944-40ba-adf0-0dcdc18adbbd/files/reindex"
payload = {
    "fileIds": [
        "7150e608-c3a9-4b40-ac2d-eb182cc98c6f",
        "22e1514a-354b-470f-bc32-c354812738f2"
    ]
}
headers = {
    "Content-Type": "application/json"
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
curl -X POST "https://api.example.com/api/files/v1/filesets/a1998233-e944-40ba-adf0-0dcdc18adbbd/files/reindex" \
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

- `retriedFilesCount`: The number of files that were successfully reindexed.

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
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet in which to create the File. |

### Query Parameters

_None_

### Request Body

Represents a request to initiate a split file upload.

| Parameter | Type   | Required | Description                                                    |
|-----------|--------|----------|----------------------------------------------------------------|
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
{
  fetch('https://api.example.com/api/files/v1/filesets/fe3414bf-6b9a-45ff-bb25-f00cb1794768/files/multipart', {
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

url = 'https://api.example.com/api/files/v1/filesets/fe3414bf-6b9a-45ff-bb25-f00cb1794768/files/multipart'
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
# Generate a realistic cURL command
# Use the actual endpoint path
# Include -H headers and -d data as appropriate
curl -X POST https://api.example.com/api/files/v1/filesets/fe3414bf-6b9a-45ff-bb25-f00cb1794768/files/multipart \
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

| Parameter     | Type             | Required | Description                                                         |
|---------------|------------------|----------|---------------------------------------------------------------------|
| `fileSetId`   | string           | ✓ Yes    | The ID of the FileSet in which the file is being uploaded.          |
| `fileId`      | string           | ✓ Yes    | The ID of the file being uploaded in parts.                         |
| `partNumber`  | integer (int64)  | ✓ Yes    | The part number of this file segment. Must be non-negative.         |

### Query Parameters

_None_

### Request Body

Represents a request to upload a part of a file in a split file upload operation.

| Parameter | Type            | Required | Description                                                          |
|-----------|-----------------|----------|----------------------------------------------------------------------|
| `part`    | string (binary) | ✓ Yes    | Binary data of the file part being uploaded.                          |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const axios = require('axios');
const fs = require('fs');

const fileSetId = "3078cc31-f9e3-4070-86cd-a8974bc8bc50";
const fileId = "45c23387-158a-4b3f-8814-476f950a6ef9";
const partNumber = 1234567890;

// Assuming that file content is stored in 'filePartBinaryData'
const filePartBinaryData = fs.readFileSync('/path/to/binary/file/part');

axios.post(`https://api.example.com/api/files/v1/filesets/${fileSetId}/files/multipart/${fileId}/part/${partNumber}`, filePartBinaryData, {
  headers: {
    'Content-Type': 'application/octet-stream'
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error('Error uploading file part:', error);
});
```

<!-- type: tab-end --> 

<!--
type: tab
title: Python
-->

```python
import requests

fileSetId = "3078cc31-f9e3-4070-86cd-a8974bc8bc50"
fileId = "45c23387-158a-4b3f-8814-476f950a6ef9"
partNumber = 1234567890

url = f"https://api.example.com/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/part/{partNumber}"

# Assuming binary data of file part is stored in 'file_part_binary_data'
file_part_binary_data = open('/path/to/binary/file/part', 'rb')

headers = {
    'Content-Type': 'application/octet-stream'
}

try:
    response = requests.post(url, headers=headers, data=file_part_binary_data)
    print(response.json())
except requests.exceptions.RequestException as error:
    print('Error uploading file part:', error)
```

<!-- type: tab-end --> 

<!--
type: tab
title: cURL
-->

```bash
fileSetId="3078cc31-f9e3-4070-86cd-a8974bc8bc50"
fileId="45c23387-158a-4b3f-8814-476f950a6ef9"
partNumber=1234567890

curl -X POST "https://api.example.com/api/files/v1/filesets/${fileSetId}/files/multipart/${fileId}/part/${partNumber}" \
  -H "Content-Type: application/octet-stream" \
  --data-binary "@/path/to/binary/file/part"
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

| Status Code | Description                                                                                       |
|-------------|---------------------------------------------------------------------------------------------------|
| `400`       | Split file upload part did not match previous data segments.                                      |
| `403`       | Forbidden.                                                                                        |
| `404`       | An "initiate split file" request was not performed prior to this request for the given file ID or has already been finalized or aborted. |
| `409`       | Conflict.                                                                                         |
| `413`       | Payload Too Large.                                                                                |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled.                          |

---

## Finalize a split file upload.

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/finalize`

Declares that all parts of a split file upload have been submitted and the file can be assembled.

### Path Parameters

| Parameter   | Type   | Required | Description                                                      |
|-------------|--------|----------|------------------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet in which the file has been uploaded.       |
| `fileId`    | string | ✔ Yes    | The ID of the file whose parts have been uploaded.               |

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

const fileSetId = "d53ecc28-e927-4d7a-8e7c-c254fcfd1f29";
const fileId = "1b431448-72e3-4d19-b220-f21eefcdb804";

fetch(`https://yourapiurl.com/api/files/v1/filesets/${fileSetId}/files/multipart/${fileId}/finalize`, {
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

fileSetId = "d53ecc28-e927-4d7a-8e7c-c254fcfd1f29"
fileId = "1b431448-72e3-4d19-b220-f21eefcdb804"

response = requests.post(
    f"https://yourapiurl.com/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/finalize",
    headers={"Content-Type": "application/json"}
)

print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
fileSetId="d53ecc28-e927-4d7a-8e7c-c254fcfd1f29"
fileId="1b431448-72e3-4d19-b220-f21eefcdb804"

curl -X POST "https://yourapiurl.com/api/files/v1/filesets/${fileSetId}/files/multipart/${fileId}/finalize" \
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

- `file.id`: The unique identifier of the file.
- `file.path`: The file path where the document is stored.
- `file.name`: The name of the file.
- `file.fileType`: The type of the file.
- `file.contentType`: The MIME type of the file.
- `file.size`: The size of the file in bytes.
- `file.hash`: The SHA-256 HEX hash of the file.
- `file.hashAlgorithm`: The algorithm used to generate the hash.
- `file.downloadUrl`: The URL to download the file.
- `file.created`: The timestamp when the file was created.
- `file.createdBy`: The identifier of the user who created the file.
- `file.connectorKey`: The key for the connector if applicable.
- `file.indexStatus`: The index status of the file.
- `file.indexReason`: The reason for the current index status.
- `status`: Overall request status, typically "SUCCESS" on completion.

### Error Responses

| Status Code | Description                                                                                                   |
|-------------|---------------------------------------------------------------------------------------------------------------|
| `400`       | Bad Request                                                                                                   |
| `403`       | Forbidden                                                                                                     |
| `404`       | An "initiate split file" request was not performed prior to this request for the given file ID and/or has not been uploaded any parts, or has already been finalized/aborted. |
| `409`       | Conflict: File already exists at the declared path.                                                           |
| `413`       | Payload Too Large                                                                                             |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled.                                      |

---

## Abort a split file upload.

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/abort`

This endpoint aborts an ongoing split file upload process, discarding all uploaded parts associated with the file.

### Path Parameters

| Parameter  | Type   | Required | Description                                                   |
|------------|--------|----------|---------------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet in which the file was being uploaded.   |
| `fileId`    | string | ✔ Yes    | The ID of the file whose upload is to be aborted.             |

### Query Parameters

_None_

### Request Body

This endpoint does not require a request body.

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const baseUrl = "https://api.example.com";
const fileSetId = "22bd9d29-0ce1-49d9-abb0-183db95d4272";
const fileId = "e59068cb-b0f4-4c5e-87b6-c1053199c508";

fetch(`${baseUrl}/api/files/v1/filesets/${fileSetId}/files/multipart/${fileId}/abort`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}).then(response => response.json()).then(data => console.log(data));
```

<!--
type: tab
title: Python
-->

```python
import requests

baseUrl = "https://api.example.com"
fileSetId = "22bd9d29-0ce1-49d9-abb0-183db95d4272"
fileId = "e59068cb-b0f4-4c5e-87b6-c1053199c508"

url = f"{baseUrl}/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/abort"

headers = {
    'Content-Type': 'application/json'
}

response = requests.post(url, headers=headers)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
baseUrl="https://api.example.com"
fileSetId="22bd9d29-0ce1-49d9-abb0-183db95d4272"
fileId="e59068cb-b0f4-4c5e-87b6-c1053199c508"
curl -X POST "${baseUrl}/api/files/v1/filesets/${fileSetId}/files/multipart/${fileId}/abort" -H "Content-Type: application/json"
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

- `file.id`: The unique identifier for the file.
- `file.path`: The directory path where the file is located.
- `file.name`: The name of the file.
- `file.fileType`: The type of the file, e.g., DOCUMENT.
- `file.contentType`: The MIME type of the file.
- `file.size`: The size of the file in bytes.
- `file.hash`: The hash value of the file (null if not applicable).
- `file.hashAlgorithm`: The algorithm used for computing the file's hash.
- `file.created`: The timestamp when the file was created.
- `file.createdBy`: The ID of the user who created the file.
- `status`: Indicates the status of the operation, "FAILED" in this case.

### Error Responses

| Status Code | Description |
|-------------|-------------|
| `400` | Bad Request. |
| `403` | Forbidden. |
| `404` | An "initiate split file" request was not performed prior to this request for the given file ID or has already been finalized or aborted. |
| `409` | Conflict. |
| `413` | Payload Too Large. |

---

## Get FileSet Access Permissions

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/access`

Retrieve the access permissions for a specific FileSet.

### Path Parameters

| Parameter   | Type   | Required | Description                                                    |
|-------------|--------|----------|----------------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet for which to retrieve access information. |

### Query Parameters

_None_

### Request Body



### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript Fetch API example to call the endpoint and retrieve access permissions
const fileSetId = "be483db7-429f-4cd1-9e87-c95c10ef8571";
fetch(`https://example.com/api/files/v1/filesets/${fileSetId}/access`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
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
# Python Requests example to call the endpoint and retrieve access permissions
import requests

fileSetId = "be483db7-429f-4cd1-9e87-c95c10ef8571"
url = f"https://example.com/api/files/v1/filesets/{fileSetId}/access"

response = requests.get(url)
data = response.json()
print(data)
```

<!--
type: tab
title: cURL
-->

```bash
# cURL command to call the endpoint and retrieve access permissions
fileSetId="be483db7-429f-4cd1-9e87-c95c10ef8571"
curl -X GET "https://example.com/api/files/v1/filesets/$fileSetId/access" -H "Content-Type: application/json"
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

**Response Fields:**

- `fileSetId`: The ID of the FileSet.
- `fileSetAccess`: A list of access permissions for the FileSet.
  - `entityId`: ID of the entity (User/Group).
  - `entityType`: Type of entity, e.g., "USER".
  - `permission`: Access level of the entity for the FileSet (e.g., "OWNER").

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

| Parameter   | Type   | Required | Description                                                          |
|-------------|--------|----------|----------------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes     | The ID of the FileSet for which to update access permissions.        |

### Query Parameters

_None_

### Request Body

Request object for updating access permissions to a file set.

Only the permissions that are explicitly set in the request will be updated.

| Parameter       | Type  | Required | Description                                         |
|-----------------|-------|----------|-----------------------------------------------------|
| `fileSetAccess` | array | ✓ Yes     | The access permissions for the file set.            |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://api.example.com/api/files/v1/filesets/f34c1d76-71ba-4e31-8892-cd6ae61633a3/access', {
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

url = 'https://api.example.com/api/files/v1/filesets/f34c1d76-71ba-4e31-8892-cd6ae61633a3/access'
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
type: tab-end
-->

<!--
type: tab
title: cURL
-->

```bash
curl -X POST 'https://api.example.com/api/files/v1/filesets/f34c1d76-71ba-4e31-8892-cd6ae61633a3/access' \
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

- `fileSetId`: Unique identifier for the updated FileSet.
- `fileSetAccess`: Array of access permissions, including entity ID, type, and permission level.

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
    fieldSort: [
      { field: "name", order: "ASC" }
    ],
    filters: [
      { field: "owner", value: [27], not: false, operator: "EQUALS" }
    ],
    dateFilters: [
      { field: "created", start: "2025-05-12T23:30:00Z", not: false, end: null }
    ]
  })
});
```

<!--
type: tab
title: Python
-->

```python
import requests

url = "https://api.example.com/api/files/v1/filesets/search?limit=10&offset=0"
headers = {
    "Content-Type": "application/json"
}
data = {
    "fieldSort": [
        {"field": "name", "order": "ASC"}
    ],
    "filters": [
        {"field": "owner", "value": [27], "not": False, "operator": "EQUALS"}
    ],
    "dateFilters": [
        {"field": "created", "start": "2025-05-12T23:30:00Z", "not": False, "end": None}
    ]
}

response = requests.post(url, headers=headers, json=data)
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "https://api.example.com/api/files/v1/filesets/search?limit=10&offset=0" \
-H "Content-Type: application/json" \
-d '{
  "fieldSort": [
    { "field": "name", "order": "ASC" }
  ],
  "filters": [
    { "field": "owner", "value": [27], "not": false, "operator": "EQUALS" }
  ],
  "dateFilters": [
    { "field": "created", "start": "2025-05-12T23:30:00Z", "not": false, "end": null }
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

| Parameter   | Type   | Required | Description                                                  |
|-------------|--------|----------|--------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet for which to retrieve statistics.      |

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

const fileSetId = '88fa5abc-ef8b-4cfe-9a37-8d1f135cc612';
const url = `https://example.com/api/files/v1/filesets/${fileSetId}/stats`;

axios.get(url, {
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => console.log(response.data))
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

fileSetId = '88fa5abc-ef8b-4cfe-9a37-8d1f135cc612'
url = f'https://example.com/api/files/v1/filesets/{fileSetId}/stats'

response = requests.get(url, headers={'Content-Type': 'application/json'})

if response.ok:
    print(response.json())
else:
    print(f'Error: {response.status_code}')
```

<!--
type: tab-end
-->

<!--
type: tab
title: cURL
-->

```bash
curl -X GET "https://example.com/api/files/v1/filesets/88fa5abc-ef8b-4cfe-9a37-8d1f135cc612/stats" -H "Content-Type: application/json"
```

<!--
type: tab-end
-->

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
- `otherFileTypeCount`: Number of other files.
- `notIndexedCount`: Number of files not indexed.
- `indexQueuedCount`: Number of files queued for indexing.
- `indexInProgressCount`: Number of files indexing is in progress.
- `indexCompleteCount`: Number of files indexed successfully.
- `indexFailedCount`: Number of files that failed during indexing.
- `indexSkippedCount`: Number of files where indexing was skipped.

### Error Responses

| Status Code | Description             |
|-------------|-------------------------|
| `400`       | Bad Request             |
| `403`       | Forbidden               |
| `409`       | Conflict                |
| `413`       | Payload Too Large       |

---

## Get File or Directory by Path

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/path`

Retrieve a File or Directory within a FileSet using its path.

### Path Parameters

| Parameter   | Type   | Required | Description                |
|-------------|--------|----------|----------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet.     |

### Query Parameters

| Parameter | Type   | Required | Description                                            |
|-----------|--------|----------|--------------------------------------------------------|
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

const fileSetId = '818e2517-aa93-46dc-af00-526df46bff8e';
const path = 'example/path/to/resource';

fetch(`/api/files/v1/filesets/${fileSetId}/path?path=${encodeURIComponent(path)}`)
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

fileSetId = '818e2517-aa93-46dc-af00-526df46bff8e'
path = 'example/path/to/resource'

response = requests.get(f'/api/files/v1/filesets/{fileSetId}/path', params={'path': path})

print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -G -X GET "/api/files/v1/filesets/818e2517-aa93-46dc-af00-526df46bff8e/path" --data-urlencode "path=example/path/to/resource"
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

- **id**: Unique identifier for the file or directory.
- **path**: The path location of the file or directory.
- **name**: The name of the file or directory.
- **fileType**: The type of the file (e.g., DOCUMENT).
- **contentType**: The MIME type of the file.
- **size**: The size of the file in bytes.
- **hash**: The hash value of the file content.
- **hashAlgorithm**: The algorithm used to calculate the hash.
- **downloadUrl**: URL to download the file (if applicable).
- **created**: The timestamp of when the file or directory was created.
- **createdBy**: The ID of the user who created the file or directory.
- **connectorKey**: Connector-related information (if applicable).
- **indexStatus**: The index status of the file or directory.
- **indexReason**: The reason for the index status.

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

| Parameter   | Type   | Required | Description                                      |
|-------------|--------|----------|--------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet containing the File. |

### Query Parameters

| Parameter | Type   | Required | Description                                                                                                   |
|-----------|--------|----------|---------------------------------------------------------------------------------------------------------------|
| `path`    | string | ✔ Yes    | The path to the File or Directory to delete. If a Directory is specified, it and its children will be deleted. |

### Request Body

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const fileSetId = '4c137c10-bcae-45ae-b9ad-f8eacf4445f9';
const path = 'example/path/to/resource';

fetch(`/api/files/v1/filesets/${fileSetId}/path?path=${encodeURIComponent(path)}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (response.status === 204) {
    console.log('File or Directory deleted successfully.');
  } else {
    console.error('Failed to delete File or Directory.');
  }
});
```

<!--
type: tab
title: Python
-->

```python
import requests

fileSetId = '4c137c10-bcae-45ae-b9ad-f8eacf4445f9'
path = 'example/path/to/resource'
url = f'/api/files/v1/filesets/{fileSetId}/path'

response = requests.delete(url, params={'path': path})

if response.status_code == 204:
    print('File or Directory deleted successfully.')
else:
    print('Failed to delete File or Directory.')
```

<!--
type: tab
title: cURL
-->

```bash
fileSetId='4c137c10-bcae-45ae-b9ad-f8eacf4445f9'
path='example/path/to/resource'
curl -X DELETE "/api/files/v1/filesets/$fileSetId/path?path=$path" -H "Content-Type: application/json"
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

| Parameter | Type   | Required | Description                                |
|-----------|--------|----------|--------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File. |

### Query Parameters

| Parameter | Type   | Required | Description                                       |
|-----------|--------|----------|---------------------------------------------------|
| `path`    | string | ✓ Yes    | The path of the File to download within the FileSet. |

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
const axios = require('axios');

axios.get('https://api.example.com/api/files/v1/filesets/37cbcab7-f804-4f9f-aac4-767e98f80f07/path/download', {
  params: {
    path: 'example/path/to/resource'
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
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
import requests

response = requests.get(
    'https://api.example.com/api/files/v1/filesets/37cbcab7-f804-4f9f-aac4-767e98f80f07/path/download',
    params={'path': 'example/path/to/resource'}
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
curl -G "https://api.example.com/api/files/v1/filesets/37cbcab7-f804-4f9f-aac4-767e98f80f07/path/download" \
     --data-urlencode "path=example/path/to/resource"
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

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fileSetId` | string | ✓ Yes | The ID of the FileSet containing the File or Directory. |
| `fileId` | string | ✓ Yes | The ID of the File or Directory to retrieve. |

### Query Parameters

_None_

### Request Body

_No description provided._

_No request body parameters._

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript fetch example
fetch('/api/files/v1/filesets/4d589dc8-8c52-4542-9887-6a004f079522/files/39fc4e38-9eb0-4e82-95ce-effb6b0b99dc', {
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

response = requests.get(
    'https://api.example.com/api/files/v1/filesets/4d589dc8-8c52-4542-9887-6a004f079522/files/39fc4e38-9eb0-4e82-95ce-effb6b0b99dc',
    headers={'Content-Type': 'application/json'}
)

print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
# cURL command example
curl -X GET 'https://api.example.com/api/files/v1/filesets/4d589dc8-8c52-4542-9887-6a004f079522/files/39fc4e38-9eb0-4e82-95ce-effb6b0b99dc' \
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

- **id**: Unique identifier of the file or directory.
- **path**: File or directory path.
- **name**: Name of the file or directory.
- **fileType**: Type of file (e.g., DOCUMENT).
- **contentType**: MIME type of the file.
- **size**: Size of the file in bytes.
- **hash**: Hash of the file content.
- **hashAlgorithm**: Algorithm used to generate the file hash.
- **downloadUrl**: URL to download the file.
- **created**: Timestamp when the file was created.
- **createdBy**: ID of the user who created the file.
- **connectorKey**: Connector key, if applicable.
- **indexStatus**: Indexing status.
- **indexReason**: Reason for current indexing status.

### Error Responses

| Status Code | Description |
|-------------|-------------|
| `400` | Bad Request |
| `403` | Forbidden |
| `409` | Conflict |
| `413` | Payload Too Large |

---

## Delete a File or Directory by ID

**Method:** `DELETE`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}`

Delete a specific File or Directory within a FileSet using its ID.

### Path Parameters

| Parameter   | Type   | Required | Description                                                                                                                                 |
|-------------|--------|----------|---------------------------------------------------------------------------------------------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet containing the File.                                                                                                  |
| `fileId`    | string | ✔ Yes    | The ID of the File or Directory to delete. If a Directory is specified, it and its children will be deleted.                               |

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
fetch('https://api.example.com/api/files/v1/filesets/9400579b-617b-43f1-b85b-d4408fce4053/files/095063d3-e0b7-4be3-8b26-906a5f59950a', {
  method: 'DELETE'
})
.then(response => {
  if (response.status === 204) {
    console.log('Delete successful');
  } else {
    console.error(`Error: ${response.status}`);
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

response = requests.delete('https://api.example.com/api/files/v1/filesets/9400579b-617b-43f1-b85b-d4408fce4053/files/095063d3-e0b7-4be3-8b26-906a5f59950a')

if response.status_code == 204:
    print('Delete successful')
else:
    print(f'Error: {response.status_code}')
```

<!--
type: tab
title: cURL
-->

```bash
# Generate a realistic cURL command
# Use the actual endpoint path
# Include -H headers and -d data as appropriate
curl -X DELETE 'https://api.example.com/api/files/v1/filesets/9400579b-617b-43f1-b85b-d4408fce4053/files/095063d3-e0b7-4be3-8b26-906a5f59950a'
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

Download the contents of a specific File within a FileSet using its ID. This endpoint will redirect to the file's download URL.

### Path Parameters

| Parameter  | Type   | Required | Description                                |
|------------|--------|----------|--------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File. |
| `fileId`    | string | ✓ Yes    | The ID of the File to download.            |

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
fetch('/api/files/v1/filesets/151327bc-d4c4-4fd6-9ea3-f276cf10b3c6/files/6acfafed-f14e-4653-9ab4-7fb379211bcb/download')
  .then(response => {
    if (response.status === 302) {
      return response.blob();
    }
    throw new Error('File download failed');
  })
  .then(blob => {
    console.log('File downloaded successfully');
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

response = requests.get('http://localhost/api/files/v1/filesets/151327bc-d4c4-4fd6-9ea3-f276cf10b3c6/files/6acfafed-f14e-4653-9ab4-7fb379211bcb/download', allow_redirects=True)

if response.status_code == 302:
    with open('downloaded_file', 'wb') as f:
        f.write(response.content)
    print('File downloaded successfully')
else:
    print('Failed to download file:', response.status_code)
```

<!--
type: tab
title: cURL
-->

```bash
curl -L -o downloaded_file 'http://localhost/api/files/v1/filesets/151327bc-d4c4-4fd6-9ea3-f276cf10b3c6/files/6acfafed-f14e-4653-9ab4-7fb379211bcb/download'
```

<!-- type: tab-end -->

### Response

**Status:** `302`

- The request is redirected to the file's location for download.  
- No content is returned in the response body when the file is successfully downloaded using a `302` redirect; hence, the `302` status code indicates a successful initiation of the download process.

### Error Responses

| Status Code | Description                         |
|-------------|-------------------------------------|
| `400`       | Bad Request                         |
| `403`       | Forbidden                           |
| `409`       | Conflict                            |
| `413`       | Payload Too Large                   |

---

## Get File Content by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}/content`

Retrieve the content of a specific File within a FileSet using its ID. This endpoint requires a valid download token for authorization, which is generally obtained via a download endpoint and redirected here automatically.

### Path Parameters

| Parameter   | Type   | Required | Description                                  |
|-------------|--------|----------|----------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File.   |
| `fileId`    | string | ✓ Yes    | The ID of the File to retrieve.              |

### Query Parameters

| Parameter | Type   | Required | Description                            |
|-----------|--------|----------|----------------------------------------|
| `token`   | string | ✓ Yes    | The download token for authorization. |

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
fetch('https://api.example.com/api/files/v1/filesets/03dbc970-b201-4093-9436-9494b59e0857/files/d624b184-d48b-4e71-a5b6-2c1f11ea6127/content?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...', {
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

# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed

url = "https://api.example.com/api/files/v1/filesets/03dbc970-b201-4093-9436-9494b59e0857/files/d624b184-d48b-4e71-a5b6-2c1f11ea6127/content"
params = {
    'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
}
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
curl -X GET "https://api.example.com/api/files/v1/filesets/03dbc970-b201-4093-9436-9494b59e0857/files/d624b184-d48b-4e71-a5b6-2c1f11ea6127/content?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." -H "Content-Type: application/json"
```

<!-- type: tab-end -->

### Response

**Status:** `200`

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

