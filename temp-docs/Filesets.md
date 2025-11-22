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

| Parameter    | Type    | Required | Description                                           |
|--------------|---------|----------|-------------------------------------------------------|
| `name`       | string  | ✓ Yes    | The name for the file set.                            |
| `description`| string  | No       | A description for the file set.                       |
| `connector`  | string  | No       | The connector that powers the file set. Allowed values: `DOMO`, `CONFLUENCE`, `GITHUB`, `GOOGLE_DRIVE`, `S3` |
| `aiEnabled`  | boolean | No       | Indicates whether AI features are enabled for the file set. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Generate a realistic fetch/axios example using the request body example
// Use the actual endpoint path with any path parameters filled in
// Include proper headers (Content-Type: application/json if body exists)
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
import json

url = "http://example.com/api/files/v1/filesets"
headers = {
    "Content-Type": "application/json"
}
data = {
    "name": "Policies (2025)",
    "description": "Location for all new and updated policies for FY2025",
    "aiEnabled": False,
    "connector": "DOMO"
}

response = requests.post(url, headers=headers, data=json.dumps(data))
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
curl -X POST http://example.com/api/files/v1/filesets \
-H "Content-Type: application/json" \
-d '{
  "name": "Policies (2025)",
  "description": "Location for all new and updated policies for FY2025",
  "aiEnabled": false,
  "connector": "DOMO"
}'
```

<!--
type: tab-end -->

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
- **name**: The name given to the FileSet.
- **description**: The description provided for the FileSet.
- **aiEnabled**: Boolean flag indicating if AI features are enabled.
- **indexStatus**: Current indexing status; `null` if not applicable.
- **connector**: Connector type linked to the FileSet.
- **created**: Timestamp of creation.
- **createdBy**: User ID of the creator.
- **updated**: Timestamp of last update.
- **updatedBy**: User ID of the last updater.
- **owner**: Owner ID of the FileSet.
- **accountId**: Account ID tied to the FileSet.
- **connectorContext**: Context for the connector if applicable.
- **permission**: Permission level for current user.
- **size**: Storage size of the FileSet.
- **fileCount**: Number of files stored in the FileSet.

### Error Responses

| Status Code | Description       |
|-------------|-------------------|
| `400`       | Bad Request       |
| `403`       | Forbidden         |
| `409`       | Conflict          |
| `413`       | Payload Too Large |

---

## Get a FileSet by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}`

Retrieve the details of a specific FileSet using its ID.

### Path Parameters

| Parameter   | Type   | Required | Description                          |
|-------------|--------|----------|--------------------------------------|
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
// JavaScript example using fetch to get a FileSet by ID
const fileSetId = '614f9e30-8506-46ff-ad0f-e040c7a792bb'; // Example ID

fetch(`/api/files/v1/filesets/${fileSetId}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error fetching FileSet:', error));
```

<!--
type: tab
title: Python
-->

```python
# Python example using requests to get a FileSet by ID
import requests

file_set_id = '614f9e30-8506-46ff-ad0f-e040c7a792bb'  # Example ID
url = f'/api/files/v1/filesets/{file_set_id}'

response = requests.get(url, headers={'Content-Type': 'application/json'})

if response.status_code == 200:
    print(response.json())
else:
    print(f'Error fetching FileSet: {response.status_code}')
```

<!--
type: tab
title: cURL
-->

```bash
# cURL example to get a FileSet by ID
curl -X GET "/api/files/v1/filesets/614f9e30-8506-46ff-ad0f-e040c7a792bb" \
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

- **id**: The unique identifier for the FileSet.
- **name**: The name of the FileSet.
- **description**: A brief overview of the FileSet.
- **aiEnabled**: A boolean indicating if AI is enabled for this FileSet.
- **connector**: The associated connector for this FileSet.
- **created**: The creation date and time of the FileSet.
- **createdBy**: The ID of the creator.
- **updated**: The last updated date and time.
- **updatedBy**: The ID of the person who last updated the FileSet.
- **owner**: The owner ID of the FileSet.
- **accountId**: The account ID associated with the FileSet.
- **permission**: The permission level of the current user.
- **size**: The size of the FileSet.
- **fileCount**: The number of files in this FileSet.

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

| Parameter   | Type   | Required | Description                           |
|-------------|--------|----------|---------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to update.      |

### Query Parameters

_None_

### Request Body

Represents a request to update a file set.  
At least one of the fields must be provided to update the file set.

| Parameter     | Type    | Required | Description                                                                                   |
|---------------|---------|----------|-----------------------------------------------------------------------------------------------|
| `name`        | string  | No       | The name with which to update the file set's name. If not provided, the name will remain unchanged. |
| `description` | string  | No       | Optional description with which to update the file set's description. If not provided, the description will remain unchanged.   |
| `aiEnabled`   | boolean | No       | Optional flag to enable or disable AI features for the file set.                              |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Generate a realistic fetch/axios example using the request body example
// Use the actual endpoint path with any path parameters filled in
// Include proper headers (Content-Type: application/json if body exists)
fetch('https://your.api.server/api/files/v1/filesets/0b8dd91b-03b6-46e9-9587-892dcc046989', {
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
.catch((error) => {
  console.error('Error:', error);
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
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
import requests

url = 'https://your.api.server/api/files/v1/filesets/0b8dd91b-03b6-46e9-9587-892dcc046989'
headers = {'Content-Type': 'application/json'}
data = {
    "name": "Policies (FY25)",
    "description": "Repository for new policies created ONLY in FY2025"
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
# Generate a realistic cURL command
# Use the actual endpoint path
# Include -H headers and -d data as appropriate
curl -X POST https://your.api.server/api/files/v1/filesets/0b8dd91b-03b6-46e9-9587-892dcc046989 \
     -H "Content-Type: application/json" \
     -d '{
            "name": "Policies (FY25)",
            "description": "Repository for new policies created ONLY in FY2025"
         }'
```

<!--
type: tab-end
-->

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

| Status Code | Description         |
|-------------|---------------------|
| `400`       | Bad Request         |
| `403`       | Forbidden           |
| `409`       | Conflict            |
| `413`       | Payload Too Large   |

---

## Delete a FileSet by ID

**Method:** `DELETE`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}`

Delete a specific FileSet using its ID.

### Path Parameters

| Parameter   | Type   | Required | Description                            |
|-------------|--------|----------|----------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to delete.       |

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
fetch('https://api.example.com/api/files/v1/filesets/4c3c304d-8197-42dc-93ff-50611735f3e7', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
}).then(response => {
  if (response.ok) {
    console.log('FileSet deleted successfully.');
  } else {
    console.error('Failed to delete FileSet.', response.status);
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
    'https://api.example.com/api/files/v1/filesets/4c3c304d-8197-42dc-93ff-50611735f3e7',
    headers={'Content-Type': 'application/json'}
)

if response.status_code == 204:
    print('FileSet deleted successfully.')
else:
    print('Failed to delete FileSet.', response.status_code)
```

