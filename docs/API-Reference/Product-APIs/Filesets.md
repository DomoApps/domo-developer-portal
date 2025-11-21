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

| Parameter    | Type    | Required | Description                                                      |
|--------------|---------|----------|------------------------------------------------------------------|
| `name`       | string  | ✓ Yes    | The name for the file set.                                      |
| `description`| string  | No       | A description for the file set.                                 |
| `connector`  | string  | No       | The connector that powers the file set. Allowed values: `DOMO`, `CONFLUENCE`, `GITHUB`, `GOOGLE_DRIVE`, `S3` |
| `aiEnabled`  | boolean | No       | Indicates whether AI features are enabled for the file set.     |

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
    name: "Policies (2025)",
    description: "Location for all new and updated policies for FY2025",
    aiEnabled: false,
    connector: "DOMO"
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

url = "https://api.example.com/api/files/v1/filesets"
headers = {
    "Content-Type": "application/json"
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

- `id`: Unique identifier for the file set.
- `name`: The name of the file set.
- `description`: The description of the file set.
- `aiEnabled`: Indicates if AI features are enabled.
- `indexStatus`: Status of the index, if applicable.
- `connector`: The connector used for the file set.
- `created`: Timestamp when the file set was created.
- `createdBy`: User ID of who created the file set.
- `updated`: Timestamp when the file set was last updated.
- `updatedBy`: User ID of who last updated the file set.
- `owner`: Owner ID of the file set.
- `accountId`: Account ID associated with the file set.
- `connectorContext`: Additional context if applicable.
- `permission`: Permission level of the requesting user.
- `size`: Size of the file set.
- `fileCount`: Number of files within the file set.

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

| Parameter  | Type   | Required | Description                      |
|------------|--------|----------|----------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet to retrieve. |

### Query Parameters

_None_

### Request Body

_None_

<!--
type: tab
title: JavaScript
-->

```javascript
const axios = require('axios');

const fileSetId = '2114c8a8-569c-4ec5-8af6-0cd8361846c8';

axios.get(`https://api.example.com/api/files/v1/filesets/${fileSetId}`)
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

file_set_id = '2114c8a8-569c-4ec5-8af6-0cd8361846c8'

response = requests.get(f'https://api.example.com/api/files/v1/filesets/{file_set_id}')

if response.status_code == 200:
    print(response.json())
else:
    print(f'Error: {response.status_code}')
```

<!--
type: tab
title: cURL
-->

```bash
curl -X GET "https://api.example.com/api/files/v1/filesets/2114c8a8-569c-4ec5-8af6-0cd8361846c8"
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

- `id`: The unique identifier of the FileSet.
- `name`: The name of the FileSet.
- `description`: A detailed description of the FileSet's purpose.
- `aiEnabled`: Indicates if AI features are enabled for this FileSet.
- `indexStatus`: The indexing status of the FileSet (null if not applicable).
- `connector`: The connector used for the FileSet.
- `created`: Timestamp of when the FileSet was created.
- `createdBy`: ID of the user who created the FileSet.
- `updated`: Timestamp of the last update made to the FileSet.
- `updatedBy`: ID of the user who last updated the FileSet.
- `owner`: ID of the owner of the FileSet.
- `accountId`: The associated account ID.
- `connectorContext`: Additional context about the connector (null if not applicable).
- `permission`: The level of permission the current user has on the FileSet.
- `size`: The total size of the FileSet.
- `fileCount`: The total number of files in the FileSet.

### Error Responses

| Status Code | Description     |
|-------------|-----------------|
| `400`       | Bad Request     |
| `403`       | Forbidden       |
| `409`       | Conflict        |
| `413`       | Payload Too Large |

---

## Update an existing FileSet

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}`

Update the details of an existing FileSet. Only fields that are not null in the request will be updated.

### Path Parameters

| Parameter   | Type   | Required | Description                             |
|-------------|--------|----------|-----------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet to update. |

### Query Parameters

_None_

### Request Body

Represents a request to update a file set.  
At least one of the fields must be provided to update the file set.

| Parameter     | Type    | Required | Description                                                                 |
|---------------|---------|----------|-----------------------------------------------------------------------------|
| `name`        | string  | No       | The name with which to update the file set's name. If not provided, the name will remain unchanged. |
| `description` | string  | No       | Optional description with which to update the file set's description. If not provided, the description will remain unchanged. |
| `aiEnabled`   | boolean | No       | Optional flag to enable or disable AI features for the file set. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Generate a realistic fetch/axios example using the request body example
// Use the actual endpoint path with any path parameters filled in
// Include proper headers (Content-Type: application/json if body exists)
const url = 'https://api.example.com/api/files/v1/filesets/38e77457-4278-4ee2-bb62-37a2200ca568';
const data = {
  name: "Policies (FY25)",
  description: "Repository for new policies created ONLY in FY2025"
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
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
import requests

url = 'https://api.example.com/api/files/v1/filesets/38e77457-4278-4ee2-bb62-37a2200ca568'
data = {
  "name": "Policies (FY25)",
  "description": "Repository for new policies created ONLY in FY2025"
}

response = requests.post(url, json=data, headers={'Content-Type': 'application/json'})

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
curl -X POST 'https://api.example.com/api/files/v1/filesets/38e77457-4278-4ee2-bb62-37a2200ca568' \
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

- `id`: The unique identifier for the file set.
- `name`: The name of the file set.
- `description`: Description of the file set.
- `aiEnabled`: Boolean flag indicating if AI features are enabled.
- `indexStatus`: Current index status of the file set (if applicable).
- `connector`: Type of connector used (e.g., "DOMO").
- `created`: Timestamp of when the file set was created.
- `createdBy`: User ID of the creator.
- `updated`: Timestamp of the last update.
- `updatedBy`: User ID of the one who last updated the file set.
- `owner`: User ID of the file set owner.
- `accountId`: Account ID associated with the file set.
- `connectorContext`: Additional context or metadata related to the connector.
- `permission`: Permissions associated with the file set (e.g., "OWNER").
- `size`: Total size of the file set.
- `fileCount`: Number of files in the file set.

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

| Parameter   | Type   | Required | Description                        |
|-------------|--------|----------|------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to delete.    |

### Query Parameters

_None_

### Request Body

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// JavaScript DELETE request using fetch
// Replace with your base URL
const fileSetId = "0b57d4e3-ff51-4813-bb01-7134de4cd858";
fetch(`https://api.example.com/api/files/v1/filesets/${fileSetId}`, {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then(response => {
    if (response.status === 204) {
      console.log("FileSet deleted successfully.");
    } else {
      console.error("Failed to delete FileSet.", response.statusText);
    }
  })
  .catch(error => console.error("Error:", error));
