# Documents API

> **Version:** 2.2.3160_master
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

| Parameter    | Type    | Required | Description                                                                                           |
|--------------|---------|----------|-------------------------------------------------------------------------------------------------------|
| `name`       | string  | ✔ Yes    | The name for the file set.                                                                            |
| `description`| string  | No       | A description for the file set.                                                                       |
| `connector`  | string  | No       | The connector that powers the file set. Allowed values: `DOMO`, `CONFLUENCE`, `GITHUB`, `GOOGLE_DRIVE`, `S3` |
| `aiEnabled`  | boolean | No       | Indicates whether AI features are enabled for the file set.                                           |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://<instance>.domo.com/api/files/v1/filesets', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "name": "Policies (2025)",
    "description": "Location for all new and updated policies for FY2025",
    "aiEnabled": false,
    "connector": "DOMO"
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

url = "https://<instance>.domo.com/api/files/v1/filesets"
headers = {
    "Content-Type": "application/json"
}
data = {'aiEnabled': False,
 'connector': 'DOMO',
 'description': 'Location for all new and updated policies for FY2025',
 'name': 'Policies (2025)'}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "https://<instance>.domo.com/api/files/v1/filesets" \
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
{'id': 'e49f188e-be98-451d-ba0f-ada1157bb656', 'name': 'Policies (2025)', 'description': 'Location for all new and updated policies for FY2025', 'aiEnabled': False, 'indexStatus': None, 'connector': 'DOMO', 'created': datetime.datetime(2025, 7, 28, 20, 17, 43, 958479, tzinfo=datetime.timezone.utc), 'createdBy': 27, 'updated': datetime.datetime(2025, 7, 28, 20, 17, 43, 958479, tzinfo=datetime.timezone.utc), 'updatedBy': 27, 'owner': '27', 'accountId': 0, 'connectorContext': None, 'permission': 'OWNER', 'size': 0, 'fileCount': 0}
```

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

- **Parameter:** `fileSetId`  
  **Type:** string  
  **Required:** ✓ Yes  
  **Description:** The ID of the FileSet to retrieve.

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
fetch('https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}', {
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

url = "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}"
headers = {
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X GET "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}" \
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
  "created": "2025-07-28T20:17:43Z",
  "createdBy": "27",
  "updated": "2025-07-28T20:17:43Z",
  "updatedBy": "27",
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

## Update an existing FileSet

**Method:** `POST`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}`

Update the details of an existing FileSet. Only fields that are not null in the request will be updated.

### Path Parameters

| Parameter    | Type   | Required | Description                            |
|--------------|--------|----------|----------------------------------------|
| `fileSetId`  | string | ✔ Yes    | The ID of the FileSet to update.       |

### Query Parameters

_None_

### Request Body

Represents a request to update a file set. At least one of the fields must be provided to update the file set.

| Parameter    | Type    | Required | Description                                                                            |
|--------------|---------|----------|----------------------------------------------------------------------------------------|
| `name`       | string  | No       | The name with which to update the file set's name. If not provided, the name will remain unchanged. |
| `description`| string  | No       | Optional description with which to update the file set's description. If not provided, the description will remain unchanged. |
| `aiEnabled`  | boolean | No       | Optional flag to enable or disable AI features for the file set.                        |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "name": "Policies (FY25)",
    "description": "Repository for new policies created ONLY in FY2025"
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

url = "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}"
headers = {
    "Content-Type": "application/json"
}
data = {'description': 'Repository for new policies created ONLY in FY2025',
 'name': 'Policies (FY25)'}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}" \
  -H "Content-Type: application/json" \
  -d '{"name": "Policies (FY25)", "description": "Repository for new policies created ONLY in FY2025"}'
```

<!-- type: tab-end -->

### Response

**Status:** `200`

```json
{
    "id": "e49f188e-be98-451d-ba0f-ada1157bb656",
    "name": "Policies (FY25)",
    "description": "Repository for new policies created ONLY in FY2025",
    "aiEnabled": False,
    "indexStatus": None,
    "connector": "DOMO",
    "created": "2025-07-28T20:17:43.958479Z",
    "createdBy": 27,
    "updated": "2025-07-28T20:17:43.958479Z",
    "updatedBy": 27,
    "owner": "27",
    "accountId": 0,
    "connectorContext": None,
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

## Delete a FileSet by ID

**Method:** `DELETE`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}`

Delete a specific FileSet using its ID.

### Path Parameters

| Parameter   | Type   | Required | Description                         |
|-------------|--------|----------|-------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet to delete.    |

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
fetch('https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}', {
  method: 'DELETE',
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

url = "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}"
headers = {
    "Content-Type": "application/json"
}

response = requests.delete(url, headers=headers)
print(response.json())
```