<!--
type: tab
title: cURL
-->

```bash
curl -X DELETE 'https://api.example.com/api/files/v1/filesets/4c3c304d-8197-42dc-93ff-50611735f3e7' \
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

| Parameter   | Type   | Required | Description                        |
|-------------|--------|----------|------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to query.    |

### Query Parameters

_None_

### Request Body

Used to query a file set for the top K results based on the provided query.

| Parameter        | Type             | Required | Description                                                                          |
|------------------|------------------|----------|--------------------------------------------------------------------------------------|
| `query`          | string           | ✔ Yes    | The query string to match against file contents within the file set.                 |
| `topK`           | integer (int32)  | No       | The number of top results to return based on the query match. Defaults to 1.         |
| `pathPrefixFilter` | string         | No       | An optional prefix filter for the file paths to narrow down the search results.      |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript example using fetch
fetch('/api/files/v1/filesets/1662dea0-4153-46b9-849e-6a41b636b46d/query', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: 'benefit',
    pathPrefixFilter: 'sample/directory/path',
    topK: 2
  })
}).then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

<!--
type: tab
title: Python
-->

```python
import requests

url = 'http://localhost/api/files/v1/filesets/1662dea0-4153-46b9-849e-6a41b636b46d/query'
headers = {'Content-Type': 'application/json'}
data = {
    "query": "benefit",
    "pathPrefixFilter": "sample/directory/path",
    "topK": 2
}

response = requests.post(url, json=data, headers=headers)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST 'http://localhost/api/files/v1/filesets/1662dea0-4153-46b9-849e-6a41b636b46d/query' \
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

- Each match includes:
  - **content**: Contains either `text` for textual content or `uri` for an image encoded in a base64 string.
  - **metadata**: Includes `fileId`, a unique identifier for the file, and `path`, the file's location.
  - **score**: Relevance score of the match ranging from 0 to 1.

### Error Responses

| Status Code | Description      |
|-------------|------------------|
| `400`       | Bad Request      |
| `403`       | Forbidden        |
| `409`       | Conflict         |
| `413`       | Payload Too Large|

---

## Update FileSet Owner

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/ownership`

Update the owner of a specific FileSet. 

### Path Parameters

| Parameter   | Type   | Required | Description                                          |
|-------------|--------|----------|------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet for which to update the owner. |

### Query Parameters

_None_

### Request Body

Represents a request to transfer ownership of a file set.  
   
Other users may be granted ownership level permissions, but only one user may be the sole owner of a file set.

| Parameter | Type           | Required | Description                                       |
|-----------|----------------|----------|---------------------------------------------------|
| `userId`  | integer (int64)| ✓ Yes    | The ID of the user that will assume ownership.    |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('/api/files/v1/filesets/669928fb-7e76-40db-985a-13df7476dffb/ownership', {
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
import requests

url = 'https://api.example.com/api/files/v1/filesets/669928fb-7e76-40db-985a-13df7476dffb/ownership'
headers = {'Content-Type': 'application/json'}
data = {
  'userId': 109
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST 'https://api.example.com/api/files/v1/filesets/669928fb-7e76-40db-985a-13df7476dffb/ownership' \
  -H 'Content-Type: application/json' \
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

- **fileSetId**: The ID of the FileSet.
- **fileSetAccess**: A list of entities and their permissions for the FileSet. 
  - **entityId**: The ID of the entity (user).
  - **entityType**: The type of the entity, e.g., 'USER'.
  - **permission**: The level of access granted, e.g., 'OWNER'.

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

| Parameter   | Type   | Required | Description                                         |
|-------------|--------|----------|-----------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet in which to create the File. |

### Query Parameters

_None_

### Request Body

Represents a request to upload a file or create a directory.

| Parameter      | Type           | Required | Description                                                                                                                                       |
|----------------|----------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| `file`         | string (binary) | No       | The file to be uploaded. Leave null if creating a directory.                                                                                     |
| `directoryPath` | string         | No       | The directory path of the uploaded file, or the path of the created directory if no file is provided. Defaults to the root if not specified.     |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const fetch = require('node-fetch');

const url = 'https://example.com/api/files/v1/filesets/9ca04299-ec92-490c-8fc2-984dc0d7860e/files';
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    file: "(binary data of the file)",
    directoryPath: "sample/directory/path",
  }),
};

fetch(url, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
```

