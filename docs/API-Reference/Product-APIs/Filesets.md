# Filesets API (BETA)

> **BETA:** This API is currently in BETA and is subject to change. Endpoints, request/response formats, and functionality may change without notice.

This API reference documents the endpoints for managing filesets and files in Domo. These endpoints allow you to upload, download, query, and manage files and filesets programmatically.

---

## Get File By Path

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{filesetId}/path?path={filePath}`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.

**Query Parameters:**

- `path` (String, required): The path to the file within the fileset.

<!--
type: tab
title: Javascript
-->

```js
fetch(
  'https://{instance}.domo.com/api/files/v1/filesets/{filesetId}/path?path={filePath}',
  {
    method: 'GET',
    headers: {
      'X-DOMO-Developer-Token': '<your-token-here>',
      'Content-Type': 'application/json',
    },
  },
)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error('Error:', error));
```

<!--
type: tab
title: Python
-->

```python
import httpx

headers = {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
}
url = 'https://{instance}.domo.com/api/files/v1/filesets/{filesetId}/path?path={filePath}'

with httpx.Client() as client:
    response = client.get(url, headers=headers)
    print(response.json())
```

<!-- type: tab-end -->

**Response:**

```json
{
  "id": "00000000-0000-0000-0000-000000000001",
  "path": "rules.txt",
  "name": "rules.txt",
  "fileType": "TEXT",
  "contentType": "text/plain",
  "size": 12345,
  "hash": "fakehash00000000000000000000000000000000000000000000000000000000000001",
  "hashAlgorithm": "SHA_256_HEX",
  "downloadUrl": null,
  "created": "2025-01-01T00:00:00.000Z",
  "createdBy": 111111111,
  "connectorKey": null,
  "indexStatus": null,
  "indexReason": null
}
```

---

## Get File By Id

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{filesetId}/files/{fileId}`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.
- `fileId` (String, required): The ID of the file.

<!--
type: tab
title: Javascript
-->

```js
fetch(
  'https://{instance}.domo.com/api/files/v1/filesets/{filesetId}/files/{fileId}',
  {
    method: 'GET',
    headers: {
      'X-DOMO-Developer-Token': '<your-token-here>',
      'Content-Type': 'application/json',
    },
  },
)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error('Error:', error));
```

<!--
type: tab
title: Python
-->

```python
import httpx

headers = {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
}
url = 'https://{instance}.domo.com/api/files/v1/filesets/{filesetId}/files/{fileId}'

with httpx.Client() as client:
    response = client.get(url, headers=headers)
    print(response.json())
```

<!-- type: tab-end -->

**Response:**

```json
{
  "id": "00000000-0000-0000-0000-000000000002",
  "path": "rules.txt",
  "name": "rules.txt",
  "fileType": "TEXT",
  "contentType": "text/plain",
  "size": 12345,
  "hash": "fakehash00000000000000000000000000000000000000000000000000000000000002",
  "hashAlgorithm": "SHA_256_HEX",
  "downloadUrl": "https://instance-name.domo.com/api/files/v1/filesets/00000000-0000-0000-0000-000000000010/files/00000000-0000-0000-0000-000000000002/download",
  "created": "2025-01-01T00:00:00.000Z",
  "createdBy": 111111111,
  "connectorKey": null,
  "indexStatus": null,
  "indexReason": null
}
```

---

## Download File By Id

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{filesetId}/files/{fileId}/download`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.
- `fileId` (String, required): The ID of the file.

<!--
type: tab
title: Javascript
-->

```js
fetch(
  'https://{instance}.domo.com/api/files/v1/filesets/{filesetId}/files/{fileId}/download',
  {
    method: 'GET',
    headers: {
      'X-DOMO-Developer-Token': '<your-token-here>',
      'Content-Type': 'application/json',
    },
  },
)
  .then((response) => response.blob()) // Use .blob() for file downloads
  .then((blob) => {
    // Example: create a download link
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'filename.ext'; // Set desired file name
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  })
  .catch((error) => console.error('Error:', error));
```

<!--
type: tab
title: Python
-->

```python
import httpx

headers = {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
}
url = 'https://{instance}.domo.com/api/files/v1/filesets/{filesetId}/files/{fileId}/download'

with httpx.Client() as client:
    response = client.get(url, headers=headers)
    with open('filename.ext', 'wb') as f:
        f.write(response.content)
    print('File downloaded as filename.ext')
```

<!-- type: tab-end -->

**Response:**

- Returns the file contents as a download (binary/text stream).

---

## Query Files

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{filesetId}/query`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.

<!--
type: tab
title: Javascript
-->

```js
fetch('https://{instance}.domo.com/api/files/v1/filesets/{filesetId}/query', {
  method: 'POST',
  headers: {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: 'some query',
    directoryPath: '',
    topK: 5,
  }),
})
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error('Error:', error));
```

<!--
type: tab
title: Python
-->

```python
import httpx

headers = {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
}
url = 'https://{instance}.domo.com/api/files/v1/filesets/{filesetId}/query'
data = {
    'query': 'some query',
    'directoryPath': '',
    'topK': 5,
}

with httpx.Client() as client:
    response = client.post(url, headers=headers, json=data)
    print(response.json())
```

