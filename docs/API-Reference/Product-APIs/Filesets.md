# Filesets API

This API reference documents the endpoints for managing filesets and files in Domo. These endpoints allow you to upload, download, query, and manage files and filesets programmatically.

---

## Get File By Path

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{filesetId}/path?path={filePath}`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.

**Query Parameters:**

- `path` (String, required): The path to the file within the fileset.

**Example:**

```json
{
  "method": "GET",
  "url": "https://{instance}.domo.com/api/files/v1/filesets/{filesetId}/path?path=rules.txt",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  }
}
```

**Response:**

```json
{
  "id": "38eeca2b-0cc9-4d19-bed7-e48b0e32cda5",
  "path": "rules.txt",
  "name": "rules.txt",
  "fileType": "TEXT",
  "contentType": "text/plain",
  "size": 267161,
  "hash": "960a7135c19cbfb503571a98f85fd0d4995ebc6a3fa146f4f4b9b3495c1b7d41",
  "hashAlgorithm": "SHA_256_HEX",
  "downloadUrl": null,
  "created": "2025-06-12T19:43:31.724369Z",
  "createdBy": 123456789
}
```

---

## Get File By Id

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{filesetId}/files/{fileId}`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.
- `fileId` (String, required): The ID of the file.

**Example:**

```json
{
  "method": "GET",
  "url": "https://{instance}.domo.com/api/files/v1/filesets/{filesetId}/files/{fileId}",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  }
}
```

**Response:**

```json
{
  "id": "38eeca2b-0cc9-4d19-bed7-e48b0e32cda5",
  "path": "rules.txt",
  "name": "rules.txt",
  "fileType": "TEXT",
  "contentType": "text/plain",
  "size": 267161,
  "hash": "960a7135c19cbfb503571a98f85fd0d4995ebc6a3fa146f4f4b9b3495c1b7d41",
  "hashAlgorithm": "SHA_256_HEX",
  "downloadUrl": "https://domo-jon-tiritilli.domo.com/api/files/v1/filesets/6e68073c-9f90-45c9-afa0-37e01d33575e/files/38eeca2b-0cc9-4d19-bed7-e48b0e32cda5/download",
  "created": "2025-06-12T19:43:31.724369Z",
  "createdBy": 123456789
}
```

---

## Download File By Id

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{filesetId}/files/{fileId}/download`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.
- `fileId` (String, required): The ID of the file.

**Example:**

```json
{
  "method": "GET",
  "url": "https://{instance}.domo.com/api/files/v1/filesets/{filesetId}/files/{fileId}/download",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  }
}
```

**Response:**

- Returns the file contents as a download.

---

## Query Files

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{filesetId}/query`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.

**Example:**

```json
{
  "method": "POST",
  "url": "https://{instance}.domo.com/api/files/v1/filesets/{filesetId}/query",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  },
  "body": {
    // Query parameters here
  }
}
```

**Response:**

- Returns a list of files matching the query.

---

## Upload File

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{filesetId}/files`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.

**Example:**

```json
{
  "method": "POST",
  "url": "https://{instance}.domo.com/api/files/v1/filesets/{filesetId}/files",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  },
  "body": {
    // File upload parameters here
  }
}
```

**Response:**

- Returns details about the uploaded file.

---

## Delete Files By Path

**Method:** `DELETE`  
**Endpoint:** `/api/files/v1/filesets/{filesetId}/path?path={filePath}`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.

**Query Parameters:**

- `path` (String, required): The path to the file within the fileset.

**Example:**

```json
{
  "method": "DELETE",
  "url": "https://{instance}.domo.com/api/files/v1/filesets/{filesetId}/path?path=rules.txt",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  }
}
```

**Response:**

- Returns status of the delete operation.

---

## Delete File By Id

**Method:** `DELETE`  
**Endpoint:** `/api/files/v1/filesets/{filesetId}/files/{fileId}`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.
- `fileId` (String, required): The ID of the file.

**Example:**

```json
{
  "method": "DELETE",
  "url": "https://{instance}.domo.com/api/files/v1/filesets/{filesetId}/files/{fileId}",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  }
}
```

**Response:**

- Returns status of the delete operation.

---

## Query Fileset

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/query`

**Example:**

```json
{
  "method": "POST",
  "url": "https://{instance}.domo.com/api/files/v1/filesets/query",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  },
  "body": {
    // Query parameters here
  }
}
```

**Response:**

- Returns a list of filesets matching the query.

---

## Get Filesets

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets`

**Example:**

```json
{
  "method": "POST",
  "url": "https://{instance}.domo.com/api/files/v1/filesets",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  },
  "body": {
    // Query parameters here
  }
}
```

**Response:**

- Returns a list of filesets.

---

## Create Fileset

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets`

**Example:**

```json
{
  "method": "POST",
  "url": "https://{instance}.domo.com/api/files/v1/filesets",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  },
  "body": {
    // Fileset creation parameters here
  }
}
```

**Response:**

- Returns details about the created fileset.

---

## Get Fileset By Id

**Method:** `GET`  
**Endpoint:** `/api/files/v1/filesets/{filesetId}`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.

**Example:**

```json
{
  "method": "GET",
  "url": "https://{instance}.domo.com/api/files/v1/filesets/{filesetId}",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  }
}
```

**Response:**

- Returns details about the fileset.

---

## Update Fileset By Id

**Method:** `POST`  
**Endpoint:** `/api/files/v1/filesets/{filesetId}`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.

**Example:**

```json
{
  "method": "POST",
  "url": "https://{instance}.domo.com/api/files/v1/filesets/{filesetId}",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  },
  "body": {
    // Fileset update parameters here
  }
}
```

**Response:**

- Returns details about the updated fileset.

---

## Delete Fileset By Id

**Method:** `DELETE`  
**Endpoint:** `/api/files/v1/filesets/{filesetId}`

**Path Parameters:**

- `filesetId` (String, required): The ID of the fileset.

**Example:**

```json
{
  "method": "DELETE",
  "url": "https://{instance}.domo.com/api/files/v1/filesets/{filesetId}",
  "headers": {
    "X-DOMO-Developer-Token": "",
    "Content-Type": "application/json"
  }
}
```

**Response:**

- Returns status of the delete operation.
