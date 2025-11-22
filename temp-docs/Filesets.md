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

| Parameter    | Type    | Required | Description                                                                     |
|--------------|---------|----------|---------------------------------------------------------------------------------|
| `name`       | string  | ✔ Yes    | The name for the file set.                                                      |
| `description`| string  | No       | A description for the file set.                                                 |
| `connector`  | string  | No       | The connector that powers the file set. Allowed values: `DOMO`, `CONFLUENCE`, `GITHUB`, `GOOGLE_DRIVE`, `S3`. |
| `aiEnabled`  | boolean | No       | Indicates whether AI features are enabled for the file set.                     |

### Request Example

<!-- type: tab title: JavaScript -->

```javascript
const fetch = require('node-fetch');

fetch('https://api.example.com/api/files/v1/filesets', {
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

<!-- type: tab-end -->

<!-- type: tab title: Python -->

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

<!-- type: tab title: cURL -->

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

| Status Code | Description           | Example Payload                                      |
|-------------|-----------------------|------------------------------------------------------|
| `400`       | Bad Request           | `{ "error": "Invalid request - required parameters missing" }` |
| `403`       | Forbidden             | `{ "error": "Access denied - insufficient permissions" }` |
| `409`       | Conflict              | `{ "error": "A file set with the specified name already exists" }` |
| `413`       | Payload Too Large     | `{ "error": "Request payload exceeds the allowed limit" }` |

---

## Get a FileSet by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}`

Retrieve the details of a specific FileSet using its ID.

### Path Parameters