<!-- type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
curl -X DELETE "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}" \
  -H "Content-Type: application/json"
```

<!-- type: tab-end -->

### Response

**Status:** `204`

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

| Parameter          | Type            | Required | Description                                                                             |
|--------------------|-----------------|----------|-----------------------------------------------------------------------------------------|
| `query`            | string          | ✔ Yes    | The query string to match against file contents within the file set.                    |
| `topK`             | integer (int32) | No       | The number of top results to return based on the query match. Defaults to 1.             |
| `pathPrefixFilter` | string          | No       | An optional prefix filter for the file paths to narrow down the search results.          |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/query', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "query": "benefit",
    "pathPrefixFilter": "sample/directory/path",
    "topK": 2
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

url = "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/query"
headers = {
    "Content-Type": "application/json"
}
data = {'pathPrefixFilter': 'sample/directory/path', 'query': 'benefit', 'topK': 2}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/query" \
  -H "Content-Type: application/json" \
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

### Error Responses

| Status Code | Description      |
|-------------|------------------|
| `400`       | Bad Request      |
| `403`       | Forbidden        |
| `409`       | Conflict         |
| `413`       | Payload Too Large |

---

## Update FileSet Owner

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/ownership`

Update the owner of a specific FileSet.

### Path Parameters

| Parameter   | Type   | Required | Description                                            |
|-------------|--------|----------|--------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet for which to update the owner. |

### Query Parameters

_None_

### Request Body

Represents a request to transfer ownership of a file set.

Other users may be granted ownership level permissions, but only one user may be the sole owner of a file set.

| Parameter | Type          | Required | Description                                 |
|-----------|---------------|----------|---------------------------------------------|
| `userId`  | integer (int64) | ✔ Yes    | The ID of the user that will assume ownership. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/ownership', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "userId": 109
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

url = "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/ownership"
headers = {
    "Content-Type": "application/json"
}
data = {'userId': 109}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/ownership" \
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

| Status Code | Description     |
|-------------|-----------------|
| `400`       | Bad Request     |
| `403`       | Forbidden       |
| `409`       | Conflict        |
| `413`       | Payload Too Large |

---

## Create a new File or Directory

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files`

Create a new File or Directory within a specified FileSet. If a file already exists at the specified path, it will attempt to overwrite it if the client has permission. If a Directory already exists at the specified path, it will return that Directory.

### Path Parameters

| Parameter   | Type   | Required | Description                                            |
|-------------|--------|----------|--------------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet in which to create the File.     |

### Query Parameters

_None_

### Request Body

Represents a request to upload a file or create a directory.

| Parameter       | Type            | Required | Description                                                  |
|-----------------|-----------------|----------|--------------------------------------------------------------|
| `file`          | string (binary) | No       | The file to be uploaded. Leave null if creating a directory. |
| `directoryPath` | string          | No       | The directory path of the uploaded file, or the path of the created directory if no file is provided. Defaults to an empty string, i.e., the root directory, if not specified. Note: An empty string is not valid when intentionally creating a directory. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "file": (binary data of the file),
    "directoryPath": "sample/directory/path"
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

url = "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files"
headers = {
    "Content-Type": "application/json"
}
data = ('{\n'
 '    "file": (binary data of the file),\n'
 '    "directoryPath": "sample/directory/path"\n'
 '}')

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files" \
  -H "Content-Type: application/json" \
  -d '{
    "file": (binary data of the file),
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

The response includes the following fields:

- `id`: The unique identifier of the created file or directory.
- `path`: The path to the created file or directory.
- `name`: The name of the created file or directory.
- `size`: The size of the file; for directories, this may be null.
- `created`: The timestamp when the file or directory was created.
- `createdBy`: The ID of the user who created the file or directory.
- `fileType`: Indicates whether the created item is a `FILE` or `DIRECTORY`.

### Error Responses

| Status Code | Description                                                                            |
|-------------|----------------------------------------------------------------------------------------|
| `400`       | Bad Request                                                                            |
| `403`       | Forbidden                                                                              |
| `409`       | Conflict: File already exists at the specified path and client does not have overwrite permissions. |
| `413`       | Payload Too Large                                                                      |

---

## List Files and Directories for a FileSet

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/search`

