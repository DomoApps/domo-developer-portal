# FileSet API (BETA)

This API reference documents the endpoints for managing FileSets and Files in Domo from within a Domo app.

> **BETA:** This API is currently in BETA and is subject to change. Endpoints, request/response formats, and functionality may change without notice.

> **Note:** All code examples below are tested and match the working Domo app UI. Use `domo.*` methods for all API calls except file upload/download, which require `fetch` for binary or FormData support.

---

## Get File By Path

**Method:** `GET`  
**Endpoint:** `/domo/files/v1/filesets/{filesetId}/path?path={filePath}`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.

**Query Parameters:**

- `path` (String, required): The path to the file within the fileset.

<!--
type: tab
title: Javascript (domo.get)
-->

```js
domo
  .get(
    `/domo/files/v1/filesets/${filesetId}/path?path=${encodeURIComponent(
      filePath,
    )}`,
  )
  .then((result) => console.log(result))
  .catch((error) => {
    if (error && error.status === 404) {
      console.error(error.body || error.message || '404 Not Found');
    } else {
      console.error(error.message || error);
    }
  });
```

<!--
type: tab
title: Javascript (fetch)
-->

```js
fetch(
  `/domo/files/v1/filesets/${filesetId}/path?path=${encodeURIComponent(
    filePath,
  )}`,
)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error('Error:', error));
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
**Endpoint:** `/domo/files/v1/filesets/{filesetId}/files/{fileId}`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.
- `fileId` (String, required): The ID of the file.

<!--
type: tab
title: Javascript (domo.get)
-->

```js
domo
  .get(`/domo/files/v1/filesets/${filesetId}/files/${fileId}`)
  .then((result) => console.log(result))
  .catch((error) => {
    if (error && error.status === 404) {
      console.error(error.body || error.message || '404 Not Found');
    } else {
      console.error(error.message || error);
    }
  });
```

<!-- type: tab-end -->

<!--
type: tab
title: Javascript (fetch)
-->

```js
fetch(`/domo/files/v1/filesets/${filesetId}/files/${fileId}`)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error('Error:', error));
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
  "downloadUrl": "/domo/files/v1/filesets/00000000-0000-0000-0000-000000000010/files/00000000-0000-0000-0000-000000000002/download",
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
**Endpoint:** `/domo/files/v1/filesets/{filesetId}/files/{fileId}/download`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.
- `fileId` (String, required): The ID of the file.

> **Note:** Use `fetch` for file downloads. `domo.get` does not support binary downloads.

<!--
type: tab
title: Javascript (fetch)
-->

```js
fetch(`/domo/files/v1/filesets/${filesetId}/files/${fileId}/download`)
  .then((response) => response.blob())
  .then((blob) => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'downloaded-file'; // Set your filename
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  })
  .catch((error) => console.error('Error:', error));
```

**Response:**

- Returns the file contents as a download (binary/text stream).

---

## Query Files

**Method:** `POST`  
**Endpoint:** `/domo/files/v1/filesets/{filesetId}/query`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.

<!--
type: tab
title: Javascript (domo.post)
-->

```js
domo
  .post(`/domo/files/v1/filesets/${filesetId}/query`, {
    query: 'some query',
    directoryPath: '', // optional
    topK: 5, // optional
  })
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message || error));
```

<!--
type: tab
title: Javascript (fetch)
-->

```js
fetch(`/domo/files/v1/filesets/${filesetId}/query`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: 'some query',
    directoryPath: '', // optional
    topK: 5, // optional
  }),
})
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error('Error:', error));
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
**Endpoint:** `/domo/files/v1/filesets/{filesetId}/files`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.

> **Note:** Use `fetch` for file uploads. Always set the file content type to `text/plain` for text files, as in the app code.

<!--
type: tab
title: Javascript (fetch)
-->

```js
const file = fileInput.files[0];
const formdata = new FormData();
formdata.append(
  'file',
  new File([file], file.name, { type: 'text/plain' }),
  file.name,
);
formdata.append('createFileRequest', JSON.stringify({ directoryPath: '' }));

fetch(`/domo/files/v1/filesets/${filesetId}/files`, {
  method: 'POST',
  body: formdata,
})
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error('Error:', error));
```

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
**Endpoint:** `/domo/files/v1/filesets/{filesetId}/path?path={filePath}`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.

**Query Parameters:**

- `path` (String, required): The path to the file within the fileset.

<!--
type: tab
title: Javascript (domo.delete)
-->

```js
domo
  .delete(
    `/domo/files/v1/filesets/${filesetId}/path?path=${encodeURIComponent(
      filePath,
    )}`,
  )
  .then((result) => {
    if (result === 1 || (result && result.status === 'success')) {
      console.log('File deleted successfully.');
    } else {
      console.log(result);
    }
  })
  .catch((error) => {
    if (error && error.status === 404) {
      console.error(error.body || error.message || '404 Not Found');
    } else {
      console.error(error.message || error);
    }
  });
```

<!--
type: tab
title: Javascript (fetch)
-->

```js
fetch(
  `/domo/files/v1/filesets/${filesetId}/path?path=${encodeURIComponent(
    filePath,
  )}`,
  {
    method: 'DELETE',
  },
)
  .then((response) => response.json())
  .then((result) => {
    if (result === 1 || (result && result.status === 'success')) {
      console.log('File deleted successfully.');
    } else {
      console.log(result);
    }
  })
  .catch((error) => console.error('Error:', error));
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
**Endpoint:** `/domo/files/v1/filesets/{filesetId}/files/{fileId}`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.
- `fileId` (String, required): The ID of the file.