```

<!--
type: tab-end
-->

<!--
type: tab
title: Python
-->

```python
# Python DELETE request using requests
import requests

fileSetId = "0b57d4e3-ff51-4813-bb01-7134de4cd858"
url = f"https://api.example.com/api/files/v1/filesets/{fileSetId}"

response = requests.delete(url, headers={"Content-Type": "application/json"})

if response.status_code == 204:
    print("FileSet deleted successfully.")
else:
    print(f"Failed to delete FileSet. Status code: {response.status_code}")
```

<!--
type: tab-end
-->

<!--
type: tab
title: cURL
-->

```bash
# cURL DELETE request
# Replace with your base URL
curl -X DELETE "https://api.example.com/api/files/v1/filesets/0b57d4e3-ff51-4813-bb01-7134de4cd858" \
  -H "Content-Type: application/json"
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

| Parameter  | Type   | Required | Description                               |
|------------|--------|----------|-------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to query.          |

### Query Parameters

_None_

### Request Body

Used to query a file set for the top K results based on the provided query.

| Parameter         | Type             | Required | Description                                                               |
|-------------------|------------------|----------|---------------------------------------------------------------------------|
| `query`           | string           | ✔ Yes    | The query string to match against file contents within the file set.      |
| `topK`            | integer (int32)  | No       | The number of top results to return based on the query match. Defaults to 1. |
| `pathPrefixFilter`| string           | No       | An optional prefix filter for the file paths to narrow down the search results. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
const fetch = require('node-fetch');

const fileSetId = "b03b353e-c421-4e1c-a348-163a70c3fe59";
const url = `/api/files/v1/filesets/${fileSetId}/query`;

const requestBody = {
  query: "benefit",
  pathPrefixFilter: "sample/directory/path",
  topK: 2
};

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(requestBody)
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

fileSetId = "b03b353e-c421-4e1c-a348-163a70c3fe59"
url = f"/api/files/v1/filesets/{fileSetId}/query"

request_body = {
    "query": "benefit",
    "pathPrefixFilter": "sample/directory/path",
    "topK": 2
}