Retrieve a paginated list of Files within a specific FileSet based on search criteria.

### Path Parameters

| Parameter   | Type   | Required | Description                               |
|-------------|--------|----------|-------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet to search within. |

### Query Parameters

| Parameter          | Type             | Required | Description                                                          |
|--------------------|------------------|----------|----------------------------------------------------------------------|
| `directoryPath`    | string           | No       | The path to the directory within the FileSet, if applicable.         |
| `immediateChildren`| boolean          | No       | Whether to list only immediate children of the specified directory. (Default: `False`) |
| `limit`            | integer (int32)  | No       | The maximum number of Files to return. (Default: `100`)              |
| `next`             | string           | No       | The pagination token for the next set of results.                    |

### Request Body

Request object for searching with specific filters and sorting options.

| Parameter    | Type  | Required | Description                                         |
|--------------|-------|----------|-----------------------------------------------------|
| `fieldSort`  | array | No       | A list of field sort criteria to apply to the search. |
| `filters`    | array | No       | A list of filters to apply to the search.            |
| `dateFilters`| array | No       | A list of date filters to apply to the search.       |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/search', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({'fieldSort': [{'field': 'created', 'order': 'ASC'}], 'filters': [{'field': 'name', 'value': ['paid'], 'not': False, 'operator': 'LIKE'}], 'dateFilters': [{'field': 'created', 'start': datetime.datetime(2025, 5, 12, 23, 30, tzinfo=datetime.timezone.utc), 'not': False, 'end': None}]})
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

url = "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/search"
headers = {
    "Content-Type": "application/json"
}
data = {'fieldSort': [{'field': 'created', 'order': 'ASC'}], 'filters': [{'field': 'name', 'value': ['paid'], 'not': False, 'operator': 'LIKE'}], 'dateFilters': [{'field': 'created', 'start': datetime.datetime(2025, 5, 12, 23, 30, tzinfo=datetime.timezone.utc), 'not': False, 'end': None}]}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/search" \
  -H "Content-Type: application/json" \
  -d "{'fieldSort': [{'field': 'created', 'order': 'ASC'}], 'filters': [{'field': 'name', 'value': ['paid'], 'not': False, 'operator': 'LIKE'}], 'dateFilters': [{'field': 'created', 'start': datetime.datetime(2025, 5, 12, 23, 30, tzinfo=datetime.timezone.utc), 'not': False, 'end': None}]}"
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

| Status Code | Description      |
|-------------|------------------|
| `400`       | Bad Request      |
| `403`       | Forbidden        |
| `409`       | Conflict         |
| `413`       | Payload Too Large|

---

## Reindex Files within a FileSet

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/reindex`

Initiate another indexing attempt for specific files within a FileSet.

### Path Parameters

| Parameter   | Type   | Required | Description                                        |
|-------------|--------|----------|----------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet to reindex files within.     |

### Query Parameters

_None_

### Request Body

Request object for another indexing attempt for specific files within a file set.

| Parameter | Type  | Required | Description                     |
|-----------|-------|----------|---------------------------------|
| `fileIds` | array | ✓ Yes    | The IDs of the files to be reindexed. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/reindex', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "fileIds": [
      "7150e608-c3a9-4b40-ac2d-eb182cc98c6f",
      "22e1514a-354b-470f-bc32-c354812738f2"
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

url = "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/reindex"
headers = {
    "Content-Type": "application/json"
}
data = {'fileIds': ['7150e608-c3a9-4b40-ac2d-eb182cc98c6f',
             '22e1514a-354b-470f-bc32-c354812738f2']}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/reindex" \
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

| Parameter    | Type   | Required | Description                                          |
|--------------|--------|----------|------------------------------------------------------|
| `fileSetId`  | string | ✓ Yes    | The ID of the FileSet in which to create the File.  |

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
fetch('https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/multipart', {
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

url = "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/multipart"
headers = {
    "Content-Type": "application/json"
}
data = {'path': 'example/path/to/resource'}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/multipart" \
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
    "created": "2025-08-25T16:05:56.676114+00:00",
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

| Parameter    | Type           | Required | Description                                                               |
|--------------|----------------|----------|---------------------------------------------------------------------------|
| `fileSetId`  | string         | ✓ Yes    | The ID of the FileSet in which the file is being uploaded.               |
| `fileId`     | string         | ✓ Yes    | The ID of the file being uploaded in parts.                              |
| `partNumber` | integer (int64)| ✓ Yes    | The part number of this file segment. Must be non-negative.              |

### Query Parameters

_None_

### Request Body

Represents a request to upload a part of a file in a split file upload operation.

| Parameter | Type            | Required | Description                                                                                                                                               |
|-----------|-----------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `part`    | string (binary) | No       | The binary data of the file segment being uploaded. The data should be provided as binary content within the request.                                      |

### Request Example

<details>
<summary>JavaScript</summary>

```javascript
fetch('https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/part/{partNumber}', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/octet-stream'
  },
  body: binaryData // Assuming binaryData is a Blob or ArrayBuffer
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```
</details>

<details>
<summary>Python</summary>

```python
import requests