<!--
type: tab
title: Javascript (domo.delete)
-->

```js
domo
  .delete(`/domo/files/v1/filesets/${filesetId}/files/${fileId}`)
  .then((result) => {
    if (result === 1 || (result && result.status === 'success')) {
      console.log('File deleted successfully.');
    } else {
      console.log(result);
    }
  })
  .catch((error) => {
    if (error && error.status === 404) {
      console.error(error.body || error.message || '404 Not Found');
    } else {
      console.error(error.message || error);
    }
  });
```

<!--
type: tab
title: Javascript (fetch)
-->

```js
fetch(`/domo/files/v1/filesets/${filesetId}/files/${fileId}`, {
  method: 'DELETE',
})
  .then((response) => response.json())
  .then((result) => {
    if (result === 1 || (result && result.status === 'success')) {
      console.log('File deleted successfully.');
    } else {
      console.log(result);
    }
  })
  .catch((error) => console.error('Error:', error));
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

## Search FileSets

**Method:** `POST`  
**Endpoint:** `/domo/files/v1/filesets/search`

> **Note:** To list all filesets, send an empty object as the body. To filter, provide filter parameters in the body.

<!--
type: tab
title: Javascript (domo.post)
-->

```js
domo
  .post('/domo/files/v1/filesets/search', {})
  .then((result) => console.log(result.fileSets))
  .catch((error) => console.error(error.message || error));
```

<!--
type: tab
title: Javascript (fetch)
-->

```js
fetch('/domo/files/v1/filesets/search', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({}),
})
  .then((response) => response.json())
  .then((result) => console.log(result.fileSets))
  .catch((error) => console.error('Error:', error));
```

<!-- type: tab-end -->

**Response:**

```json
{
  "fileSets": [
    {
      "id": "00000000-0000-0000-0000-000000000010",
      "name": "Sample FileSet",
      "description": "A sample fileset for demonstration purposes.",
      "created": "2025-01-01T00:00:00.000Z",
      "createdBy": 111111111
    }
  ]
}
```

---

## Create FileSet

**Method:** `POST`  
**Endpoint:** `/domo/files/v1/filesets`

<!--
type: tab
title: Javascript (domo.post)
-->

```js
domo
  .post('/domo/files/v1/filesets', {
    name: 'Sample FileSet',
    description: 'A sample fileset for demonstration purposes.',
  })
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message || error));
```

<!--
type: tab
title: Javascript (fetch)
-->

```js
fetch('/domo/files/v1/filesets', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Sample FileSet',
    description: 'A sample fileset for demonstration purposes.',
  }),
})
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error('Error:', error));
```

<!-- type: tab-end -->

**Response:**

```json
{
  "id": "00000000-0000-0000-0000-000000000012",
  "name": "Sample FileSet",
  "description": "A sample fileset for demonstration purposes.",
  "created": "2025-01-01T00:00:00.000Z",
  "createdBy": 111111111
}
```

---

## Get FileSet By Id

**Method:** `GET`  
**Endpoint:** `/domo/files/v1/filesets/{filesetId}`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.

<!--
type: tab
title: Javascript (domo.get)
-->

```js
domo
  .get(`/domo/files/v1/filesets/${filesetId}`)
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message || error));
```

<!--
type: tab
title: Javascript (fetch)
-->

```js
fetch(`/domo/files/v1/filesets/${filesetId}`)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error('Error:', error));
```

<!-- type: tab-end -->

**Response:**

```json
{
  "id": "00000000-0000-0000-0000-000000000013",
  "name": "Sample FileSet",
  "description": "A sample fileset for demonstration purposes.",
  "created": "2025-01-01T00:00:00.000Z",
  "createdBy": 111111111
}
```

---

## Update FileSet By Id

**Method:** `POST`  
**Endpoint:** `/domo/files/v1/filesets/{filesetId}`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.

<!--
type: tab
title: Javascript (domo.post)
-->

```js
domo
  .post(`/domo/files/v1/filesets/${filesetId}`, {
    name: 'Updated FileSet Name',
    description: 'Updated description.',
  })
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message || error));
```

<!--
type: tab
title: Javascript (fetch)
-->

```js
fetch(`/domo/files/v1/filesets/${filesetId}`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Updated FileSet Name',
    description: 'Updated description.',
  }),
})
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error('Error:', error));
```

<!-- type: tab-end -->

**Response:**

```json
{
  "id": "00000000-0000-0000-0000-000000000014",
  "name": "Sample FileSet",
  "description": "A sample fileset for demonstration purposes.",
  "created": "2025-01-01T00:00:00.000Z",
  "createdBy": 111111111
}
```

---

## Delete FileSet By Id

**Method:** `DELETE`  
**Endpoint:** `/domo/files/v1/filesets/{filesetId}`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.

<!--
type: tab
title: Javascript (domo.delete)
-->

```js
domo
  .delete(`/domo/files/v1/filesets/${filesetId}`)
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message || error));
```

<!--
type: tab
title: Javascript (fetch)
-->

```js
fetch(`/domo/files/v1/filesets/${filesetId}`, {
  method: 'DELETE',
})
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error('Error:', error));
```

<!-- type: tab-end -->

**Response:**

```json
{
  "status": "success",
  "message": "FileSet deleted successfully."
}
```
