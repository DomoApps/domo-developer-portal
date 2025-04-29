# App DB API

The App DB API allows developers to interact with AppDB, a NoSQL database for storing arbitrary JSON documents. This API supports CRUD operations, querying, and aggregation, enabling developers to manage data efficiently within their Domo applications.

## Features

- **CRUD Operations**: Create, read, update, and delete documents in AppDB collections.
- **Querying**: Use MongoDB-style queries to retrieve specific documents.
- **Aggregation**: Perform advanced data aggregations, such as grouping, summing, and averaging.
- **Bulk Operations**: Create, update, or delete multiple documents in a single request.
- **Document-Level Security**: Apply filters to restrict access to specific documents based on user roles or attributes.
- **Collection Management**: Programmatically create, update, or delete collections.

## Endpoints

### Get Document

**Description**: Retrieve a specific document from a collection.

**HTTP Request**:

```http
GET /api/datastores/v1/collections/{collectionId}/documents/{documentId}
```

**Headers**:

- `X-DOMO-Developer-Token`: Your developer token.
- `Accept`: `application/json`
- `Content-Type`: `application/json`

**Response**:

```json
{
  "id": "document-id",
  "content": {
    "key": "value"
  }
}
```

### List Documents

**Description**: Retrieve all documents from a specified collection.

**HTTP Request**:

```http
GET /api/datastores/v1/collections/{collectionId}/documents
```

**Headers**:

- `X-DOMO-Developer-Token`: Your developer token.
- `Accept`: `application/json`
- `Content-Type`: `application/json`

**Response**:

```json
[
  {
    "id": "document-id",
    "content": {
      "key": "value"
    }
  }
]
```

### Create Document

**Description**: Add a new document to a specified collection.

**HTTP Request**:

```http
POST /api/datastores/v1/collections/{collectionId}/documents/
```

**Headers**:

- `X-DOMO-Developer-Token`: Your developer token.
- `Accept`: `application/json`
- `Content-Type`: `application/json`

**Request Body**:

```json
{
  "content": {
    "key": "value"
  }
}
```

**Response**:

```json
{
  "id": "document-id",
  "content": {
    "key": "value"
  }
}
```

### Update Document

**Description**: Modify an existing document in a collection.

**HTTP Request**:

```http
PUT /api/datastores/v1/collections/{collectionId}/documents/{documentId}
```

**Headers**:

- `X-DOMO-Developer-Token`: Your developer token.
- `Accept`: `application/json`
- `Content-Type`: `application/json`

**Request Body**:

```json
{
  "id": "document-id",
  "content": {
    "key": "new-value"
  }
}
```

**Response**:

```json
{
  "id": "document-id",
  "content": {
    "key": "new-value"
  }
}
```

### Delete Document

**Description**: Remove a document from a collection.

**HTTP Request**:

```http
DELETE /api/datastores/v1/collections/{collectionId}/documents/{documentId}
```

**Headers**:

- `X-DOMO-Developer-Token`: Your developer token.
- `Accept`: `application/json`
- `Content-Type`: `application/json`

**Response**:

```http
HTTP/1.1 200 OK
```

### Update Collection Schema

**Description**: Update the schema of a collection.

**HTTP Request**:

```http
PUT /api/datastores/v1/collections/{collectionId}/documents/
```

**Headers**:

- `X-DOMO-Developer-Token`: Your developer token.
- `Accept`: `application/json`
- `Content-Type`: `application/json`

**Request Body**:

```json
{
  "id": "collectionId",
  "schema": {
    "columns": [
      {
        "type": "STRING",
        "name": "username",
        "visible": true
      },
      {
        "type": "STRING",
        "name": "band",
        "visible": true
      },
      {
        "type": "STRING",
        "name": "favorite color",
        "visible": true
      }
    ]
  },
  "syncEnabled": true
}
```

**Response**:

```http
HTTP/1.1 200 OK
```

### Update Collection Permissions

**Description**: Update permissions for a collection.

**HTTP Request**:

```http
PUT /api/datastores/v1/collections/{collectionId}/permission/RYUU_APP/{ryuuAppId}?permissions=read,create_content,read_content,update_content,delete_content
```

**Headers**:

- `X-DOMO-Developer-Token`: Your developer token.
- `Accept`: `application/json`
- `Content-Type`: `application/json`

**Response**:

```http
HTTP/1.1 200 OK
```