url = "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/part/{partNumber}"
headers = {
    "Content-Type": "application/octet-stream"
}
# Assuming binary_data contains the binary content of the file segment
response = requests.post(url, headers=headers, data=binary_data)
print(response.json())
```
</details>

<details>
<summary>cURL</summary>

```bash
curl -X POST "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/part/{partNumber}" \
  -H "Content-Type: application/octet-stream" \
  --data-binary @path/to/file-part
```
</details>
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

| Status Code | Description                                                                                                |
|-------------|------------------------------------------------------------------------------------------------------------|
| `400`       | Split file upload part did not match previous data segments.                                               |
| `403`       | Forbidden                                                                                                  |
| `404`       | An "initiate split file" request was not performed prior to this request for the given file ID or has already been finalized or aborted. |
| `409`       | Conflict                                                                                                   |
| `413`       | Payload Too Large                                                                                          |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled.                                   |

---

## Finalize a split file upload.

**Method:** `POST`
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/finalize`

Declares that all parts of a split file upload have been submitted and the file can be assembled.

### Path Parameters

| Parameter  | Type   | Required | Description                                                        |
|------------|--------|----------|--------------------------------------------------------------------|
| `fileSetId`| string | ✔ Yes    | The ID of the FileSet in which the file has been uploaded.         |
| `fileId`   | string | ✔ Yes    | The ID of the file whose parts have been uploaded.                 |

### Query Parameters

_None_

### Request Body

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/finalize', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(N/A)
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

url = "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/finalize"
headers = {
    "Content-Type": "application/json"
}
data = {}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/finalize" \
  -H "Content-Type: application/json" \
  -d 'N/A'
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
}
```

### Error Responses

| Status Code | Description                                                                                                                                                             |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `400`       | Bad Request                                                                                                                                                             |
| `403`       | Forbidden                                                                                                                                                               |
| `404`       | An "initiate split file" request was not performed prior to this request for the given file ID and/or has not been uploaded any parts, or has already been finalized/aborted. |
| `409`       | Conflict: File already exists at the declared path.                                                                                                                     |
| `413`       | Payload Too Large                                                                                                                                                       |
| `422`       | Unprocessable Entity: Request for the split file could not be fulfilled.                                                                                                |

---

## Abort a split file upload.

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/abort`

Aborts an ongoing split file upload process, discarding all uploaded parts.

### Path Parameters

| Parameter  | Type   | Required | Description                                                            |
|------------|--------|----------|------------------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet in which the file was being uploaded.           |
| `fileId`    | string | ✓ Yes    | The ID of the file whose upload is to be aborted.                     |

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
fetch('https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/abort', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(N/A)
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

url = "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/abort"
headers = {
    "Content-Type": "application/json"
}
data = {}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

<!-- type: tab-end -->

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/multipart/{fileId}/abort" \
  -H "Content-Type: application/json" \
  -d 'N/A'
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
    "created": "2025-08-25T16:05:56.676114+00:00",
    "createdBy": 27,
    "connectorKey": null,
    "indexStatus": null,
    "indexReason": null
  },
  "status": "FAILED"
}
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