<!-- type: tab-end -->

**Response:**

```json
[
  {
    "id": "00000000-0000-0000-0000-000000000003",
    "path": "rules.txt",
    "name": "rules.txt",
    "fileType": "TEXT",
    "contentType": "text/plain",
    "size": 12345,
    "created": "2025-01-01T00:00:00.000Z",
    "createdBy": 111111111
  }
]
```

---

## Upload File

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{filesetId}/files`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.

<!--
type: tab
title: Javascript
-->

```js
// Prepare the file and metadata for upload
const formdata = new FormData();
formdata.append('file', fileInput.files[0], 'rules.txt');
formdata.append('createFileRequest', JSON.stringify({ directoryPath: '' }));

const requestOptions = {
  method: 'POST',
  headers: {
    'X-DOMO-Developer-Token': '<your-token-here>',
    // Note: Do not set Content-Type header; browser will set it automatically for FormData
  },
  body: formdata,
  redirect: 'follow',
};

fetch(
  'https://{instance}.domo.com/api/files/v1/filesets/{filesetId}/files',
  requestOptions,
)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error('Error:', error));
```

<!--
type: tab
title: Python
-->

```python
import httpx

headers = {
    'X-DOMO-Developer-Token': '<your-token-here>',
}
url = 'https://{instance}.domo.com/api/files/v1/filesets/{filesetId}/files'

with open('rules.txt', 'rb') as file_obj:
    files = {
        'file': ('rules.txt', file_obj, 'text/plain'),
        'createFileRequest': (None, '{"directoryPath": ""}', 'application/json'),
    }
    with httpx.Client() as client:
        response = client.post(url, headers=headers, files=files)
        print(response.json())
```

<!-- type: tab-end -->

**Response:**

```json
{
  "id": "00000000-0000-0000-0000-000000000004",
  "path": "fab-rules.txt",
  "name": "fab-rules.txt",
  "fileType": "TEXT",
  "contentType": "text/plain",
  "size": 12345,
  "created": "2025-01-01T00:00:00.000Z",
  "createdBy": 111111111
}
```

---

## Delete Files By Path

**Method:** `DELETE`  
**Endpoint:** `/api/files/v1/filesets/{filesetId}/path?path={filePath}`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.

**Query Parameters:**

- `path` (String, required): The path to the file within the fileset.

<!--
type: tab
title: Javascript
-->

```js
fetch(
  'https://{instance}.domo.com/api/files/v1/filesets/{filesetId}/path?path=rules.txt',
  {
    method: 'DELETE',
    headers: {
      'X-DOMO-Developer-Token': '<your-token-here>',
      'Content-Type': 'application/json',
    },
  },
)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error('Error:', error));
```

<!--
type: tab
title: Python
-->

```python
import httpx

headers = {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
}
url = 'https://{instance}.domo.com/api/files/v1/filesets/{filesetId}/path?path=rules.txt'

with httpx.Client() as client:
    response = client.delete(url, headers=headers)
    print(response.json())
```

<!-- type: tab-end -->

**Response:**

```json
{
  "status": "success",
  "message": "File deleted successfully."
}
```

---

## Delete File By Id

**Method:** `DELETE`  
**Endpoint:** `/api/files/v1/filesets/{filesetId}/files/{fileId}`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.
- `fileId` (String, required): The ID of the file.

<!--
type: tab
title: Javascript
-->

```js
fetch(
  'https://{instance}.domo.com/api/files/v1/filesets/{filesetId}/files/{fileId}',
  {
    method: 'DELETE',
    headers: {
      'X-DOMO-Developer-Token': '<your-token-here>',
      'Content-Type': 'application/json',
    },
  },
)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error('Error:', error));
```

<!--
type: tab
title: Python
-->

```python
import httpx

headers = {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
}
url = 'https://{instance}.domo.com/api/files/v1/filesets/{filesetId}/files/{fileId}'

with httpx.Client() as client:
    response = client.delete(url, headers=headers)
    print(response.json())
```

<!-- type: tab-end -->

**Response:**

```json
{
  "status": "success",
  "message": "File deleted successfully."
}
```

---

## Query Fileset

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/query`

<!--
type: tab
title: Javascript
-->

```js
fetch('https://{instance}.domo.com/api/files/v1/filesets/query', {
  method: 'POST',
  headers: {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    // Query parameters here
  }),
})
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error('Error:', error));
```

<!--
type: tab
title: Python
-->

```python
import httpx

headers = {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
}
url = 'https://{instance}.domo.com/api/files/v1/filesets/query'
data = {
    # Query parameters here
}

with httpx.Client() as client:
    response = client.post(url, headers=headers, json=data)
    print(response.json())
```

<!-- type: tab-end -->

**Response:**

