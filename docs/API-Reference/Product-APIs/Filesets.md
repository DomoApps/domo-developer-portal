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

| Parameter   | Type    | Required | Description                                         |
|-------------|---------|----------|-----------------------------------------------------|
| `name`      | string  | ✔ Yes    | The name for the file set.                          |
| `description` | string | No       | A description for the file set.                     |
| `connector` | string  | No       | The connector that powers the file set. Allowed values: `DOMO`, `CONFLUENCE`, `GITHUB`, `GOOGLE_DRIVE`, `S3` |
| `aiEnabled` | boolean | No       | Indicates whether AI features are enabled for the file set. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Generate a realistic fetch/axios example using the request body example
// Use the actual endpoint path with any path parameters filled in
// Include proper headers (Content-Type: application/json if body exists)
fetch("/api/files/v1/filesets", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
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
.catch(err => console.error(err));
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

url = "/api/files/v1/filesets"
payload = {
    "name": "Policies (2025)",
    "description": "Location for all new and updated policies for FY2025",
    "aiEnabled": False,
    "connector": "DOMO"
}
headers = {"Content-Type": "application/json"}

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
curl -X POST "/api/files/v1/filesets" \
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

| Status Code | Description     |
|-------------|-----------------|
| `400`       | Bad Request     |
| `403`       | Forbidden       |
| `409`       | Conflict        |
| `413`       | Payload Too Large |

---

## Get a FileSet by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}`

Retrieve the details of a specific FileSet using its ID.

### Path Parameters

| Parameter | Type   | Required | Description                       |
|-----------|--------|----------|-----------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet to retrieve. |

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
fetch('https://api.example.com/api/files/v1/filesets/7c6be496-da15-48b6-9f7c-d87bd4427d12', {
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
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
import requests

url = 'https://api.example.com/api/files/v1/filesets/7c6be496-da15-48b6-9f7c-d87bd4427d12'
headers = {
    'Content-Type': 'application/json'
}

response = requests.get(url, headers=headers)
data = response.json()
print(data)
```

<!--
type: tab
title: cURL
-->

```bash
# Generate a realistic cURL command
# Use the actual endpoint path
# Include -H headers and -d data as appropriate
curl -X GET 'https://api.example.com/api/files/v1/filesets/7c6be496-da15-48b6-9f7c-d87bd4427d12' \
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

- `id`: The unique identifier of the FileSet.
- `name`: The name of the FileSet.
- `description`: Detailed description of the FileSet.
- `aiEnabled`: Boolean flag indicating if AI features are enabled for the FileSet.
- `indexStatus`: Current indexing status, if applicable.
- `connector`: Type of connector associated with the FileSet.
- `created`: Timestamp of when the FileSet was created.
- `createdBy`: ID of the user who created the FileSet.
- `updated`: Timestamp of the last update made to the FileSet.
- `updatedBy`: ID of the user who last updated the FileSet.
- `owner`: ID of the owner of the FileSet.
- `accountId`: Account ID associated with the FileSet.
- `connectorContext`: Context information for the connector, if any.
- `permission`: Current permission level for the FileSet.
- `size`: Size of the FileSet, usually in bytes.
- `fileCount`: Number of files contained in the FileSet.

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
const axios = require('axios');

axios.post('https://api.example.com/api/files/v1/filesets/8ff718f0-a340-4aee-97fa-7631760fe38f', {
  name: "Policies (FY25)",
  description: "Repository for new policies created ONLY in FY2025"
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

url = "https://api.example.com/api/files/v1/filesets/8ff718f0-a340-4aee-97fa-7631760fe38f"
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

<!--
type: tab
title: cURL
-->

```bash
curl -X POST https://api.example.com/api/files/v1/filesets/8ff718f0-a340-4aee-97fa-7631760fe38f \
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
- `id`: The unique identifier for the FileSet.
- `name`: The updated name of the FileSet.
- `description`: The updated description of the FileSet.
- `aiEnabled`: Indicates if AI features are enabled for the FileSet.
- `connector`: The type of connector used.
- `created`: The timestamp of when the FileSet was created.
- `createdBy`: The ID of the user who created the FileSet.
- `updated`: The timestamp of when the FileSet was last updated.
- `updatedBy`: The ID of the user who last updated the FileSet.
- `owner`: The ID of the owner of the FileSet.
- `accountId`: The account ID associated with the FileSet.
- `permission`: The permission level of the user with respect to the FileSet.
- `size`: The size of the FileSet.
- `fileCount`: The count of files in the FileSet.

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

| Parameter   | Type   | Required | Description                        |
|-------------|--------|----------|------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet to delete.   |

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
fetch('https://api.example.com/api/files/v1/filesets/188163c3-2ebe-4a63-a0a5-7dc7887d31c9', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
}).then(response => {
  if (response.status === 204) {
    console.log('FileSet deleted successfully');
  } else {
    console.error('Failed to delete FileSet');
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

url = 'https://api.example.com/api/files/v1/filesets/188163c3-2ebe-4a63-a0a5-7dc7887d31c9'
response = requests.delete(url, headers={'Content-Type': 'application/json'})

if response.status_code == 204:
    print('FileSet deleted successfully')
else:
    print('Failed to delete FileSet')
```

<!--
type: tab
title: cURL
-->

```bash
# cURL example
curl -X DELETE 'https://api.example.com/api/files/v1/filesets/188163c3-2ebe-4a63-a0a5-7dc7887d31c9' -H 'Content-Type: application/json'
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

| Parameter   | Type   | Required | Description                       |
|-------------|--------|----------|-----------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet to query. |

### Query Parameters

_None_

### Request Body

Used to query a file set for the top K results based on the provided query.

| Parameter          | Type             | Required | Description                                                                 |
|--------------------|------------------|----------|-----------------------------------------------------------------------------|
| `query`            | string           | ✓ Yes    | The query string to match against file contents within the file set.        |
| `topK`             | integer (int32)  | No       | The number of top results to return based on the query match. Defaults to 1.|
| `pathPrefixFilter` | string           | No       | An optional prefix filter for the file paths to narrow down the search results. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const axios = require('axios');

axios.post('https://api.example.com/api/files/v1/filesets/16ea1cf9-54fd-4be9-a9e3-aa35356875a4/query', {
  query: 'benefit',
  pathPrefixFilter: 'sample/directory/path',
  topK: 2,
}, {
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

response = requests.post(
    'https://api.example.com/api/files/v1/filesets/16ea1cf9-54fd-4be9-a9e3-aa35356875a4/query',
    json={
        'query': 'benefit',
        'pathPrefixFilter': 'sample/directory/path',
        'topK': 2
    },
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
curl -X POST 'https://api.example.com/api/files/v1/filesets/16ea1cf9-54fd-4be9-a9e3-aa35356875a4/query' \
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

| Parameter  | Type   | Required | Description                                              |
|------------|--------|----------|----------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet for which to update the owner. |

### Query Parameters

_None_

### Request Body

Represents a request to transfer ownership of a file set.

Other users may be granted ownership level permissions, but only one user may be the sole owner of a file set.

| Parameter | Type           | Required | Description                                       |
|-----------|----------------|----------|---------------------------------------------------|
| `userId`  | integer (int64) | ✔ Yes    | The ID of the user that will assume ownership. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('/api/files/v1/filesets/abb4aa2f-e7ae-4ff2-acc4-b6e84e853c38/ownership', {
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

url = 'http://example.com/api/files/v1/filesets/abb4aa2f-e7ae-4ff2-acc4-b6e84e853c38/ownership'
headers = {'Content-Type': 'application/json'}
data = {'userId': 109}

response = requests.post(url, json=data, headers=headers)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST \
  http://example.com/api/files/v1/filesets/abb4aa2f-e7ae-4ff2-acc4-b6e84e853c38/ownership \
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
- `fileSetAccess`: A list of entities with their permissions in the FileSet.
  - `entityId`: The ID of the entity.
  - `entityType`: The type of the entity, e.g., USER.
  - `permission`: The level of access granted, e.g., OWNER.

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

| Parameter   | Type   | Required | Description                                      |
|-------------|--------|----------|--------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet in which to create the File. |

### Query Parameters

_None_

### Request Body

Represents a request to upload a file or create a directory.

| Parameter      | Type            | Required | Description                                                                                                                                                                   |
|----------------|-----------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `file`         | string (binary) | No       | The file to be uploaded. Leave null if creating a directory.                                                                                                                  |
| `directoryPath`| string          | No       | The directory path of the uploaded file, or the path of the created directory if no file is provided. Defaults to an empty string, i.e., the root directory, if not specified. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript Fetch API request example
fetch('https://example.com/api/files/v1/filesets/25ef28e1-93b7-4aeb-8899-a7224a9700cd/files', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    file: '(binary data of the file)',
    directoryPath: 'sample/directory/path'
  }),
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
# Python requests example
import requests

url = 'https://example.com/api/files/v1/filesets/25ef28e1-93b7-4aeb-8899-a7224a9700cd/files'
headers = {
    'Content-Type': 'application/json',
}
data = {
    "file": "(binary data of the file)",
    "directoryPath": "sample/directory/path"
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

<!--
type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
# cURL example command
curl -X POST 'https://example.com/api/files/v1/filesets/25ef28e1-93b7-4aeb-8899-a7224a9700cd/files' \
-H 'Content-Type: application/json' \
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

- `id`: The unique identifier of the newly created or returned directory.
- `path`: The specified path where the file or directory is located.
- `name`: The name of the file or directory.
- `size`: The size of the file; null for directories.
- `created`: The timestamp of when the file or directory was created.
- `createdBy`: The identifier of the user who created the file or directory.
- `fileType`: Indicates whether the entity is a file or a directory.

### Error Responses

| Status Code | Description                                                                                                      |
|-------------|------------------------------------------------------------------------------------------------------------------|
| `400`       | Bad Request                                                                                                      |
| `403`       | Forbidden                                                                                                        |
| `409`       | Conflict: File already exists at the specified path and client does not have overwrite permissions.             |
| `413`       | Payload Too Large                                                                                                |

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

| Parameter          | Type           | Required | Description                                                  |
|--------------------|----------------|----------|--------------------------------------------------------------|
| `directoryPath`    | string         | No       | The path to the directory within the FileSet, if applicable. |
| `immediateChildren`| boolean        | No       | Whether to list only immediate children of the specified directory. (Default: `False`) |
| `limit`            | integer (int32)| No       | The maximum number of Files to return. (Default: `100`)      |
| `next`             | string         | No       | The pagination token for the next set of results.            |

### Request Body

Request object for searching with specific filters and sorting options.

| Parameter    | Type  | Required | Description                                       |
|--------------|-------|----------|---------------------------------------------------|
| `fieldSort`  | array | No       | A list of field sort criteria to apply to the search. |
| `filters`    | array | No       | A list of filters to apply to the search.         |
| `dateFilters`| array | No       | A list of date filters to apply to the search.    |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const axios = require('axios');

axios.post('https://your-api-domain.com/api/files/v1/filesets/d5b9815c-8c92-4f40-a5ee-500e110ad4cb/files/search?directoryPath=example/path/to/resource&immediateChildren=false&limit=10&next=example-string', {
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
}, {
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

url = "https://your-api-domain.com/api/files/v1/filesets/d5b9815c-8c92-4f40-a5ee-500e110ad4cb/files/search"
params = {
    "directoryPath": "example/path/to/resource",
    "immediateChildren": False,
    "limit": 10,
    "next": "example-string"
}
payload = {
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

response = requests.post(url, params=params, json=payload, headers={'Content-Type': 'application/json'})
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "https://your-api-domain.com/api/files/v1/filesets/d5b9815c-8c92-4f40-a5ee-500e110ad4cb/files/search?directoryPath=example/path/to/resource&immediateChildren=false&limit=10&next=example-string" \
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

- `files`: List of files satisfying the search criteria.
  - `id`: Unique file identifier.
  - `path`: Full path of the file.
  - `name`: Name of the file.
  - `fileType`: Type of file (e.g., DOCUMENT).
  - `contentType`: MIME type of the file.
  - `size`: Size of the file in bytes.
  - `hash`: Hash value of the file content.
  - `hashAlgorithm`: Algorithm used to compute the hash (e.g., SHA_256_HEX).
  - `created`: Timestamp of file creation.
  - `createdBy`: ID of the user who created the file.
  - `downloadUrl`: URL for file download (if applicable).

- `pageContext`: Information for pagination.
  - `next`: Token for the next set of results.

### Error Responses

| Status Code | Description      |
|-------------|------------------|
| `400`       | Bad Request      |
| `403`       | Forbidden        |
| `409`       | Conflict         |
| `413`       | Payload Too Large |

---

## Initiate a split file upload.

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart`

Initiates a split file upload process for creating a new file within a FileSet.

### Path Parameters

| Parameter   | Type   | Required | Description                                             |
|-------------|--------|----------|---------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet in which to create the File.      |

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
const axios = require('axios');

const data = {
  path: "example/path/to/resource"
};

axios.post('/api/files/v1/filesets/c1551e17-7272-48c9-ace3-048db6afd960/files/multipart', data, {
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => console.log(response.data))
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

url = "/api/files/v1/filesets/c1551e17-7272-48c9-ace3-048db6afd960/files/multipart"
data = {
    "path": "example/path/to/resource"
}

headers = {
    "Content-Type": "application/json"
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
curl -X POST /api/files/v1/filesets/c1551e17-7272-48c9-ace3-048db6afd960/files/multipart \
     -H "Content-Type: application/json" \
     -d '{"path":"example/path/to/resource"}'
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

- `file.id`: The unique identifier for the file.
- `file.path`: The server path where the file has been stored.
- `file.name`: The name of the file.
- `file.fileType`: The type/category of the file.
- `file.hashAlgorithm`: The algorithm used for hash generation of the file.
- `file.created`: The timestamp when the file was created.
- `file.createdBy`: The user ID of the creator of the file.
- `status`: The current status of the file creation.

### Error Responses

| Status Code | Description                                                                                      |
|-------------|--------------------------------------------------------------------------------------------------|
| `400`       | Bad Request                                                                                      |
| `403`       | Forbidden                                                                                        |
| `409`       | Conflict: File already exists at the specified path.                                             |
| `413`       | Payload Too Large                                                                                |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled.                         |

---

## Submit a part of a file for upload.

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/part/{partNumber}`

Allows submitting a file in stages to create a new file within a FileSet.

### Path Parameters

| Parameter   | Type           | Required | Description                                                              |
|-------------|----------------|----------|--------------------------------------------------------------------------|
| `fileSetId` | string         | ✓ Yes    | The ID of the FileSet in which to the file is being uploaded.            |
| `fileId`    | string         | ✓ Yes    | The ID of the file being uploaded in parts.                              |
| `partNumber`| integer (int64)| ✓ Yes    | The part number of this file segment. Must be non-negative.              |

### Query Parameters

_None_

### Request Body

Represents a request to upload a part of a file in a split file upload operation.

| Parameter | Type           | Required | Description                                                                     |
|-----------|----------------|----------|---------------------------------------------------------------------------------|
| `part`    | string (binary)| No       | The full path destination for the file once the upload is complete.             |


### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://api.yourapp.com/api/files/v1/filesets/27d48c1a-65bd-43a9-97ca-c9da5add748a/files/multipart/86e12e0f-9767-46cc-92ac-46102ec95f4a/part/1234567890', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    part: '(binary data of the file)'
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

url = 'https://api.yourapp.com/api/files/v1/filesets/27d48c1a-65bd-43a9-97ca-c9da5add748a/files/multipart/86e12e0f-9767-46cc-92ac-46102ec95f4a/part/1234567890'
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
curl -X POST 'https://api.yourapp.com/api/files/v1/filesets/27d48c1a-65bd-43a9-97ca-c9da5add748a/files/multipart/86e12e0f-9767-46cc-92ac-46102ec95f4a/part/1234567890' \
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

| Status Code | Description                                                                                   |
|-------------|-----------------------------------------------------------------------------------------------|
| `400`       | Split file upload part did not match previous data segments.                                  |
| `403`       | Forbidden                                                                                     |
| `404`       | An "initiate split file" request was not performed prior to this request for the given file ID or has already been finalized or aborted. |
| `409`       | Conflict                                                                                      |
| `413`       | Payload Too Large                                                                             |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled.                      |

---

## Finalize a split file upload.

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/finalize`

Declares that all parts of a split file upload have been submitted and the file can be assembled.

### Path Parameters

| Parameter  | Type   | Required | Description                                                  |
|------------|--------|----------|--------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet in which the file has been uploaded.  |
| `fileId`   | string | ✓ Yes    | The ID of the file whose parts have been uploaded.          |

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
const baseUrl = "https://api.example.com";
const fileSetId = "0345937d-d2ed-4363-a833-6ccef4f15ac7";
const fileId = "f1e208f2-d6d9-4574-9f63-af29f539368a";

fetch(`${baseUrl}/api/files/v1/filesets/${fileSetId}/files/multipart/${fileId}/finalize`, {
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

base_url = "https://api.example.com"
fileSetId = "0345937d-d2ed-4363-a833-6ccef4f15ac7"
fileId = "f1e208f2-d6d9-4574-9f63-af29f539368a"
url = f"{base_url}/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/finalize"

response = requests.post(url)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "https://api.example.com/api/files/v1/filesets/0345937d-d2ed-4363-a833-6ccef4f15ac7/files/multipart/f1e208f2-d6d9-4574-9f63-af29f539368a/finalize" -H "Content-Type: application/json"
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
- `file.path`: The file path where it is stored.
- `file.name`: The name of the file.
- `file.fileType`: Type of the file, e.g., DOCUMENT.
- `file.contentType`: MIME type of the file content.
- `file.size`: Size of the file in bytes.
- `file.hash`: Hash of the file content for integrity verification.
- `file.hashAlgorithm`: Algorithm used for hashing.
- `file.downloadUrl`: URL to download the file. (Currently empty)
- `file.created`: Timestamp when the file was created.
- `file.createdBy`: ID of the user who created the file.
- `file.connectorKey`: Connection key if any. (Currently null)
- `file.indexStatus`: Indexing status of the file. (Currently null)
- `file.indexReason`: Reason for index status if any. (Currently null)
- `status`: Transaction status, expected value "SUCCESS".

### Error Responses

| Status Code | Description                                                                                 |
|-------------|---------------------------------------------------------------------------------------------|
| `400`       | Bad Request.                                                                                |
| `403`       | Forbidden.                                                                                  |
| `404`       | An "initiate split file" request was not performed prior to this request for the given file ID and/or has not been uploaded any parts, or has already been finalized/aborted. |
| `409`       | Conflict: File already exists at the declared path.                                         |
| `413`       | Payload Too Large.                                                                          |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled.                    |

---

## Abort a Split File Upload

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/abort`

Aborts an ongoing split file upload process, discarding all uploaded parts.

### Path Parameters

| Parameter  | Type   | Required | Description                                                                      |
|------------|--------|----------|----------------------------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet in which the file was being uploaded.                      |
| `fileId`    | string | ✓ Yes    | The ID of the file whose upload is to be aborted.                                |

### Query Parameters

- None

### Request Body

- None

### Request Example

<!-- type: tab title: JavaScript -->

```javascript
fetch('https://api.example.com/api/files/v1/filesets/e91415f9-f65f-4711-9cee-59ce20d69752/files/multipart/8831c482-a372-4875-a88b-9c06212e6577/abort', {
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

<!-- type: tab title: Python -->

```python
import requests

url = "https://api.example.com/api/files/v1/filesets/e91415f9-f65f-4711-9cee-59ce20d69752/files/multipart/8831c482-a372-4875-a88b-9c06212e6577/abort"
headers = {
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers)
print(response.json())
```

<!-- type: tab-end -->

<!-- type: tab title: cURL -->

```bash
curl -X POST "https://api.example.com/api/files/v1/filesets/e91415f9-f65f-4711-9cee-59ce20d69752/files/multipart/8831c482-a372-4875-a88b-9c06212e6577/abort" -H "Content-Type: application/json"
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

#### Response Fields:

- `file.id`: The unique identifier for the file.
- `file.path`: The path where the file is stored.
- `file.name`: The name of the file.
- `file.fileType`: The type of the file, e.g., DOCUMENT.
- `file.contentType`: The MIME type of the file.
- `file.size`: The size of the file in bytes.
- `file.hash`: The hash value of the file, if available.
- `file.hashAlgorithm`: The algorithm used to compute the file's hash.
- `file.downloadUrl`: The URL to download the file (if created successfully).
- `file.created`: The date and time when the file was created.
- `file.createdBy`: The ID of the user who created the file.
- `file.connectorKey`: The key for the file connector (if applicable).
- `file.indexStatus`: The indexing status of the file.
- `file.indexReason`: The reason for the indexing status.
- `status`: The result of the operation, indicating it was `FAILED`.

### Error Responses

| Status Code | Description |
|-------------|-------------|
| `400`       | Bad Request: The server could not understand the request due to invalid syntax. |
| `403`       | Forbidden: You do not have permissions to abort this file upload. |
| `404`       | Not Found: An "initiate split file" request was not performed prior to this request for the given file ID, or the process has already been finalized or aborted. |
| `409`       | Conflict: The request conflicts with the current state of the resource. |
| `413`       | Payload Too Large: The request entity is larger than the limits defined by the server. |

---

## Get FileSet Access Permissions

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/access`

Retrieve the access permissions for a specific FileSet.

### Path Parameters

| Parameter   | Type   | Required | Description                                                  |
|-------------|--------|----------|--------------------------------------------------------------|
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
// Example using fetch
fetch('https://api.example.com/api/files/v1/filesets/5dd9bac5-2f98-4de4-bb38-ec807dd66af7/access', {
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

url = 'https://api.example.com/api/files/v1/filesets/5dd9bac5-2f98-4de4-bb38-ec807dd66af7/access'
headers = {'Content-Type': 'application/json'}

response = requests.get(url, headers=headers)

if response.ok:
    print(response.json())
else:
    print('Error:', response.status_code, response.text)
```

<!--
type: tab
title: cURL
-->

```bash
curl -X GET \
  'https://api.example.com/api/files/v1/filesets/5dd9bac5-2f98-4de4-bb38-ec807dd66af7/access' \
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

- `fileSetId`: A unique identifier for the FileSet.
- `fileSetAccess`: An array of access permissions.
  - `entityId`: The ID of the entity granted access.
  - `entityType`: The type of entity, e.g., USER.
  - `permission`: The permission level, e.g., OWNER.

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

| Parameter   | Type   | Required | Description                                                              |
|-------------|--------|----------|--------------------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet for which to update access permissions.            |

### Query Parameters

_None_

### Request Body

Request object for updating access permissions to a file set.

Only the permissions that are explicitly set in the request will be updated.

| Parameter      | Type  | Required | Description                                               |
|----------------|-------|----------|-----------------------------------------------------------|
| `fileSetAccess` | array | ✓ Yes    | The access permissions for the file set.                  |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://example.com/api/files/v1/filesets/1357fd78-4b88-4d8d-873b-d66cf4f40a8d/access', {
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
type: tab
title: Python
-->

```python
import requests
import json

url = 'https://example.com/api/files/v1/filesets/1357fd78-4b88-4d8d-873b-d66cf4f40a8d/access'
headers = {'Content-Type': 'application/json'}
body = {
    "fileSetAccess": [
        {
            "entityId": 42,
            "entityType": "GROUP",
            "permission": "EDIT"
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
curl -X POST https://example.com/api/files/v1/filesets/1357fd78-4b88-4d8d-873b-d66cf4f40a8d/access \
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
// Generate a realistic fetch/axios example using the request body example
// Use the actual endpoint path with any path parameters filled in
// Include proper headers (Content-Type: application/json if body exists)
fetch('/api/files/v1/filesets/search?limit=10&offset=0', {
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
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
import requests
import json

url = 'https://api.example.com/api/files/v1/filesets/search?limit=10&offset=0'
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
            "value": [
                27
            ],
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
curl -X POST 'https://api.example.com/api/files/v1/filesets/search?limit=10&offset=0' \
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
      "value": [
        27
      ],
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

| Parameter   | Type   | Required | Description                                                 |
|-------------|--------|----------|-------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet for which to retrieve statistics. |

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
// JavaScript fetch example to retrieve FileSet statistics
fetch('https://example.com/api/files/v1/filesets/87945152-151e-4a22-977c-0a61699af356/stats', {
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
# Python requests example to retrieve FileSet statistics
import requests

url = "https://example.com/api/files/v1/filesets/87945152-151e-4a22-977c-0a61699af356/stats"

response = requests.get(url, headers={'Accept': 'application/json'})

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
# cURL command to retrieve FileSet statistics
curl -X GET "https://example.com/api/files/v1/filesets/87945152-151e-4a22-977c-0a61699af356/stats" -H "Accept: application/json"
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

- `imageFileTypeCount`: The number of image files in the FileSet.
- `audioFileTypeCount`: The number of audio files in the FileSet.
- `videoFileTypeCount`: The number of video files in the FileSet.
- `textFileTypeCount`: The number of text files in the FileSet.
- `documentFileTypeCount`: The number of document files in the FileSet.
- `otherFileTypeCount`: The number of files of other types in the FileSet.
- `notIndexedCount`: The number of files that have not been indexed.
- `indexQueuedCount`: The number of files queued for indexing.
- `indexInProgressCount`: The number of files currently being indexed.
- `indexCompleteCount`: The number of files for which indexing is complete.
- `indexFailedCount`: The number of files for which indexing failed.
- `indexSkippedCount`: The number of files for which indexing was skipped.

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

| Parameter | Type   | Required | Description                                         |
|-----------|--------|----------|-----------------------------------------------------|
| `path`    | string | ✓ Yes    | The path to the File or Directory within the FileSet. |

### Request Body

_None_

### Request Example

<!-- type: tab title: JavaScript -->

```javascript
fetch("https://api.example.com/api/files/v1/filesets/5816d47a-548f-4960-b8d3-723f64b759da/path?path=example/path/to/resource", {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
})
.then(response => response.json())
.then(data => console.log(data));
```

<!-- type: tab-end -->

<!-- type: tab title: Python -->

```python
import requests

response = requests.get(
    "https://api.example.com/api/files/v1/filesets/5816d47a-548f-4960-b8d3-723f64b759da/path",
    params={"path": "example/path/to/resource"},
    headers={"Content-Type": "application/json"}
)
print(response.json())
```

<!-- type: tab-end -->

<!-- type: tab title: cURL -->

```bash
curl -X GET "https://api.example.com/api/files/v1/filesets/5816d47a-548f-4960-b8d3-723f64b759da/path?path=example/path/to/resource" -H "Content-Type: application/json"
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

- `id`: Unique identifier of the file.
- `path`: Path of the file within the directory.
- `name`: Name of the file.
- `fileType`: Type of the file, e.g., DOCUMENT.
- `contentType`: MIME type of the file, e.g., application/pdf.
- `size`: Size of the file in bytes.
- `hash`: SHA-256 hash of the file.
- `hashAlgorithm`: Algorithm used for the hash.
- `downloadUrl`: URL to download the file (if applicable).
- `created`: Timestamp when the file was created.
- `createdBy`: ID of the user who created the file.
- `connectorKey`, `indexStatus`, `indexReason`: Additional metadata (null in this response).

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

| Parameter   | Type   | Required | Description                                  |
|-------------|--------|----------|----------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet containing the File.   |

### Query Parameters

| Parameter | Type   | Required | Description                                                                                   |
|-----------|--------|----------|-----------------------------------------------------------------------------------------------|
| `path`    | string | ✔ Yes    | The path to the File or Directory to delete. If a Directory is specified, it and its children will be deleted. |

### Request Body

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Enhanced JavaScript example using fetch and DELETE method with error handling
let fileSetId = "17165605-457d-46c9-8bef-cd9b00e79dfe";
let path = "example/path/to/resource";
let url = `https://yourapi.com/api/files/v1/filesets/${fileSetId}/path?path=${encodeURIComponent(path)}`;

fetch(url, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
}).then(response => {
  switch (response.status) {
    case 204:
      console.log('Delete successful');
      break;
    case 400:
      console.error('Bad Request');
      break;
    case 403:
      console.error('Forbidden');
      break;
    case 409:
      console.error('Conflict');
      break;
    case 413:
      console.error('Payload Too Large');
      break;
    default:
      console.error('Delete failed', response.status);
  }
});
```

<!--
type: tab
title: Python
-->

```python
# Enhanced Python example using requests library for DELETE method with error handling
import requests

fileSetId = "17165605-457d-46c9-8bef-cd9b00e79dfe"
path = "example/path/to/resource"
url = f"https://yourapi.com/api/files/v1/filesets/{fileSetId}/path"
params = {'path': path}

response = requests.delete(url, params=params, headers={'Content-Type': 'application/json'})

if response.status_code == 204:
    print('Delete successful')
elif response.status_code == 400:
    print('Bad Request')
elif response.status_code == 403:
    print('Forbidden')
elif response.status_code == 409:
    print('Conflict')
elif response.status_code == 413:
    print('Payload Too Large')
else:
    print('Delete failed', response.status_code)
```

<!--
type: tab
title: cURL
-->

```bash
# cURL example command using DELETE method
curl -X DELETE "https://yourapi.com/api/files/v1/filesets/17165605-457d-46c9-8bef-cd9b00e79dfe/path?path=example/path/to/resource" -H "Content-Type: application/json"
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

| Parameter  | Type   | Required | Description                                               |
|------------|--------|----------|-----------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet containing the File. |

### Query Parameters

| Parameter | Type   | Required | Description                                      |
|-----------|--------|----------|--------------------------------------------------|
| `path`    | string | ✔ Yes    | The path of the File to download within the FileSet. |

### Request Body

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Example using the fetch API for downloading a file
const fileSetId = "27cc4e02-cfbc-447c-9eaf-dad360eefbb4";
const path = "example/path/to/resource";

fetch(`/api/files/v1/filesets/${fileSetId}/path/download?path=${encodeURIComponent(path)}`, {
  method: 'GET',
})
  .then(response => {
    if (response.ok) {
      return response.blob(); // Handle the response as a blob for file download
    }
    throw new Error('Network response was not ok.');
  })
  .then(blob => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'filename.ext'; // Specify the filename
    document.body.appendChild(a);
    a.click();
    a.remove();
  })
  .catch(error => console.error('Error:', error));
```

<!--
type: tab
title: Python
-->

```python
# Example using requests library to download a file
import requests

base_url = "https://api.example.com"  # Base URL of the API
fileSetId = "27cc4e02-cfbc-447c-9eaf-dad360eefbb4"
path = "example/path/to/resource"

response = requests.get(f"{base_url}/api/files/v1/filesets/{fileSetId}/path/download", params={"path": path})

if response.status_code == 200:
    with open('filename.ext', 'wb') as file:  # Specify the filename
        file.write(response.content)
else:
    print(f"Error: {response.status_code}, {response.text}")
```

<!--
type: tab
title: cURL
-->

```bash
# Example of a cURL command to download a file
base_url="https://api.example.com"  # Base URL of the API
fileSetId="27cc4e02-cfbc-447c-9eaf-dad360eefbb4"
path="example/path/to/resource"

curl -G "$base_url/api/files/v1/filesets/$fileSetId/path/download" --data-urlencode "path=$path" -o filename.ext  # Specify the filename
```

<!-- type: tab-end -->

### Response

**Status:** `200 OK`

**Description:** The request will redirect to download the file successfully. A file is delivered as a downloadable binary content.

### Error Responses

| Status Code | Description                                            |
|-------------|--------------------------------------------------------|
| `400`       | Bad Request. The request is malformed or the path parameter is missing or incorrect. |
| `403`       | Forbidden. You do not have permission to access this file. |
| `409`       | Conflict. The file is in a conflicting state and cannot be downloaded at this time. |
| `413`       | Payload Too Large. The requested file is too large to be downloaded. |

---

## Get a File or Directory by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}`

Retrieve a specific File or Directory within a FileSet using its ID.

### Path Parameters

| Parameter   | Type   | Required | Description                                               |
|-------------|--------|----------|-----------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File or Directory.   |
| `fileId`    | string | ✓ Yes    | The ID of the File or Directory to retrieve.              |

### Query Parameters

_None_

### Request Body

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://api.example.com/api/files/v1/filesets/af82e826-76e0-4bc6-86d5-6ad800049228/files/4f9db9ca-c237-41fb-8008-9598066c19f3', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error fetching file:', error));
```

<!--
type: tab
title: Python
-->

```python
import requests

response = requests.get(
    'https://api.example.com/api/files/v1/filesets/af82e826-76e0-4bc6-86d5-6ad800049228/files/4f9db9ca-c237-41fb-8008-9598066c19f3',
    headers={'Content-Type': 'application/json'}
)
if response.ok:
    print(response.json())
else:
    print(f'Error fetching file: {response.status_code}')
```

<!--
type: tab
title: cURL
-->

```bash
curl -X GET 'https://api.example.com/api/files/v1/filesets/af82e826-76e0-4bc6-86d5-6ad800049228/files/4f9db9ca-c237-41fb-8008-9598066c19f3' \
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

### Error Responses

| Status Code | Description        |
|-------------|--------------------|
| `400`       | Bad Request        |
| `403`       | Forbidden          |
| `409`       | Conflict           |
| `413`       | Payload Too Large  |

---

## Delete a File or Directory by ID

**Method:** `DELETE`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}`

Delete a specific File or Directory within a FileSet using its ID.

### Path Parameters

| Parameter   | Type   | Required | Description                                                                                      |
|-------------|--------|----------|--------------------------------------------------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet containing the File.                                                      |
| `fileId`    | string | ✔ Yes    | The ID of the File or Directory to delete. If a Directory is specified, it and its children will be deleted. |

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
const fileSetId = 'ee9980ec-fdaa-4d46-a21b-0e61cac3a297';
const fileId = '5e143b33-e2b4-4c0f-8080-8942d4e77c32';

fetch(`https://api.example.com/api/files/v1/filesets/${fileSetId}/files/${fileId}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (response.status === 204) {
    console.log('File or Directory deleted successfully');
  }
})
.catch(error => {
  console.error('Error deleting file:', error);
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

fileSetId = 'ee9980ec-fdaa-4d46-a21b-0e61cac3a297'
fileId = '5e143b33-e2b4-4c0f-8080-8942d4e77c32'

url = f'https://api.example.com/api/files/v1/filesets/{fileSetId}/files/{fileId}'

response = requests.delete(url)

if response.status_code == 204:
    print('File or Directory deleted successfully')
else:
    print('Error deleting file:', response.status_code)
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
curl -X DELETE "https://api.example.com/api/files/v1/filesets/ee9980ec-fdaa-4d46-a21b-0e61cac3a297/files/5e143b33-e2b4-4c0f-8080-8942d4e77c32" -H "Content-Type: application/json"
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

Download the contents of a specific file within a FileSet using its ID. This will redirect to the file's download URL.

### Path Parameters

| Parameter   | Type   | Required | Description                                         |
|-------------|--------|----------|-----------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the file.          |
| `fileId`    | string | ✓ Yes    | The ID of the file to download.                     |

### Query Parameters

_None_

### Request Body

_No request body required_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Using fetch to initiate the file download

const fileSetId = "f7901880-4808-4dd2-8faf-0636182992b2";
const fileId = "f693d7b4-98cf-4573-88ff-0ed09987dac0";

fetch(`/api/files/v1/filesets/${fileSetId}/files/${fileId}/download`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (response.status === 302) {
    window.location.href = response.url;
  } else if (response.status === 400) {
    console.error('Bad Request:', response.statusText);
  } else if (response.status === 403) {
    console.error('Forbidden:', response.statusText);
  } else if (response.status === 409) {
    console.error('Conflict:', response.statusText);
  } else if (response.status === 413) {
    console.error('Payload Too Large:', response.statusText);
  } else {
    console.error('File download failed:', response.statusText);
  }
});

```

<!--
type: tab
title: Python
-->

```python
# Using requests to initiate the file download

import requests

fileSetId = "f7901880-4808-4dd2-8faf-0636182992b2"
fileId = "f693d7b4-98cf-4573-88ff-0ed09987dac0"

response = requests.get(f"/api/files/v1/filesets/{fileSetId}/files/{fileId}/download", headers={'Content-Type': 'application/json'})
if response.status_code == 302:
    download_url = response.url
    # Redirect to download URL
elif response.status_code == 400:
    print("Bad Request:", response.text)
elif response.status_code == 403:
    print("Forbidden:", response.text)
elif response.status_code == 409:
    print("Conflict:", response.text)
elif response.status_code == 413:
    print("Payload Too Large:", response.text)
else:
    print("File download failed:", response.status_code, response.text)

```

<!--
type: tab
title: cURL
-->

```bash
# Using cURL to initiate the file download

curl -X GET "/api/files/v1/filesets/f7901880-4808-4dd2-8faf-0636182992b2/files/f693d7b4-98cf-4573-88ff-0ed09987dac0/download" \
-H "Content-Type: application/json"
```

<!-- type: tab-end -->

### Response

**Status:** `302`

The request will result in a redirect to the URL where the file can be downloaded.

### Error Responses

- **400 Bad Request**: The request is invalid due to malformed syntax or a missing parameter.
- **403 Forbidden**: Access to the specified resource is forbidden, typically due to insufficient permissions.
- **409 Conflict**: The request could not be processed because of a conflict in the request, such as a duplicate resource.
- **413 Payload Too Large**: The server is refusing to process a request because the request payload is larger than the server is willing or able to process.

---

## Get File Content by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}/content`

Retrieve the content of a specific File within a FileSet using its ID. This endpoint requires a valid download token for authorization, which is generally obtained via a download endpoint and redirected here automatically.

### Path Parameters

| Parameter   | Type   | Required | Description                                  |
|-------------|--------|----------|----------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet containing the File.   |
| `fileId`    | string | ✔ Yes    | The ID of the File to retrieve.              |

### Query Parameters

| Parameter | Type   | Required | Description                            |
|-----------|--------|----------|----------------------------------------|
| `token`   | string | ✔ Yes    | The download token for authorization.  |

### Request Body

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript example using fetch
fetch('/api/files/v1/filesets/575a8333-77f1-4cfe-b203-ee7a7a6e198d/files/17167ad7-6d72-494a-a364-ae982181536f/content?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.blob();
  })
  .then(data => {
    console.log('File content retrieved successfully:', data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
```

<!--
type: tab
title: Python
-->

```python
# Python example using requests
import requests

response = requests.get(
    'https://your-api-base-url.com/api/files/v1/filesets/575a8333-77f1-4cfe-b203-ee7a7a6e198d/files/17167ad7-6d72-494a-a364-ae982181536f/content',
    params={'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'},
    headers={'Content-Type': 'application/json'},
)

if response.ok:
    print('File content retrieved successfully')
else:
    print('Error:', response.status_code, response.reason)
```

<!--
type: tab
title: cURL
-->

```bash
# cURL example
curl -X GET "https://your-api-base-url.com/api/files/v1/filesets/575a8333-77f1-4cfe-b203-ee7a7a6e198d/files/17167ad7-6d72-494a-a364-ae982181536f/content?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \
     -H "Content-Type: application/json"
```

<!-- type: tab-end -->

### Response

**Status:** `200`

The response body contains the binary content of the file. The content type depends on the file type and can be processed or saved accordingly. Below is an example structure for a JSON response when metadata is needed:

```json
{
  "fileName": "example.txt",
  "fileSize": 12345,
  "contentType": "text/plain",
  "content": "SGVsbG8gd29ybGQh"
}
```

- `fileName`: The name of the file.
- `fileSize`: The size of the file in bytes.
- `contentType`: The MIME type of the file content.
- `content`: Base64 encoded string of the file content. Decoding is necessary for binary or text file retrieval.

### Error Responses

| Status Code | Description        |
|-------------|--------------------|
| `400`       | Bad Request        |
| `403`       | Forbidden          |
| `409`       | Conflict           |
| `413`       | Payload Too Large  |

---