response = requests.post(url, json=request_body, headers={"Content-Type": "application/json"})
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST /api/files/v1/filesets/b03b353e-c421-4e1c-a348-163a70c3fe59/query \
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
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet for which to update the owner.      |

### Query Parameters

_None_

### Request Body

Represents a request to transfer ownership of a file set.

Other users may be granted ownership-level permissions, but only one user may be the sole owner of a file set.

| Parameter | Type             | Required | Description                               |
|-----------|------------------|----------|-------------------------------------------|
| `userId`  | integer (int64)  | ✓ Yes    | The ID of the user that will assume ownership. |

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

  const fileSetId = "5207fe9f-407f-46d9-a0d0-c1e0f80a46ca"; // Example fileSetId

  axios.post(`/api/files/v1/filesets/${fileSetId}/ownership`, {
    userId: 109
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    console.log(response.data);
  }).catch(error => {
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

fileSetId = "5207fe9f-407f-46d9-a0d0-c1e0f80a46ca"  # Example fileSetId
url = f"/api/files/v1/filesets/{fileSetId}/ownership"
headers = {'Content-Type': 'application/json'}
data = {
    "userId": 109
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
curl -X POST \
  /api/files/v1/filesets/5207fe9f-407f-46d9-a0d0-c1e0f80a46ca/ownership \
  -H "Content-Type: application/json" \
  -d '{"userId":109}'
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

- `fileSetId`: The unique identifier of the FileSet.
- `fileSetAccess`: List of entities with their permissions for the FileSet.
  - `entityId`: The unique identifier of the user or entity.
  - `entityType`: Type of the entity, e.g., USER.
  - `permission`: Assigned permission level, e.g., OWNER.

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

| Parameter   | Type   | Required | Description                                            |
|-------------|--------|----------|--------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet in which to create the File.     |

### Query Parameters

_None_

### Request Body

Represents a request to upload a file or create a directory.

| Parameter      | Type            | Required | Description                                                                                                                                                    |
|----------------|-----------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `file`         | string (binary) | No       | The file to be uploaded. Leave null if creating a directory.                                                                                                   |
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
fetch('https://api.example.com/api/files/v1/filesets/8dc71d42-14ff-434d-b5be-5a94f3c3ec8b/files', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    file: "(binary data of the file)",
    directoryPath: "sample/directory/path"
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

# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
url = 'https://api.example.com/api/files/v1/filesets/8dc71d42-14ff-434d-b5be-5a94f3c3ec8b/files'
headers = {'Content-Type': 'application/json'}
data = {
    "file": "(binary data of the file)",
    "directoryPath": "sample/directory/path"
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
curl -X POST 'https://api.example.com/api/files/v1/filesets/8dc71d42-14ff-434d-b5be-5a94f3c3ec8b/files' \
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

- `id`: Unique identifier for the created file or directory.
- `path`: The path of the created or overwritten file/directory.
- `name`: The name of the created file or directory.
- `size`: The size of the file (null for directories).
- `created`: Timestamp of when the file or directory was created.
- `createdBy`: User ID of the creator.
- `fileType`: Type of the created object, "FILE" or "DIRECTORY".

### Error Responses

| Status Code | Description |
|-------------|-------------|
| `400`       | Bad Request |
| `403`       | Forbidden |
| `409`       | Conflict: File already exists at the specified path and client does not have overwrite permissions. |
| `413`       | Payload Too Large |

---

## List Files and Directories for a FileSet

**Method:** `POST`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/search`

Retrieve a paginated list of Files within a specific FileSet based on search criteria.

### Path Parameters

| Parameter  | Type   | Required | Description                          |
|------------|--------|----------|--------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet to search within. |

### Query Parameters

| Parameter          | Type            | Required | Description                                                                 |
|--------------------|-----------------|----------|-----------------------------------------------------------------------------|
| `directoryPath`    | string          | No       | The path to the directory within the FileSet, if applicable.                |
| `immediateChildren` | boolean         | No       | Whether to list only immediate children of the specified directory. (Default: `False`) |
| `limit`            | integer (int32) | No       | The maximum number of Files to return. (Default: `100`)                     |
| `next`             | string          | No       | The pagination token for the next set of results.                           |

### Request Body

Request object for searching with specific filters and sorting options.

| Parameter    | Type  | Required | Description                                                |
|--------------|-------|----------|------------------------------------------------------------|
| `fieldSort`  | array | No       | A list of field sort criteria to apply to the search.      |
| `filters`    | array | No       | A list of filters to apply to the search.                  |
| `dateFilters` | array | No      | A list of date filters to apply to the search.             |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://example.com/api/files/v1/filesets/fc2df0e1-4654-4851-b79c-326e7e92abca/files/search', {
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
type: tab-end
-->

<!--
type: tab
title: Python
-->

```python
import requests

url = 'https://example.com/api/files/v1/filesets/fc2df0e1-4654-4851-b79c-326e7e92abca/files/search'
headers = {
    'Content-Type': 'application/json'
}
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
type: tab-end
-->

<!--
type: tab
title: cURL
-->

```bash
curl -X POST 'https://example.com/api/files/v1/filesets/fc2df0e1-4654-4851-b79c-326e7e92abca/files/search' \
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

<!--
type: tab-end
-->

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

| Parameter   | Type   | Required | Description                                      |
|-------------|--------|----------|--------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet in which to create the File. |

### Query Parameters

_None_

### Request Body

Represents a request to initiate a split file upload.

| Parameter | Type   | Required | Description                                                        |
|-----------|--------|----------|--------------------------------------------------------------------|
| `path`    | string | No       | The full path destination for the file once the upload is finalized. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('/api/files/v1/filesets/15b15a7f-38a2-457d-b0ea-ad7946047da6/files/multipart', {
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
import requests

url = "https://example.com/api/files/v1/filesets/15b15a7f-38a2-457d-b0ea-ad7946047da6/files/multipart"
headers = {"Content-Type": "application/json"}
data = {"path": "example/path/to/resource"}

response = requests.post(url, json=data, headers=headers)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "https://example.com/api/files/v1/filesets/15b15a7f-38a2-457d-b0ea-ad7946047da6/files/multipart" \
-H "Content-Type: application/json" \
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

| Status Code | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| `400`       | Bad Request                                                                 |
| `403`       | Forbidden                                                                   |
| `409`       | Conflict: File already exists at the specified path.                        |
| `413`       | Payload Too Large                                                           |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled.    |

---

## Submit a part of a file for upload.

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/part/{partNumber}`

Allows submitting a file in stages to create a new file within a FileSet.

### Path Parameters

| Parameter   | Type             | Required | Description                                                        |
|-------------|------------------|----------|--------------------------------------------------------------------|
| `fileSetId` | string           | ✔ Yes    | The ID of the FileSet in which to the file is being uploaded.      |
| `fileId`    | string           | ✔ Yes    | The ID of the file being uploaded in parts.                        |
| `partNumber`| integer (int64)  | ✔ Yes    | The part number of this file segment. Must be non-negative.        |

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
fetch('/api/files/v1/filesets/ea0da13b-229a-4410-9c2b-4662650aface/files/multipart/8eebd7fa-29a0-43bc-ada8-3806a031ebe3/part/1234567890', {
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

<!-- type: tab-end -->

<!--
type: tab
title: Python
-->

```python
import requests

url = "/api/files/v1/filesets/ea0da13b-229a-4410-9c2b-4662650aface/files/multipart/8eebd7fa-29a0-43bc-ada8-3806a031ebe3/part/1234567890"

headers = {
    "Content-Type": "application/json"
}

payload = {
    "part": "(binary data of the file)"
}

response = requests.post(url, headers=headers, json=payload)

print(response.json())
```

<!-- type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "/api/files/v1/filesets/ea0da13b-229a-4410-9c2b-4662650aface/files/multipart/8eebd7fa-29a0-43bc-ada8-3806a031ebe3/part/1234567890" \
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

| Status Code | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| `400`       | Split file upload part did not match previous data segments.                 |
| `403`       | Forbidden                                                                    |
| `404`       | An "initiate split file" request was not performed prior to this request for the given file ID or has already been finalized or aborted. |
| `409`       | Conflict                                                                     |
| `413`       | Payload Too Large                                                            |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled.     |

---

## Finalize a split file upload.

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/finalize`

Declares that all parts of a split file upload have been submitted and the file can be assembled.

### Path Parameters

| Parameter  | Type   | Required | Description                                                |
|------------|--------|----------|------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet in which the file has been uploaded. |
| `fileId`    | string | ✓ Yes    | The ID of the file whose parts have been uploaded.         |

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
const fileSetId = '26f2b1a1-f2e2-4ca7-9643-a21e494a9a07';
const fileId = 'a3791c2c-da6e-4bf2-a161-a229dd890b6a';

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

<!--
type: tab
title: Python
-->

```python
import requests

file_set_id = '26f2b1a1-f2e2-4ca7-9643-a21e494a9a07'
file_id = 'a3791c2c-da6e-4bf2-a161-a229dd890b6a'

url = f'https://api.yourservice.com/api/files/v1/filesets/{file_set_id}/files/multipart/{file_id}/finalize'
headers = {
    'Content-Type': 'application/json',
}

response = requests.post(url, headers=headers)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST 'https://api.yourservice.com/api/files/v1/filesets/26f2b1a1-f2e2-4ca7-9643-a21e494a9a07/files/multipart/a3791c2c-da6e-4bf2-a161-a229dd890b6a/finalize' \
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

- `id`: The unique identifier of the file.
- `path`: The directory path where the file is stored.
- `name`: The name of the file.
- `fileType`: The type of the file, in this case, a document.
- `contentType`: The MIME type of the file.
- `size`: The size of the file in bytes.
- `hash`: The SHA-256 hash of the file content.
- `hashAlgorithm`: The algorithm used for hashing.
- `downloadUrl`: The URL from which the file can be downloaded.
- `created`: The timestamp when the file was created.
- `createdBy`: The ID of the user who created the file.

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
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/abort`

Aborts an ongoing split file upload process, discarding all uploaded parts.

### Path Parameters

| Parameter | Type   | Required | Description                                                              |
|-----------|--------|----------|--------------------------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet in which the file was being uploaded.              |
| `fileId`    | string | ✔ Yes    | The ID of the file whose upload is to be aborted.                         |

### Query Parameters

_None_

### Request Body

_None_

### Request Example

<!-- type: tab -->
title: JavaScript

```javascript
// Assuming fetch is available in your environment
fetch('https://yourapihost.com/api/files/v1/filesets/a93c2fe0-e987-4ce7-8a72-a5a1c3bf2793/files/multipart/2628c74e-70db-4051-b9db-23f725eac725/abort', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }
  return response.json();
})
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

<!-- type: tab-end -->

<!-- type: tab -->
title: Python

```python
import requests

url = 'https://yourapihost.com/api/files/v1/filesets/a93c2fe0-e987-4ce7-8a72-a5a1c3bf2793/files/multipart/2628c74e-70db-4051-b9db-23f725eac725/abort'
headers = {
  'Content-Type': 'application/json'
}

response = requests.post(url, headers=headers)

try:
    response.raise_for_status()
    data = response.json()
    print(data)
except requests.exceptions.HTTPError as err:
    print(f"HTTP error occurred: {err}")
except Exception as err:
    print(f"Other error occurred: {err}")
```

<!-- type: tab-end -->

<!-- type: tab -->
title: cURL

```bash
curl -X POST 'https://yourapihost.com/api/files/v1/filesets/a93c2fe0-e987-4ce7-8a72-a5a1c3bf2793/files/multipart/2628c74e-70db-23f725eac725/abort' \
     -H 'Content-Type: application/json'

# Handle errors by checking the HTTP status code and the returned JSON message
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

- **`400`** - Bad Request.
- **`403`** - Forbidden.
- **`404`** - An "initiate split file" request was not performed prior to this request for the given file ID or has already been finalized or aborted.
- **`409`** - Conflict.
- **`413`** - Payload Too Large.

---

## Get FileSet Access Permissions

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/access`

Retrieve the access permissions for a specific FileSet.

### Path Parameters

| Parameter  | Type   | Required | Description                                                |
|------------|--------|----------|------------------------------------------------------------|
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
// JavaScript example using fetch to call the endpoint
fetch("https://api.example.com/api/files/v1/filesets/080f59d6-fc1c-45c9-9e99-cc14f1741efe/access", {
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
# Python example using requests to call the endpoint
import requests

url = "https://api.example.com/api/files/v1/filesets/080f59d6-fc1c-45c9-9e99-cc14f1741efe/access"

response = requests.get(url, headers={"Content-Type": "application/json"})

print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
# cURL example to call the endpoint
curl -X GET "https://api.example.com/api/files/v1/filesets/080f59d6-fc1c-45c9-9e99-cc14f1741efe/access" -H "Content-Type: application/json"
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

| Status Code | Description      |
|-------------|------------------|
| `400`       | Bad Request      |
| `403`       | Forbidden        |
| `409`       | Conflict         |
| `413`       | Payload Too Large |

---

## Update FileSet Access Permissions

**Method:** `POST`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/access`

Update the relevant access permissions for a specific FileSet.

### Path Parameters

| Parameter   | Type   | Required | Description                                                       |
|-------------|--------|----------|-------------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet for which to update access permissions.     |

### Query Parameters

_None_

### Request Body

Request object for updating access permissions to a file set.

Only the permissions that are explicitly set in the request will be updated.

| Parameter       | Type  | Required | Description                                  |
|-----------------|-------|----------|----------------------------------------------|
| `fileSetAccess` | array | ✓ Yes    | The access permissions for the file set.     |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://yourapi.com/api/files/v1/filesets/400b91da-424a-4f8c-a34f-e1db5392666a/access', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "fileSetAccess": [
      {
        "entityId": 42,
        "entityType": "GROUP",
        "permission": "EDIT"
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

url = 'https://yourapi.com/api/files/v1/filesets/400b91da-424a-4f8c-a34f-e1db5392666a/access'
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

response = requests.post(url, headers=headers, data=json.dumps(payload))
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST https://yourapi.com/api/files/v1/filesets/400b91da-424a-4f8c-a34f-e1db5392666a/access \
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

- `fileSetId`: The unique identifier of the FileSet.
- `fileSetAccess`: An array of access permissions.
  - `entityId`: ID of the entity (user or group).
  - `entityType`: Type of the entity, such as `GROUP` or `USER`.
  - `permission`: The level of access granted, e.g., `EDIT` or `OWNER`.

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
fetch('https://example.com/api/files/v1/filesets/search?limit=10&offset=0', {
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

<!--
type: tab-end
-->

<!--
type: tab
title: Python
-->

```python
import requests

url = 'https://example.com/api/files/v1/filesets/search?limit=10&offset=0'
payload = {
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
headers = {
    'Content-Type': 'application/json'
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
curl -X POST 'https://example.com/api/files/v1/filesets/search?limit=10&offset=0' \
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

<!--
type: tab-end
-->

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
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet for which to retrieve statistics.     |

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
fetch('https://example.com/api/files/v1/filesets/412a9596-8927-45c6-8b1c-2f86b87e640f/stats', {
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
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
import requests

response = requests.get('https://example.com/api/files/v1/filesets/412a9596-8927-45c6-8b1c-2f86b87e640f/stats')
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
curl -X GET 'https://example.com/api/files/v1/filesets/412a9596-8927-45c6-8b1c-2f86b87e640f/stats'
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
- `otherFileTypeCount`: Number of files not categorized as image, audio, video, text, or document.
- `notIndexedCount`: Number of files not indexed.
- `indexQueuedCount`: Number of files queued for indexing.
- `indexInProgressCount`: Number of files currently being indexed.
- `indexCompleteCount`: Number of files successfully indexed.
- `indexFailedCount`: Number of files where indexing failed.
- `indexSkippedCount`: Number of files skipped from indexing.

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
fetch('/api/files/v1/filesets/b6ad58b8-75a9-4b4c-98c0-0ed475fe3ce0/path?path=example/path/to/resource', {
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

response = requests.get(
    'http://localhost/api/files/v1/filesets/b6ad58b8-75a9-4b4c-98c0-0ed475fe3ce0/path',
    params={'path': 'example/path/to/resource'},
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
curl -X GET "http://localhost/api/files/v1/filesets/b6ad58b8-75a9-4b4c-98c0-0ed475fe3ce0/path?path=example/path/to/resource" \
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

| Status Code | Description          |
|-------------|----------------------|
| `400`       | Bad Request          |
| `403`       | Forbidden            |
| `409`       | Conflict             |
| `413`       | Payload Too Large    |

---

## Delete File or Directory by Path

**Method:** `DELETE`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/path`

Delete a specific File or Directory within a FileSet using its path.

### Path Parameters

| Parameter  | Type   | Required | Description                                  |
|------------|--------|----------|---------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File.   |

### Query Parameters

| Parameter | Type   | Required | Description                                                                 |
|-----------|--------|----------|-----------------------------------------------------------------------------|
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
fetch('https://api.example.com/api/files/v1/filesets/2cb5a820-0665-4976-bad9-46dd349d61ae/path?path=example/path/to/resource', {
  method: 'DELETE'
})
.then(response => {
  if (response.status === 204) {
    console.log('File or directory deleted successfully.');
  } else {
    console.error('Failed to delete file or directory.');
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

response = requests.delete(
    'https://api.example.com/api/files/v1/filesets/2cb5a820-0665-4976-bad9-46dd349d61ae/path',
    params={'path': 'example/path/to/resource'}
)

if response.status_code == 204:
    print('File or directory deleted successfully.')
else:
    print('Failed to delete file or directory.')
```

<!--
type: tab
title: cURL
-->

```bash
# Generate a realistic cURL command
# Use the actual endpoint path
# Include -H headers and -d data as appropriate
curl -X DELETE "https://api.example.com/api/files/v1/filesets/2cb5a820-0665-4976-bad9-46dd349d61ae/path?path=example/path/to/resource"
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

| Parameter   | Type   | Required | Description                                  |
|-------------|--------|----------|----------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File.   |

### Query Parameters

| Parameter | Type   | Required | Description                                      |
|-----------|--------|----------|--------------------------------------------------|
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
fetch('https://api.example.com/api/files/v1/filesets/d59d4bd0-c588-403e-908a-b818e6eb2475/path/download?path=example/path/to/resource', {
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
# Generate a realistic requests example using the request body example
# Use the actual endpoint path with any path parameters filled in
# Include proper headers if needed
import requests

response = requests.get('https://api.example.com/api/files/v1/filesets/d59d4bd0-c588-403e-908a-b818e6eb2475/path/download', params={'path': 'example/path/to/resource'})

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
curl -X GET "https://api.example.com/api/files/v1/filesets/d59d4bd0-c588-403e-908a-b818e6eb2475/path/download?path=example/path/to/resource"
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

| Parameter   | Type   | Required | Description                                                      |
|-------------|--------|----------|------------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File or Directory.          |
| `fileId`    | string | ✓ Yes    | The ID of the File or Directory to retrieve.                     |

### Query Parameters

_None_

### Request Body

_None_

### Request Example

<!-- type: tab title: JavaScript -->

```javascript
fetch('/api/files/v1/filesets/f5d9971f-8dc6-4865-a049-103cdb94bcc2/files/5e90d9c1-756c-4858-9afe-49e7453e32e4', {
  method: 'GET'
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

<!-- type: tab-end -->

<!-- type: tab title: Python -->

```python
import requests

response = requests.get(
    "http://example.com/api/files/v1/filesets/f5d9971f-8dc6-4865-a049-103cdb94bcc2/files/5e90d9c1-756c-4858-9afe-49e7453e32e4"
)

print(response.json())
```

<!-- type: tab-end -->

<!-- type: tab title: cURL -->

```bash
curl -X GET "http://example.com/api/files/v1/filesets/f5d9971f-8dc6-4865-a049-103cdb94bcc2/files/5e90d9c1-756c-4858-9afe-49e7453e32e4"
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
- `path`: Path of the file or directory in the storage system.
- `name`: Name of the file or directory.
- `fileType`: Type of the file.
- `contentType`: MIME type of the file.
- `size`: Size of the file in bytes.
- `hash`: Hash of the file content for integrity verification.
- `hashAlgorithm`: Algorithm used to compute the hash.
- `downloadUrl`: URL to download the file.
- `created`: Timestamp of when the file or directory was created.
- `createdBy`: ID of the user who created the file or directory.
- `connectorKey`: Additional key for connector systems (optional).
- `indexStatus`: Status of indexing the file (optional).
- `indexReason`: Reason for the current index status (optional).

### Error Responses

| Status Code | Description       | Example                                                           |
|-------------|-------------------|-------------------------------------------------------------------|
| `400`       | Bad Request       | `{ "error": "Invalid fileSetId format" }`                        |
| `403`       | Forbidden         | `{ "error": "Access denied" }`                                   |
| `409`       | Conflict          | `{ "error": "File already exists" }`                             |
| `413`       | Payload Too Large | `{ "error": "The requested file size exceeds the maximum limit" }` |

---

## Delete a File or Directory by ID

**Method:** `DELETE`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}`

Delete a specific File or Directory within a FileSet using its ID.

### Path Parameters

| Parameter   | Type   | Required | Description                                                                 |
|-------------|--------|----------|-----------------------------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet containing the File.                                  |
| `fileId`    | string | ✔ Yes    | The ID of the File or Directory to delete. If a Directory is specified, it and its children will be deleted. |

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
// JavaScript example using Fetch API
const fileSetId = "fcb361e3-c13e-4e2e-bc01-686e23d5fdce";
const fileId = "46534c33-472f-45b4-a96b-7eb18a843d57";

fetch(`/api/files/v1/filesets/${fileSetId}/files/${fileId}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    if (response.ok) {
      console.log('File or Directory deleted successfully.');
    } else {
      console.error('Error deleting File or Directory:', response.status);
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

fileSetId = "fcb361e3-c13e-4e2e-bc01-686e23d5fdce"
fileId = "46534c33-472f-45b4-a96b-7eb18a843d57"
url = f"/api/files/v1/filesets/{fileSetId}/files/{fileId}"

response = requests.delete(url, headers={'Content-Type': 'application/json'})

if response.status_code == 204:
    print('File or Directory deleted successfully.')
else:
    print(f'Error deleting File or Directory: {response.status_code}')
```

<!--
type: tab
title: cURL
-->

```bash
fileSetId="fcb361e3-c13e-4e2e-bc01-686e23d5fdce"
fileId="46534c33-472f-45b4-a96b-7eb18a843d57"
curl -X DELETE "/api/files/v1/filesets/$fileSetId/files/$fileId" -H "Content-Type: application/json"
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

## Download a File by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}/download`

Download the contents of a specific File within a FileSet using its ID. This will redirect to the file's download URL.

### Path Parameters

| Parameter  | Type   | Required | Description                              |
|------------|--------|----------|------------------------------------------|
| `fileSetId`| string | ✓ Yes    | The ID of the FileSet containing the File.|
| `fileId`   | string | ✓ Yes    | The ID of the File to download.           |

### Query Parameters

_None_

### Request Body

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://api.example.com/api/files/v1/filesets/8730495a-406b-42d9-a26d-70e1a3c5a917/files/4f776a4c-c4de-4b7c-915b-8be1cf3c33bf/download', {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
  }
})
.then(response => {
  if (response.status === 302) {
    window.location.href = response.url; // Redirect to the file's download URL
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

response = requests.get(
  'https://api.example.com/api/files/v1/filesets/8730495a-406b-42d9-a26d-70e1a3c5a917/files/4f776a4c-c4de-4b7c-915b-8be1cf3c33bf/download',
  headers={'Accept': 'application/json'}
)

if response.status_code == 302:
    print('Redirect to:', response.url)
else:
    print('Error:', response.status_code)
```

<!--
type: tab
title: cURL
-->

```bash
curl -X GET 'https://api.example.com/api/files/v1/filesets/8730495a-406b-42d9-a26d-70e1a3c5a917/files/4f776a4c-c4de-4b7c-915b-8be1cf3c33bf/download' \
  -H 'Accept: application/json' -o downloaded_file
```

<!-- type: tab-end -->

### Response

**Status:** `200`

```json
{}
```

### Error Responses

| Status Code | Description                        |
|-------------|------------------------------------|
| `302`       | File download initiated successfully |
| `400`       | Bad Request                        |
| `403`       | Forbidden                          |
| `409`       | Conflict                           |
| `413`       | Payload Too Large                  |

---

## Get File Content by ID

**Method:** `GET`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}/content`

Retrieve the content of a specific File within a FileSet using its ID. This endpoint requires a valid download token for authorization, which is generally obtained via a download endpoint and redirected here automatically.

### Path Parameters

| Parameter  | Type   | Required | Description                                      |
|------------|--------|----------|--------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File.       |
| `fileId`   | string | ✓ Yes    | The ID of the File to retrieve.                  |

### Query Parameters

| Parameter  | Type   | Required | Description                               |
|------------|--------|----------|-------------------------------------------|
| `token`    | string | ✓ Yes    | The download token for authorization.     |

### Request Body

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://api.example.com/api/files/v1/filesets/908bdbde-27c6-45af-bf87-9adada9ef807/files/08cb351d-9121-4e91-b189-db0d1b14e3f1/content?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...', {
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

url = "https://api.example.com/api/files/v1/filesets/908bdbde-27c6-45af-bf87-9adada9ef807/files/08cb351d-9121-4e91-b189-db0d1b14e3f1/content"
params = {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
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
curl -X GET "https://api.example.com/api/files/v1/filesets/908bdbde-27c6-45af-bf87-9adada9ef807/files/08cb351d-9121-4e91-b189-db0d1b14e3f1/content?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
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

