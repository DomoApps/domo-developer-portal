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

| Parameter    | Type    | Required | Description                                       |
|--------------|---------|----------|---------------------------------------------------|
| `name`       | string  | ✔ Yes    | The name for the file set.                        |
| `description` | string | No       | A description for the file set.                   |
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

<!--
type: tab
title: Python
-->

```python
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
import requests

url = 'https://api.example.com/api/files/v1/filesets'
headers = {'Content-Type': 'application/json'}
request_body = {
    "name": "Policies (2025)",
    "description": "Location for all new and updated policies for FY2025",
    "aiEnabled": False,
    "connector": "DOMO"
}

response = requests.post(url, headers=headers, json=request_body)
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

| Parameter  | Type   | Required | Description                           |
|------------|--------|----------|---------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to retrieve. |

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

axios.get('https://api.example.com/api/files/v1/filesets/fbeec3e3-b9ad-46ba-a3b8-bc41b56278eb')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching the FileSet:', error);
  });
```

<!--
type: tab
title: Python
-->

```python
import requests

response = requests.get('https://api.example.com/api/files/v1/filesets/fbeec3e3-b9ad-46ba-a3b8-bc41b56278eb')

if response.status_code == 200:
    print(response.json())
else:
    print('Error fetching the FileSet:', response.status_code, response.text)
```

<!--
type: tab
title: cURL
-->

```bash
curl -X GET 'https://api.example.com/api/files/v1/filesets/fbeec3e3-b9ad-46ba-a3b8-bc41b56278eb'
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
- `description`: A brief description of the FileSet.
- `aiEnabled`: Indicates if AI capabilities are enabled for the FileSet.
- `indexStatus`: The current status of the FileSet's indexing, if applicable.
- `connector`: The name of the connector associated with the FileSet.
- `created`: The timestamp of when the FileSet was created.
- `createdBy`: The ID of the user who created the FileSet.
- `updated`: The timestamp of the latest update to the FileSet.
- `updatedBy`: The ID of the user who last updated the FileSet.
- `owner`: The ID of the FileSet's owner.
- `accountId`: The associated account ID.
- `connectorContext`: The context of the connector if applicable.
- `permission`: The permissions level for current user.
- `size`: The total size of all files in the FileSet.
- `fileCount`: The total number of files in the FileSet.

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

| Parameter   | Type   | Required | Description                          |
|-------------|--------|----------|--------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet to update.     |

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
const axios = require('axios');

const data = {
  name: "Policies (FY25)",
  description: "Repository for new policies created ONLY in FY2025"
};

axios.post(
  'https://api.yourservice.com/api/files/v1/filesets/5d686610-7671-48a1-a0c3-3d77591e82a8',
  data,
  {
    headers: {
      'Content-Type': 'application/json'
    }
  }
).then(response => {
  console.log(response.data);
}).catch(error => {
  console.error(error.response.data);
});
```

<!--
type: tab
title: Python
-->

```python
import requests

url = 'https://api.yourservice.com/api/files/v1/filesets/5d686610-7671-48a1-a0c3-3d77591e82a8'

data = {
  "name": "Policies (FY25)",
  "description": "Repository for new policies created ONLY in FY2025"
}

headers = {
  'Content-Type': 'application/json'
}

response = requests.post(url, json=data, headers=headers)

print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST 'https://api.yourservice.com/api/files/v1/filesets/5d686610-7671-48a1-a0c3-3d77591e82a8' \
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

- `id`: Unique identifier for the FileSet.
- `name`: Updated name of the FileSet.
- `description`: Updated description of the FileSet.
- `aiEnabled`: Status of AI features for the FileSet.
- `indexStatus`: Current indexing status (if applicable).
- `connector`: Type of connector associated with the FileSet.
- `created`: Timestamp when the FileSet was created.
- `createdBy`: ID of the user who created the FileSet.
- `updated`: Timestamp when the FileSet was last updated.
- `updatedBy`: ID of the user who last updated the FileSet.
- `owner`: ID of the owner of the FileSet.
- `accountId`: Account ID associated with the FileSet.
- `connectorContext`: Context of the connector (if applicable).
- `permission`: Permission level of the current user.
- `size`: Current size of the FileSet.
- `fileCount`: Number of files in the FileSet.

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

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Example of sending a DELETE request using fetch
const fileSetId = 'fd01c1be-2115-43eb-b3ce-a9abab0eb474';
const url = `/api/files/v1/filesets/${fileSetId}`;

fetch(url, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  }
})
.then(response => {
  if (response.status === 204) {
    console.log('FileSet deleted successfully.');
  } else {
    console.error('Failed to delete FileSet.');
  }
})
.catch(error => {
  console.error('Error:', error);
});
```

