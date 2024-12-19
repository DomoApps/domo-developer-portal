
# VectorDB API

This document provides an overview of the API endpoints available for interacting with the Vector Database, which enables efficient storage, retrieval, and querying of vectorized data. The API supports various operations including vector insertion, querying, updating, and deletion.
To use the API, you must [generate an access token in Domo](https://domo-support.domo.com/s/article/360042934494?language=en_US) and include it in each request via the `X-DOMO-Developer-Token` header.

### Base URL

All API endpoints are accessible via the following base URL:

https://{{instance}}/api/recall/v1/indexes

### Create index

Description: A vector index is a data structure that organizes and optimizes the storage and retrieval of high-dimensional vectors (embeddings) for similarity searches. The following endpoint is used to add new indexes to the database.

```text
Endpoint: {{instance}}/api/recall/v1/indexes

Method: POST
```

#### Arguments
| Property Name| Type | Required | Description |
| --- | --- | --- | --- |
|indexId	|Long	|Optional	|Index name|
|embeddingModel	|String	|Optional	|Model to be used in the index, you can check the available models in the following endpoint: {{instance}}/api/ai/v1/settings/services/embedding/models|

#### Code Example

```text
domo.post('/api/recall/v1/indexes', {"embeddingModel": "domo.openai", "indexId": "entertainment"})
```

#### HTTP Request

```text
POST api/recall/v1/indexes HTTP/1.1
Content-Type: application/json
Accept: application/json
Request Body
{
    "embeddingModel": "domo.openai",
    "indexId": "entertainment"
}
```

#### HTTP Response

```json
HTTP/1.1 200 OK
{
    "index": {
        "indexId": "entertainment",
        "embeddingModel": "domo.openai",
        "owner": "353137345"
    },
    "status": "READY"
}
```

### Upsert index

Description: Add nodes into an index.

```text
Endpoint: {{instance}}/api/recall/v1/indexes/{{indexId}}/upsert

Method: POST
```
#### Arguments
| Property Name| Type | Required | Description |
| --- | --- | --- | --- |
|nodes	|Object	|Optional	|Document objects to be queried in similarity searches|

#### Code Example

```text
domo.post('/api/recall/v1/indexes/entertainment/upsert', 
{
  "nodes": [
    {
      "content": "Classical music remains a foundation for many modern genres.",
      "type": "TEXT"
    },
    {
      "content": "Heavy metal developed a strong following in the 1980s.",
      "type": "TEXT"
    },
    {
      "content": "The rise of streaming platforms has transformed the music industry.",
      "type": "TEXT"
    },
    {
      "content": "Bollywood movies are known for their elaborate dance sequences.",
      "type": "TEXT"
    },
    {
      "content": "Science fiction movies often explore futuristic concepts and technology.",
      "type": "TEXT"
    },
    {
      "content": "Documentary films provide in-depth looks at real-world events and issues.",
      "type": "TEXT"
    },
    {
      "content": "Musicals combine acting, singing, and dancing to tell a story.",
      "type": "TEXT"
    }
  ]
})
```

#### HTTP Request

```text
POST api/recall/v1/indexes/entertainment/upsert HTTP/1.1
Content-Type: application/json
Accept: application/json
Request Body
{
  "nodes": [
    {
      "content": "Classical music remains a foundation for many modern genres.",
      "type": "TEXT"
    },
    {
      "content": "Heavy metal developed a strong following in the 1980s.",
      "type": "TEXT"
    },
    {
      "content": "The rise of streaming platforms has transformed the music industry.",
      "type": "TEXT"
    },
    {
      "content": "Bollywood movies are known for their elaborate dance sequences.",
      "type": "TEXT"
    },
    {
      "content": "Science fiction movies often explore futuristic concepts and technology.",
      "type": "TEXT"
    },
    {
      "content": "Documentary films provide in-depth looks at real-world events and issues.",
      "type": "TEXT"
    },
    {
      "content": "Musicals combine acting, singing, and dancing to tell a story.",
      "type": "TEXT"
    }
  ]
}
```

#### HTTP Response

Returns IDs for the new nodes created in the request.

```json
HTTP/1.1 200 OK
{
    "upsertedNodeIds": [
        "a72ffe9b-4c5b-46f3-b796-1e7797b713d2",
        "a9f03ad7-2deb-4f63-8667-30af14520f0e",
        "3a61018b-4e2d-4402-a350-78f801ab849a",
        "82fb32ee-dea3-4aa2-8c17-754b5028d619",
        "609e92f4-7ee3-47e3-93fa-ec4051b0d835",
        "8acd9b51-80f6-4f14-ad1c-f3f786c53203",
        "aff83ca1-c106-4b9a-8edf-fe80f4e560f2"
    ]
}
```

### Query indexes

Description: Search for nodes in an index.

#### Arguments
| Property Name| Type | Required | Description |
| --- | --- | --- | --- |
|filter	|Object	|Optional	|The filter that narrows the scope of a request|
| input | string | Optional | String to be used in the similarity search |
| topK | integer | Optional | Limits the output to the top K results |
| weight | number | Optional | Modifies the search behavior to give priority to specific components of a query |

```text
Endpoint: {{instance}}/api/recall/v1/indexes/{{indexId}}/query

Method: POST
```

#### Code Example

```text
domo.post('/api/recall/v1/indexes/entertainment/query', {"input": "Classical content", "topK": 3})
```

#### HTTP Request

```text
POST api/recall/v1/indexes/entertainment/query HTTP/1.1
Content-Type: application/json
Accept: application/json
Request Body
{
  "input": "Classical content",
  "topK": 3
}
```

#### HTTP Response

```json
{
    "matches": [
        {
            "id": "a9f03ad7-2deb-4f63-8667-30af14520f0e",
            "node": {
                "id": "a9f03ad7-2deb-4f63-8667-30af14520f0e",
                "content": "Classical music remains a foundation for many modern genres.",
                "relationship": {},
                "properties": {},
                "created": "2024-09-11T01:05:25.175Z",
                "updated": "2024-09-11T01:05:25.175Z",
                "startOffset": 0,
                "endOffset": 0,
                "type": "TEXT"
            },
            "score": 0.962805837392807
        },
        {
            "id": "96c2e345-e253-42e5-9a2a-1c381f1b8a16",
            "node": {
                "id": "96c2e345-e253-42e5-9a2a-1c381f1b8a16",
                "content": "Documentary films provide in-depth looks at real-world events and issues.",
                "relationship": {},
                "properties": {},
                "created": "2024-09-11T01:05:25.175Z",
                "updated": "2024-09-11T01:05:25.175Z",
                "startOffset": 0,
                "endOffset": 0,
                "type": "TEXT"
            },
            "score": 0.44394561648368835
        },
        {
            "id": "1ba164c6-e9e1-48a3-8de3-f89fb116901f",
            "node": {
                "id": "1ba164c6-e9e1-48a3-8de3-f89fb116901f",
                "content": "Musicals combine acting, singing, and dancing to tell a story.",
                "relationship": {},
                "properties": {},
                "created": "2024-09-11T01:05:25.175Z",
                "updated": "2024-09-11T01:05:25.175Z",
                "startOffset": 0,
                "endOffset": 0,
                "type": "TEXT"
            },
            "score": 0.44143861532211304
        }
    ]
}
```

### Delete nodes from index

Description: Remove nodes from index

```text
Endpoint: {{instance}}/api/recall/v1/indexes/{{indexId}}/delete

Method: POST
```

#### Code Example

```text
domo.post('/api/recall/v1/indexes/entertainment/delete', 
{
  "filter": {
    "nodeIds": [
      "a9f03ad7-2deb-4f63-8667-30af14520f0e"
    ]
  }
})
```

#### HTTP Request

```text
POST api/recall/v1/indexes/entertainment/delete HTTP/1.1
Content-Type: application/json
Accept: application/json
Request Body
{
  "filter": {
    "nodeIds": [
      "a9f03ad7-2deb-4f63-8667-30af14520f0e"
    ]
  }
}
```

#### HTTP Response

```json
{
  "deletedCount": 1
}
```

### Delete index

Description: Delete the entire index

```text
Endpoint: {{instance}}/api/recall/v1/indexes/{{indexId}}

Method: DELETE
```

#### Code Example

```text
domo.delete('/api/recall/v1/indexes/entertainment')
```

#### HTTP Request

```text
DELETE api/recall/v1/indexes/entertainment HTTP/1.1
Accept: application/json
```