| Parameter   | Type   | Required | Description                                                   |
|-------------|--------|----------|---------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet for which to retrieve access information. |

### Query Parameters

- None

### Request Body

- None

### Request Example

<details>
<summary>JavaScript</summary>

```javascript
fetch('https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/access', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```
</details>

<details>
<summary>Python</summary>

```python
import requests

url = "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/access"
headers = {
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.json())
```
</details>

<details>
<summary>cURL</summary>

```bash
curl -X GET "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/access" \
  -H "Content-Type: application/json"
```
</details>

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

| Status Code | Description     |
|-------------|-----------------|
| `400`       | Bad Request.    |
| `403`       | Forbidden.      |
| `409`       | Conflict.       |
| `413`       | Payload Too Large. |

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

| Parameter        | Type  | Required | Description                             |
|------------------|-------|----------|-----------------------------------------|
| `fileSetAccess`  | array | ✓ Yes    | The access permissions for the file set. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/access', {
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
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
})
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

<!--
type: tab
title: Python
-->

```python
import requests

url = "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/access"
headers = {
    "Content-Type": "application/json"
}
data = {'fileSetAccess': [{'entityId': 42,
                    'entityType': 'GROUP',
                    'permission': 'EDIT'}]}

response = requests.post(url, headers=headers, json=data)
if response.status_code != 200:
    raise Exception(f"Request failed with status {response.status_code}")
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X POST "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/access" \
  -H "Content-Type: application/json" \
  -d '{"fileSetAccess": [{"entityId": 42, "entityType": "GROUP", "permission": "EDIT"}]}' \
  -w "\nStatus: %{http_code}\n" || echo "Request failed"
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

| Status Code | Description                                                |
|-------------|------------------------------------------------------------|
| `400`       | Bad Request: The server could not understand the request.  |
| `403`       | Forbidden: You do not have permission to access this resource. |
| `409`       | Conflict: There was a conflict with the current state of the resource. |
| `413`       | Payload Too Large: The request is larger than the server is willing or able to process. |

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
| `fieldSort` | array | No | A list of field sort criteria to apply to the search. Each entry is an object with `field` and `order` attributes where `order` is either 'ASC' or 'DESC'. |
| `filters` | array | No | A list of filters to apply to the search. Each entry is an object with `field`, `value`, `not`, and `operator` attributes. |
| `dateFilters` | array | No | A list of date filters to apply to the search. Each contains `field`, `start`, `end`, and `not` attributes. The date should be in 'YYYY-MM-DDTHH:MM:SSZ' format. |

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://<instance>.domo.com/api/files/v1/filesets/search', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    'fieldSort': [{'field': 'name', 'order': 'ASC'}],
    'filters': [{'field': 'owner', 'value': [27], 'not': false, 'operator': 'EQUALS'}],
    'dateFilters': [{'field': 'created', 'start': '2025-05-12T23:30:00Z', 'not': false, 'end': null}]
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

url = "https://<instance>.domo.com/api/files/v1/filesets/search"
headers = {
    "Content-Type": "application/json"
}
data = {
    'fieldSort': [{'field': 'name', 'order': 'ASC'}],
    'filters': [{'field': 'owner', 'value': [27], 'not': False, 'operator': 'EQUALS'}],
    'dateFilters': [{'field': 'created', 'start': '2025-05-12T23:30:00Z', 'not': False, 'end': None}]
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
curl -X POST "https://<instance>.domo.com/api/files/v1/filesets/search" \
  -H "Content-Type: application/json" \
  -d '{"fieldSort": [{"field": "name", "order": "ASC"}], "filters": [{"field": "owner", "value": [27], "not": false, "operator": "EQUALS"}], "dateFilters": [{"field": "created", "start": "2025-05-12T23:30:00Z", "not": false, "end": null}]}'
```

<!-- type: tab-end -->

### Response

**Status:** `200`

```json
{
  "fileSets": [{
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
  }],
  "pageContext": {"count": 1, "totalCount": 1, "offset": 0}
}
```

### Error Responses

| Status Code | Description |
|-------------|-------------|
| `400` | Bad Request. |
| `403` | Forbidden. |
| `409` | Conflict. |
| `413` | Payload Too Large. |