<!--
type: tab
title: Python
-->

```python
import requests

url = 'https://example.com/api/files/v1/filesets/9ca04299-ec92-490c-8fc2-984dc0d7860e/files'
headers = {
  'Content-Type': 'application/json',
}
data = {
  'file': '(binary data of the file)',
  'directoryPath': 'sample/directory/path'
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST \
  'https://example.com/api/files/v1/filesets/9ca04299-ec92-490c-8fc2-984dc0d7860e/files' \
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

**Response Fields:**
- `id`: A unique identifier for the created file or directory.
- `path`: The path of the created file or directory.
- `name`: The name of the created file or directory.
- `size`: The size of the file if it's a file, null for directories.
- `created`: The timestamp when the file or directory was created.
- `createdBy`: The ID of the user who created the file or directory.
- `fileType`: The type of the resource, e.g., `DIRECTORY` or `FILE`.

### Error Responses

| Status Code | Description                                                                                           |
|-------------|-------------------------------------------------------------------------------------------------------|
| `400`       | Bad Request                                                                                           |
| `403`       | Forbidden                                                                                             |
| `409`       | Conflict: File already exists at the specified path and client does not have overwrite permissions.   |
| `413`       | Payload Too Large                                                                                     |

---

## List Files and Directories for a FileSet

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/search`

Retrieve a paginated list of Files within a specific FileSet based on search criteria.

### Path Parameters

| Parameter   | Type   | Required | Description                             |
|-------------|--------|----------|-----------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet to search within. |

### Query Parameters