<!--
type: tab
title: Python
-->

```python
import requests

fileSetId = 'fd01c1be-2115-43eb-b3ce-a9abab0eb474'
url = f'/api/files/v1/filesets/{fileSetId}'

response = requests.delete(url)

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
# Use cURL to send a DELETE request
curl -X DELETE "/api/files/v1/filesets/fd01c1be-2115-43eb-b3ce-a9abab0eb474" -H "Content-Type: application/json"
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

## Query FileSet for File Contents

**Method:** `POST`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/query`

Query a specific FileSet for file contents related to the query criteria.

### Path Parameters

| Parameter  | Type   | Required | Description                       |
|------------|--------|----------|-----------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet to query.   |

### Query Parameters

_None_

### Request Body

Used to query a file set for the top K results based on the provided query.

| Parameter         | Type              | Required | Description                                                                 |
|-------------------|-------------------|----------|-----------------------------------------------------------------------------|
| `query`           | string            | ✓ Yes    | The query string to match against file contents within the file set.       |
| `topK`            | integer (int32)   | No       | The number of top results to return based on the query match. Defaults to 1.|
| `pathPrefixFilter`| string            | No       | An optional prefix filter for the file paths to narrow down the search results. |

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

axios.post('http://example.com/api/files/v1/filesets/625e06b8-af70-444a-ad36-80b6eaa26efe/query', data, {
  headers: {
    'Content-Type': 'application/json',
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

url = 'http://example.com/api/files/v1/filesets/625e06b8-af70-444a-ad36-80b6eaa26efe/query'
headers = {'Content-Type': 'application/json'}
data = {
    'query': 'benefit',
    'pathPrefixFilter': 'sample/directory/path',
    'topK': 2
}

response = requests.post(url, json=data, headers=headers)

print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST http://example.com/api/files/v1/filesets/625e06b8-af70-444a-ad36-80b6eaa26efe/query \
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

| Parameter   | Type   | Required | Description                                               |
|-------------|--------|----------|-----------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet for which to update the owner. |

### Query Parameters

_None_

### Request Body

Represents a request to transfer ownership of a file set.

Other users may be granted ownership level permissions, but only one user may be the sole owner of a file set.

| Parameter | Type            | Required | Description                                     |
|-----------|-----------------|----------|-------------------------------------------------|
| `userId`  | integer (int64) | ✔ Yes    | The ID of the user that will assume ownership. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Generate a realistic fetch/axios example using the request body example
// Use the actual endpoint path with any path parameters filled in
// Include proper headers (Content-Type: application/json if body exists)
fetch('https://api.example.com/api/files/v1/filesets/b798d686-8109-4e97-87f0-8e5042a3b929/ownership', {
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
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
import requests

url = 'https://api.example.com/api/files/v1/filesets/b798d686-8109-4e97-87f0-8e5042a3b929/ownership'
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
# Generate a realistic cURL command
# Use the actual endpoint path
# Include -H headers and -d data as appropriate
curl -X POST https://api.example.com/api/files/v1/filesets/b798d686-8109-4e97-87f0-8e5042a3b929/ownership \
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

- `fileSetId`: The unique identifier of the file set.
- `fileSetAccess`: List of users with access permissions to the file set.
  - `entityId`: User ID with access permissions.
  - `entityType`: The type of entity with access; e.g., "USER".
  - `permission`: The access level assigned; e.g., "OWNER".

### Error Responses

| Status Code | Description       |
|-------------|-------------------|
| `400`       | Bad Request       |
| `403`       | Forbidden         |
| `409`       | Conflict          |
| `413`       | Payload Too Large |

---

## Create a new File or Directory

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files`

Create a new File or Directory within a specified FileSet. If a file already exists at the specified path, it will attempt to overwrite it if the client has permission. If a Directory already exists at the specified path, it will return that Directory.

### Path Parameters

| Parameter   | Type   | Required | Description                                               |
|-------------|--------|----------|-----------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet in which to create the File.        |

### Query Parameters

_None_

### Request Body

Represents a request to upload a file or create a directory.

| Parameter       | Type            | Required | Description                                                                                                                                                           |
|-----------------|-----------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `file`          | string (binary) | No       | The file to be uploaded. Leave null if creating a directory.                                                                                                          |
| `directoryPath` | string          | No       | The directory path of the uploaded file, or the path of the created directory if no file is provided. Defaults to an empty string, i.e., the root directory, if not specified. Note: An empty string is not valid when intentionally creating a directory. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const buffer = new ArrayBuffer([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
const data = {
  file: buffer,
  directoryPath: "sample/directory/path"
};

fetch("https://api.example.com/api/files/v1/filesets/4c744338-774f-447f-9a7c-a7c3b4edde31/files", {
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

url = "https://api.example.com/api/files/v1/filesets/4c744338-774f-447f-9a7c-a7c3b4edde31/files"
data = {
    "file": b'\x89PNG\r\n\x1a\n',
    "directoryPath": "sample/directory/path"
}

headers = {
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json=data)

print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "https://api.example.com/api/files/v1/filesets/4c744338-774f-447f-9a7c-a7c3b4edde31/files" \
-H "Content-Type: application/json" \
-d '{
  "file": "binary representation here",
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

- `id`: Unique identifier for the created file or directory.
- `path`: The path where the file or directory was created.
- `name`: The name of the created directory or file.
- `size`: The size of the file. `null` for directories.
- `created`: Timestamp of when the file or directory was created.
- `createdBy`: Identifier of the user who created the file or directory.
- `fileType`: Type of the entity, either `FILE` or `DIRECTORY`.

### Error Responses

| Status Code | Description                                                                                         |
|-------------|-----------------------------------------------------------------------------------------------------|
| `400`       | Bad Request. The request could not be understood by the server due to malformed syntax.             |
| `403`       | Forbidden. The client does not have access rights to the content, so the server is rejecting to respond. |
| `409`       | Conflict: File already exists at the specified path and client does not have overwrite permissions.  |
| `413`       | Payload Too Large. The request entity is larger than limits defined by server.                      |

---

## List Files and Directories for a FileSet

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/search`

Retrieve a paginated list of Files within a specific FileSet based on search criteria.

### Path Parameters

| Parameter   | Type   | Required | Description                              |
|-------------|--------|----------|------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to search within.  |

### Query Parameters

| Parameter          | Type           | Required | Description                                                           |
|--------------------|----------------|----------|-----------------------------------------------------------------------|
| `directoryPath`    | string         | No       | The path to the directory within the FileSet, if applicable.          |
| `immediateChildren`| boolean        | No       | Whether to list only immediate children of the specified directory. (Default: `False`) |
| `limit`            | integer (int32)| No       | The maximum number of Files to return. (Default: `100`)               |
| `next`             | string         | No       | The pagination token for the next set of results.                     |

### Request Body

Request object for searching with specific filters and sorting options.

| Parameter   | Type  | Required | Description                                              |
|-------------|-------|----------|----------------------------------------------------------|
| `fieldSort` | array | No       | A list of field sort criteria to apply to the search.    |
| `filters`   | array | No       | A list of filters to apply to the search.                |
| `dateFilters`| array | No       | A list of date filters to apply to the search.           |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const axios = require('axios');

axios.post('https://api.example.com/api/files/v1/filesets/ba257d13-d23e-4faa-b658-401a48747ded/files/search', {
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

url = 'https://api.example.com/api/files/v1/filesets/ba257d13-d23e-4faa-b658-401a48747ded/files/search'
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

response = requests.post(url, json=data, headers=headers)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST 'https://api.example.com/api/files/v1/filesets/ba257d13-d23e-4faa-b658-401a48747ded/files/search' \
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

| Parameter   | Type   | Required | Description                                           |
|-------------|--------|----------|-------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet in which to create the File.    |

### Query Parameters

_None_

### Request Body

Represents a request to initiate a split file upload.

| Parameter | Type   | Required | Description                                                     |
|-----------|--------|----------|-----------------------------------------------------------------|
| `path`    | string | No       | The full path destination for the file once the upload is finalized. |


### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('/api/files/v1/filesets/db669276-1ad3-4fbb-82de-98720142499c/files/multipart', {
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

url = 'http://localhost/api/files/v1/filesets/db669276-1ad3-4fbb-82de-98720142499c/files/multipart'
headers = {
    'Content-Type': 'application/json'
}
body = {
    "path": "example/path/to/resource"
}

response = requests.post(url, headers=headers, json=body)

print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST 'http://localhost/api/files/v1/filesets/db669276-1ad3-4fbb-82de-98720142499c/files/multipart' \
-H 'Content-Type: application/json' \
-d '{
  "path": "example/path/to/resource"
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

| Status Code | Description                                                       |
|-------------|-------------------------------------------------------------------|
| `400`       | Bad Request                                                       |
| `403`       | Forbidden                                                         |
| `409`       | Conflict: File already exists at the specified path.              |
| `413`       | Payload Too Large                                                 |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled. |

---

## Submit a part of a file for upload.

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/part/{partNumber}`

Allows submitting a file in stages to create a new file within a FileSet.

### Path Parameters

| Parameter   | Type              | Required | Description                                                               |
|-------------|-------------------|----------|---------------------------------------------------------------------------|
| `fileSetId` | string            | ✔ Yes    | The ID of the FileSet in which to the file is being uploaded.             |
| `fileId`    | string            | ✔ Yes    | The ID of the file being uploaded in parts.                               |
| `partNumber`| integer (int64)   | ✔ Yes    | The part number of this file segment. Must be non-negative.               |

### Query Parameters

_None_

### Request Body

Represents a request to upload a part of a file in a split file upload operation.

| Parameter | Type            | Required | Description                                                           |
|-----------|-----------------|----------|-----------------------------------------------------------------------|
| `part`    | string (binary) | No       | The full path destination for the file once the upload is complete.   |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Using fetch to upload a file part
fetch('https://example.com/api/files/v1/filesets/ac2cf565-5900-43ba-8483-c02007d4e2dc/files/multipart/cd95109f-cd2d-4ee5-9933-deb278edb541/part/1234567890', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        part: (binary data of the file)
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
# Using requests to upload a file part
import requests

url = 'https://example.com/api/files/v1/filesets/ac2cf565-5900-43ba-8483-c02007d4e2dc/files/multipart/cd95109f-cd2d-4ee5-9933-deb278edb541/part/1234567890'
headers = {
    'Content-Type': 'application/json'
}
data = {
    'part': (binary data of the file)
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
# Using cURL to upload a file part
curl -X POST "https://example.com/api/files/v1/filesets/ac2cf565-5900-43ba-8483-c02007d4e2dc/files/multipart/cd95109f-cd2d-4ee5-9933-deb278edb541/part/1234567890" \
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
}
```

### Error Responses

| Status Code | Description                                                                                                   |
|-------------|---------------------------------------------------------------------------------------------------------------|
| `400`       | Split file upload part did not match previous data segments.                                                  |
| `403`       | Forbidden                                                                                                     |
| `404`       | An "initiate split file" request was not performed prior to this request for the given file ID or has already been finalized or aborted. |
| `409`       | Conflict                                                                                                      |
| `413`       | Payload Too Large                                                                                             |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled.                                      |

---

## Finalize a split file upload.

**Method:** `POST`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/finalize`

Declares that all parts of a split file upload have been submitted and the file can be assembled.

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fileSetId` | string | ✓ Yes | The ID of the FileSet in which the file has been uploaded. |
| `fileId` | string | ✓ Yes | The ID of the file whose parts have been uploaded. |

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
fetch("https://api.example.com/api/files/v1/filesets/9d2e4b7e-c628-4611-8830-445cb14f6de6/files/multipart/6bcd84f3-f040-40f8-92ac-4a65bb4fbb8b/finalize", {
  method: "POST"
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
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
import requests

url = "https://api.example.com/api/files/v1/filesets/9d2e4b7e-c628-4611-8830-445cb14f6de6/files/multipart/6bcd84f3-f040-40f8-92ac-4a65bb4fbb8b/finalize"

response = requests.post(url)

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
curl -X POST "https://api.example.com/api/files/v1/filesets/9d2e4b7e-c628-4611-8830-445cb14f6de6/files/multipart/6bcd84f3-f040-40f8-92ac-4a65bb4fbb8b/finalize"
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

- `file.id`: The unique identifier of the finalized file.
- `file.path`: The directory path where the file is stored.
- `file.name`: The name of the file.
- `file.fileType`: Type of the file, such as DOCUMENT.
- `file.contentType`: The content type of the file, e.g., application/pdf.
- `file.size`: The size of the file in bytes.
- `file.hash`: The hash of the file content.
- `file.hashAlgorithm`: The algorithm used for hashing.
- `file.downloadUrl`: URL for downloading the file (if available).
- `file.created`: The timestamp when the file was created.
- `file.createdBy`: The ID of the user who created the file.
- `status`: Operation status, SUCCESS if successful.

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

| Parameter  | Type   | Required | Description                                                      |
|------------|--------|----------|------------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet in which the file was being uploaded.     |
| `fileId`    | string | ✓ Yes    | The ID of the file whose upload is to be aborted.               |

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
const url = '/api/files/v1/filesets/9623942d-0a4a-4201-9229-ced36eaedc1f/files/multipart/024bfb32-6eb8-40a2-bf99-6add3cfc5c7e/abort';

fetch(url, {
  method: 'POST',
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
import requests

url = '/api/files/v1/filesets/9623942d-0a4a-4201-9229-ced36eaedc1f/files/multipart/024bfb32-6eb8-40a2-bf99-6add3cfc5c7e/abort'

response = requests.post(url, headers={'Content-Type': 'application/json'})

print(response.json())
```

<!-- type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
curl -X POST '/api/files/v1/filesets/9623942d-0a4a-4201-9229-ced36eaedc1f/files/multipart/024bfb32-6eb8-40a2-bf99-6add3cfc5c7e/abort' -H 'Content-Type: application/json'
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

- **400**: Bad Request.
- **403**: Forbidden.
- **404**: An "initiate split file" request was not performed prior to this request for the given file ID or has already been finalized or aborted.
- **409**: Conflict.
- **413**: Payload Too Large.

---

## Get FileSet Access Permissions

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/access`

Retrieve the access permissions for a specific FileSet.

### Path Parameters

| Parameter  | Type   | Required | Description                                                  |
|------------|--------|----------|--------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet for which to retrieve access information. |

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
const fileSetId = '6d69a728-f475-45f5-b408-d4b59cf0db78';
fetch(`https://example.com/api/files/v1/filesets/${fileSetId}/access`, {
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

<!-- 
type: tab
title: Python
-->

```python
# Python example using requests library
import requests

fileSetId = '6d69a728-f475-45f5-b408-d4b59cf0db78'
url = f'https://example.com/api/files/v1/filesets/{fileSetId}/access'

response = requests.get(url, headers={'Accept': 'application/json'})
print(response.json())
```

<!-- type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
# cURL example
curl -X GET "https://example.com/api/files/v1/filesets/6d69a728-f475-45f5-b408-d4b59cf0db78/access" -H "Accept: application/json"
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

- `fileSetId`: The unique identifier of the FileSet.
- `fileSetAccess`: An array representing the access information.
  - `entityId`: The ID of the entity (e.g., user or group) that has permissions.
  - `entityType`: The type of entity that has access, such as `USER`.
  - `permission`: The level of access permission, such as `OWNER`.

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

| Parameter  | Type   | Required | Description                                                        |
|------------|--------|----------|--------------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet for which to update access permissions.     |

### Query Parameters

_None_

### Request Body

Request object for updating access permissions to a file set.

Only the permissions that are explicitly set in the request will be updated.

| Parameter       | Type  | Required | Description                                    |
|-----------------|-------|----------|------------------------------------------------|
| `fileSetAccess` | array | ✓ Yes    | The access permissions for the file set.       |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const axios = require('axios');

async function updateFileSetAccess() {
  const fileSetId = '258af2c8-c7bc-438c-98a1-440c7ab769df';
  const url = `https://api.yourservice.com/api/files/v1/filesets/${fileSetId}/access`;

  try {
    const response = await axios.post(url, {
      fileSetAccess: [
        {
          entityId: 42,
          entityType: "GROUP",
          permission: "EDIT"
        }
      ]
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Access updated:', response.data);
  } catch (error) {
    console.error('Error updating access:', error.response.data);
  }
}

updateFileSetAccess();
```

<!-- type: tab-end -->

<!--
type: tab
title: Python
-->

```python
import requests

def update_file_set_access():
    file_set_id = '258af2c8-c7bc-438c-98a1-440c7ab769df'
    url = f'https://api.yourservice.com/api/files/v1/filesets/{file_set_id}/access'
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

    if response.status_code == 200:
        print('Access updated:', response.json())
    else:
        print('Error updating access:', response.status_code, response.text)

update_file_set_access()
```

<!-- type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
curl -X POST https://api.yourservice.com/api/files/v1/filesets/258af2c8-c7bc-438c-98a1-440c7ab769df/access \
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
const axios = require('axios');

axios.post(
  'https://example.com/api/files/v1/filesets/search?limit=100&offset=0', 
  {
    fieldSort: [{ field: "name", order: "ASC" }],
    filters: [{ field: "owner", value: [27], not: false, operator: "EQUALS" }],
    dateFilters: [{ field: "created", start: "2025-05-12T23:30:00Z", not: false, end: null }]
  },
  {
    headers: {
      'Content-Type': 'application/json',
    }
  }
)
.then(response => console.log(response.data))
.catch(error => console.error(error));
```

<!--
type: tab
title: Python
-->

```python
import requests

response = requests.post(
    'https://example.com/api/files/v1/filesets/search',
    json={
        "fieldSort": [{"field": "name", "order": "ASC"}],
        "filters": [{"field": "owner", "value": [27], "not": False, "operator": "EQUALS"}],
        "dateFilters": [{"field": "created", "start": "2025-05-12T23:30:00Z", "not": False, "end": None}]
    },
    headers={'Content-Type': 'application/json'}
)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST https://example.com/api/files/v1/filesets/search \
-H "Content-Type: application/json" \
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

| Parameter   | Type   | Required | Description                                                   |
|-------------|--------|----------|---------------------------------------------------------------|
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
const fileSetId = "9994ca7a-17c0-4b89-8505-6d4257df5f9d";
fetch(`/api/files/v1/filesets/${fileSetId}/stats`, {
  method: 'GET'
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

file_set_id = "9994ca7a-17c0-4b89-8505-6d4257df5f9d"
response = requests.get(f'/api/files/v1/filesets/{file_set_id}/stats')

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
curl -X GET "/api/files/v1/filesets/9994ca7a-17c0-4b89-8505-6d4257df5f9d/stats"
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
- `otherFileTypeCount`: The number of files classified as other types.
- `notIndexedCount`: The number of files not yet indexed.
- `indexQueuedCount`: The number of files queued for indexing.
- `indexInProgressCount`: The number of files currently being indexed.
- `indexCompleteCount`: The number of files successfully indexed.
- `indexFailedCount`: The number of files that failed indexing.
- `indexSkippedCount`: The number of files where indexing was skipped.

### Error Responses

| Status Code | Description            |
|-------------|------------------------|
| `400`       | Bad Request            |
| `403`       | Forbidden              |
| `409`       | Conflict               |
| `413`       | Payload Too Large      |

---

## Get File or Directory by Path

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/path`

Retrieve a File or Directory within a FileSet using its path.

### Path Parameters

| Parameter  | Type   | Required | Description              |
|------------|--------|----------|--------------------------|
| `fileSetId`| string | ✔ Yes    | The ID of the FileSet.   |

### Query Parameters

| Parameter | Type   | Required | Description                                      |
|-----------|--------|----------|--------------------------------------------------|
| `path`    | string | ✔ Yes    | The path to the File or Directory within the FileSet. |

### Request Body

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const fetch = require('node-fetch');

const fileSetId = '94ab62c5-6327-417f-b875-4177170ff33c';
const path = 'example/path/to/resource';

fetch(`https://api.example.com/api/files/v1/filesets/${fileSetId}/path?path=${encodeURIComponent(path)}`, {
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
import requests

fileSetId = '94ab62c5-6327-417f-b875-4177170ff33c'
path = 'example/path/to/resource'

response = requests.get(
    f'https://api.example.com/api/files/v1/filesets/{fileSetId}/path',
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
curl -X GET "https://api.example.com/api/files/v1/filesets/94ab62c5-6327-417f-b875-4177170ff33c/path?path=example%2Fpath%2Fto%2Fresource" \
  -H "Content-Type: application/json"
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

| Parameter   | Type   | Required | Description                                        |
|-------------|--------|----------|----------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet containing the File.         |

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
fetch('/api/files/v1/filesets/b56bd64e-747e-4cea-af2b-bdeb41b56169/path?path=example/path/to/resource', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (response.status === 204) {
    console.log('File or directory deleted successfully.');
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

response = requests.delete(
  'https://yourapi.com/api/files/v1/filesets/b56bd64e-747e-4cea-af2b-bdeb41b56169/path',
  params={'path': 'example/path/to/resource'},
  headers={'Content-Type': 'application/json'}
)

if response.status_code == 204:
    print('File or directory deleted successfully.')
else:
    print('Error:', response.status_code)
```

<!--
type: tab
title: cURL
-->

```bash
curl -X DELETE "https://yourapi.com/api/files/v1/filesets/b56bd64e-747e-4cea-af2b-bdeb41b56169/path?path=example/path/to/resource" -H "Content-Type: application/json"
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

## Download a File by Path

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/path/download`

Download the contents of a specific File within a FileSet using its path. This will redirect to the file's download URL.

### Path Parameters

| Parameter   | Type   | Required | Description                                  |
|-------------|--------|----------|----------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File.   |

### Query Parameters

| Parameter | Type   | Required | Description                                          |
|-----------|--------|----------|------------------------------------------------------|
| `path`    | string | ✓ Yes    | The path of the File to download within the FileSet. |

### Request Body

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Using axios with the given path parameters and query parameters
const axios = require('axios');

axios.get('https://api.example.com/api/files/v1/filesets/3e846fb3-f27b-46dc-97db-33681208a852/path/download', {
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
import requests

response = requests.get(
    'https://api.example.com/api/files/v1/filesets/3e846fb3-f27b-46dc-97db-33681208a852/path/download',
    params={'path': 'example/path/to/resource'}
)

print(response.content)
```

<!--
type: tab
title: cURL
-->

```bash
curl -G "https://api.example.com/api/files/v1/filesets/3e846fb3-f27b-46dc-97db-33681208a852/path/download" \
     --data-urlencode "path=example/path/to/resource"
```

<!-- type: tab-end -->

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

| Parameter  | Type   | Required | Description                                                |
|------------|--------|----------|------------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet containing the File or Directory.    |
| `fileId`    | string | ✔ Yes    | The ID of the File or Directory to retrieve.               |

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
fetch('https://yourapi.com/api/files/v1/filesets/586d287d-4929-43e0-9866-c3d7bba7164e/files/f9461ff1-d923-434e-9adb-21136b5a402c', {
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
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
import requests

url = "https://yourapi.com/api/files/v1/filesets/586d287d-4929-43e0-9866-c3d7bba7164e/files/f9461ff1-d923-434e-9adb-21136b5a402c"

response = requests.get(url)
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
curl -X GET "https://yourapi.com/api/files/v1/filesets/586d287d-4929-43e0-9866-c3d7bba7164e/files/f9461ff1-d923-434e-9adb-21136b5a402c" -H "Content-Type: application/json"
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

| Status Code | Description         |
|-------------|---------------------|
| `400`       | Bad Request         |
| `403`       | Forbidden           |
| `409`       | Conflict            |
| `413`       | Payload Too Large   |

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

- None

### Request Body

- The request body should be empty for this DELETE endpoint, as all necessary information is included in the path parameters.

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const fetch = require('node-fetch');

const fileSetId = '56c3f0c4-3c51-4e88-9eb3-8b4842bb2a66';
const fileId = '2bd2abb3-ac94-4464-8f2c-231aa71d631a';

fetch(`http://example.com/api/files/v1/filesets/${fileSetId}/files/${fileId}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(response => {
    if (response.status === 204) {
      console.log('File or Directory deleted successfully.');
    } else {
      console.error('Failed to delete.');
    }
  })
  .catch(error => console.error('Error:', error));
```

<!-- type: tab-end -->

<!--
type: tab
title: Python
-->

```python
import requests

fileSetId = '56c3f0c4-3c51-4e88-9eb3-8b4842bb2a66'
fileId = '2bd2abb3-ac94-4464-8f2c-231aa71d631a'

url = f'http://example.com/api/files/v1/filesets/{fileSetId}/files/{fileId}'
headers = {
    'Content-Type': 'application/json'
}

response = requests.delete(url, headers=headers)

if response.status_code == 204:
    print('File or Directory deleted successfully.')
else:
    print('Failed to delete.', response.status_code)
```

<!-- type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
curl -X DELETE "http://example.com/api/files/v1/filesets/56c3f0c4-3c51-4e88-9eb3-8b4842bb2a66/files/2bd2abb3-ac94-4464-8f2c-231aa71d631a" \
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

## Download a File by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}/download`

Download the contents of a specific File within a FileSet using its ID. This will redirect to the file's download URL.

### Path Parameters

| Parameter  | Type   | Required | Description                          |
|------------|--------|----------|--------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File. |
| `fileId`    | string | ✓ Yes    | The ID of the File to download.            |

### Query Parameters

_None_

### Request Body

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript example for downloading file by ID via fetch
fetch('https://api.example.com/api/files/v1/filesets/28b87ed9-2bdb-4f4f-8e42-d2be9a1b0efb/files/56161ac2-a37f-47b7-b3e7-37f81ce15f89/download', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (response.ok) {
    window.location.href = response.url; // Redirect to download URL
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
# Python example for downloading file by ID using requests
import requests

response = requests.get(
    'https://api.example.com/api/files/v1/filesets/28b87ed9-2bdb-4f4f-8e42-d2be9a1b0efb/files/56161ac2-a37f-47b7-b3e7-37f81ce15f89/download',
    headers={'Content-Type': 'application/json'}
)

if response.ok:
    with open('downloaded_file', 'wb') as f:
        f.write(response.content)
else:
    print('Failed to download file')
```

<!--
type: tab
title: cURL
-->

```bash
# cURL example for downloading file by ID
curl -L -X GET 'https://api.example.com/api/files/v1/filesets/28b87ed9-2bdb-4f4f-8e42-d2be9a1b0efb/files/56161ac2-a37f-47b7-b3e7-37f81ce15f89/download' \
-H 'Content-Type: application/json'
```

<!-- type: tab-end -->

### Response

**Status:** `200`

```json
{}
```

### Error Responses

| Status Code | Description                      |
|-------------|----------------------------------|
| `302`       | File download initiated successfully |
| `400`       | Bad Request                      |
| `403`       | Forbidden                        |
| `409`       | Conflict                         |
| `413`       | Payload Too Large                |

---

## Get File Content by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}/content`

Retrieve the content of a specific File within a FileSet using its ID. This endpoint requires a valid download token for authorization, generally obtained via a download endpoint and redirected here automatically.

### Path Parameters

| Parameter  | Type   | Required | Description                                |
|------------|--------|----------|--------------------------------------------|
| `fileSetId` | string | ✔ Yes   | The ID of the FileSet containing the File.  |
| `fileId`   | string | ✔ Yes   | The ID of the File to retrieve.            |

### Query Parameters

| Parameter | Type   | Required | Description                             |
|-----------|--------|----------|-----------------------------------------|
| `token`   | string | ✔ Yes   | The download token for authorization.   |

### Request Body

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript example using fetch to retrieve file content
fetch('https://api.example.com/api/files/v1/filesets/8bc01329-9e90-4b54-b3c6-6e5c5cd8bbd5/files/49d69fac-6f41-4e57-bf8d-87d6052ee386/content?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
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
# Python example using requests to retrieve file content
import requests

url = 'https://api.example.com/api/files/v1/filesets/8bc01329-9e90-4b54-b3c6-6e5c5cd8bbd5/files/49d69fac-6f41-4e57-bf8d-87d6052ee386/content'
headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
}

# Added query parameter to the Python request
params = {'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'}

response = requests.get(url, headers=headers, params=params)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
# cURL example to retrieve file content
curl -X GET 'https://api.example.com/api/files/v1/filesets/8bc01329-9e90-4b54-b3c6-6e5c5cd8bbd5/files/49d69fac-6f41-4e57-bf8d-87d6052ee386/content?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
```

<!-- type: tab-end -->

### Successful Response

**Status:** `200 OK`

- Example Response Body:

```json
{
    "fileId": "49d69fac-6f41-4e57-bf8d-87d6052ee386",
    "fileName": "example_document.txt",
    "content": "This is the content of the requested file."
}
```

### Error Responses

| Status Code | Description                              | Example Reason                          |
|-------------|------------------------------------------|----------------------------------------|
| `400`       | Bad Request                              | Invalid parameters or token format.    |
| `403`       | Forbidden                                | Invalid or expired download token.     |
| `404`       | Not Found                                | File or FileSet does not exist.        |
| `409`       | Conflict                                 | Conflict occurred while processing.    |
| `413`       | Payload Too Large                        | File size exceeds allowable limit.     |

---