| Parameter   | Type   | Required | Description                        |
|-------------|--------|----------|------------------------------------|
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
fetch('https://api.example.com/api/files/v1/filesets/cec1aa43-976d-41ef-b549-8af569cba287', {
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
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
import requests

url = "https://api.example.com/api/files/v1/filesets/cec1aa43-976d-41ef-b549-8af569cba287"
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
# Generate a realistic cURL command
# Use the actual endpoint path
# Include -H headers and -d data as appropriate
curl -X GET "https://api.example.com/api/files/v1/filesets/cec1aa43-976d-41ef-b549-8af569cba287" -H "Content-Type: application/json"
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

- `id`: Unique identifier for the FileSet.
- `name`: The name given to the FileSet.
- `description`: A brief description of the FileSet's purpose.
- `aiEnabled`: Indicates if AI features are enabled.
- `indexStatus`: Status of the indexing process, if applicable.
- `connector`: The type of connector used for the FileSet, e.g., "DOMO".
- `created` and `updated`: Timestamps for when the FileSet was created and last updated.
- `createdBy` and `updatedBy`: User IDs of who created and last updated the FileSet.
- `owner`: User ID of the FileSet owner.
- `accountId`: Associated account ID.
- `permission`: Permissions associated with the FileSet, e.g., "OWNER".
- `size` and `fileCount`: The size and number of files within the FileSet.

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

| Parameter   | Type   | Required | Description                       |
|-------------|--------|----------|-----------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet to update.  |

### Query Parameters

_None_

### Request Body

Represents a request to update a file set. At least one of the fields must be provided to update the file set.

| Parameter    | Type    | Required | Description                                                                         |
|--------------|---------|----------|-------------------------------------------------------------------------------------|
| `name`       | string  | No       | The name with which to update the file set's name. If not provided, the name will remain unchanged. |
| `description`| string  | No       | Optional description with which to update the file set's description. If not provided, the description will remain unchanged. |
| `aiEnabled`  | boolean | No       | Optional flag to enable or disable AI features for the file set.                    |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://api.example.com/api/files/v1/filesets/56324da8-b726-41ac-ae5e-f0caebebeb72', {
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

<!--
type: tab
title: Python
-->

```python
import requests

url = 'https://api.example.com/api/files/v1/filesets/56324da8-b726-41ac-ae5e-f0caebebeb72'
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
curl -X POST 'https://api.example.com/api/files/v1/filesets/56324da8-b726-41ac-ae5e-f0caebebeb72' \
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

- **id**: The unique identifier for the updated FileSet.
- **name**: The name of the FileSet.
- **description**: The description of the FileSet.
- **aiEnabled**: Indicates if AI features are enabled for the FileSet.
- **indexStatus**: The indexing status.
- **connector**: The type of connector used.
- **created**: Timestamp of when the FileSet was created.
- **createdBy**: ID of the user who created the FileSet.
- **updated**: Timestamp of the last update.
- **updatedBy**: ID of the user who last updated the FileSet.
- **owner**: The owner ID of the FileSet.
- **accountId**: The account ID associated with the FileSet.
- **connectorContext**: Additional context for the connector.
- **permission**: Permission level of the current user on the FileSet.
- **size**: The size of the FileSet.
- **fileCount**: The number of files in the FileSet.

### Error Responses

| Status Code | Description  |
|-------------|--------------|
| `400`       | Bad Request  |
| `403`       | Forbidden    |
| `409`       | Conflict     |
| `413`       | Payload Too Large |

---

## Delete a FileSet by ID

**Method:** `DELETE`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}`

Delete a specific FileSet using its ID.

### Path Parameters

| Parameter  | Type   | Required | Description                        |
|------------|--------|----------|------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet to delete. |

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
// Using fetch to send a DELETE request
fetch('https://api.example.com/api/files/v1/filesets/d5a2c73e-e24f-428b-9e42-309d8ae05e87', {
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
# Using requests to send a DELETE request
import requests

response = requests.delete(
    'https://api.example.com/api/files/v1/filesets/d5a2c73e-e24f-428b-9e42-309d8ae05e87',
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
# Using cURL to send a DELETE request
curl -X DELETE 'https://api.example.com/api/files/v1/filesets/d5a2c73e-e24f-428b-9e42-309d8ae05e87' -H 'Content-Type: application/json'
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
fetch('https://api.example.com/api/files/v1/filesets/bf97872b-ca80-4f87-9d89-c9292601bee0/query', {
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
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

<!--
type: tab
title: Python
-->

```python
import requests

url = "https://api.example.com/api/files/v1/filesets/bf97872b-ca80-4f87-9d89-c9292601bee0/query"
headers = {
    "Content-Type": "application/json"
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
curl -X POST https://api.example.com/api/files/v1/filesets/bf97872b-ca80-4f87-9d89-c9292601bee0/query \
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

| Parameter   | Type   | Required | Description                                            |
|-------------|--------|----------|--------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet for which to update the owner.   |

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
const url = '/api/files/v1/filesets/3c641ec4-c10f-455a-947d-8ec488cb9347/ownership';

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        userId: 109
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

url = '/api/files/v1/filesets/3c641ec4-c10f-455a-947d-8ec488cb9347/ownership'
headers = {
    'Content-Type': 'application/json'
}
data = {
    "userId": 109
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST '/api/files/v1/filesets/3c641ec4-c10f-455a-947d-8ec488cb9347/ownership' \
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
- **fileSetAccess**: List of entities with their access permissions for the FileSet.

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

| Parameter   | Type   | Required | Description                                         |
|-------------|--------|----------|-----------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet in which to create the File.  |

### Query Parameters

_None_

### Request Body

Represents a request to upload a file or create a directory.

| Parameter      | Type             | Required | Description                                                                                                                                 |
|----------------|------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------|
| `file`         | string (binary)  | No       | The file to be uploaded. Leave null if creating a directory.                                                                                |
| `directoryPath`| string           | No       | The directory path of the uploaded file, or the path of the created directory if no file is provided. Defaults to an empty string, i.e., the root directory, if not specified. Note: An empty string is not valid when intentionally creating a directory. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
async function createFileOrDirectory() {
    const fileSetId = "627522f2-07d4-47ca-bc68-5b736d592f29";
    const url = `/api/files/v1/filesets/${fileSetId}/files`;

    const data = {
        file: null,  // Replace with actual binary data if uploading a file
        directoryPath: "sample/directory/path"
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
    } else {
        console.error('Failed to create file or directory', response.status);
    }
}

createFileOrDirectory();
```

<!-- type: tab-end -->

<!--
type: tab
title: Python
-->

```python
import requests
import json

def create_file_or_directory():
    fileSetId = "627522f2-07d4-47ca-bc68-5b736d592f29"
    url = f"/api/files/v1/filesets/{fileSetId}/files"

    headers = {
        'Content-Type': 'application/json'
    }

    data = {
        "file": None,  # Replace with actual binary data if uploading a file
        "directoryPath": "sample/directory/path"
    }

    response = requests.post(url, headers=headers, data=json.dumps(data))

    if response.status_code == 200:
        print(response.json())
    else:
        print(f"Failed to create file or directory: {response.status_code}")

create_file_or_directory()
```

<!-- type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "/api/files/v1/filesets/627522f2-07d4-47ca-bc68-5b736d592f29/files" \
    -H "Content-Type: application/json" \
    -d '{
          "file": null,  # Replace with binary data if uploading a file
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

- `id`: The unique identifier of the created file or directory.
- `path`: The path to the created file or directory.
- `name`: The name of the created file or directory.
- `size`: The size of the file (null for directories).
- `created`: The timestamp of when the file or directory was created.
- `createdBy`: The ID of the user who created the file or directory.
- `fileType`: The type of the file, e.g., "DIRECTORY".

### Error Responses

| Status Code | Description                                                                                         |
|-------------|-----------------------------------------------------------------------------------------------------|
| `400`       | Bad Request                                                                                         |
| `403`       | Forbidden                                                                                            |
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
| `fileSetId`| string | ✔ Yes    | The ID of the FileSet to search within.|

### Query Parameters

| Parameter          | Type           | Required | Description                                                          |
|--------------------|----------------|----------|----------------------------------------------------------------------|
| `directoryPath`    | string         | No       | The path to the directory within the FileSet, if applicable.        |
| `immediateChildren`| boolean        | No       | Whether to list only immediate children of the specified directory. (Default: `False`) |
| `limit`            | integer (int32)| No       | The maximum number of Files to return. (Default: `100`)             |
| `next`             | string         | No       | The pagination token for the next set of results.                   |

### Request Body

Request object for searching with specific filters and sorting options.

| Parameter    | Type  | Required | Description                                         |
|--------------|-------|----------|-----------------------------------------------------|
| `fieldSort`  | array | No       | A list of field sort criteria to apply to the search.|
| `filters`    | array | No       | A list of filters to apply to the search.           |
| `dateFilters`| array | No       | A list of date filters to apply to the search.      |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const data = {
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
};

fetch("https://api.example.com/api/files/v1/filesets/f12dcc69-092e-45f7-869a-203084057dcc/files/search", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
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
import json

url = "https://api.example.com/api/files/v1/filesets/f12dcc69-092e-45f7-869a-203084057dcc/files/search"

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

headers = {
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, data=json.dumps(payload))

print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "https://api.example.com/api/files/v1/filesets/f12dcc69-092e-45f7-869a-203084057dcc/files/search" \
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

| Status Code | Description         |
|-------------|---------------------|
| `400`       | Bad Request         |
| `403`       | Forbidden           |
| `409`       | Conflict            |
| `413`       | Payload Too Large   |

---

## Reindex Files within a FileSet

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/reindex`

Initiate another indexing attempt for specific files within a FileSet.

### Path Parameters

| Parameter   | Type   | Required | Description                                           |
|-------------|--------|----------|-------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to reindex files within.       |

### Query Parameters

_None_

### Request Body

Request object for another indexing attempt for specific files within a file set.

| Parameter | Type  | Required | Description                         |
|-----------|-------|----------|-------------------------------------|
| `fileIds` | array | ✔ Yes    | The IDs of the files to be reindexed. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Generate a realistic fetch/axios example using the request body example
// Use the actual endpoint path with any path parameters filled in
// Include proper headers (Content-Type: application/json if body exists)
const headers = new Headers({
  "Content-Type": "application/json"
});

const body = JSON.stringify({
  fileIds: [
    "7150e608-c3a9-4b40-ac2d-eb182cc98c6f",
    "22e1514a-354b-470f-bc32-c354812738f2"
  ]
});

fetch('https://api.example.com/api/files/v1/filesets/4fe3fe64-8e84-4d75-94a9-1f9cac0cf729/files/reindex', {
  method: 'POST',
  headers: headers,
  body: body
}).then(response => response.json())
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

url = 'https://api.example.com/api/files/v1/filesets/4fe3fe64-8e84-4d75-94a9-1f9cac0cf729/files/reindex'
headers = {
    'Content-Type': 'application/json'
}

body = {
    "fileIds": [
        "7150e608-c3a9-4b40-ac2d-eb182cc98c6f",
        "22e1514a-354b-470f-bc32-c354812738f2"
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
curl -X POST https://api.example.com/api/files/v1/filesets/4fe3fe64-8e84-4d75-94a9-1f9cac0cf729/files/reindex \
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

| Parameter   | Type   | Required | Description                                             |
|-------------|--------|----------|---------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet in which to create the File.       |

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
fetch('https://api.example.com/api/files/v1/filesets/c18f81d2-720b-4705-b301-35fb683ab85d/files/multipart', {
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
import json

url = "https://api.example.com/api/files/v1/filesets/c18f81d2-720b-4705-b301-35fb683ab85d/files/multipart"

payload = json.dumps({
  "path": "example/path/to/resource"
})
headers = {
  'Content-Type': 'application/json'
}

response = requests.post(url, headers=headers, data=payload)

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
curl -X POST "https://api.example.com/api/files/v1/filesets/c18f81d2-720b-4705-b301-35fb683ab85d/files/multipart" \
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
```

**Response Fields:**

- `file.id`: The unique identifier of the file.
- `file.path`: The file path within the file system.
- `file.name`: The name of the file.
- `file.fileType`: The type of the file.
- `file.hashAlgorithm`: The algorithm used to hash the file.
- `file.created`: The creation date of the file.
- `file.createdBy`: The ID of the user who created the file.
- `status`: Indicates the creation status of the file.

### Error Responses

| Status Code | Description                                                     |
|-----------|-------------------------------------------------------------|
| `400`     | Bad Request                                                 |
| `403`     | Forbidden                                                   |
| `409`     | Conflict: File already exists at the specified path.        |
| `413`     | Payload Too Large                                           |
| `422`     | Unprocessable Entity: Request for the split file could not be fulfilled. |

---

## Submit a part of a file for upload.

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/part/{partNumber}`

Allows submitting a file in stages to create a new file within a FileSet.

### Path Parameters

| Parameter   | Type            | Required | Description                                                        |
|-------------|-----------------|----------|--------------------------------------------------------------------|
| `fileSetId` | string          | ✓ Yes    | The ID of the FileSet in which to the file is being uploaded.      |
| `fileId`    | string          | ✓ Yes    | The ID of the file being uploaded in parts.                        |
| `partNumber`| integer (int64) | ✓ Yes    | The part number of this file segment. Must be non-negative.        |

### Query Parameters

_None_

### Request Body

Represents a request to upload a part of a file in a split file upload operation.

| Parameter | Type            | Required | Description                                                         |
|-----------|-----------------|----------|---------------------------------------------------------------------|
| `part`    | string (binary) | No       | The full path destination for the file once the upload is complete. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript example using fetch to submit a part of a file for upload
const url = 'https://api.example.com/api/files/v1/filesets/db6f5f91-4fdb-48fd-ae1b-2257c34bf5b0/files/multipart/04bce612-c1ed-4513-94f4-9348e20289de/part/1234567890';

fetch(url, {
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
# Python example using requests to submit a part of a file for upload
import requests

url = 'https://api.example.com/api/files/v1/filesets/db6f5f91-4fdb-48fd-ae1b-2257c34bf5b0/files/multipart/04bce612-c1ed-4513-94f4-9348e20289de/part/1234567890'
headers = {
    'Content-Type': 'application/json'
}
data = {
    "part": "(binary data of the file)"
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
# cURL example to submit a part of a file for upload
curl -X POST 'https://api.example.com/api/files/v1/filesets/db6f5f91-4fdb-48fd-ae1b-2257c34bf5b0/files/multipart/04bce612-c1ed-4513-94f4-9348e20289de/part/1234567890' \
     -H 'Content-Type: application/json' \
     -d '{ "part": "(binary data of the file)" }'
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
| `400`       | Split file upload part did not match previous data segments. |
| `403`       | Forbidden |
| `404`       | An "initiate split file" request was not performed prior to this request for the given file ID or has already been finalized or aborted. |
| `409`       | Conflict |
| `413`       | Payload Too Large |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled. |

---

## Finalize a split file upload.

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/finalize`

Declares that all parts of a split file upload have been submitted and the file can be assembled.

### Path Parameters

| Parameter  | Type   | Required | Description                                                 |
|------------|--------|----------|-------------------------------------------------------------|
| `fileSetId`| string | ✓ Yes    | The ID of the FileSet in which the file has been uploaded.  |
| `fileId`   | string | ✓ Yes    | The ID of the file whose parts have been uploaded.          |

### Query Parameters

_None_

### Request Body

### Request Example

<!-- type: tab -->
<!-- title: JavaScript -->

```javascript
fetch('https://api.example.com/api/files/v1/filesets/b209e48d-fded-4428-aa3e-2b042b7b73ed/files/multipart/bc043527-1c83-4009-b5e8-7239f4123a63/finalize', {
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

<!-- type: tab -->
<!-- title: Python -->

```python
import requests

url = "https://api.example.com/api/files/v1/filesets/b209e48d-fded-4428-aa3e-2b042b7b73ed/files/multipart/bc043527-1c83-4009-b5e8-7239f4123a63/finalize"
headers = {'Content-Type': 'application/json'}

response = requests.post(url, headers=headers)
print(response.json())
```

<!-- type: tab-end -->

<!-- type: tab -->
<!-- title: cURL -->

```bash
curl -X POST "https://api.example.com/api/files/v1/filesets/b209e48d-fded-4428-aa3e-2b042b7b73ed/files/multipart/bc043527-1c83-4009-b5e8-7239f4123a63/finalize" -H "Content-Type: application/json"
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

**Response Field Descriptions:**
- `file.id`: The unique identifier of the file.
- `file.path`: The file path where the assembled file is stored.
- `file.name`: The name of the file.
- `file.fileType`: The type of the file, indicating it is a document.
- `file.contentType`: The mime type of the file.
- `file.size`: The size of the file in bytes.
- `file.hash`: The SHA-256 hash of the file content.
- `file.hashAlgorithm`: The algorithm used for generating the file hash.
- `file.created`: The timestamp of when the file was created.
- `file.createdBy`: The ID of the user who created the file.
- `status`: The status of the operation, indicating success.

### Error Responses

| Status Code | Description                                                                                     |
|-------------|-------------------------------------------------------------------------------------------------|
| `400`       | Bad Request                                                                                     |
| `403`       | Forbidden                                                                                       |
| `404`       | An "initiate split file" request was not performed prior to this request for the given file ID and/or has not been uploaded any parts, or has already been finalized/aborted. |
| `409`       | Conflict: File already exists at the declared path.                                             |
| `413`       | Payload Too Large                                                                               |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled.                        |

---

## Abort a split file upload.

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/abort`

Aborts an ongoing split file upload process, discarding all uploaded parts.

### Path Parameters

| Parameter  | Type   | Required | Description                                                         |
|------------|--------|----------|---------------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet in which the file was being uploaded.         |
| `fileId`   | string | ✓ Yes    | The ID of the file whose upload is to be aborted.                   |

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
// JavaScript fetch example for aborting a split file upload
fetch('/api/files/v1/filesets/e5f024d8-6d02-485c-b8e6-05b627f19da0/files/multipart/e2053faa-5458-4b44-9f04-4d453f35670f/abort', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
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
# Python requests example for aborting a split file upload
import requests

url = '/api/files/v1/filesets/e5f024d8-6d02-485c-b8e6-05b627f19da0/files/multipart/e2053faa-5458-4b44-9f04-4d453f35670f/abort'
headers = {'Content-Type': 'application/json'}

response = requests.post(url, headers=headers)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
# cURL command for aborting a split file upload
curl -X POST '/api/files/v1/filesets/e5f024d8-6d02-485c-b8e6-05b627f19da0/files/multipart/e2053faa-5458-4b44-9f04-4d453f35670f/abort' \
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
```

### Error Responses

| Status Code | Description                                                                                           |
|-------------|-------------------------------------------------------------------------------------------------------|
| `400`       | Bad Request                                                                                           |
| `403`       | Forbidden                                                                                             |
| `404`       | An "initiate split file" request was not performed prior to this request for the given file ID or has already been finalized or aborted. |
| `409`       | Conflict                                                                                              |
| `413`       | Payload Too Large                                                                                     |

---

## Get FileSet Access Permissions

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/access`

Retrieve the access permissions for a specific FileSet.

### Path Parameters

| Parameter   | Type   | Required | Description                                                |
|-------------|--------|----------|------------------------------------------------------------|
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
const fileSetId = "0d6e9562-f581-4cd0-b853-377f119682e5";
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

<!-- type: tab-end -->

<!--
type: tab
title: Python
-->

```python
import requests

fileSetId = "0d6e9562-f581-4cd0-b853-377f119682e5"
response = requests.get(
    f"/api/files/v1/filesets/{fileSetId}/access",
    headers={"Content-Type": "application/json"}
)
print(response.json())
```

<!-- type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
curl -X GET "/api/files/v1/filesets/0d6e9562-f581-4cd0-b853-377f119682e5/access" -H "Content-Type: application/json"
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

- `fileSetId`: The unique identifier for the FileSet.
- `fileSetAccess`: A list of access permissions for the FileSet.
  - `entityId`: The unique identifier for the entity (e.g., user).
  - `entityType`: The type of entity, such as USER.
  - `permission`: The level of access granted, such as OWNER.

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

| Parameter   | Type   | Required | Description                                                   |
|-------------|--------|----------|---------------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet for which to update access permissions. |

### Query Parameters

_None_

### Request Body

Request object for updating access permissions to a file set.

Only the permissions that are explicitly set in the request will be updated.

| Parameter        | Type  | Required | Description                                |
|------------------|-------|----------|--------------------------------------------|
| `fileSetAccess`  | array | ✔ Yes    | The access permissions for the file set.   |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://api.example.com/api/files/v1/filesets/7f6a345d-eb3c-4c3e-9899-00d6592926c0/access', {
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
import requests
import json

url = "https://api.example.com/api/files/v1/filesets/7f6a345d-eb3c-4c3e-9899-00d6592926c0/access"
headers = {
    'Content-Type': 'application/json'
}
data = {
    "fileSetAccess": [
        {
            "entityId": 42,
            "entityType": "GROUP",
            "permission": "EDIT"
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
curl -X POST https://api.example.com/api/files/v1/filesets/7f6a345d-eb3c-4c3e-9899-00d6592926c0/access \
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
| `limit` | integer (int32) | No | The maximum number of FileSets to return. (Default: `100`). |
| `offset` | integer (int32) | No | The offset for pagination. (Default: `0`). |

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
// Send a POST request to retrieve FileSets with specific search criteria
// Include necessary headers and request body
fetch('/api/files/v1/filesets/search?limit=10&offset=0', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
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

<!-- type: tab-end -->

<!--
type: tab
title: Python
-->

```python
# Send a POST request to retrieve FileSets with specific search criteria
import requests
import json

url = '/api/files/v1/filesets/search?limit=10&offset=0'
headers = {'Content-Type': 'application/json'}
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

<!-- type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
# Send a POST request using cURL
curl -X POST '/api/files/v1/filesets/search?limit=10&offset=0' \
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

- **fileSets**: List of file set objects.
  - **id**: Unique identifier for the FileSet.
  - **name**: Name of the FileSet.
  - **description**: Description of the FileSet.
  - **aiEnabled**: Indicates if AI features are enabled for this FileSet.
  - **connector**: Type of data connector used.
  - **created**: Date and time when the FileSet was created.
  - **createdBy**: ID of the user who created the FileSet.
  - **updated**: Date and time when the FileSet was last updated.
  - **updatedBy**: ID of the user who last updated the FileSet.
  - **owner**: Owner ID of the FileSet.
  - **permission**: Permission level of the current user.
  - **size**: Total size of the FileSet.
  - **fileCount**: Number of files in the FileSet.
- **pageContext**: Pagination information.
  - **count**: Number of file sets returned in the current response.
  - **totalCount**: Total number of file sets available.
  - **offset**: Current pagination offset.

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

| Parameter   | Type   | Required | Description                                              |
|-------------|--------|----------|----------------------------------------------------------|
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
fetch('/api/files/v1/filesets/cfc0b490-6aa9-44e8-aed7-37b5d8056605/stats', {
  method: 'GET'
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

response = requests.get('https://example.com/api/files/v1/filesets/cfc0b490-6aa9-44e8-aed7-37b5d8056605/stats')
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
curl -X GET "https://example.com/api/files/v1/filesets/cfc0b490-6aa9-44e8-aed7-37b5d8056605/stats"
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

- **imageFileTypeCount**: Number of image files in the FileSet.
- **audioFileTypeCount**: Number of audio files in the FileSet.
- **videoFileTypeCount**: Number of video files in the FileSet.
- **textFileTypeCount**: Number of text files in the FileSet.
- **documentFileTypeCount**: Number of document files in the FileSet.
- **otherFileTypeCount**: Number of other types of files in the FileSet.
- **notIndexedCount**: Number of files not indexed.
- **indexQueuedCount**: Number of files queued for indexing.
- **indexInProgressCount**: Number of files currently being indexed.
- **indexCompleteCount**: Number of files successfully indexed.
- **indexFailedCount**: Number of files that failed to be indexed.
- **indexSkippedCount**: Number of files skipped during indexing.

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

| Parameter   | Type   | Required | Description                  |
|-------------|--------|----------|------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet.       |

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
const fileSetId = "6b6e1a44-3aef-4868-988a-d4ed5eab0000";
const path = "example/path/to/resource";
const url = `/api/files/v1/filesets/${fileSetId}/path?path=${encodeURIComponent(path)}`;

fetch(url, {
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

fileSetId = "6b6e1a44-3aef-4868-988a-d4ed5eab0000"
path = "example/path/to/resource"
url = f"/api/files/v1/filesets/{fileSetId}/path?path={path}"

response = requests.get(url, headers={"Content-Type": "application/json"})
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
curl -X GET "/api/files/v1/filesets/6b6e1a44-3aef-4868-988a-d4ed5eab0000/path?path=example/path/to/resource" -H "Content-Type: application/json"
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
  "created": "2025-07-28T21:47:39.814456Z",
  "createdBy": 27,
  "connectorKey": null,
  "indexStatus": null,
  "indexReason": null
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

## Delete File or Directory by Path

**Method:** `DELETE`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/path`

Delete a specific File or Directory within a FileSet using its path.

### Path Parameters

| Parameter    | Type   | Required | Description                                     |
|--------------|--------|----------|-------------------------------------------------|
| `fileSetId`  | string | ✔ Yes    | The ID of the FileSet containing the File.      |

### Query Parameters

| Parameter | Type   | Required | Description                                                                 |
|-----------|--------|----------|-----------------------------------------------------------------------------|
| `path`    | string | ✔ Yes    | The path to the File or Directory to delete. If a Directory is specified, it and its children will be deleted. |

### Request Body

_None_

### Request Example

<!-- type: tab title: JavaScript -->

```javascript
// Generate a realistic fetch/axios example using the request body example
// Use the actual endpoint path with any path parameters filled in
// Include proper headers (Content-Type: application/json if body exists)
fetch('https://example.com/api/files/v1/filesets/784ca52c-987c-4456-96f0-9446b1aded56/path?path=example/path/to/resource', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (response.status === 204) {
    console.log('Deleted successfully');
  } else {
    console.error('Failed to delete', response.status);
  }
});
```

<!-- type: tab-end -->

<!-- type: tab title: Python -->

```python
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
import requests

url = "https://example.com/api/files/v1/filesets/784ca52c-987c-4456-96f0-9446b1aded56/path"
params = {
    "path": "example/path/to/resource"
}

response = requests.delete(url, params=params)

if response.status_code == 204:
    print('Deleted successfully')
else:
    print('Failed to delete', response.status_code)
```

<!-- type: tab-end -->

<!-- type: tab title: cURL -->

```bash
# Generate a realistic cURL command
# Use the actual endpoint path
# Include -H headers and -d data as appropriate
curl -X DELETE "https://example.com/api/files/v1/filesets/784ca52c-987c-4456-96f0-9446b1aded56/path?path=example/path/to/resource" -H "Content-Type: application/json"
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

| Parameter   | Type   | Required | Description                                       |
|-------------|--------|----------|---------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet containing the file.        |

### Query Parameters

| Parameter | Type   | Required | Description                                              |
|-----------|--------|----------|----------------------------------------------------------|
| `path`    | string | ✔ Yes    | The path of the file to download within the FileSet.     |

### Request Body

_None_

### Request Example

<!-- type: tab-title: JavaScript -->
```javascript
// Example JavaScript code to download a file using fetch API.
fetch('https://api.example.com/api/files/v1/filesets/9b391995-bff8-4d62-b978-f96b0dbcd854/path/download?path=example/path/to/resource', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN' // Use the appropriate token
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.blob();
  })
  .then(blob => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'example-file.ext'; // Use appropriate file name
    document.body.appendChild(a);
    a.click();
    a.remove();
  })
  .catch(error => console.error('Error downloading the file:', error));
```

<!-- type: tab-title: Python -->
```python
import requests

# Example Python code to download a file using requests module.
url = 'https://api.example.com/api/files/v1/filesets/9b391995-bff8-4d62-b978-f96b0dbcd854/path/download'
params = {
    'path': 'example/path/to/resource'
}
headers = {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN' # Use the appropriate token
}

response = requests.get(url, headers=headers, params=params)

if response.status_code == 200:
    with open('example-file.ext', 'wb') as file:
        file.write(response.content)
else:
    print('Failed to download file:', response.status_code, response.text)
```

<!-- type: tab-title: cURL -->
```bash
# Example cURL command to download a file.
curl -X GET "https://api.example.com/api/files/v1/filesets/9b391995-bff8-4d62-b978-f96b0dbcd854/path/download?path=example/path/to/resource" \
-H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
-o example-file.ext
```

<!-- type: tab-end -->

### Response

**Status:** `200`

**Description:** The response contains the binary data of the file being downloaded.

**Response Content Type:** `application/octet-stream`

Example (binary data is a placeholder and will be the actual file content):
```json
{
  "file": "binary data..."
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

## Get a File or Directory by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}`

Retrieve a specific File or Directory within a FileSet using its ID.

### Path Parameters

| Parameter  | Type   | Required | Description                                           |
|------------|--------|----------|-------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File or Directory. |
| `fileId`    | string | ✓ Yes    | The ID of the File or Directory to retrieve.           |

### Query Parameters

_None_

### Request Body

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const fileSetId = "6a8a47b1-1a84-4986-9ace-6c8b0337e2da";
const fileId = "a39b00c3-4aea-45cb-bc53-a66f42ffacb6";
fetch(`/api/files/v1/filesets/${fileSetId}/files/${fileId}`, {
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

fileSetId = "6a8a47b1-1a84-4986-9ace-6c8b0337e2da"
fileId = "a39b00c3-4aea-45cb-bc53-a66f42ffacb6"
url = f"/api/files/v1/filesets/{fileSetId}/files/{fileId}"

response = requests.get(url, headers={'Content-Type': 'application/json'})
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X GET "/api/files/v1/filesets/6a8a47b1-1a84-4986-9ace-6c8b0337e2da/files/a39b00c3-4aea-45cb-bc53-a66f42ffacb6" -H "Content-Type: application/json"
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
- **path**: The directory path where the file is stored.
- **name**: The name of the file.
- **fileType**: The type of the file.
- **contentType**: The MIME type of the file.
- **size**: The file size in bytes.
- **hash**: The security hash of the file content.
- **hashAlgorithm**: The algorithm used for the hash.
- **downloadUrl**: The URL from which the file can be downloaded.
- **created**: The timestamp when the file was created.
- **createdBy**: The ID of the user who created the file.
- **connectorKey**: Optional key for the file connector.
- **indexStatus**: The indexing status of the file.
- **indexReason**: The reason for the current indexing status.

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

| Parameter   | Type   | Required | Description                                                                                          |
|-------------|--------|----------|------------------------------------------------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File.                                                           |
| `fileId`    | string | ✓ Yes    | The ID of the File or Directory to delete. If a Directory is specified, it and its children will be deleted. |

### Query Parameters

_None_

### Request Body

### Request Example

<!-- type: tab -->
<!-- title: JavaScript -->

```javascript
fetch('https://yourapiurl.com/api/files/v1/filesets/cf597be3-bde0-4323-b877-3f0b428a2ded/files/703208ee-5379-4e2f-8b1b-8d556e020285', {
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
  .catch(error => {
    console.error('An error occurred:', error);
  });
```

<!-- type: tab-end -->

<!-- type: tab -->
<!-- title: Python -->

```python
import requests

url = 'https://yourapiurl.com/api/files/v1/filesets/cf597be3-bde0-4323-b877-3f0b428a2ded/files/703208ee-5379-4e2f-8b1b-8d556e020285'
headers = {
    'Content-Type': 'application/json'
}

response = requests.delete(url, headers=headers)

if response.status_code == 204:
    print('File or directory deleted successfully.')
else:
    print('Failed to delete the file or directory.')
```

<!-- type: tab-end -->

<!-- type: tab -->
<!-- title: cURL -->

```bash
curl -X DELETE 'https://yourapiurl.com/api/files/v1/filesets/cf597be3-bde0-4323-b877-3f0b428a2ded/files/703208ee-5379-4e2f-8b1b-8d556e020285' \
     -H 'Content-Type: application/json'
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

| Parameter   | Type   | Required | Description                                        |
|-------------|--------|----------|----------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet containing the file.         |
| `fileId`    | string | ✔ Yes    | The ID of the file to download.                    |

### Query Parameters

_None_

### Request Body

_None_

### Request Example

<!-- type: tab -->
title: JavaScript

```javascript
// Using fetch for downloading a file by ID
// Assumes a valid base URL for the API is configured
const fileSetId = '3eef2174-849c-43c5-aa19-729babb6b066';
const fileId = '653a80b2-562e-408e-85a3-fc0fd2dd004d';
const url = `/api/files/v1/filesets/${fileSetId}/files/${fileId}/download`;

fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
.then(response => {
  if (response.ok) {
    return response.blob();
  }
  if (response.status === 302) {
    return fetch(response.headers.get('Location')).then(res => res.blob());
  }
  throw new Error('Network response was not ok.');
})
.then(blob => {
  // Create download link
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'file.pdf'; // Replace with the actual file name
  document.body.appendChild(a);
  a.click();
  a.remove();
})
.catch(error => console.error('There was a problem with the fetch operation:', error));
```

<!-- type: tab -->
title: Python

```python
# Using requests for downloading a file by ID
# Assumes a valid base URL for the API is configured
import requests

fileSetId = '3eef2174-849c-43c5-aa19-729babb6b066'
fileId = '653a80b2-562e-408e-85a3-fc0fd2dd004d'
url = f'/api/files/v1/filesets/{fileSetId}/files/{fileId}/download'

response = requests.get(url, allow_redirects=True) # Follows redirect if 302

if response.status_code == 200:
    with open('downloaded_file.pdf', 'wb') as f:  # Replace with the actual file extension
        f.write(response.content)
else:
    print(f'Failed to download file: {response.status_code}')
```

<!-- type: tab -->
title: cURL

```bash
# Using cURL to download a file by ID
# Assumes a valid base URL for the API is configured
fileSetId="3eef2174-849c-43c5-aa19-729babb6b066"
fileId="653a80b2-562e-408e-85a3-fc0fd2dd004d"
curl -L -X GET "/api/files/v1/filesets/${fileSetId}/files/${fileId}/download" -o downloaded_file.pdf
```

<!-- type: tab-end -->

### Response

**Status:** `200`

- This response does not contain a JSON body but initiates a download for the requested file.

### Error Responses

| Status Code | Description                                      |
|-------------|--------------------------------------------------|
| `302`       | File download initiated successfully.            |
| `400`       | Bad Request.                                     |
| `403`       | Forbidden.                                       |
| `409`       | Conflict.                                        |
| `413`       | Payload Too Large.                               |

---

## Get File Content by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}/content`

Retrieve the content of a specific File within a FileSet using its ID. This endpoint requires a valid download token for authorization, which is generally obtained via a download endpoint and redirected here automatically.

### Path Parameters

| Parameter  | Type   | Required | Description                                      |
|------------|--------|----------|--------------------------------------------------|
| `fileSetId`| string | ✔ Yes    | The ID of the FileSet containing the File.       |
| `fileId`   | string | ✔ Yes    | The ID of the File to retrieve.                  |

### Query Parameters

| Parameter | Type   | Required | Description                                |
|-----------|--------|----------|--------------------------------------------|
| `token`   | string | ✔ Yes    | The download token for authorization.      |

### Request Body

_No request body needed for this endpoint._

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Example using fetch API
const fileSetId = "59d8ed07-218d-4eb8-bd5d-c59d6db27ca0";
const fileId = "a13a02e8-3b88-4c60-8ce7-91615b4dc2bb";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";
const url = `/api/files/v1/filesets/${fileSetId}/files/${fileId}/content?token=${token}`;

fetch(url, {
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
import requests

file_set_id = "59d8ed07-218d-4eb8-bd5d-c59d6db27ca0"
file_id = "a13a02e8-3b88-4c60-8ce7-91615b4dc2bb"
token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
url = f"/api/files/v1/filesets/{file_set_id}/files/{file_id}/content"
params = {'token': token}

response = requests.get(url, params=params, headers={"Accept": "application/json"})

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
fileSetId="59d8ed07-218d-4eb8-bd5d-c59d6db27ca0"
fileId="a13a02e8-3b88-4c60-8ce7-91615b4dc2bb"
token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

curl -X GET "/api/files/v1/filesets/${fileSetId}/files/${fileId}/content?token=${token}" -H "Accept: application/json"
```

<!-- type: tab-end -->

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