| Parameter          | Type            | Required | Description                                                             |
|--------------------|-----------------|----------|-------------------------------------------------------------------------|
| `directoryPath`    | string          | No       | The path to the directory within the FileSet, if applicable.            |
| `immediateChildren`| boolean         | No       | Whether to list only immediate children of the specified directory. (Default: `False`) |
| `limit`            | integer (int32) | No       | The maximum number of Files to return. (Default: `100`)                 |
| `next`             | string          | No       | The pagination token for the next set of results.                       |

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
fetch('https://example.com/api/files/v1/filesets/f5e6e0f1-945f-4ebf-a062-d73fa494ae0d/files/search', {
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

url = 'https://example.com/api/files/v1/filesets/f5e6e0f1-945f-4ebf-a062-d73fa494ae0d/files/search'
headers = {
    'Content-Type': 'application/json'
}
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
curl -X POST https://example.com/api/files/v1/filesets/f5e6e0f1-945f-4ebf-a062-d73fa494ae0d/files/search \
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

| Status Code | Description       |
|-------------|-------------------|
| `400`       | Bad Request       |
| `403`       | Forbidden         |
| `409`       | Conflict          |
| `413`       | Payload Too Large |

---

## Reindex Files within a FileSet

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/reindex`

Initiate another indexing attempt for specific files within a FileSet.

### Path Parameters

| Parameter  | Type   | Required | Description                                                 |
|------------|--------|----------|-------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet to reindex files within.             |

### Query Parameters

_None_

### Request Body

Request object for another indexing attempt for specific files within a file set.

| Parameter | Type  | Required | Description                        |
|-----------|-------|----------|------------------------------------|
| `fileIds` | array | ✓ Yes    | The IDs of the files to be reindexed. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const axios = require('axios');

axios.post('/api/files/v1/filesets/0052d847-1c95-45bd-88c4-6067d3d037a5/files/reindex', {
  fileIds: [
    "7150e608-c3a9-4b40-ac2d-eb182cc98c6f",
    "22e1514a-354b-470f-bc32-c354812738f2"
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

url = '/api/files/v1/filesets/0052d847-1c95-45bd-88c4-6067d3d037a5/files/reindex'
headers = {'Content-Type': 'application/json'}
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
curl -X POST '/api/files/v1/filesets/0052d847-1c95-45bd-88c4-6067d3d037a5/files/reindex' \
-H 'Content-Type: application/json' \
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

- `retriedFilesCount`: The number of files that were retried for indexing.

### Error Responses

| Status Code | Description         |
|-------------|---------------------|
| `400`       | Bad Request         |
| `403`       | Forbidden           |
| `409`       | Conflict            |
| `413`       | Payload Too Large   |

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

| Parameter | Type   | Required | Description                                                          |
|-----------|--------|----------|----------------------------------------------------------------------|
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
fetch('/api/files/v1/filesets/ffcdfba7-7cdd-4931-932f-395ff8c667ab/files/multipart', {
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

<!--
type: tab
title: Python
-->

```python
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
import requests

url = 'https://yourapi.com/api/files/v1/filesets/ffcdfba7-7cdd-4931-932f-395ff8c667ab/files/multipart'
headers = {
    'Content-Type': 'application/json'
}
data = {
    'path': 'example/path/to/resource'
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
curl -X POST 'https://yourapi.com/api/files/v1/filesets/ffcdfba7-7cdd-4931-932f-395ff8c667ab/files/multipart' \
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

- **file.id**: The unique identifier of the created file.
- **file.path**: The destination path of the uploaded file.
- **file.name**: The name of the file.
- **file.fileType**: The type of file uploaded.
- **file.hashAlgorithm**: The hash algorithm used for the file.
- **file.created**: Timestamp when the file was created.
- **file.createdBy**: User ID who initiated the file creation.
- **status**: The status of the file creation.

### Error Responses

| Status Code | Description                                              |
|-------------|----------------------------------------------------------|
| `400`       | Bad Request                                              |
| `403`       | Forbidden                                                |
| `409`       | Conflict: File already exists at the specified path.     |
| `413`       | Payload Too Large                                        |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled. |

---

## Submit a part of a file for upload.

**Method:** `POST`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/part/{partNumber}`

Allows submitting a file in stages to create a new file within a FileSet.

### Path Parameters

| Parameter   | Type             | Required | Description                                                   |
|-------------|------------------|----------|---------------------------------------------------------------|
| `fileSetId` | string           | ✔ Yes    | The ID of the FileSet in which to the file is being uploaded. |
| `fileId`    | string           | ✔ Yes    | The ID of the file being uploaded in parts.                   |
| `partNumber`| integer (int64)  | ✔ Yes    | The part number of this file segment. Must be non-negative.   |

### Query Parameters

_None_

### Request Body

Represents a request to upload a part of a file in a split file upload operation.

| Parameter | Type            | Required | Description                                                  |
|-----------|-----------------|----------|--------------------------------------------------------------|
| `part`    | string (binary) | No       | The full path destination for the file once the upload is complete. |

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

const fileSetId = "4830db66-7329-4c51-97ad-e52f419ddb9f";
const fileId = "cdef4d61-6502-43e4-a795-aba11e812b65";
const partNumber = 1234567890;

axios.post(`/api/files/v1/filesets/${fileSetId}/files/multipart/${fileId}/part/${partNumber}`, {
    part: "(binary data of the file)"
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
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
import requests

url = "https://api.example.com/api/files/v1/filesets/4830db66-7329-4c51-97ad-e52f419ddb9f/files/multipart/cdef4d61-6502-43e4-a795-aba11e812b65/part/1234567890"

headers = {
    'Content-Type': 'application/json'
}

data = {
    "part": "(binary data of the file)"
}

response = requests.post(url, json=data, headers=headers)

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
curl -X POST "https://api.example.com/api/files/v1/filesets/4830db66-7329-4c51-97ad-e52f419ddb9f/files/multipart/cdef4d61-6502-43e4-a795-aba11e812b65/part/1234567890" \
-H "Content-Type: application/json" \
-d '{
    "part": "(binary data of the file)"
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

- `file.id`: The unique identifier of the file.
- `file.path`: The server path where the file is stored.
- `file.name`: The name of the uploaded file.
- `file.fileType`: The type category of the file.
- `file.contentType`: The MIME type of the file.
- `file.size`: The size of the file in bytes.
- `file.hash`: The hash value of the file (if applicable).
- `file.hashAlgorithm`: The algorithm used to generate the file hash.
- `file.downloadUrl`: A URL to download the file (if available).
- `file.created`: The timestamp when the file was created.
- `file.createdBy`: The ID of the user who uploaded the file.

### Error Responses

| Status Code | Description                                                                                                                                                     |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `400`       | Split file upload part did not match previous data segments.                                                                                                    |
| `403`       | Forbidden                                                                                                                                                       |
| `404`       | An "initiate split file" request was not performed prior to this request for the given file ID or has already been finalized or aborted.                       |
| `409`       | Conflict                                                                                                                                                        |
| `413`       | Payload Too Large                                                                                                                                               |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled.                                                                                        |

---

## Finalize a split file upload.

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/finalize`

Declares that all parts of a split file upload have been submitted and the file can be assembled.

### Path Parameters

| Parameter  | Type   | Required | Description                                                     |
|------------|--------|----------|-----------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet in which the file has been uploaded.     |
| `fileId`    | string | ✓ Yes    | The ID of the file whose parts have been uploaded.             |

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

axios.post('/api/files/v1/filesets/a4a4c5b9-6a85-47cf-b3f6-361afddb871a/files/multipart/54123933-c2e6-4be0-a9bd-209f248d126d/finalize', {
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
    '/api/files/v1/filesets/a4a4c5b9-6a85-47cf-b3f6-361afddb871a/files/multipart/54123933-c2e6-4be0-a9bd-209f248d126d/finalize',
    headers={'Content-Type': 'application/json'}
)

print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST '/api/files/v1/filesets/a4a4c5b9-6a85-47cf-b3f6-361afddb871a/files/multipart/54123933-c2e6-4be0-a9bd-209f248d126d/finalize' \
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

**Response Fields:**

- `file.id`: The unique identifier of the file.
- `file.path`: The directory path where the file is stored.
- `file.name`: The name of the file.
- `file.fileType`: The type of the file, in this case, DOCUMENT.
- `file.contentType`: The MIME type of the file.
- `file.size`: The size of the file in bytes.
- `file.hash`: A SHA-256 hash of the file content.
- `file.hashAlgorithm`: The algorithm used for the file hash.
- `file.downloadUrl`: A URL to download the file.
- `file.created`: The timestamp when the file was created.
- `file.createdBy`: The ID of the user who created the file.

### Error Responses

| Status Code | Description                                                                                       |
|-------------|---------------------------------------------------------------------------------------------------|
| `400`       | Bad Request                                                                                       |
| `403`       | Forbidden                                                                                         |
| `404`       | An "initiate split file" request was not performed prior to this request or the file was not found. |
| `409`       | Conflict: File already exists at the declared path.                                               |
| `413`       | Payload Too Large                                                                                 |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled.                          |

---

## Abort a split file upload.

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/abort`

Aborts an ongoing split file upload process, discarding all uploaded parts.

### Path Parameters

| Parameter   | Type   | Required | Description                                                         |
|-------------|--------|----------|---------------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet in which the file was being uploaded.        |
| `fileId`    | string | ✓ Yes    | The ID of the file whose upload is to be aborted.                  |

### Query Parameters

_None_

### Request Body

The request body is not used and should be empty.

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const fileSetId = "b3e43928-c6c1-4e07-ac41-22788777fe75";
const fileId = "e0e999fe-9a03-4376-b45a-9dff8b4f7d7e";

fetch(`https://api.yourdomain.com/api/files/v1/filesets/${fileSetId}/files/multipart/${fileId}/abort`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  }
}).then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

<!--
type: tab
title: Python
-->

```python
import requests

fileSetId = "b3e43928-c6c1-4e07-ac41-22788777fe75"
fileId = "e0e999fe-9a03-4376-b45a-9dff8b4f7d7e"

response = requests.post(
    f"https://api.yourdomain.com/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/abort",
    headers={
        "Content-Type": "application/json"
    }
)

print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
fileSetId="b3e43928-c6c1-4e07-ac41-22788777fe75"
fileId="e0e999fe-9a03-4376-b45a-9dff8b4f7d7e"

curl -X POST "https://api.yourdomain.com/api/files/v1/filesets/${fileSetId}/files/multipart/${fileId}/abort" \
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

| Parameter   | Type   | Required | Description                                                      |
|-------------|--------|----------|------------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet for which to retrieve access information. |

### Query Parameters

_None_

### Request Body

### Request Example

<!-- type: tab -->
title: JavaScript

```javascript
// Generate a realistic fetch/axios example using the request body example
// Use the actual endpoint path with any path parameters filled in
// Include proper headers (Content-Type: application/json if body exists)
fetch('https://api.example.com/api/files/v1/filesets/6f47f424-5d4b-4e3f-8366-b20347eb845e/access', {
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

<!-- type: tab -->
title: Python

```python
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
import requests

url = "https://api.example.com/api/files/v1/filesets/6f47f424-5d4b-4e3f-8366-b20347eb845e/access"
headers = {
    "Content-Type": "application/json",
}

response = requests.get(url, headers=headers)
print(response.json())
```

<!-- type: tab-end -->

<!-- type: tab -->
title: cURL

```bash
# Generate a realistic cURL command
# Use the actual endpoint path
# Include -H headers and -d data as appropriate
curl -X GET "https://api.example.com/api/files/v1/filesets/6f47f424-5d4b-4e3f-8366-b20347eb845e/access" -H "Content-Type: application/json"
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

- **fileSetId**: The unique identifier of the FileSet.
- **fileSetAccess**: A list detailing access permissions:
  - **entityId**: Identifier for the entity (user or group).
  - **entityType**: The type of entity (e.g., USER, GROUP).
  - **permission**: The permission level assigned to the entity (e.g., OWNER, READ, WRITE).

### Error Responses

| Status Code | Description           |
|-------------|-----------------------|
| `400`       | Bad Request           |
| `403`       | Forbidden             |
| `409`       | Conflict              |
| `413`       | Payload Too Large     |

---

## Update FileSet Access Permissions

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/access`

Update the relevant access permissions for a specific FileSet.

### Path Parameters

| Parameter   | Type   | Required | Description                                                      |
|-------------|--------|----------|------------------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet for which to update access permissions. |

### Query Parameters

_None_

### Request Body

Request object for updating access permissions to a file set.

Only the permissions that are explicitly set in the request will be updated.

| Parameter       | Type  | Required | Description                                  |
|-----------------|-------|----------|----------------------------------------------|
| `fileSetAccess` | array | ✔ Yes    | The access permissions for the file set. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const axios = require('axios');

const fileSetId = '1fee18cd-c57d-4623-8ac9-2f150b68cc6c';
axios.post(`/api/files/v1/filesets/${fileSetId}/access`, {
    fileSetAccess: [{
        entityId: 42,
        entityType: 'GROUP',
        permission: 'EDIT'
    }]
}, {
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

file_set_id = '1fee18cd-c57d-4623-8ac9-2f150b68cc6c'
url = f'/api/files/v1/filesets/{file_set_id}/access'
headers = {
    'Content-Type': 'application/json',
}

data = {
    'fileSetAccess': [{
        'entityId': 42,
        'entityType': 'GROUP',
        'permission': 'EDIT'
    }]
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
curl -X POST '/api/files/v1/filesets/1fee18cd-c57d-4623-8ac9-2f150b68cc6c/access' \
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

- `fileSetId`: The ID of the FileSet that was updated.
- `fileSetAccess`: Array of access permissions objects:
  - `entityId`: The ID of the entity (user or group) with access.
  - `entityType`: The type of entity (e.g., USER, GROUP).
  - `permission`: The level of permission granted (e.g., EDIT, OWNER).

### Error Responses

| Status Code | Description    |
|-------------|----------------|
| `400`       | Bad Request    |
| `403`       | Forbidden      |
| `409`       | Conflict       |
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
const axios = require('axios');

axios.post('/api/files/v1/filesets/search?limit=100&offset=0', {
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

url = "/api/files/v1/filesets/search"
params = {'limit': 100, 'offset': 0}
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
headers = {'Content-Type': 'application/json'}

response = requests.post(url, params=params, json=body, headers=headers)
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

- **fileSets:** A list of retrieved file sets.
  - `id`: The unique identifier of the file set.
  - `name`: The name of the file set.
  - `description`: The description of the file set.
  - `aiEnabled`: Specifies if AI is enabled for this file set.
  - `connector`: The connector type for the file set.
  - `created`: The date the file set was created.
  - `createdBy`: The ID of the creator of the file set.
  - `updated`: The date the file set was last updated.
  - `updatedBy`: The ID of the person who last updated the file set.
  - `owner`: The owner ID of the file set.
  - `permission`: Permission level of the file set.
  - `size`: Size of the file set.
  - `fileCount`: Number of files in the file set.
- **pageContext:** Pagination information.
  - `count`: Number of file sets returned in this response.
  - `totalCount`: Total number of file sets that match the search criteria.
  - `offset`: The offset used in pagination.

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

| Parameter   | Type   | Required | Description                                                    |
|-------------|--------|----------|----------------------------------------------------------------|
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
// Generate a realistic fetch/axios example using the request body example
// Use the actual endpoint path with any path parameters filled in
// Include proper headers (Content-Type: application/json if body exists)
{
  const axios = require('axios');

  const fileSetId = '63b58c71-647e-48e0-839e-3f68aee822d8';
  const url = `/api/files/v1/filesets/${fileSetId}/stats`;

  axios.get(url)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}
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

fileSetId = '63b58c71-647e-48e0-839e-3f68aee822d8'
url = f'/api/files/v1/filesets/{fileSetId}/stats'

response = requests.get(url)

if response.status_code == 200:
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
# Generate a realistic cURL command
# Use the actual endpoint path
# Include -H headers and -d data as appropriate
curl -X GET "/api/files/v1/filesets/63b58c71-647e-48e0-839e-3f68aee822d8/stats"
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

- `imageFileTypeCount`: The total count of image files in the FileSet.
- `audioFileTypeCount`: The total count of audio files in the FileSet.
- `videoFileTypeCount`: The total count of video files in the FileSet.
- `textFileTypeCount`: The total count of text files in the FileSet.
- `documentFileTypeCount`: The total count of document files in the FileSet.
- `otherFileTypeCount`: The total count of other file types in the FileSet.
- `notIndexedCount`: The number of files not indexed.
- `indexQueuedCount`: The number of files queued for indexing.
- `indexInProgressCount`: The number of files currently being indexed.
- `indexCompleteCount`: The number of files that are completely indexed.
- `indexFailedCount`: The number of files that failed to index.
- `indexSkippedCount`: The number of files skipped during indexing.

### Error Responses

| Status Code | Description        |
|-------------|--------------------|
| `400`       | Bad Request        |
| `403`       | Forbidden          |
| `409`       | Conflict           |
| `413`       | Payload Too Large  |

---

## Get File or Directory by Path

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/path`

Retrieve a File or Directory within a FileSet using its path.

### Path Parameters

| Parameter   | Type   | Required | Description           |
|-------------|--------|----------|-----------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet.|

### Query Parameters

| Parameter | Type   | Required | Description                                      |
|-----------|--------|----------|--------------------------------------------------|
| `path`    | string | ✓ Yes    | The path to the File or Directory within the FileSet.|

### Request Body

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const axios = require('axios');

const fileSetId = 'f5f4a29a-5c56-4ea6-867f-8781dd1e278f';
const path = encodeURIComponent('example/path/to/resource');

axios.get(`/api/files/v1/filesets/${fileSetId}/path?path=${path}`)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching file:', error);
  });
```

<!--
type: tab
title: Python
-->

```python
import requests

fileSetId = 'f5f4a29a-5c56-4ea6-867f-8781dd1e278f'
path = 'example/path/to/resource'
url = f'/api/files/v1/filesets/{fileSetId}/path'

response = requests.get(url, params={'path': path})

if response.status_code == 200:
    print(response.json())
else:
    print(f'Error fetching file: {response.status_code}')
```

<!--
type: tab
title: cURL
-->

```bash
curl -GET "/api/files/v1/filesets/f5f4a29a-5c56-4ea6-867f-8781dd1e278f/path" \
  --data-urlencode "path=example/path/to/resource"
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

- **id**: The unique identifier of the file.
- **path**: The file path within the FileSet.
- **name**: The name of the file.
- **fileType**: The type of the file, e.g., DOCUMENT.
- **contentType**: The MIME type of the file.
- **size**: Size of the file in bytes.
- **hash**: The hash value of the file.
- **hashAlgorithm**: The algorithm used for hashing, e.g., SHA_256_HEX.
- **downloadUrl**: The URL to download the file.
- **created**: The timestamp when the file was created.
- **createdBy**: ID of the user who created the file.
- **connectorKey**, **indexStatus**, **indexReason**: Additional metadata.

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

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fileSetId` | string | ✓ Yes | The ID of the FileSet containing the File. |

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `path` | string | ✓ Yes | The path to the File or Directory to delete. If a Directory is specified, it and its children will be deleted. |

### Request Body

_No content required._

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript Example
fetch("https://api.example.com/api/files/v1/filesets/10a4c4e0-b9a6-42f5-8e18-5acd283cddaf/path?path=example/path/to/resource", {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
}).then(response => {
  if (response.status === 204) {
    console.log("File or directory deleted successfully.");
  }
});
```

<!--
type: tab
title: Python
-->

```python
# Python Example
import requests

response = requests.delete(
    "https://api.example.com/api/files/v1/filesets/10a4c4e0-b9a6-42f5-8e18-5acd283cddaf/path",
    params={"path": "example/path/to/resource"},
    headers={"Content-Type": "application/json"}
)

if response.status_code == 204:
    print("File or directory deleted successfully.")
```

<!--
type: tab
title: cURL
-->

```bash
# cURL Example
curl -X DELETE "https://api.example.com/api/files/v1/filesets/10a4c4e0-b9a6-42f5-8e18-5acd283cddaf/path?path=example/path/to/resource" \
-H "Content-Type: application/json"
```

<!-- type: tab-end -->

### Response

**Status:** `204`

```json
{}
```

### Error Responses

| Status Code | Description |
|-------------|-------------|
| `400` | Bad Request |
| `403` | Forbidden |
| `409` | Conflict |
| `413` | Payload Too Large |

---

## Download a File by Path

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/path/download`

Download the contents of a specific File within a FileSet using its path. This will redirect to the file's download URL.

### Path Parameters

| Parameter   | Type   | Required | Description                                    |
|-------------|--------|----------|------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet containing the File.     |

### Query Parameters

| Parameter | Type   | Required | Description                                      |
|-----------|--------|----------|--------------------------------------------------|
| `path`    | string | ✔ Yes    | The path of the File to download within the FileSet. |

### Request Body

This endpoint does not require a request body.

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript fetch example
fetch('/api/files/v1/filesets/55cf4260-4632-43c8-8678-e407be6b3125/path/download?path=example/path/to/resource')
  .then(response => {
    if(response.ok) {
      return response.blob();
    }
    throw new Error('File download failed.');
  })
  .then(blob => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'filename.ext'; // Customize the filename here
    document.body.appendChild(a);
    a.click();
    a.remove();
  })
  .catch(console.error);
```

<!-- type: tab-end -->

<!--
type: tab
title: Python
-->

```python
# Python requests example
import requests

response = requests.get(
    'http://example.com/api/files/v1/filesets/55cf4260-4632-43c8-8678-e407be6b3125/path/download',
    params={'path': 'example/path/to/resource'},
    stream=True
)

if response.status_code == 200:
    with open('filename.ext', 'wb') as f:  # Customize the filename here
        for chunk in response.iter_content(chunk_size=8192):
            f.write(chunk)
else:
    print('File download failed.', response.status_code)
```

<!-- type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
# cURL example
curl -L -o filename.ext 'http://example.com/api/files/v1/filesets/55cf4260-4632-43c8-8678-e407be6b3125/path/download?path=example/path/to/resource'
```

<!-- type: tab-end -->

### Response

**Status:** `200`

When the request is successful, the response will initiate a file download via a redirect to the file's actual download URL. The body of the response is not in JSON format but similar to:

- Redirection to the actual file location where the file data is provided.

### Detailed Successful Response Example

In case of successful redirection, the response will not contain JSON data. However, the file content will be provided directly once redirected.

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

| Parameter   | Type   | Required | Description                                                         |
|-------------|--------|----------|---------------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File or Directory.             |
| `fileId`    | string | ✓ Yes    | The ID of the File or Directory to retrieve.                        |

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
fetch('https://api.example.com/api/files/v1/filesets/a3d36f59-a758-417d-a96b-4bfe3703ce87/files/9adddc1d-ee8a-4b7b-852b-e32f1f594ddf', {
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

url = 'https://api.example.com/api/files/v1/filesets/a3d36f59-a758-417d-a96b-4bfe3703ce87/files/9adddc1d-ee8a-4b7b-852b-e32f1f594ddf'

response = requests.get(url, headers={'Accept': 'application/json'})

if response.status_code == 200:
    print(response.json())
else:
    print('Error:', response.status_code)
```

<!--
type: tab
title: cURL
-->

```bash
# Generate a realistic cURL command
# Use the actual endpoint path
# Include -H headers and -d data as appropriate
curl -X GET 'https://api.example.com/api/files/v1/filesets/a3d36f59-a758-417d-a96b-4bfe3703ce87/files/9adddc1d-ee8a-4b7b-852b-e32f1f594ddf' -H 'Accept: application/json'
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
- `path`: The file path within the directory structure.
- `name`: The name of the file.
- `fileType`: The type of the file, e.g., `DOCUMENT`.
- `contentType`: The MIME type of the file.
- `size`: The size of the file in bytes.
- `hash`: The SHA-256 hash for the file's content.
- `hashAlgorithm`: The algorithm used to generate the hash.
- `downloadUrl`: URL for downloading the file (if available).
- `created`: Timestamp of when the file was created.
- `createdBy`: The ID of the user who created the file.
- `connectorKey`: Connector key if applicable.
- `indexStatus`, `indexReason`: Index status and reason if applicable.

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

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fileSetId` | string | ✓ Yes | The ID of the FileSet containing the File. |
| `fileId` | string | ✓ Yes | The ID of the File or Directory to delete. If a Directory is specified, it and its children will be deleted. |

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
fetch('https://api.example.com/api/files/v1/filesets/e1e0654e-d4ed-4560-ac56-c1f961f005ee/files/4d63c433-bb44-4303-9b3c-1cf9b659f514', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    if (response.status === 204) {
      console.log('Deletion successful');
    }
  })
  .catch(error => console.error('Error:', error));
```

<!--
type: tab
title: Python
-->

```python
# Python example using requests
import requests

url = 'https://api.example.com/api/files/v1/filesets/e1e0654e-d4ed-4560-ac56-c1f961f005ee/files/4d63c433-bb44-4303-9b3c-1cf9b659f514'
headers = {
    'Content-Type': 'application/json'
}

response = requests.delete(url, headers=headers)

if response.status_code == 204:
    print('Deletion successful')
else:
    print('Error:', response.status_code)
```

<!--
type: tab
title: cURL
-->

```bash
# cURL example
curl -X DELETE 'https://api.example.com/api/files/v1/filesets/e1e0654e-d4ed-4560-ac56-c1f961f005ee/files/4d63c433-bb44-4303-9b3c-1cf9b659f514' \
     -H 'Content-Type: application/json'
```

<!-- type: tab-end -->

### Response

**Status:** `204`

```json
{}
```

### Error Responses

| Status Code | Description |
|-------------|-------------|
| `400` | Bad Request |
| `403` | Forbidden |
| `409` | Conflict |
| `413` | Payload Too Large |

---

## Download a File by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}/download`

Download the contents of a specific File within a FileSet using its ID. This will redirect to the file's download URL.

### Path Parameters

| Parameter   | Type   | Required | Description                                   |
|-------------|--------|----------|-----------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet containing the File.    |
| `fileId`    | string | ✔ Yes    | The ID of the File to download.               |

### Query Parameters

_None_

### Request Body

- This endpoint does not require a request body.

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript example using fetch
const fileSetId = 'dd238f6a-2fa2-45df-8a74-a5012d0b5d09';
const fileId = '88d41f94-7e4d-4cd8-b100-5b99edb5dd72';
const url = `/api/files/v1/filesets/${fileSetId}/files/${fileId}/download`;

fetch(url, {
  method: 'GET'
})
.then(response => {
  if (response.ok) return response.blob();
  throw new Error('File download failed');
})
.then(blob => {
  const downloadUrl = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = downloadUrl;
  a.download = 'downloadedFile';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(downloadUrl);
})
.catch(error => console.error('Error:', error));
```

<!--
type: tab
title: Python
-->

```python
# Python example using requests
import requests

fileSetId = 'dd238f6a-2fa2-45df-8a74-a5012d0b5d09'
fileId = '88d41f94-7e4d-4cd8-b100-5b99edb5dd72'
url = f"/api/files/v1/filesets/{fileSetId}/files/{fileId}/download"

try:
    response = requests.get(url)
    response.raise_for_status()
    with open('downloaded_file', 'wb') as f:
        f.write(response.content)
except requests.exceptions.RequestException as e:
    print('File download failed:', e)
```

<!--
type: tab
title: cURL
-->

```bash
# cURL example to download a file
curl -X GET "/api/files/v1/filesets/dd238f6a-2fa2-45df-8a74-a5012d0b5d09/files/88d41f94-7e4d-4cd8-b100-5b99edb5dd72/download" --output downloaded_file
```

<!-- type: tab-end -->

### Response

**Successful Response:**

- **Status:** `200 OK`
- **Description:** Upon successful download initiation, the response will contain the file data.
- **Response Format:**

```json
{
  "fileName": "exampleFileName",
  "fileType": "application/pdf",
  "fileSize": 12345
}
```

**Redirection Response:**

- **Status:** `302 Found`
- **Description:** Indicates a redirection to the actual file download URL. Clients should handle the redirection automatically to proceed with the download.

### Error Responses

| Status Code | Description                           | Example Response                          |
|-------------|---------------------------------------|-------------------------------------------|
| `400`       | Bad Request. The request could not be processed due to incorrect parameters. | `{ "error": "Bad request due to invalid parameters" }` |
| `403`       | Forbidden. You do not have permission to download this file. | `{ "error": "Access forbidden to the requested file." }` |
| `409`       | Conflict. There was a conflict in the request, such as a version mismatch. | `{ "error": "Resource conflict occurred." }` |
| `413`       | Payload Too Large. The file requested is too large to download. | `{ "error": "Requested file is too large." }` |

---

## Get File Content by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}/content`

Retrieve the content of a specific File within a FileSet using its ID. This endpoint requires a valid download token for authorization, which is generally obtained via a download endpoint and redirected here automatically.

### Path Parameters

| Parameter  | Type   | Required | Description                                 |
|------------|--------|----------|---------------------------------------------|
| `fileSetId`| string | ✓ Yes    | The ID of the FileSet containing the File.  |
| `fileId`   | string | ✓ Yes    | The ID of the File to retrieve.             |

### Query Parameters

| Parameter | Type   | Required | Description                          |
|-----------|--------|----------|--------------------------------------|
| `token`   | string | ✓ Yes    | The download token for authorization.|

### Request Body

_None_

### Request Example

<!-- type: tab title: JavaScript -->

```javascript
const fetch = require('node-fetch');

const fileSetId = '5b30d6ad-efc7-4b6e-a8ff-30499e6a7cf5';
const fileId = 'e9a37093-8e2f-41b2-8ad9-72963b7644c2';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';

fetch(`https://api.example.com/api/files/v1/filesets/${fileSetId}/files/${fileId}/content?token=${token}`, {
  method: 'GET'
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

<!-- type: tab title: Python -->

```python
import requests

fileSetId = '5b30d6ad-efc7-4b6e-a8ff-30499e6a7cf5'
fileId = 'e9a37093-8e2f-41b2-8ad9-72963b7644c2'
token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'

response = requests.get(
    f'https://api.example.com/api/files/v1/filesets/{fileSetId}/files/{fileId}/content',
    params={'token': token}
)

print(response.json())
```

<!-- type: tab title: cURL -->

```bash
curl -X GET "https://api.example.com/api/files/v1/filesets/5b30d6ad-efc7-4b6e-a8ff-30499e6a7cf5/files/e9a37093-8e2f-41b2-8ad9-72963b7644c2/content?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
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