---

## Get FileSet Statistics

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/stats`

Retrieve statistics for a specific FileSet.

### Path Parameters

| Parameter   | Type   | Required | Description                                             |
|-------------|--------|----------|---------------------------------------------------------|
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
fetch('https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/stats', {
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

url = "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/stats"
headers = {
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X GET "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/stats" \
  -H "Content-Type: application/json"
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

| Parameter   | Type   | Required | Description                |
|-------------|--------|----------|----------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet.     |

### Query Parameters

| Parameter | Type   | Required | Description                                              |
|-----------|--------|----------|----------------------------------------------------------|
| `path`    | string | ✓ Yes    | The path to the File or Directory within the FileSet.    |

### Request Body

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/path?path=sample/directory/path/PaidTimeOffPolicy.pdf', {
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

url = "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/path"
params = {
    "path": "sample/directory/path/PaidTimeOffPolicy.pdf"
}
headers = {
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers, params=params)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X GET "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/path?path=sample/directory/path/PaidTimeOffPolicy.pdf" \
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

| Status Code | Description      | Example Response |
|-------------|------------------|------------------|
| `400`       | Bad Request      | ```{ "error": "Invalid path format." }``` |
| `403`       | Forbidden        | ```{ "error": "Access denied to requested file set." }``` |
| `409`       | Conflict         | ```{ "error": "File already exists at the specified path." }``` |
| `413`       | Payload Too Large| ```{ "error": "Requested file is too large to process." }``` |

---

## Delete File or Directory by Path

**Method:** `DELETE`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/path`

Delete a specific File or Directory within a FileSet using its path.

### Path Parameters

| Parameter   | Type   | Required | Description                               |
|-------------|--------|----------|-------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File. |

### Query Parameters

| Parameter | Type   | Required | Description                                                                                                                                 |
|-----------|--------|----------|---------------------------------------------------------------------------------------------------------------------------------------------|
| `path`    | string | ✓ Yes    | The path to the File or Directory to delete. If a Directory is specified, it and its children will be deleted. |

### Request Body

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/path?path=example/path/to/resource', {
  method: 'DELETE',
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

url = "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/path"
headers = {
    "Content-Type": "application/json"
}
params = {
    "path": "example/path/to/resource"
}

response = requests.delete(url, headers=headers, params=params)
print(response.status_code)
```

<!--
type: tab
title: cURL
-->

```bash
curl -X DELETE "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/path?path=example/path/to/resource" \
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

Download the contents of a specific File within a FileSet using its path. This will redirect to the file's download URL.

### Path Parameters

| Parameter   | Type   | Required | Description                                  |
|-------------|--------|----------|----------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet containing the File.   |

### Query Parameters

| Parameter | Type   | Required | Description                                         |
|-----------|--------|----------|-----------------------------------------------------|
| `path`    | string | ✔ Yes    | The path of the File to download within the FileSet.|

### Request Body

_None_

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/path/download?path=example/path/to/resource', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Network response was not ok.');
  }
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

url = "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/path/download"
headers = {
    "Content-Type": "application/json"
}
params = {
    "path": "example/path/to/resource"
}

response = requests.get(url, headers=headers, params=params)
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
curl -X GET "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/path/download?path=example/path/to/resource" \
  -H "Content-Type: application/json"