```json
{
  "id": "00000000-0000-0000-0000-000000000010",
  "name": "Sample Fileset",
  "description": "A sample fileset for demonstration purposes.",
  "created": "2025-01-01T00:00:00.000Z",
  "createdBy": 111111111,
  "updated": "2025-01-02T00:00:00.000Z",
  "updatedBy": 111111111,
  "owner": "111111111",
  "accountId": 0,
  "connectorContext": null,
  "permission": "OWNER",
  "size": 123456,
  "fileCount": 2
}
```

---

## List Filesets

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/search`

<!--
type: tab
title: Javascript
-->

```js
fetch('https://{instance}.domo.com/api/files/v1/filesets/search', {
  method: 'POST',
  headers: {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    // Query parameters here
  }),
})
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error('Error:', error));
```

<!--
type: tab
title: Python
-->

```python
import httpx

headers = {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
}
url = 'https://{instance}.domo.com/api/files/v1/filesets'
data = {
    # Query parameters here
}

with httpx.Client() as client:
    response = client.post(url, headers=headers, json=data)
    print(response.json())
```

<!-- type: tab-end -->

**Response:**

```json
{
  "id": "6fbf49f2-b1eb-4dd9-b1ea-4a477480965b",
  "name": "Unstructured",
  "description": "",
  "aiEnabled": true,
  "indexStatus": null,
  "batchType": "INCREMENTAL",
  "connector": "DOMO",
  "created": "2025-04-19T22:52:23.470150Z",
  "createdBy": 403368057,
  "updated": "2025-06-17T20:14:13.298781Z",
  "updatedBy": 403368057,
  "owner": "403368057",
  "accountId": 0,
  "connectorContext": null,
  "permission": "OWNER",
  "size": 730812,
  "fileCount": 2
}
```

---

## Create Fileset

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets`

<!--
type: tab
title: Javascript
-->

```js
fetch('https://{instance}.domo.com/api/files/v1/filesets', {
  method: 'POST',
  headers: {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    // Fileset creation parameters here
  }),
})
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error('Error:', error));
```

<!--
type: tab
title: Python
-->

```python
import httpx

headers = {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
}
url = 'https://{instance}.domo.com/api/files/v1/filesets'
data = {
    # Fileset creation parameters here
}

with httpx.Client() as client:
    response = client.post(url, headers=headers, json=data)
    print(response.json())
```

<!-- type: tab-end -->

**Response:**

```json
{
  "id": "00000000-0000-0000-0000-000000000012",
  "name": "Sample Fileset",
  "description": "A sample fileset for demonstration purposes.",
  "created": "2025-01-01T00:00:00.000Z",
  "createdBy": 111111111
}
```

---

## Get Fileset By Id

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{filesetId}`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.

<!--
type: tab
title: Javascript
-->

```js
fetch('https://{instance}.domo.com/api/files/v1/filesets/{filesetId}', {
  method: 'GET',
  headers: {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error('Error:', error));
```

<!--
type: tab
title: Python
-->

```python
import httpx

headers = {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
}
url = 'https://{instance}.domo.com/api/files/v1/filesets/{filesetId}'

with httpx.Client() as client:
    response = client.get(url, headers=headers)
    print(response.json())
```

<!-- type: tab-end -->

**Response:**

```json
{
  "id": "00000000-0000-0000-0000-000000000013",
  "name": "Sample Fileset",
  "description": "A sample fileset for demonstration purposes.",
  "created": "2025-01-01T00:00:00.000Z",
  "createdBy": 111111111
}
```

---

## Update Fileset By Id

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{filesetId}`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.

<!--
type: tab
title: Javascript
-->

```js
fetch('https://{instance}.domo.com/api/files/v1/filesets/{filesetId}', {
  method: 'POST',
  headers: {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    // Fileset update parameters here
  }),
})
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error('Error:', error));
```

<!--
type: tab
title: Python
-->

```python
import httpx

headers = {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
}
url = 'https://{instance}.domo.com/api/files/v1/filesets/{filesetId}'
data = {
    # Fileset update parameters here
}

with httpx.Client() as client:
    response = client.post(url, headers=headers, json=data)
    print(response.json())
```

<!-- type: tab-end -->

**Response:**

```json
{
  "id": "00000000-0000-0000-0000-000000000014",
  "name": "Sample Fileset",
  "description": "A sample fileset for demonstration purposes.",
  "created": "2025-01-01T00:00:00.000Z",
  "createdBy": 111111111
}
```

---

## Delete Fileset By Id

**Method:** `DELETE`  
**Endpoint:** `/api/files/v1/filesets/{filesetId}`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.

<!--
type: tab
title: Javascript
-->

```js
fetch('https://{instance}.domo.com/api/files/v1/filesets/{filesetId}', {
  method: 'DELETE',
  headers: {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error('Error:', error));
```

<!--
type: tab
title: Python
-->

```python
import httpx

headers = {
    'X-DOMO-Developer-Token': '<your-token-here>',
    'Content-Type': 'application/json',
}
url = 'https://{instance}.domo.com/api/files/v1/filesets/{filesetId}'

with httpx.Client() as client:
    response = client.delete(url, headers=headers)
    print(response.json())
```

<!-- type: tab-end -->

**Response:**

```json
{
  "status": "success",
  "message": "Fileset deleted successfully."
}
```