```

<!-- type: tab-end -->

### Response

**Status:** `200`

**Response Body Example:**

```json
{
  "fileId": "12345",
  "fileName": "example-file.txt",
  "fileSize": 1024,
  "downloadUrl": "https://<instance>.domo.com/downloads/example-file.txt"
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

| Parameter    | Type   | Required | Description                                                       |
|--------------|--------|----------|-------------------------------------------------------------------|
| `fileSetId`  | string | ✔ Yes    | The ID of the FileSet containing the File or Directory.           |
| `fileId`     | string | ✔ Yes    | The ID of the File or Directory to retrieve.                      |

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
fetch('https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/{fileId}', {
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

url = "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/{fileId}"
headers = {
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X GET "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/{fileId}" \
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
  "created": "2025-07-28T21:47:39.814456+00:00",
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

| Parameter  | Type   | Required | Description                                                                                                    |
|------------|--------|----------|----------------------------------------------------------------------------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File.                                                                     |
| `fileId`    | string | ✓ Yes    | The ID of the File or Directory to delete. If a Directory is specified, it and its children will be deleted.   |

### Query Parameters

_None_

### Request Body

_None_

### Request Example

<!-- type: tab title: JavaScript -->

```javascript
fetch('https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/{fileId}', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok: ' + response.statusText);
  }
  // For 204, typically no content is returned.
})
.catch(error => console.error('Error:', error));
```

<!-- type: tab-end -->

<!-- type: tab title: Python -->

```python
import requests

url = "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/{fileId}"
headers = {
    "Content-Type": "application/json"
}

response = requests.delete(url, headers=headers)

# Check for HTTP request errors
if response.status_code != 204:
    print('Failed to delete file:', response.status_code, response.reason)
else:
    print('File deleted successfully. No content as expected for 204 status.')
```

<!-- type: tab-end -->

<!-- type: tab title: cURL -->

```bash
curl -X DELETE "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/{fileId}" \
  -H "Content-Type: application/json"
```

<!-- type: tab-end -->

### Response

**Status:** `204`

No content is returned on a successful deletion.

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

| Parameter  | Type   | Required | Description                                  |
|------------|--------|----------|----------------------------------------------|
| `fileSetId` | string | ✓ Yes    | The ID of the FileSet containing the File.   |
| `fileId`    | string | ✓ Yes    | The ID of the File to download.              |

### Query Parameters

_None_

### Request Body

_None needed for GET requests._

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
// Redirects the user to download the file by navigating to the download URL
window.location.href = 'https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/{fileId}/download';
```

<!--
type: tab
title: Python
-->

```python
import requests

url = "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/{fileId}/download"

response = requests.get(url)

# Assuming that the file is being directly downloaded when accessed via URL
print(response.status_code)  # Expects 200 or redirection status codes
```

<!--
type: tab
title: cURL
-->

```bash
curl -X GET "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/{fileId}/download"
```

<!-- type: tab-end -->

### Response

**Successful Download:**

- **Status:** `302`
- **Description:** The request was successful, and the client is redirected to the file's download URL.

**Note:** A successful download results in a redirection to the file download URL, not a typical HTTP 200 response with content.

### Error Responses

**Example Responses:**

- **302 File download initiated successfully.**  
  ```json
  {
    "message": "The request was successful, and the user is being redirected to the file's download URL."
  }
  ```

- **400 Bad Request.**  
  ```json
  {
    "error": "Invalid request parameter.",
    "message": "Ensure that 'fileSetId' and 'fileId' are correctly specified."
  }
  ```

- **403 Forbidden.**  
  ```json
  {
    "error": "Access denied.",
    "message": "You do not have permission to access this file."
  }
  ```

- **409 Conflict.**  
  ```json
  {
    "error": "Conflict detected.",
    "message": "The file could not be downloaded due to a conflicting operation."
  }
  ```

- **413 Payload Too Large.**  
  ```json
  {
    "error": "Request entity too large.",
    "message": "The file you are attempting to download is too large to process."
  }
  ```

---

## Get File Content by ID

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{fileSetId}/files/{fileId}/content`

Retrieve the content of a specific File within a FileSet using its ID. This endpoint requires a valid download token for authorization, which is generally obtained via a download endpoint and redirected here automatically.

### Path Parameters

| Parameter   | Type   | Required | Description                                      |
|-------------|--------|----------|--------------------------------------------------|
| `fileSetId` | string | ✔ Yes    | The ID of the FileSet containing the File.       |
| `fileId`    | string | ✔ Yes    | The ID of the File to retrieve.                  |

### Query Parameters

| Parameter | Type   | Required | Description                            |
|-----------|--------|----------|----------------------------------------|
| `token`   | string | ✔ Yes    | The download token for authorization.  |

### Request Body

_No request body required for this endpoint._

### Request Example

<!--
type: tab
title: JavaScript
-->

```javascript
fetch('https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/{fileId}/content?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...', {
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

url = "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/{fileId}/content"
headers = {
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers, params={'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'})
print(response.json())
```

<!--
type: tab
title: cURL
-->

```bash
curl -X GET "https://<instance>.domo.com/api/files/v1/filesets/{fileSetId}/files/{fileId}/content?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \
  -H "Content-Type: application/json"
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

